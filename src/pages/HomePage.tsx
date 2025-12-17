
import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

const Hero: React.FC = () => (
  <div className="relative bg-gray-800 text-white">
    <img
      src="https://picsum.photos/1600/900?image=53"
      alt="A group of diverse, happy children playing together outdoors."
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    />
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight leading-tight mb-4">
        Welcome to Blessed Children's Hope Foundation
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
        Dedicated to the relief of sickness and the preservation of health among children, ensuring every child has the chance to thrive.
      </p>
      <Link
        to="/programs"
        className="inline-block bg-primaryBrand text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-lg hover:bg-sky-700 transition-transform transform hover:scale-105"
      >
        Explore All Programs
      </Link>
    </div>
  </div>
);

const ImpactStatistics: React.FC = () => {
  const stats = [
    { value: "1,000+", label: "Children Helped" },
    { value: "50+", label: "Health Projects" },
    { value: "10+", label: "Years of Service" },
    { value: "150+", label: "Active Volunteers" },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-textLightBg">Our Impact, By the Numbers</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Your support translates into real, tangible results for children and their families.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-8 bg-sky-50 rounded-lg">
              <p className="text-4xl md:text-5xl font-extrabold text-primaryBrand">{stat.value}</p>
              <p className="mt-2 text-lg font-medium text-textLightBg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  usePageTitle("Blessed Children's Hope Foundation | Home");
  return (
    <>
      <Hero />
      <ImpactStatistics />
    </>
  );
};

export default HomePage;
