// AdmissionStepCard.jsx
import React from 'react';

const AdmissionStepCard = ({ number, title, description, numberColor }) => {
  return (
    <div className="h-full">
      <div
        className={`
          rounded-[10px]
          bg-white
          shadow-xl shadow-gray-300/50
          p-5
          h-full
          min-h-[250px]
          max-w-md
          mx-auto
          flex flex-col
        `}
      >
        {/* Number */}
        <div className={`text-2xl font-bold ${numberColor} mb-3`}>
          {number}—
        </div>

        {/* Title */}
        <h4 className="text-base font-semibold text-[#fb0303] mb-4 leading-snug">
          {title}
        </h4>

        {/* Description */}
        <ul className="text-[14px] text-[#555] leading-relaxed list-disc pl-5 space-y-1 flex-1">
          {description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdmissionStepCard;
