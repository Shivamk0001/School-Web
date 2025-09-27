import React from "react";

const ContactInfoSection = () => {
  return (
    <div className="#F0F4F7 py-22 px-6 md:px-36">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Info */}
        <div className="space-y-10">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Visit Us:</h3>
            <p className="text-gray-700">Gorakhpur, NSG Junction<br/>Sec 36A, Delhi 752054</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Phone:</h3>
            <p className="text-gray-700">76839 12451<br/>82550 93259</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Mail us:</h3>
            <p className="text-gray-700">carmelschool2004@gmail.com</p>
          </div>
        </div>

        {/* Right Side - Google Map */}
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28014.303774556724!2d77.2929174!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3584c48b4f%3A0x3c8c29cf918b81f6!2sDelhi!5e0!3m2!1sen!2sin!4v1695739600000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default ContactInfoSection;
