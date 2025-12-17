
import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

const ThankYouPage: React.FC = () => {
  usePageTitle("Thank You! | Blessed Children's Hope Foundation");

  return (
    <div className="bg-white py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold font-heading text-textLightBg">Thank You!</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Your generous donation has been received. We are incredibly grateful for your support in our mission to bring health and hope to children.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-block bg-primaryBrand text-white font-semibold py-3 px-8 rounded-lg shadow-md text-lg hover:bg-sky-700 transition-transform transform hover:scale-105"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
