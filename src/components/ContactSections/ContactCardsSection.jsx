import React from "react";

// Inline SVG components for cleaner, non-emoji icons
const PhoneIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-phone"
  >
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
             19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2
             0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84
             0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09
             9.91a16 16 0 0 0 6 6l1.27-1.27a2
             2 0 0 1 2.11-.45 12.84 12.84
             0 0 0 2.81.7A2 2 0 0 1
             22 16.92z"
    />
  </svg>
);

const MailIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-mail"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path
      d="m22 7-8.97 5.7a1.94 1.94
             0 0 1-2.06 0L2 7"
    />
  </svg>
);

const MapPinIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-map-pin"
  >
    <path
      d="M20 10c0 6-8 12-8 12s-8-6-8-12
             a8 8 0 0 1 16 0Z"
    />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-clock"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const UserIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-user"
  >
    <path
      d="M19 21v-2a4 4 0 0 0-4-4H9a4
             4 0 0 0-4 4v2"
    />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MessageSquareIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-message-square"
  >
    <path
      d="M21 15a2 2 0 0 1-2 2H7l-4
             4V5a2 2 0 0 1 2-2h14a2 2
             0 0 1 2 2z"
    />
  </svg>
);

const HashIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-hash"
  >
    <line x1="4" x2="20" y1="9" y2="9" />
    <line x1="4" x2="20" y1="15" y2="15" />
    <line x1="10" x2="8" y1="3" y2="21" />
    <line x1="16" x2="14" y1="3" y2="21" />
  </svg>
);

// Simple input component for the form
const FormInput = ({ placeholder, type = "text", readOnly = false, value }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full p-2 rounded border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-[#192752]
               transition duration-150"
    readOnly={readOnly}
    value={value}
  />
);

const ContactCardsSection = () => {
  // Common styling for the icon groups in the form
  const iconStyle = "w-5 h-5 text-gray-700 mr-2";

  // Captcha value (static for display)
  const captchaValue = "pXtXpc";

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card: Contact Info */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#192752] text-white text-center py-4 font-extrabold text-xl">
            Get In Touch With Us
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-300 text-center">
            {/* Phone */}
            <div className="p-8 flex flex-col items-center justify-center">
              <PhoneIcon className="w-8 h-8 mb-2 text-black" />
              <h4 className="font-bold text-lg text-gray-900 mb-1">
                Phone Number
              </h4>
              <p className="text-gray-600">+91 7683912451</p>
            </div>

            {/* Email */}
            <div className="p-8 flex flex-col items-center justify-center">
              <MailIcon className="w-8 h-8 mb-2 text-black" />
              <h4 className="font-bold text-lg text-gray-900 mb-1">Email</h4>
              <p className="text-gray-600">accounts22@gmail.com</p>
              <p className="text-gray-600">info32@gmail.com</p>
            </div>

            {/* Location */}
            <div className="p-8 flex flex-col items-center justify-center">
              <MapPinIcon className="w-8 h-8 mb-2 text-black" />
              <h4 className="font-bold text-lg text-gray-900 mb-1">Location</h4>
              <p className="text-gray-600">Gorakhpur, NSG Junction</p>
              <p className="text-gray-600">Sec 36A, Delhi 752054</p>
            </div>

            {/* Working Hours */}
            <div className="p-8 flex flex-col items-center justify-center">
              <ClockIcon className="w-8 h-8 mb-2 text-black" />
              <h4 className="font-bold text-lg text-gray-900 mb-1">
                Working Hours
              </h4>
              <p className="text-gray-600">8:00 AM to 4:00 PM</p>
              <p className="text-gray-600">(Monday to Saturday)</p>
            </div>
          </div>
        </div>

        {/* Right Card: Contact Form */}
        <div className="bg-[#E0E0E0] shadow-xl rounded-none overflow-hidden border border-[#BDBDBD] w-full max-w-2xl mx-auto">
          {/* Header */}
          <div className="bg-[#192752] text-white text-center py-4 font-bold text-lg">
            Contact Us
          </div>

          {/* Form */}
          <form className="p-8 space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center border border-gray-300 bg-white h-10 px-2">
                <UserIcon className="w-5 h-5 text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="  First Name"
                  className="w-full h-full focus:outline-none placeholder-black font-semibold"
                />
              </div>
              <div className="flex items-center border border-gray-300 bg-white h-10 px-2">
                <UserIcon className="w-5 h-5 text-gray-600 mr-2" />
                <input
                  type="text"
                  placeholder="  Last Name"
                  className="w-full h-full focus:outline-none placeholder-black font-semibold"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center border border-gray-300 bg-white h-10 px-2">
                <PhoneIcon className="w-5 h-5 text-gray-600 mr-2" />
                <input
                  type="tel"
                  placeholder="  Mobile No"
                  className="w-full h-full focus:outline-none placeholder-black font-semibold"
                />
              </div>
              <div className="flex items-center border border-gray-300 bg-white h-10 px-2">
                <MailIcon className="w-5 h-5 text-gray-600 mr-2" />
                <input
                  type="email"
                  placeholder="  Email ID"
                  className="w-full h-full focus:outline-none placeholder-black font-semibold"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex items-start border border-gray-300 bg-white p-2">
              <MessageSquareIcon className="w-5 h-5 text-gray-600 mr-2 mt-1" />
              <textarea
                rows="5"
                placeholder="  Message"
                className="w-full focus:outline-none placeholder-black font-semibold"
              ></textarea>
            </div>

            {/* Captcha */}
            <div>
              <label className="block text-black font-semibold mb-2">
                Please type the characters
              </label>
              <input
                type="text"
                className="w-full h-10 p-2 bg-white border border-gray-300"
              />
              <div className="mt-3">
                <div className="inline-block border border-gray-400 bg-white px-4 py-2">
                  <span className="text-xl font-serif tracking-widest text-black italic">
                    p t X Z p c
                  </span>
                </div>
                <p className="text-sm text-black mt-1">Captcha</p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="bg-[#192752] text-white px-8 py-2 font-semibold hover:bg-opacity-90"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCardsSection;
