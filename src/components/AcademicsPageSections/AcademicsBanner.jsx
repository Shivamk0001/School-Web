import React from 'react';
import bannerImage from '../../assests/Herosectionpage.png'; 

function AcademicsBanner() {
  return (
    <div className="w-full overflow-hidden">
      <img 
        src={bannerImage} 
        alt="Group of graduating students walking together" 
        className="w-full h-auto block" 
      />
    </div>
  );
}

export default AcademicsBanner;