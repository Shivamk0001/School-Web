import React from "react";

const CourseHero = () => {
  return (
    <section
      className="relative overflow-hidden py-10 px-8"
      style={{
        background: "linear-gradient(225deg, #FCE3FF 0%, #E3E3FF 100%)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between lg:space-x-28 text-black">
        
        {/* Left Side */}
        <div className="text-center md:text-left flex-shrink-0">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-[#D600C0]">Boost up</span>
            <br />
            your learning
          </h1>

          {/* Rating */}
          <div className="mb-6">
            <p className="text-2xl md:text-3xl font-bold text-[#0056D2]">
              4.57 average rating
            </p><br />
            <div className="flex items-center justify-center md:justify-start space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#FFD700] text-lg">
                  ★
                </span>
              ))}
              <p className="text-base text-gray-700 ml-2">
                192,606 learner reviews
              </p> 
            </div>
            <p className="text-2xl text-gray-800">
              Powered by{" "}
              <span className=" text-3xl font-semibold text-[#D600C0]">Carmelite</span>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-center md:text-left mt-12 md:mt-0 flex-shrink">
          <p className="max-w-xl text-lg md:text-xl mb-10 leading-relaxed text-gray-800">
            Take your career further. Discover 1400+ courses from top universities and master
            in-demand skills across marketing, tech, business, cybersecurity and more.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-[#E6007A] text-white font-semibold text-lg py-4 px-10 rounded-md shadow hover:bg-[#cc006d] transition duration-300">
              Get Unlimited Learning
            </button>
            <button className="bg-transparent text-[#E6007A] border border-[#E6007A] font-semibold text-lg py-4 px-10 rounded-md shadow hover:bg-gray-50 transition duration-300">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
