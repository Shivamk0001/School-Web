import React from 'react';

const CourseCard = ({ image, title, instructor, rating, reviews, isBestseller }) => {
  return (
    <div className="relative w-[340px] md:w-[320px] lg:w-[300px] xl:w-[360px] h-[450px] bg-white rounded-3xl shadow-xl overflow-hidden p-2">
      <div className="relative w-full h-[220px] rounded-2xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-between h-[calc(100%-220px)]">
        <div>
          <h2 className="text-xl font-bold mb-1 text-gray-800 leading-tight">{title}</h2>
          <p className="text-sm text-gray-500 mb-2">{instructor}</p>
          <div className="flex items-center space-x-1 mb-2">
            <span className="text-sm font-semibold text-gray-700">{rating}</span>
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
        </div>
        <div>
          {isBestseller && (
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mt-4">
              Bestseller
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;