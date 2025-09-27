import React from 'react';
// './AboutSection.css' ko delete karna hai

import buildingImage from '../../assests/Frame73.png'; 
import classroomImage from '../../assests/Frame74.png'; 
import universityIcon from '../../assests/Graduate.png'; 
import trustIcon from '../../assests/Guarantee.png'; 
import studentIcon from '../../assests/students.png'; 

function AboutSection() {
  // Define colors based on the original CSS for Tailwind use
  const schoolRed = '#a51834';
  const schoolRedHover = '#88122a';
  const primaryTitleColor = '#000000';
  const descTextColor = '#242424';
  const cardTextColor = '#555';
  const secondaryBg = '#f7f7f7';

  return (
    // section-wrapper: Background gradient, padding.
    // Padding: 6rem top/bottom (p-24) on desktop, adjust for mobile.
    <div className="bg-white" style={{ backgroundImage: 'linear-gradient(180deg, #F7E9FF 0%, #FCEDFF 100%)' }}>
      <section className="max-w-7xl mx-auto py-16 lg:py-24 px-6">
        
        {/* about-container: Flex container, reverse column on mobile, large gap on desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-36">
          
          {/* 1. about-image-column (Hidden on mobile) */}
          {/* This entire column is hidden on screens smaller than large (lg:) */}
          <div className="hidden lg:block lg:flex-1 relative order-2 lg:order-1">
            <div className="relative w-full h-[700px]">
              
              {/* Image 1: Building image */}
              <img 
                src={buildingImage} 
                alt="School Building" 
                className="absolute top-0 left-0 w-[85%] h-auto rounded-none shadow-xl" 
              />
              
              {/* Image 2: Classroom image (Overlapping) */}
              {/* Original CSS: bottom: -40px; right: -130px; */}
              <img 
                src={classroomImage} 
                alt="Students in Classroom" 
                className="absolute w-[85%] h-auto rounded-none shadow-xl" 
                style={{ bottom: '-40px', right: '-130px' }}
              />
            </div>
          </div>

          {/* 2. about-content-column */}
          <div className="w-full lg:flex-1 px-0 lg:px-8 order-1 lg:order-2 text-center lg:text-left">
            
            {/* about-header */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 mt-auto">
              <img src={universityIcon} alt="University Icon" className="w-5 h-5" />
              <p className="font-['Poppins'] text-xl font-bold tracking-wider" style={{ color: primaryTitleColor }}>
                About Our University
              </p>
            </div>

            {/* about-title */}
            <h2 className="font-['Poppins'] text-4xl lg:text-[4rem] font-bold leading-tight mb-8" style={{ color: primaryTitleColor }}>
              An Introduction <br className="lg:hidden"/>To Our School
            </h2>
            
            {/* about-text-wrapper (Red line on the left) */}
            <div className="relative pl-4 border-l-2 mb-12 mx-auto lg:mx-0 max-w-lg lg:max-w-full" style={{ borderColor: schoolRed }}>
              <p className="font-['Poppins'] text-base lg:text-lg leading-snug" style={{ color: descTextColor }}>
                Unlock your potential and shape a brighter tomorrow with Academix—where innovation, knowledge, and opportunities come together to pave the way for your success.
              </p>
            </div>

            {/* about-cards-wrapper */}
            <div className="flex flex-col gap-6 mb-16">
              
              {/* Card 1: Building Trust */}
              <div className="flex items-start lg:items-center gap-6 lg:gap-10 max-w-xl mx-auto lg:mx-0">
                <img 
                  src={trustIcon} 
                  alt="Building Trust" 
                  className="w-[60px] h-[60px] p-2 rounded-full border border-gray-300 flex-shrink-0"
                  style={{ backgroundColor: secondaryBg }} 
                />
                <div className="text-left">
                  <h3 className="font-['Poppins'] text-xl font-semibold mb-1 text-gray-800">Building Trust</h3>
                  <p className="font-['Poppins'] text-sm" style={{ color: cardTextColor }}>
                    We are committed to building trust.
                  </p>
                </div>
              </div>

              {/* Card 2: Trusted By Students */}
              <div className="flex items-start lg:items-center gap-6 lg:gap-10 max-w-xl mx-auto lg:mx-0">
                <img 
                  src={studentIcon} 
                  alt="Trusted By Students" 
                  className="w-[60px] h-[60px] p-2 rounded-full border border-gray-300 flex-shrink-0" 
                  style={{ backgroundColor: secondaryBg }} 
                />
                <div className="text-left">
                  <h3 className="font-['Poppins'] text-xl font-semibold mb-1 text-gray-800">Trusted By Students</h3>
                  <p className="font-['Poppins'] text-sm" style={{ color: cardTextColor }}>
                    Most trusted & Recommends by students.
                  </p>
                </div>
              </div>
            </div>
            
            {/* about-btn */}
            <a href="#" 
              className="about-btn inline-flex items-center justify-center gap-2 bg-[#a51834] text-white 
                         font-['Poppins'] font-medium text-base py-3 px-6 rounded-xl transition duration-300 ease-in-out hover:bg-[#88122a] 
                         mt-0"
            >
              More About Us <span className="text-xl">→</span>
            </a>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default AboutSection;