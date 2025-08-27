'use client'

import { useState, useEffect } from 'react'
import { testSupabaseConnection } from '@/lib/supabase'

export default function EnvCheckPage() {
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'success' | 'failed'>('checking')
  const [envVars, setEnvVars] = useState<{
    supabaseUrl: boolean
    supabaseAnonKey: boolean
  }>({
    supabaseUrl: false,
    supabaseAnonKey: false
  })

  useEffect(() => {
    // Check environment variables
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL
    const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    setEnvVars({
      supabaseUrl: hasUrl,
      supabaseAnonKey: hasKey
    })

    // Test Supabase connection
    const testConnection = async () => {
      if (hasUrl && hasKey) {
        const isConnected = await testSupabaseConnection()
        setConnectionStatus(isConnected ? 'success' : 'failed')
      } else {
        setConnectionStatus('failed')
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Environment Check
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Check the status of environment variables and Supabase connection
            </p>
          </div>

          <div className="px-6 py-4 space-y-6">
            {/* Environment Variables */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Environment Variables
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    NEXT_PUBLIC_SUPABASE_URL
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    envVars.supabaseUrl 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {envVars.supabaseUrl ? 'SET' : 'MISSING'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    NEXT_PUBLIC_SUPABASE_ANON_KEY
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    envVars.supabaseAnonKey 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {envVars.supabaseAnonKey ? 'SET' : 'MISSING'}
                  </span>
                </div>
              </div>
            </div>

            {/* Connection Status */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Supabase Connection
              </h2>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Connection Status
                </span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  connectionStatus === 'checking'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : connectionStatus === 'success'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {connectionStatus === 'checking' && 'CHECKING...'}
                  {connectionStatus === 'success' && '✓ CONNECTED'}
                  {connectionStatus === 'failed' && '✗ FAILED'}
                </span>
              </div>
            </div>

            {/* Instructions */}
            {(!envVars.supabaseUrl || !envVars.supabaseAnonKey || connectionStatus === 'failed') && (
              <div className="border-l-4 border-red-400 bg-red-50 dark:bg-red-900/50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                      Configuration Issues Detected
                    </h3>
                    <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                      <ul className="list-disc pl-5 space-y-1">
                        {!envVars.supabaseUrl && (
                          <li>NEXT_PUBLIC_SUPABASE_URL environment variable is missing</li>
                        )}
                        {!envVars.supabaseAnonKey && (
                          <li>NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable is missing</li>
                        )}
                        {envVars.supabaseUrl && envVars.supabaseAnonKey && connectionStatus === 'failed' && (
                          <li>Unable to connect to Supabase. Check if the URL and key are correct.</li>
                        )}
                      </ul>
                      <p className="mt-3">
                        Please check your Vercel deployment environment variables and ensure they match your Supabase project settings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Success Message */}
            {envVars.supabaseUrl && envVars.supabaseAnonKey && connectionStatus === 'success' && (
              <div className="border-l-4 border-green-400 bg-green-50 dark:bg-green-900/50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                      Configuration Looks Good!
                    </h3>
                    <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                      All environment variables are set and Supabase connection is working.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex space-x-4">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
              >
                Refresh Check
              </button>
              <a
                href="/admin/login"
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
              >
                Back to Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}