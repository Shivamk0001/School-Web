import React from 'react';
// './HeroSection.css' ko delete karna hai

import heroImage from '../../assests/Hero1.png'; 
import copilotIcon from '../../assests/Copilot.png'; 
import googleIcon from '../../assests/google.png';
import amazonIcon from '../../assests/amazon.png';
import adobeIcon from '../../assests/adobe.png';
import bookNowIcon from '../../assests/Arrowbutton.png'; 
import downloadIcon from '../../assests/downloadbutton.png'; 

function HeroSection() {
  // Colors for exact match
  const primaryTextColor = '#243B6F';
  const secondaryTextColor = '#0b0b0b';
  const descColor = '#595959';
  const schoolRed = '#a51834';
  const schoolRedHover = '#88122a';

  const heroBrands = [
    ['Copilot', copilotIcon],
    ['Google', googleIcon],
    ['Amazon', amazonIcon],
    ['Adobe XD', adobeIcon]
  ];

  return (
    // Desktop: relative, fixed minimum height, overflow hidden. 
    <section 
      className="relative w-full overflow-hidden min-h-[550px] lg:min-h-[591px] pt-12 pb-12 lg:pb-0 lg:pt-0 flex flex-col lg:block"
      style={{ backgroundImage: 'linear-gradient(180deg, #F7E9FF 0%, #FCEDFF 100%)' }}
    >
      
      {/* 1. Desktop Image Container (Width Adjusted to 60%) */}
      {/* Width ko wapas 60% kar diya hai, aur text ka max-width hata diya hai. */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[60%] text-right">
        <img 
          src={heroImage} 
          alt="Students with books" 
          className="h-full object-cover max-w-full ml-auto" 
          style={{ marginTop: '-50px' }} // 50px lift-up rakha hai
        />
      </div>

      {/* 2. Content (Text area ko poori width di hai taaki woh ek line mein fit ho) */}
      <div 
        // Mobile Layout: full width, flex-col, text-center.
        // Desktop Layout: max-w-[600px] hata diya hai. Ab yeh container image ke bahar tak poora space lega.
        className="hero-content w-full px-6 text-center lg:text-left lg:p-0 
                   lg:absolute lg:top-[8%] lg:left-0 lg:ml-[50px] lg:z-20 lg:max-w-[700px]"
      >
        
        {/* Hero Title: leading-none for minimal spacing, aur font size 4rem (64px) rakha hai. */}
        <h1 
          className="font-['Poppins'] font-bold mb-4 leading-none text-4xl sm:text-5xl lg:text-[4rem]"
          style={{ color: primaryTextColor }}
        >
          A place where tradition 
        </h1>

        {/* Hero Subtitle */}
        <h2 
          className="font-['Poppins'] font-medium mb-4 leading-[1.2] text-3xl sm:text-4xl lg:text-[3.8rem]"
          style={{ color: secondaryTextColor }}
        >
          inspires learning and <br />
          learning inspires <br />
          success.
        </h2>

        {/* Hero Description */}
        <p 
          className="font-['Poppins'] text-lg lg:text-[2rem] font-normal mt-6 mb-8"
          style={{ color: descColor }}
        >
          Where Curiosity Becomes Knowledge
        </p>

        {/* Hero Brands */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 lg:gap-10 mt-6 mb-8">
          {heroBrands.map(([name, icon], index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 font-['Poppins'] text-base lg:text-lg font-semibold"
              style={{ color: descColor }}
            >
              <img src={icon} alt={name} className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>{name}</span>
            </div>
          ))}
        </div>

        {/* Hero Buttons */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
          <a 
            href="#" 
            className="flex items-center justify-center gap-2 font-['Poppins'] text-base font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out w-full sm:w-auto"
            style={{ backgroundColor: schoolRed, color: '#fff' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = schoolRedHover}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = schoolRed}
          >
            Book Now
            <img src={bookNowIcon} alt="Book Now Icon" className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="flex items-center justify-center gap-2 font-['Poppins'] text-base font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out w-full sm:w-auto"
            style={{ color: descColor, borderColor: descColor, border: '1px solid' }}
          >
            <img src={downloadIcon} alt="Download Icon" className="w-5 h-5" />
            Download Brochure
          </a>
        </div>
      </div>
      
      {/* 3. Mobile Image (Completely Hidden - lg:hidden) */}
      <div className="lg:hidden">
         {/* Blank space to remove image and its placeholder space */}
      </div>

    </section>
  );
}

export default HeroSection;