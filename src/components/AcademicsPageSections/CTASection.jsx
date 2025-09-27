import React from 'react';

function CTASection() {
  return (
    <section className="bg-[#a51834] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We Prepare Students For Success In Life
        </h2><br />
        <button className="bg-white text-[#a51834] font-bold py-3 px-8 rounded-sm transition duration-300 hover:bg-gray-100">
          Connect Us
        </button>
      </div>
    </section>
  );
}

export default CTASection;