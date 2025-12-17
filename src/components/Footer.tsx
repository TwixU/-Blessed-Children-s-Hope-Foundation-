import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'About Us',
      links: [
        { to: '/about', label: 'Our Story' },
        { to: '/programs', label: 'Our Programs' },
        { to: '/team', label: 'Our Team' },
        { to: '/impact', label: 'Our Impact' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { to: '/volunteer', label: 'Volunteer' },
        { to: '/donate', label: 'Donate' },
        { to: '/partner', label: 'Partner With Us' },
        { to: '/careers', label: 'Careers' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { to: '/privacy', label: 'Privacy Policy' },
        { to: '/terms', label: 'Terms of Service' },
        { to: '/dmca', label: 'DMCA' },
        { to: '/accessibility', label: 'Accessibility' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">BCHF</h3>
            <p className="text-sm">
              Empowering underprivileged children through education, healthcare, and community support to build a better future.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white text-lg font-semibold mb-4">
              Stay Updated with Our Newsletter
            </h4>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primaryBrand"
                required
              />
              <button
                type="submit"
                className="bg-primaryBrand text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Blessed Children's Hope Foundation. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ for a better future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
