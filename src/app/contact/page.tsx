'use client';

import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'general'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend or a form service
    // For now, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you shortly.'
    });

    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: 'general'
    });

    // In a real implementation, you would handle errors as well
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-primary-slate text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Contact Us" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-primary-navy/50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center leading-relaxed"
          >
            Have questions or ready to start your project? Reach out to our team today.
          </motion.p>
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold mb-6 text-primary-navy dark:text-white">Get in Touch</h2>
              
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="text-primary-blue mr-4 mt-1">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy dark:text-white mb-1">Our Office</h3>
                    <p className="text-primary-slate dark:text-gray-300">
                      3355 Lenox Rd NE, Suite 1000<br />
                      Atlanta, GA 30326<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-primary-blue mr-4 mt-1">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy dark:text-white mb-1">Phone</h3>
                    <p className="text-primary-slate dark:text-gray-300">
                      (404) 205-8405
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-primary-blue mr-4 mt-1">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy dark:text-white mb-1">Email</h3>
                    <p className="text-primary-slate dark:text-gray-300">
                      chris.johnson@technologyalliancesolutions.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-primary-blue mr-4 mt-1">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy dark:text-white mb-1">Business Hours</h3>
                    <p className="text-primary-slate dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary-navy dark:text-white mb-3">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:text-primary-navy dark:hover:text-white transition-colors">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:text-primary-navy dark:hover:text-white transition-colors">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3 bg-slate-50 dark:bg-primary-navy/30 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-primary-navy dark:text-white">Send Us a Message</h2>
              
              {formStatus.submitted && formStatus.success ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-primary-navy dark:text-white mb-2">Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-primary-navy dark:text-white mb-2">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-primary-navy dark:text-white mb-2">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-primary-navy dark:text-white mb-2">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-primary-navy dark:text-white mb-2">Service of Interest</label>
                    <select 
                      id="service" 
                      name="service" 
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="crm">CRM Solutions</option>
                      <option value="marketing">Marketing Automation</option>
                      <option value="integration">Integration Services</option>
                      <option value="consulting">Strategy Consulting</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-primary-navy dark:text-white mb-2">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue dark:bg-primary-slate dark:text-white"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="bg-primary-blue text-white py-3 px-6 rounded-md hover:bg-primary-blue/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection className="py-16 bg-slate-100 dark:bg-primary-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-primary-navy dark:text-white">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.0105250855303!2d-84.3630974!3d33.846638799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f505c1cc3d20ad%3A0xf06249b75421ec41!2s3355%20Lenox%20Rd%20NE%20%231000%2C%20Atlanta%2C%20GA%2030326!5e0!3m2!1sen!2sus!4v1714021283075!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="w-full h-full"
              aria-label="Map showing office location in Atlanta"
            ></iframe>
          </div>
          <p className="text-center mt-4 text-primary-slate dark:text-gray-300">
            We&apos;re conveniently located in Buckhead, Atlanta, easily accessible from GA-400 and I-85.
          </p>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 bg-white dark:bg-primary-slate">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-primary-navy dark:text-white">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-primary-navy dark:text-white">What services do you offer?</h3>
              <p className="text-primary-slate dark:text-gray-300">
                We offer a comprehensive suite of CRM and marketing automation services, including implementation, integration, optimization, strategy consulting, and ongoing support.  
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-primary-navy dark:text-white">How quickly can you respond to inquiries?</h3>
              <p className="text-primary-slate dark:text-gray-300">
                We typically respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.  
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-primary-navy dark:text-white">Do you work with clients internationally?</h3>
              <p className="text-primary-slate dark:text-gray-300">
                Yes, we work with clients across the globe. Our team is experienced in managing remote projects and can accommodate different time zones.  
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary-navy dark:text-white">How do I get started with your services?</h3>
              <p className="text-primary-slate dark:text-gray-300">
                Simply fill out our contact form or give us a call. We&apos;ll schedule an initial consultation to understand your needs and discuss how we can help.  
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </PageLayout>
  );
}
