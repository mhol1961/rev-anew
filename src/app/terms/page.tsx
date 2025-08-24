'use client';

import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TermsOfService = () => {
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
            Terms of Service
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
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the Technology Alliance Solutions, INC. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) website at <Link href="/" className="text-primary-blue hover:underline">technologyalliancesolutions.com</Link> (&ldquo;the Site&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to all of these Terms, you may not access or use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">2. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. All changes are effective immediately when posted on the Site. Your continued use of the Site following the posting of revised Terms means you accept the changes.
            </p>
            <p className="mb-4">
              It is your responsibility to check this page periodically for changes. We will provide notice of material changes by updating the &ldquo;Last Updated&rdquo; date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">3. Using Our Site</h2>
            <p className="mb-4">
              The Site is intended for users who are at least 18 years old. By using the Site, you represent and warrant that you meet this requirement.
            </p>
            <p className="mb-4">
              You agree to use the Site only for lawful purposes and in accordance with these Terms. Specifically, you agree not to:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">Use the Site in any way that violates applicable laws or regulations.</li>
              <li className="mb-2">Attempt to interfere with the proper functioning of the Site.</li>
              <li className="mb-2">Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site.</li>
              <li className="mb-2">Use the Site to transmit or send unsolicited advertisements or promotions.</li>
              <li className="mb-2">Attempt to gain unauthorized access to any portion of the Site or any systems or networks connected to the Site.</li>
              <li className="mb-2">Collect or store personal data about other users without their express consent.</li>
              <li className="mb-2">Impersonate or attempt to impersonate Technology Alliance Solutions, a Technology Alliance Solutions employee, another user, or any other person or entity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">4. Intellectual Property Rights</h2>
            <p className="mb-4">
              The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Technology Alliance Solutions, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="mb-4">
              These Terms permit you to use the Site for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site except as generally and ordinarily permitted through the Site according to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">5. Trademarks</h2>
            <p className="mb-4">
              The Technology Alliance Solutions name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Technology Alliance Solutions or its affiliates or licensors. You must not use such marks without the prior written permission of Technology Alliance Solutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">6. Services and Contracts</h2>
            <p className="mb-4">
              Our Site provides information about our consulting and implementation services. Any engagement for specific services will be governed by separate agreements and contracts between Technology Alliance Solutions and the client.
            </p>
            <p className="mb-4">
              The information on the Site does not constitute a binding offer or contract. All descriptions of services and pricing are subject to change at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">7. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE SITE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TECHNOLOGY ALLIANCE SOLUTIONS DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mb-4">
              WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SITE OR THE SERVERS THAT MAKE IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">8. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL TECHNOLOGY ALLIANCE SOLUTIONS, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">9. Indemnification</h2>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless Technology Alliance Solutions, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">10. Governing Law and Jurisdiction</h2>
            <p className="mb-4">
              These Terms and any dispute or claim arising out of or related to them, their subject matter, or their formation shall be governed by and construed in accordance with the laws of the State of Georgia, without giving effect to any choice or conflict of law provisions.
            </p>
            <p className="mb-4">
              Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Site shall be instituted exclusively in the federal or state courts located in Fulton County, Georgia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">11. Waiver and Severability</h2>
            <p className="mb-4">
              No waiver by Technology Alliance Solutions of any term or condition set out in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Technology Alliance Solutions to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
            </p>
            <p className="mb-4">
              If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary-navy dark:text-white">12. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-primary-light dark:bg-primary-navy/50 p-6 rounded-lg">
              <p className="mb-1"><strong>Technology Alliance Solutions, INC.</strong></p>
              <p className="mb-1">3355 Lenox Rd NE, Suite 1000</p>
              <p className="mb-1">Atlanta, GA 30326</p>
              <p className="mb-1">Phone: (404) 205-8405</p>
              <p className="mb-1">Email: legal@technologyalliancesolutions.com</p>
            </div>
          </section>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
