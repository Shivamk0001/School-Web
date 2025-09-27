import React from 'react';
// import './Facilities.css'; // DELETE THIS LINE

// Import your facility images
import secureMonitoringImg from '../../assests/Frame115.png'; 
import digitalLearningImg from '../../assests/Frame116.png'; 
import centralLibraryImg from '../../assests/Frame117.png'; 

const facilitiesData = [
    {
        title: "Secure Monitoring",
        image: secureMonitoringImg,
        alt: "CCTV in operation sign"
    },
    {
        title: "Digital Learning",
        image: digitalLearningImg,
        alt: "Teacher using a smart board for digital learning"
    },
    {
        title: "Central Library",
        image: centralLibraryImg,
        alt: "Modern Central Library with students studying"
    },
];

const Facilities = () => {
    // Define the deep red color from the title bar
    const deepRed = '#A02020';
    
    return (
        // facilities-section: Padding, background gradient.
        <section className="py-12 px-6 lg:py-20 text-center" style={{ backgroundImage: 'linear-gradient(180deg, #F7E9FF 0%, #FCEDFF 100%)' }}>
            
            {/* facilities-title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-12 lg:mb-16 inline-block">
                Modern Facilities for Smarter Learning
            </h2>
            
            {/* facilities-grid: Desktop: flex, center, gap. Mobile: wrap. */}
            {/* Tailwind's grid is better for uniform items, but flex works too. Using responsive flex as per your CSS logic: */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-5 lg:gap-6 max-w-6xl mx-auto">
                {facilitiesData.map((facility, index) => (
                    // facility-card: Responsive sizing, hover effect.
                    <div 
                        key={index}
                        // Default (Mobile): w-full, flex: 1 1 100% | md: flex: 1 1 45% (Two per row) | lg: max-w-[500px]
                        className="w-full sm:w-[45%] lg:w-auto lg:max-w-[500px] flex-grow flex-shrink-0 
                                   bg-white rounded-lg overflow-hidden shadow-lg 
                                   transition duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:shadow-xl"
                    >
                        {/* Red Title Bar */}
                        <div className="card-title-bar text-white text-xl font-semibold py-4 px-2" style={{ backgroundColor: deepRed }}>
                            {facility.title}
                        </div>
                        
                        {/* Image Content Area */}
                        <div className="card-image-content">
                            <img 
                                src={facility.image} 
                                alt={facility.alt} 
                                // Image: Fixed height, object-cover
                                className="w-full h-52 object-cover block" // h-52 is approximately 208px (close to your 200px)
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Facilities;