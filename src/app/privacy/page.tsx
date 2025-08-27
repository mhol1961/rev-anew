'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto bg-white dark:bg-primary-slate p-6 rounded-lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary-navy dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-primary-slate dark:text-white/80 mb-4">
            Last Updated: April 22, 2025
          </p>
          <div className="w-20 h-1 bg-primary-blue mb-8"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-8 text-primary-slate dark:text-white/80"
        >
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">1. Introduction</h2>
            <p className="mb-4">
              Technology Alliance Solutions, INC. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting it through our compliance with this policy.
            </p>
            <p className="mb-4">
              This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website at <Link href="/" className="text-primary-blue hover:underline">technologyalliancesolutions.com</Link> and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">2. Information We Collect</h2>
            <p className="mb-4">
              We collect several types of information from and about users of our website, including:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">
                Personal information such as name, email address, telephone number, and company information that you provide by filling in forms on our website, subscribing to our newsletter, requesting information, or when contacting us.
              </li>
              <li className="mb-2">
                Information about your internet connection, the equipment you use to access our website, and usage details.
              </li>
              <li className="mb-2">
                Non-personal identification information including browser type, device type, preferences, and interaction with our website through cookies and similar technologies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use information that we collect about you or that you provide to us:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">To present our website and its contents to you.</li>
              <li className="mb-2">To provide you with information or services that you request from us.</li>
              <li className="mb-2">To fulfill any other purpose for which you provide it.</li>
              <li className="mb-2">To communicate with you about our services, updates, or changes to our policies.</li>
              <li className="mb-2">To personalize your experience and deliver content relevant to your interests.</li>
              <li className="mb-2">To improve our website, products, and services.</li>
              <li className="mb-2">For any other purpose with your consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">4. Disclosure of Your Information</h2>
            <p className="mb-4">
              We may disclose personal information that we collect or you provide:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">To our subsidiaries and affiliates.</li>
              <li className="mb-2">To contractors, service providers, and other third parties we use to support our business.</li>
              <li className="mb-2">To fulfill the purpose for which you provide it.</li>
              <li className="mb-2">For any other purpose disclosed by us when you provide the information.</li>
              <li className="mb-2">With your consent.</li>
              <li className="mb-2">To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
              <li className="mb-2">If we believe disclosure is necessary to protect the rights, property, or safety of Technology Alliance Solutions, our clients, or others.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">5. Data Security</h2>
            <p className="mb-4">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
            </p>
            <p className="mb-4">
              The safety and security of your information also depends on you. We urge you to be careful about providing information in public areas of the website. The information you share in public areas may be viewed by any user of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">6. Your Rights and Choices</h2>
            <p className="mb-4">
              You may have certain rights regarding your personal information, depending on your location. These may include:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">Accessing, correcting, or deleting your personal information.</li>
              <li className="mb-2">Withdrawing your consent, where we rely on consent to process your personal information.</li>
              <li className="mb-2">Objecting to our use of your personal information.</li>
              <li className="mb-2">Requesting a copy of your personal information.</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us using the contact information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">7. Changes to Our Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. If we make material changes, we will notify you by posting the updated policy on this page and updating the &ldquo;Last Updated&rdquo; date.
            </p>
            <p className="mb-4">
              You are responsible for periodically visiting our website and this Privacy Policy to check for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">8. Contact Information</h2>
            <p className="mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-primary-light dark:bg-primary-navy/50 p-6 rounded-lg">
              <p className="mb-1"><strong>Technology Alliance Solutions, INC.</strong></p>
              <p className="mb-1">3355 Lenox Rd NE, Suite 1000</p>
              <p className="mb-1">Atlanta, GA 30326</p>
              <p className="mb-1">Phone: (404) 205-8405</p>
              <p className="mb-1">Email: privacy@technologyalliancesolutions.com</p>
            </div>
          </section>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
