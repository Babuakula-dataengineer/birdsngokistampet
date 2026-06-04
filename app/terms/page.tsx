import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 font-display">
          Terms & Conditions
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing and using the BIRDS Society website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Use License</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Permission is granted to temporarily access the materials on BIRDS Society's website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              This license shall automatically terminate if you violate any of these restrictions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Donations</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              All donations made to BIRDS Society are voluntary and non-refundable unless required by law.
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Donations are used for charitable purposes as described on our website</li>
              <li>Tax receipts will be provided for eligible donations</li>
              <li>We reserve the right to use donations where they are most needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Volunteer Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Volunteers agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
              <li>Follow BIRDS Society's code of conduct</li>
              <li>Respect beneficiaries and community members</li>
              <li>Maintain confidentiality of sensitive information</li>
              <li>Complete assigned tasks to the best of their ability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Disclaimer</h2>
            <p className="text-gray-600 dark:text-gray-300">
              The materials on BIRDS Society's website are provided on an 'as is' basis. BIRDS Society makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Limitations</h2>
            <p className="text-gray-600 dark:text-gray-300">
              In no event shall BIRDS Society or its suppliers be liable for any damages arising out of the use or inability to use the materials on BIRDS Society's website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modifications</h2>
            <p className="text-gray-600 dark:text-gray-300">
              BIRDS Society may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about these Terms & Conditions, please contact us at:
              <br />
              Email: info@birdssociety.org
              <br />
              Phone: +91 123 456 7890
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
