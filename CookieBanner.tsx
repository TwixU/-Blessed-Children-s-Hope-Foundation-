
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    localStorage.setItem('cookie_consent', consent ? 'accepted' : 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-backgroundDark text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-textBodyDarkBg">
          This website uses cookies to ensure you get the best experience on our website. By continuing to browse, you agree to our <Link to="/privacy" className="font-semibold text-primaryBrand hover:underline">Privacy Policy</Link>.
        </p>
        <div className="flex items-center gap-4 flex-shrink-0">
          <button onClick={() => handleConsent(true)} className="bg-primaryBrand text-white font-semibold py-2 px-4 rounded-md text-sm hover:bg-sky-700 transition-colors">
            Accept
          </button>
          <button onClick={() => handleConsent(false)} className="bg-borderDarkBg text-white font-semibold py-2 px-4 rounded-md text-sm hover:bg-gray-600 transition-colors">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
