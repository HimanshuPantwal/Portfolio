import React from 'react';

const SkillCard = ({ skill, description }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:bg-gray-700 transition-colors duration-300">
      
      <h2 className="text-2xl font-bold text-gray-100 mb-2">{skill}</h2>


      <p className="text-gray-400">{description}</p>

      {/* Optional Icon (can be added if you want a visual element) */}
      {/* <div className="mt-4">
        <img src={icon} alt={skill} className="w-12 h-12" />
      </div> */}
    </div>
  );
};

export default SkillCard;
