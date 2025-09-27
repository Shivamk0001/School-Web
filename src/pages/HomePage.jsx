
import React from 'react';
import Header from '../components/Header/Header'; 
import HeroSection from '../components/HeroSection/HeroSection'; 
import AboutSection from '../components/AboutSection/AboutSection';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Amenities from '../components/Amenities/Amenities';
import IntroSection from '../components/IntroSection/IntroSection';
import Facilities from '../components/Facilities/Facilities';
import ImageStrip from '../components/Footer/ImageStrip';
import Footer from '../components/Footer/Footer';
function HomePage() {
  return (
    <>
      <Header />
      <HeroSection/>
      <AboutSection/> 
      <WhyChooseUs/>
      <Amenities/> 
      <IntroSection/> 
      <Facilities/> 
      <ImageStrip /> 
      <Footer /> 
    </>
  );
}

export default HomePage;