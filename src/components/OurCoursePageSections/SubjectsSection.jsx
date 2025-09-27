import React from "react";
import mbaImage from "../../assests/mba-course.png"; // Make sure to have this image in your assets folder

const SubjectsSection = () => {
  return (
    <section
      className="py-16 relative"
      style={{
        background: "linear-gradient(180deg, #FDF7FF 0%, #E6F0FF 100%)", // Light gradient background
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16 relative">
          Explore top{" "}
          <span className="relative inline-block">
            subjects
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-black"></span>
          </span>
        </h2>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12 max-w-6xl mx-auto border border-gray-100">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16">
            {/* Text Content */}
            <div className="flex-1 text-gray-800">
              <h3 className="text-3xl font-extrabold mb-4">
                Business & Management
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Boss It In business with our specialist upskilling courses,
                industry certifications and high-flying degrees.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                No matter what your goals are, leading experts from the likes of
                Accenture, AWS and Deakin University will guide you to achieve
                them. From data analytics to digital marketing, start learning
                from the best.
              </p>
              <div className="relative pl-6 mb-8">
                <span className="absolute left-0 top-0 h-full w-1 bg-fuchsia-500 rounded-full"></span>
                <p className="text-lg italic font-medium">
                  The course was beautifully conceptualised, and well presented.
                  The videos were lucid, clear, articulate and informative.
                </p>
              </div>
              <button className="bg-red-500 text-white font-semibold py-3 px-8 rounded-[10px] shadow-lg hover:bg-red-600 transition duration-300 text-lg">
                Explore Courses
              </button>
            </div>

            {/* Image Card */}
            <div className="flex-shrink-0 w-full lg:w-96 relative">
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <img
                  src={mbaImage}
                  alt="Master of Business Administration"
                  className="rounded-xl w-full h-auto object-cover mb-4"
                />{" "}
                <br />
                <div className="flex justify-between items-center px-2">
                  <p className="text-lg font-semibold text-gray-900">
                    Master of Business Administration
                  </p>
                  <br />
                  <br />
                  <br /> <br />
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 transition duration-200">
                    <svg
                      className="w-5 h-5 text-gray-600 transform rotate-320"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
