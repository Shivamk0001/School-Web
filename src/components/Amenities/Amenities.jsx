import React from "react";

import classroomImg from "../../assests/Component2.png";
import playgroundImg from "../../assests/Component3.png";
import libraryImg from "../../assests/Component4.png";
import auditoriumImg from "../../assests/Component5.png";
import labImg from "../../assests/Component6.png";
import gardenImg from "../../assests/Component7.png";

const amenitiesData = [
  { img: classroomImg, alt: "Classroom" },
  { img: playgroundImg, alt: "Playground" },
  { img: libraryImg, alt: "Library" },
  { img: gardenImg, alt: "Garden" },
  { img: labImg, alt: "Lab" },
  { img: auditoriumImg, alt: "Auditorium" },
];

const Amenities = () => {
  // Title underline color: #00000033 (A light black/grey)
  const underlineColor = "#00000033";

  return (
    // school-amenities-section: Padding and background gradient.
    <section
      className="py-12 px-6 text-center"
      style={{
        backgroundImage: "linear-gradient(180deg, #F7E9FF 0%, #FCEDFF 100%)",
      }}
    >
      {/* school-amenities-title: Custom Underline effect using inline styles */}
      <h2
        className="text-4xl lg:text-5xl font-semibold mb-8 text-black inline-block pb-4"
        style={{ borderBottom: `3px solid ${underlineColor}` }} // Custom underline
      >
        School Amenities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {amenitiesData.map((amenity, index) => (
          // amenity-card: Hover effect, transition
          <div
            className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
           key={index}
          >
            <img
              src={amenity.img}
              alt={amenity.alt}
              className="w-full h-64 object-cover"
            />

          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
