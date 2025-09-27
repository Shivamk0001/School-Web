import React from 'react';
import yourHeroImage from '../../assests/Contact.png';

const HeroSection = () => {
    return (
        <div className="relative pt-0 w-full flex justify-center overflow-hidden">
            <img
                src={yourHeroImage}
                alt="Contact Hero"
                className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
    );
};

export default HeroSection;
