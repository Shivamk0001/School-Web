// src/components/AdmissionPageSections/AdmissionCTA.jsx

import React from 'react';

const AdmissionCTA = () => {
  return (
    <div className="bg-red-700 text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-xl md:text-2xl font-bold mb-8">
          We invite you to visit our campus and experience firsthand why St. Carmel School is recognized as one of the leading CISCE schools in Hyderabad.
        </p>
        <a href="/contact">
          <button className="mt-4 bg-white text-red-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Enquire Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default AdmissionCTA;