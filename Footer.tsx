
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks = [
    { text: "About Us", to: "/about" },
    { text: "Programs", to: "/programs" },
    { text: "Events", to: "/events" },
    { text: "Contact", to: "/contact" },
  ];

  const legalLinks = [
    { text: "Privacy Policy", to: "/privacy" },
    { text: "Terms of Service", to: "/terms" },
    { text: "DMCA Policy", to: "/dmca" },
  ];

  const address = `The Scout Hall, Main Road, Coddington, NG24 2PN`;
  
  return (
    <footer className="bg-backgroundDark text-textBodyDarkBg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2 lg:col-span-1">
             <h3 className="text-lg font-semibold text-textHeadingDarkBg mb-4">Blessed Children's Hope Foundation</h3>
            <p className="text-sm">Bringing hope and health to children in need. Your support creates a brighter future for the next generation.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-textHeadingDarkBg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-primaryBrand transition-colors">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-textHeadingDarkBg mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-primaryBrand transition-colors">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-textHeadingDarkBg mb-4">Contact Us</h3>
            <address className="text-sm not-italic space-y-2">
              <p>{address}</p>
              <p>
                <a href="mailto:info@coalitionforcyf-charity.org" className="hover:text-primaryBrand transition-colors">info@coalitionforcyf-charity.org</a>
              </p>
              <p>(555) 123-4567 (placeholder)</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-borderDarkBg pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Blessed Children's Hope Foundation. Register Number: 1034025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
