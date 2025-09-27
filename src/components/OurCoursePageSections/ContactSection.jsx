import React from "react";
import locationIcon from "../../assests/Location.png";
import phoneIcon from "../../assests/Phone.png";
import emailIcon from "../../assests/Email.png";

const ContactSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen p-6 sm:p-10 bg-gradient-to-br from-[#FFCCFB] to-[#B3A9FF]">
      <div className="relative max-w-5xl w-full">
        {/* Get in Touch Box (Back Card shifted right) */}
        <div className="bg-[#FFEAFE] p-8 sm:p-12 rounded-xl shadow-xl w-full sm:w-[90%] ml-auto">
          <h3 className="text-2xl font-bold mb-5 text-gray-900 text-center">
            Get in Touch</h3>
          <p className="text-gray-600 text-base mb-8 text-center">
            Feel free to get in touch us.
          </p>

          <form className="space-y-5 max-w-md flex flex-col mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800 placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800 placeholder-gray-400"
            />
            <textarea
              placeholder="Post your query"
              rows="4"
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none text-gray-800 placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#FF007F] text-white font-bold py-3 px-4 rounded-md shadow-md hover:bg-pink-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Box (Front Card, Overlapping from left) */}
        <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-12 bg-[#FF007F] text-white p-8 sm:p-10 w-72 rounded-xl shadow-2xl z-10">
          <h3 className="text-xl font-bold mb-8">Contact Us</h3>

          <div className="flex items-start mb-6">
            <img
              src={locationIcon}
              alt="Location"
              className="w-5 h-5 mr-3 mt-1"
            />
            <div>
              <p className="text-sm font-semibold mb-1">Visit us</p>
              <p className="text-sm leading-relaxed">
                Gorakhpur, NSG Junction <br />
                Sec 36A, Delhi 752054
              </p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <img src={emailIcon} alt="Email" className="w-5 h-5 mr-3 mt-1" />
            <div>
              <p className="text-sm font-semibold mb-1">Email us</p>
              <p className="text-sm">carmelschool2004@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start">
            <img src={phoneIcon} alt="Phone" className="w-5 h-5 mr-3 mt-1" />
            <div>
              <p className="text-sm font-semibold mb-1">Call us</p>
              <p className="text-sm">+91 7683912451</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
