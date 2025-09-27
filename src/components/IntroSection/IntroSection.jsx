import React from 'react';
// import './IntroSection.css'; // DELETE THIS LINE
import introMediaPoster from '../../assests/Frame92.png'; 

// Icon for the checkmarks (using a simple SVG)
const CheckIcon = () => (
    // check-icon styling: w-6 h-6, rounded-full, bg-white, color-black, p-1
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-white text-black flex-shrink-0 p-1 mr-2.5"
    >
        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.05l-7.5 11.25a.75.75 0 0 1-1.154.144l-3.75-3.75a.75.75 0 0 1 1.06-1.06l3.19 3.189 6.906-10.36a.75.75 0 0 1 1.05-.208Z" clipRule="evenodd" />
    </svg>
);

const IntroSection = () => {
    // Define colors for Tailwind use
    const deepRed = '#A02020'; // Main background and button text color
    const schoolRedHover = '#88122a'; 
    const white = '#ffffff';

    // Text content
    const schoolName = "St. Carmel School";
    const tagline = "A Progressive International School in Hyderabad";

    const mainText = "Offering both CBSE and Cambridge pathways, Suchitra Academy blends academic excellence with creativity, values, and student voice. We empower learners through holistic education and future-ready experiences.";

    const features = [
        "Ranked Among India's Top 10 Schools (EducationWorld)",
        "Dual Curriculum: CBSE & Cambridge",
        "Strong Focus on Sports, Arts & Life Skills",
        "Project-Based & Experiential Learning",
        "Makerspace & State-of-the-Art Media Studio",
        "Safe, Inclusive & Nurturing Environment"
    ];

    return (
        // st-carmel-intro-section: Background color, full width, auto margin for max-width
        <section className="w-full text-white" style={{ backgroundColor: deepRed }}>
            
            {/* intro-content-wrapper: Centered max-width container with padding */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-10">
                
                {/* intro-title: Responsive text size and margin */}
                <h1 className="font-['Poppins'] font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-8 pt-5 leading-tight">
                    <span className="font-extrabold">{schoolName}</span>: {tagline}
                </h1>

                {/* intro-main-flex: Desktop flex layout, Mobile stacks vertically */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
                    
                    {/* Left side: Media Container (Image) */}
                    <div className="w-full lg:w-[45%] rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                            src={introMediaPoster} 
                            alt="Students in a classroom" 
                            className="w-full h-auto block rounded-lg pt-4" // padding-top: 15px is pt-4
                        />
                    </div>

                    {/* Right side: Text and Features */}
                    <div className="flex-1 pt-2"> {/* padding-top: 8px is pt-2 */}
                        
                        {/* Main Description */}
                        <p className="text-lg lg:text-xl leading-relaxed mb-6 font-light">
                            {mainText}
                        </p>

                        {/* Features List */}
                        <ul className="list-none p-0 m-0 mb-8 space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start text-lg font-medium">
                                    <CheckIcon />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Read More Button */}
                        <button 
                            className="bg-white text-base font-semibold py-3 px-6 rounded-full cursor-pointer transition-colors duration-300 hover:bg-gray-100 uppercase shadow-md"
                            style={{ color: deepRed }} // Deep red text color
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;