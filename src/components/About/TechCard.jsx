import React from 'react';

const TechCard = ({ name, url, description, link }) => {
  return (
    <div className="relative bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl overflow-hidden">
      <img
        src={url}
        alt={`${name} logo`}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-5 bg-gradient-to-b from-gray-800 to-gray-900 text-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-3 hover:text-white transition-colors duration-300">
            {name}
          </h2>
        </a>
        <p className="text-gray-300 text-sm font-light leading-relaxed">
          {description}
        </p>
      </div>
      {/* Animation Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-600 via-transparent to-transparent opacity-20 hover:opacity-40 transition-opacity duration-500"></div>
    </div>
  );
};

export default TechCard;
