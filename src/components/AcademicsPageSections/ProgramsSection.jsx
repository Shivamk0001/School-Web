import React from 'react';
import image1 from '../../assests/program-library.png';
import image2 from '../../assests/program-sports.png';
import image3 from '../../assests/program-cheerleaders.png';
import image4 from '../../assests/program-yoga.png';
import image5 from '../../assests/program-class.png';
import image6 from '../../assests/program-presentation.png';

// Reusable component for each program card
function ProgramCard({ imageSrc, altText }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-56 object-cover"
      />
      <div className="px-4 py-4">
        <button className="bg-[#305A82] text-white font-medium text-base py-2.5 px-6 rounded-[5px] hover:bg-[#25466a] transition-colors duration-300 shadow-md">
          Learn More
        </button>
      </div>
    </div>
  );
}

function ProgramsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#F8E2FD] to-[#E2D8FF]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProgramCard
            imageSrc={image1}
            altText="Student studying in the library"
          />
          <ProgramCard
            imageSrc={image2}
            altText="Students playing outdoors"
          />
          <ProgramCard
            imageSrc={image3}
            altText="Cheerleaders smiling"
          />
          <ProgramCard
            imageSrc={image4}
            altText="Students doing yoga"
          />
          <ProgramCard
            imageSrc={image5}
            altText="Group of students in a class"
          />
          <ProgramCard
            imageSrc={image6}
            altText="Student giving a presentation"
          />
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
