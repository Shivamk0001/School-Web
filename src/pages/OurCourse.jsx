// src/pages/OurCourse.jsx

import React from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import CourseHero from '../components/OurCoursePageSections/CourseHero.jsx';
import CourseListing from '../components/OurCoursePageSections/CourseListing.jsx';
import ContactSection from '../components/OurCoursePageSections/ContactSection.jsx';
import SubjectsSection from '../components/OurCoursePageSections/SubjectsSection.jsx';

const OurCoursePage = () => {
  return (
    <>
      <Header/>
       <CourseHero />
         <SubjectsSection />
        <CourseListing />
        <ContactSection />
      <Footer />
    </>
  );
};

export default OurCoursePage;