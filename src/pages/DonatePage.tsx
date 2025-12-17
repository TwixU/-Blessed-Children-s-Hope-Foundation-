
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

const DonationForm: React.FC = () => {
  const [frequency, setFrequency] = useState('One-Time');
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const navigate = useNavigate();

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCustomAmount(value);
      setAmount(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would handle payment processing.
    // For this demo, we'll just redirect to the thank you page.
    navigate('/thank-you');
  };

  const amountOptions = [25, 50, 100, 250];

  return (
    <div className="bg-backgroundDark py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 md:p-12 rounded-lg shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold font-heading text-textHeadingDarkBg">Support Our Cause</h1>
            <p className="mt-4 text-lg text-textBodyDarkBg">Your generous donation helps us continue our vital work for children's health.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Frequency */}
            <div>
              <label className="block text-sm font-medium text-textHeadingDarkBg mb-2">Donation Frequency</label>
              <div className="grid grid-cols-2 gap-4">
                {['One-Time', 'Monthly'].map(freq => (
                  <button
                    key={freq}
                    type="button"
                    onClick={() => setFrequency(freq)}
                    className={`p-4 rounded-md text-center font-semibold transition-colors ${frequency === freq ? 'bg-primaryBrand text-white' : 'bg-gray-700 text-textBodyDarkBg hover:bg-gray-600'}`}
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-sm font-medium text-textHeadingDarkBg mb-2">Choose an Amount ($)</label>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                {amountOptions.map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleAmountClick(val)}
                    className={`p-4 rounded-md text-center font-semibold transition-colors ${amount === val ? 'bg-primaryBrand text-white' : 'bg-gray-700 text-textBodyDarkBg hover:bg-gray-600'}`}
                  >
                    ${val}
                  </button>
                ))}
                <input
                  type="text"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Custom"
                  className="p-4 rounded-md text-center font-semibold bg-gray-700 text-textBodyDarkBg border-2 border-transparent focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primaryBrand focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-textHeadingDarkBg">First Name</label>
                <input type="text" name="firstName" id="firstName" required className="mt-1 block w-full bg-gray-700 border-borderDarkBg rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-primaryBrand focus:border-primaryBrand sm:text-sm" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-textHeadingDarkBg">Last Name</label>
                <input type="text" name="lastName" id="lastName" required className="mt-1 block w-full bg-gray-700 border-borderDarkBg rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-primaryBrand focus:border-primaryBrand sm:text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textHeadingDarkBg">Email Address</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full bg-gray-700 border-borderDarkBg rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-primaryBrand focus:border-primaryBrand sm:text-sm" />
            </div>

            {/* Payment Placeholder */}
            <div>
              <label className="block text-sm font-medium text-textHeadingDarkBg">Payment Information</label>
              <div className="mt-2 p-6 bg-gray-900 rounded-md border-2 border-dashed border-borderDarkBg text-center text-gray-400">
                <p>Secure payment fields (e.g., Stripe or Braintree) would be rendered here in a production environment.</p>
              </div>
            </div>

            <button type="submit" className="w-full bg-primaryBrand text-white font-bold py-4 px-4 rounded-md shadow-lg text-lg hover:bg-sky-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primaryBrand">
              Donate Securely
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const DonatePage: React.FC = () => {
  usePageTitle("Donate Now | Support Blessed Children's Hope Foundation");
  return <DonationForm />;
};

export default DonatePage;
