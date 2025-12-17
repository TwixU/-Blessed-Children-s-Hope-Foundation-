
import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert('Thank you for your message. We will get back to you shortly.');
    (e.target as HTMLFormElement).reset();
  };

  const address = `The Scout Hall, Main Road, Coddington, NG24 2PN`;

  return (
    <div className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-textLightBg">Get In Touch</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Whether you have a question, a suggestion, or want to partner with us, please reach out.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold font-heading text-textLightBg mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primaryBrand focus:border-primaryBrand" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primaryBrand focus:border-primaryBrand" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea name="message" id="message" rows={5} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primaryBrand focus:border-primaryBrand"></textarea>
              </div>
              <button type="submit" className="w-full bg-primaryBrand text-white font-semibold py-3 px-4 rounded-md shadow-md hover:bg-sky-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryBrand">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-textLightBg">Address</h3>
              <address className="mt-2 not-italic text-gray-600">{address}</address>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-textLightBg">Email</h3>
              <p className="mt-2 text-gray-600">
                <a href="mailto:info@coalitionforcyf-charity.org" className="text-primaryBrand hover:underline">info@coalitionforcyf-charity.org</a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-textLightBg">Phone</h3>
              <p className="mt-2 text-gray-600">(555) 123-4567 (placeholder)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  usePageTitle("Contact Us | Blessed Children's Hope Foundation");
  return <ContactForm />;
};

export default ContactPage;
