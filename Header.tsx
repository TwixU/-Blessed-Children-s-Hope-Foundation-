
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Logo: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primaryBrand">
    <path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM24 38C16.268 38 10 31.732 10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24C38 31.732 31.732 38 24 38Z" fill="currentColor"/>
    <path d="M24 16C21.7909 16 20 17.7909 20 20C20 22.2091 21.7909 24 24 24C26.2091 24 28 22.2091 28 20C28 17.7909 26.2091 16 24 16Z" fill="currentColor"/>
    <path d="M30 28H18C16.8954 28 16 28.8954 16 30C16 32.2091 19.5817 34 24 34C28.4183 34 32 32.2091 32 30C32 28.8954 31.1046 28 30 28Z" fill="currentColor"/>
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { text: "Home", to: "/" },
    { text: "About Us", to: "/about" },
    { text: "Our Programs", to: "/programs" },
    { text: "Events", to: "/events" },
    { text: "Contact", to: "/contact" },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-lg' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <Logo />
            <span className="text-xl font-bold font-heading text-textLightBg">Blessed Children's Hope Foundation</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium text-textLightBg hover:text-primaryBrand transition-colors ${isActive ? 'text-primaryBrand' : ''}`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/donate" className="ml-8 bg-primaryBrand text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-sky-700 transition-transform transform hover:scale-105">
              Donate Now
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-textLightBg focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? 'bg-sky-100 text-primaryBrand' : 'text-textLightBg hover:bg-gray-100'}`
                }
              >
                {link.text}
              </NavLink>
            ))}
            <Link to="/donate" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-primaryBrand text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-sky-700 transition-colors">
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
