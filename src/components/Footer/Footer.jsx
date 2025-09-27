import React from 'react';
import schoolLogo from '../../assests/Rectangle 4.png';

// Imports for the contact icons
import mapIconImg from '../../assests/Location.png';
import phoneIconImg from '../../assests/Phone.png';
import emailIconImg from '../../assests/Email.png';
import whatsappIconImg from '../../assests/whatsapp.png';
import timingsIconImg from '../../assests/Clock.png';
import followIconImg from '../../assests/userAccount.png'; 

// Imports for the social icons
import googleIconImg from '../../assests/Clippathgroup.png';
import amazonIconImg from '../../assests/vector.png';
import adobeIconImg from '../../assests/GoogleAds.png';
import microsoftIconImg from '../../assests/Microsoft.png';

// Component for the title icons
const IconImage = ({ src, alt = "icon" }) => (
    <img src={src} alt={alt} className="w-[18px] h-[18px] mr-2 object-contain" />
);

// Component for the Social Icons
const SocialIconImage = ({ src, alt }) => (
    // social-icon-box: w-9 h-9, border, rounded, bg-white, center items
    <div className="w-9 h-9 border border-gray-300 rounded bg-white flex items-center justify-center cursor-pointer overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-contain p-1" />
    </div>
);


const Footer = () => {
    // Define the primary red color for the column titles
    const columnTitleRed = '#8c1e22'; 
    
    return (
        // school-footer: Light gray background
        <footer className="bg-gray-50 text-gray-700 font-['Arial',_sans-serif]">
            
          
            {/* footer-main-content: Centered container, Mobile stack (flex-col), Desktop side-by-side (md:flex-row) */}
            <div className="max-w-7xl mx-auto py-8 lg:py-10 px-4 flex flex-col md:flex-row md:flex-nowrap items-start">
                
                {/* Logo Section: Mobile full width, Desktop fixed size (300px) */}
                <div className="w-full md:w-auto md:flex-shrink-0 md:basis-[300px] md:pr-10 mb-8 md:mb-0">
                    <img src={schoolLogo} alt="St. Carmel School Logo" className="w-full max-w-[180px] h-auto" /> 
                </div>

                {/* Contact and Links Grid: Responsive Grid/Flex layout */}
                {/* Mobile: Columns stack | Tablet (sm:): Two columns per row | Desktop (md:): Three columns fixed */}
                <div className="flex-1 flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap gap-x-8 lg:gap-x-10 gap-y-8 w-full">
                    
                    {/* 1. Visit Us & Follow Us */}
                    <div className="w-full sm:w-[calc(50%-1rem)] md:w-1/3 max-w-none md:max-w-[250px] mb-4 md:mb-0">
                        <h4 className="flex items-center text-sm font-bold mb-7 mt-0" style={{ color: columnTitleRed }}><IconImage src={mapIconImg} alt="Map Pin" /> Visit us</h4>
                        <p className="text-sm m-0 leading-relaxed text-gray-700">
                            Gorakhpur, NSG Junction<br />
                            Sec 38A, Delhi 752054
                        </p>
                        <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-blue-500 hover:underline mt-4 mb-4">
                            View Directions
                        </a>
                        
                        <h4 className="flex items-center text-sm font-bold mb-2 mt-4 lg:mt-5" style={{ color: columnTitleRed }}><IconImage src={followIconImg} alt="Follow" /> Follow us</h4>
                        <div className="flex gap-2">
                            <SocialIconImage src={googleIconImg} alt="Google" />
                            <SocialIconImage src={amazonIconImg} alt="Amazon" />
                            <SocialIconImage src={adobeIconImg} alt="Adobe" />
                            <SocialIconImage src={microsoftIconImg} alt="Microsoft" />
                        </div>
                    </div>
                    
                    {/* 2. Call Us & Timings */}
                    <div className="w-full sm:w-[calc(50%-1rem)] md:w-1/3 max-w-none md:max-w-[250px] mb-4 md:mb-0">
                        <h4 className="flex items-center text-sm font-bold mb-7 mt-0" style={{ color: columnTitleRed }}><IconImage src={phoneIconImg} alt="Phone" /> Call us</h4>
                        <p className="font-bold text-sm text-gray-700 mt-5 mb-1">Admission Office</p>
                        <p className="text-sm m-0 leading-relaxed">76839 12451</p>
                        <p className="text-sm m-0 leading-relaxed">82550 93259</p>

                        <h4 className="flex items-center text-sm font-bold mt-5 mb-2" style={{ color: columnTitleRed }}><IconImage src={timingsIconImg} alt="Clock" /> Timings:</h4>
                        <p className="text-sm m-0 leading-relaxed">
                            8:00 AM to 4:00 PM (Monday to Saturday)
                        </p>
                    </div>
                    
                    {/* 3. Email Us & WhatsApp */}
                    <div className="w-full sm:w-[calc(50%-1rem)] md:w-1/3 max-w-none md:max-w-[250px] mb-4 md:mb-0">
                        <h4 className="flex items-center text-sm font-bold mb-7 mt-0" style={{ color: columnTitleRed }}><IconImage src={emailIconImg} alt="Envelope" /> Email us</h4>
                        
                        <p className="font-bold text-sm text-gray-700 mt-5 mb-1">For Admission</p>
                        <p className="text-sm m-0 leading-relaxed">carmelschool2004@gmail.com</p>

                        <p className="font-bold text-sm text-gray-700 mt-5 mb-1">For Accounts:</p>
                        <p className="text-sm m-0 leading-relaxed">accounts22@gmail.com</p>

                        <p className="font-bold text-sm text-gray-700 mt-5 mb-1">For Queries:</p>
                        <p className="text-sm m-0 leading-relaxed">info32@gmail.com</p>

                        <h4 className="flex items-center text-sm font-bold mt-8 mb-2" style={{ color: columnTitleRed }}><IconImage src={whatsappIconImg} alt="WhatsApp" /> Whatsapp</h4>
                        <p className="text-sm m-0 leading-relaxed">+91 7683912451</p>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="py-5 text-center text-xs text-gray-500 border-t border-gray-200">
                © 2025 St. Carmel School. ALL RIGHTS RESERVED
            </div>
        </footer>
    );
};

export default Footer;