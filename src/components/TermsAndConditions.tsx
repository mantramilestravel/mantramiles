import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4 text-primary">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: October 9th, 2025</p>

      <p>
        Welcome to <strong>Mantra Miles</strong> (“we”, “our”, “us”). By booking a tour or using
        our website <a href="https://www.mantramiles.in" className="text-primary underline">www.mantramiles.in</a>,
        you (“traveler”, “customer”) agree to the following Terms & Conditions. Please read them
        carefully before booking.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Booking Policy</h2>
      <ul className="list-disc ml-6">
        <li>Bookings must be made through our official website or authorized representatives.</li>
        <li>Bookings are confirmed only after receipt of payment or deposit.</li>
        <li>You are responsible for providing accurate details and travel documents.</li>
        <li>We reserve the right to cancel incomplete or fraudulent bookings.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Payments</h2>
      <ul className="list-disc ml-6">
        <li>Payment terms vary by package and will be informed during booking.</li>
        <li>All prices are quoted in INR unless stated otherwise.</li>
        <li>We accept payments via authorized gateways or bank transfers.</li>
        <li>Transaction fees are borne by the customer.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Cancellations & Refunds</h2>
      <ul className="list-disc ml-6">
        <li>Cancellation requests must be emailed to us.</li>
        <li>Refunds vary based on cancellation timing:
          <ul className="list-disc ml-6">
            <li>More than 30 days: Up to 80% refund (after charges).</li>
            <li>15–30 days: Up to 50% refund.</li>
            <li>Less than 15 days: No refund.</li>
          </ul>
        </li>
        <li>Mantra Miles may cancel tours due to unavoidable circumstances (natural disasters,
            low participation, government restrictions). Customers may get a full refund or
            choose to transfer their booking.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Itinerary & Services</h2>
      <p>
        Itineraries are indicative and may change due to local or operational conditions.
        We strive to maintain promised inclusions but reserve the right to modify as necessary.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Travel Documents & Responsibilities</h2>
      <p>
        Travelers must ensure valid passports, visas, and health certificates. We are not
        responsible for denial of entry due to documentation issues.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Health & Safety</h2>
      <p>
        Travelers must ensure they are medically fit for travel. We are not liable for illness,
        injury, or death caused by negligence or unforeseen circumstances.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Limitation of Liability</h2>
      <p>
        Mantra Miles acts as an agent for service providers and is not responsible for loss,
        injury, or delays caused by third parties or natural events. Our liability is limited to
        the amount paid directly to us.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Travel Insurance</h2>
      <p>
        Travelers are advised to obtain comprehensive travel insurance covering medical
        expenses, cancellations, and baggage loss.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Use of Website</h2>
      <ul className="list-disc ml-6">
        <li>Do not engage in unlawful or fraudulent activities.</li>
        <li>Do not copy or distribute site content without permission.</li>
        <li>Use responsibly and in accordance with applicable laws.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Intellectual Property</h2>
      <p>
        All content, images, and materials on our site are the property of Mantra Miles and are
        protected by copyright law. Unauthorized use is prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">11. Governing Law & Jurisdiction</h2>
      <p>
        These Terms are governed by the laws of India. Any disputes shall be subject to the
        exclusive jurisdiction of the courts of Bengaluru, Karnataka.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">12. Contact Us</h2>
      <address className="not-italic">
        <strong>Mantra Miles</strong>
        <br />
        Email: <a href="mailto:connect@mantramiles.in" className="text-primary underline">connect@mantramiles.in</a><br />
        Phone: <a href="tel:+919972816108" className="text-primary underline">9972816108</a><br />
        Website: <a href="https://www.mantramiles.in" className="text-primary underline">www.mantramiles.in</a><br />
        Address: Ullal Lake Trail, Sir M Visweshwaraiah Layout, 5th Block, Bangalore – 560091.
      </address>

      <p className="mt-6">
        By booking with <strong>Mantra Miles</strong>, you acknowledge that you have read,
        understood, and agreed to these Terms & Conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;
