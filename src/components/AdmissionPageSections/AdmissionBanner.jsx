// src/components/AdmissionPageSections/AdmissionBanner.jsx

import React from 'react';
// -------------------------------------------------------------
// VITAL FIX: Use '../..` to correctly reference the src/assets folder
// -------------------------------------------------------------
import admissionBanner from '../../assests/Admission-banner.png'; // Ensure the image is in the correct path

const AdmissionBanner = () => {
  return (
    <div className="relative h-64 md:h-160 bg-gray-200 overflow-hidden">
      <img
        src={admissionBanner} // This variable now holds the correct image URL
        alt="St. Carmel School Building Entrance"
        className="w-full h-full object-cover object-center"
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
    </div>
  );
};

export default AdmissionBanner;