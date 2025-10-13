import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4 text-primary">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: October 9th, 2025</p>

      <p>
        Welcome to <strong>Mantra Miles</strong> (“we”, “our”, “us”). We respect your privacy
        and are committed to protecting your personal information. This Privacy Policy explains
        how we collect, use, and safeguard the information you share with us through our website
        <a href="https://www.mantramiles.in" className="text-primary underline ml-1">
          www.mantramiles.in
        </a>, mobile platforms, and other communication channels.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul className="list-disc ml-6">
        <li>
          <strong>Personal Information:</strong> Name, phone number, email, postal address,
          date of birth, gender, identification details (passport, Aadhaar), and payment details
          (processed securely via third-party gateways).
        </li>
        <li>
          <strong>Non-Personal Information:</strong> Browser type, device information, IP
          address, and analytics data collected via cookies.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6">
        <li>Process bookings, reservations, and travel services.</li>
        <li>Send confirmations, itineraries, and updates.</li>
        <li>Provide customer support and respond to inquiries.</li>
        <li>Improve website functionality and service quality.</li>
        <li>Send newsletters or promotional offers (with consent).</li>
        <li>Comply with legal obligations and resolve disputes.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. How We Share Your Information</h2>
      <p>
        We may share data with travel partners (airlines, hotels, operators), payment gateways,
        service providers, and authorities as required by law. We never sell or rent your data.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Retention</h2>
      <p>
        We retain your data only as long as necessary or required by law. Once no longer needed,
        we securely delete or anonymize it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Cookies and Tracking</h2>
      <p>
        We use cookies to improve your experience. You can disable cookies in browser settings,
        but some features may not function properly.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your information.
        However, no online platform is completely secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Third-Party Links</h2>
      <p>
        Our website may contain external links. We are not responsible for their content or
        privacy practices. Please read their policies separately.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Your Rights</h2>
      <ul className="list-disc ml-6">
        <li>Access, correct, or delete your data.</li>
        <li>Withdraw marketing consent at any time.</li>
        <li>Request details of how your data is processed.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. All updates will appear on this page
        with a revised “Last Updated” date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact Us</h2>
      <address className="not-italic">
        <strong>Mantra Miles</strong>
        <br />
        Email: <a href="mailto:connect@mantramiles.in" className="text-primary underline">connect@mantramiles.in</a><br />
        Phone: <a href="tel:+919972816108" className="text-primary underline">9972816108</a><br />
        Website: <a href="https://www.mantramiles.in" className="text-primary underline">www.mantramiles.in</a><br />
        Address: Ullal Lake Trail, Sir M Visweshwaraiah Layout, 5th Block, Bangalore – 560091.
      </address>

      <p className="mt-6">
        By using our website or services, you consent to the collection and use of your
        information as described in this Privacy Policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
