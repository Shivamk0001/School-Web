import React, { useEffect, useRef, useState } from 'react';
// import './WhyChooseUs.css'; // DELETE THIS LINE
import expertFacultyIcon from '../../assests/AsianHat.png'; 
import modernFacilitiesIcon from '../../assests/City.png';
import industryConnectionsIcon from '../../assests/Organization.png'; 
import arrow from '../../assests/Frame 62.png';

const WhyChooseUs = () => {
    const counterRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    
    // Define colors and styles based on original CSS for Tailwind use
    const carmelRed = '#A11B22'; // Title red
    const primaryDark = '#1a1a1a'; // Title dark color
    const secondaryDark = '#4a4a4a'; // Description and card text dark color
    const statRed = '#D41010'; // Stats number and text color
    const cardBg = '#fcf9fc'; // Card section background

    // --- Count-Up Animation Logic (Kept EXACTLY as provided) ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    const counters = counterRef.current.querySelectorAll('.count-up-number');
                    counters.forEach(counter => {
                        const target = parseInt(counter.dataset.target, 10);
                        let current = 0;
                        const increment = target > 1000 ? Math.ceil(target / 200) : 1;
                        const updateCounter = () => {
                            if (current < target) {
                                current += increment;
                                if (current > target) {
                                    current = target;
                                }
                                counter.innerText = current.toLocaleString();
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target.toLocaleString() + (target > 10 ? '+' : '');
                            }
                        };
                        updateCounter();
                    });
                    setHasAnimated(true);
                    observer.unobserve(counterRef.current);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(counterRef.current);
            }
        };
    }, [hasAnimated]);
    // --- End of Count-Up Animation Logic ---


    const Card = ({ icon, title, description, isLast }) => (
        // Card: Removed border-r-4 and kept border-r-2 for a subtle line
        <div 
            className={`p-8 flex flex-col items-center text-center relative ${!isLast ? 'md:border-r-2 border-gray-300' : ''}`}
        >
            <img src={icon} alt={`${title} Icon`} className="w-16 h-16 mb-6" />
            <h3 className="text-2xl font-bold mb-2" style={{ color: primaryDark }}>
                {title}
            </h3>
            <p className="text-sm" style={{ color: secondaryDark }}>
                {description}
            </p>
            {/* Learn More Arrow Button */}
            <a href="#" className="flex items-center mt-8 p-0 transition-transform duration-200 ease-in-out hover:translate-x-1" style={{ color: carmelRed }}>
                <img src={arrow} alt="Learn more arrow" className="w-6 h-6 ml-2" />
            </a>
        </div>
    );

    return (
        // why-choose-us-section: Padding and background gradient.
        <section className="py-12 lg:py-24" style={{ backgroundImage: 'linear-gradient(180deg, #F7E9FF 0%, #FCEDFF 100%)' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* why-choose-us-header: Mobile center, Desktop space-between */}
                {/* FIX 1: Margin Bottom reduced from mb-16/20 to mb-8 */}
                <div className="text-center md:flex md:justify-between md:items-center md:text-left mb-8 lg:mb-10">
                    
                    {/* Title */}
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight" style={{ color: primaryDark }}>
                        The Reason <br className='hidden md:inline'/> to Choose{" "}
                        {/* carmel-text: Underline effect using inline span */}
                        <span className="relative inline-block text-red-700 group" style={{ color: carmelRed }}>
                            Carmel
                            <span 
                                className="absolute left-0 bottom-0 w-full h-1 rounded-full opacity-75" 
                                style={{ backgroundColor: carmelRed, transform: 'translateY(4px)' }} 
                            ></span>
                        </span>
                    </h2>
                    
                    <p 
        className="text-base font-semibold leading-relaxed mt-4 md:mt-0 md:ml-10 max-w-lg mx-auto md:mx-20" 
        style={{ color: secondaryDark }}
    >
        Choose us from world-class education, Exceptional facility and a commitment to your success and growth.
    </p>
                </div>

                {/* reason-cards-section: Background and padding */}
                {/* FIX 2: Bottom margin reduced from mb-16 to mb-10. Top/Bottom Padding for cards adjusted. */}
                <div className="bg-white p-6 lg:p-10 shadow-md mx-auto max-w-6xl mb-10" style={{ backgroundColor: cardBg }}>
                    
                    {/* cards-container: Responsive Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <Card 
                            icon={expertFacultyIcon} 
                            title="Expert Faculty"
                            description="Learn from highly qualified professors dedicated to guiding you toward academic and professional success."
                            isLast={false}
                        />

                        {/* Card 2 */}
                        <Card 
                            icon={modernFacilitiesIcon} 
                            title="Modern Facilities"
                            description="State-of-the-art classrooms, labs, and tech to enhance your learning experience and growth."
                            isLast={false}
                        />

                        {/* Card 3 (Last card has no right border) */}
                        <Card 
                            icon={industryConnectionsIcon} 
                            title="Industry-Connections"
                            description="Leverage strong industry partnerships for valuable internships & career opportunities post-graduation"
                            isLast={true}
                        />
                    </div>
                </div>

                {/* stats-container: Responsive Grid Layout for Counters */}
                <div ref={counterRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-0">
                    
                    {/* Stat 1: SCHOOLS */}
                    <div className="stat relative bg-white rounded-xl p-6 flex flex-col justify-center items-center h-32 lg:h-40" 
                        // Complex Gradient Border
                        style={{ border: '1px solid transparent', background: `linear-gradient(white, white) padding-box, linear-gradient(90deg, #ff00cc, #3333ff) border-box` }}
                    >
                        <span className="count-up-number text-4xl lg:text-5xl font-bold" data-target="100" style={{ color: statRed }}>0</span>
                        <p className="stat-text text-lg lg:text-xl font-semibold mt-1" style={{ color: statRed }}>SCHOOLS</p>
                    </div>

                    {/* Stat 2: CITIES */}
                    <div className="stat relative bg-white rounded-xl p-6 flex flex-col justify-center items-center h-32 lg:h-40" 
                        style={{ border: '1px solid transparent', background: `linear-gradient(white, white) padding-box, linear-gradient(90deg, #ff00cc, #3333ff) border-box` }}
                    >
                        <span className="count-up-number text-4xl lg:text-5xl font-bold" data-target="20" style={{ color: statRed }}>0</span>
                        <p className="stat-text text-lg lg:text-xl font-semibold mt-1" style={{ color: statRed }}>CITIES</p>
                    </div>

                    {/* Stat 3: TEACHERS */}
                    <div className="stat relative bg-white rounded-xl p-6 flex flex-col justify-center items-center h-32 lg:h-40" 
                        style={{ border: '1px solid transparent', background: `linear-gradient(white, white) padding-box, linear-gradient(90deg, #ff00cc, #3333ff) border-box` }}
                    >
                        <span className="count-up-number text-4xl lg:text-5xl font-bold" data-target="700" style={{ color: statRed }}>0</span>
                        <p className="stat-text text-lg lg:text-xl font-semibold mt-1" style={{ color: statRed }}>TEACHERS</p>
                    </div>

                    {/* Stat 4: STUDENTS */}
                    <div className="stat relative bg-white rounded-xl p-6 flex flex-col justify-center items-center h-32 lg:h-40" 
                        style={{ border: '1px solid transparent', background: `linear-gradient(white, white) padding-box, linear-gradient(90deg, #ff00cc, #3333ff) border-box` }}
                    >
                        <span className="count-up-number text-4xl lg:text-5xl font-bold" data-target="65000" style={{ color: statRed }}>0</span>
                        <p className="stat-text text-lg lg:text-xl font-semibold mt-1" style={{ color: statRed }}>STUDENTS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;