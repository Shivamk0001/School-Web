import React from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import HeroSection from '../components/ContactSections/HeroSection.jsx';
import ContactInfoSection from '../components/ContactSections/ContactInfoSection.jsx';
import ContactCardsSection from '../components/ContactSections/ContactCardsSection.jsx';
// import GraduationSection from '../components/ContactSections/GraduationSection.jsx';

const ContactPage = () => {
    return (
        <div className="font-inter bg-gray-50 antialiased leading-relaxed text-gray-800">
            <Header />
            <main>
                <HeroSection />
                <ContactInfoSection />
                <ContactCardsSection />
                {/* <GraduationSection /> */}
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
