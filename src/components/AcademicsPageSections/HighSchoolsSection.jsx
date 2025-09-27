import React from 'react';
import classroomImage from '../../assests/classroom3.png';
import graduationImage from '../../assests/graduation3.png';
import studentsWritingImage from '../../assests/students-writing3.png';

function HighSchoolCard({ imageSrc, altText }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

function HighSchoolsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#EFDCF8] to-[#E8DBFF]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#a51834] mb-12">
          Our High Schools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HighSchoolCard
            imageSrc={classroomImage}
            altText="Students in a classroom"
          />
          <HighSchoolCard
            imageSrc={graduationImage}
            altText="Two students with diplomas"
          />
          <HighSchoolCard
            imageSrc={studentsWritingImage}
            altText="Students writing on a blackboard"
          />
        </div>
      </div>
    </section>
  );
}

export default HighSchoolsSection;