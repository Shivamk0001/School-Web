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
        <div className="bg-[#EEEEEE] shadow-xl rounded-xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#192752] text-white text-center py-4 font-extrabold text-xl">
            Contact Us
          </div>

          {/* Form */}
          <form className="p-6 space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center text-gray-700 mb-1">
                  <UserIcon className={iconStyle} />
                  <label className="text-sm">First Name</label>
                </div>
                <FormInput placeholder=".........." />
              </div>
              <div>
                <div className="flex items-center text-gray-700 mb-1">
                  <UserIcon className={iconStyle} />
                  <label className="text-sm">Last Name</label>
                </div>
                <FormInput placeholder="........." />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center text-gray-700 mb-1">
                  <PhoneIcon className={iconStyle} />
                  <label className="text-sm">Mobile No</label>
                </div>
                <FormInput placeholder=".........." />
              </div>
              <div>
                <div className="flex items-center text-gray-700 mb-1">
                  <MailIcon className={iconStyle} />
                  <label className="text-sm">Email ID</label>
                </div>
                <FormInput placeholder="............" type="email" />
              </div>
            </div>

            {/* Message Area */}
            <div>
              <div className="flex items-start text-gray-700 mb-1">
                <MessageSquareIcon className={iconStyle} />
                <label className="text-sm">Message</label>
              </div>
              <textarea
                placeholder="................."
                rows="4"
                className="w-full p-2 rounded border border-gray-300
                           focus:outline-none focus:ring-2 focus:ring-[#192752]
                           transition duration-150"
              ></textarea>
            </div>

            {/* Captcha */}
            <div className="pt-2">
              <label className="text-gray-700 text-sm font-semibold block mb-1">
                Please type the characters
              </label>
              <div className="flex items-center text-gray-700 mb-1">
              </div>
              <input
                type="text"
                value={captchaValue}
                className="w-full p-2 rounded border border-gray-300
                           bg-white text-gray-900"
              />
              <p className="text-sm mt-1 text-gray-500">Captcha</p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-[#192752] text-white px-8 py-3 rounded-lg
                           font-bold hover:bg-opacity-90 transition duration-200
                           shadow-md hover:shadow-lg"
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
