import React from 'react';
import CourseCard from './CourseCard';
import image from '../../assests/card4.png';

const courses = [
  {
    image: image,
    title: '90 Days of Course: From Figma to DevSkill Complete Tutorials',
    instructor: 'Dr. Harsh Agrawal, Dev Lead Instructor',
    rating: 4.5,
    reviews: '1,12,525',
    isBestseller: true,
    price: '1,999'
  },
  {
    image: image,
    title: '90 Days of Course: From Figma to DevSkill Complete Tutorials',
    instructor: 'Dr. Harsh Agrawal, Dev Lead Instructor',
    rating: 4.5,
    reviews: '1,12,525',
    isBestseller: true,
    price: '1,999'
  },
  {
    image: image,
    title: '90 Days of Course: From Figma to DevSkill Complete Tutorials',
    instructor: 'Dr. Harsh Agrawal, Dev Lead Instructor',
    rating: 4.5,
    reviews: '1,12,525',
    isBestseller: true,
    price: '1,999'
  }
];

const CourseListing = () => {
  return (
    <section 
      className="bg-gradient-to-r from-[#B3A9FF] to-[#FFCCFB] p-8 min-h-screen"
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-wrap gap-6 md:gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              title={course.title}
              instructor={course.instructor}
              rating={course.rating}
              reviews={course.reviews}
              isBestseller={course.isBestseller}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseListing;