// File: src/components/ImageStrip.jsx (Recommended path)

import React from 'react';
import imageStripSrc from '../../assests/imagebeforefooter.png'; 

const ImageStrip = () => {
    return (
        // Top Image Strip
        <div className="w-full">
            <img 
                src={imageStripSrc} 
                alt="Students walking in school uniform - Transition image before footer" 
                className="w-full block" 
            />
        </div>
    );
};

export default ImageStrip;