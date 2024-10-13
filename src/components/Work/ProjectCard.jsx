import React, { useEffect, useRef } from 'react';

function ProjectCard({ name, description, Id, activeCardId, setActiveCardId, url, link }) {
  const divRef = useRef(null);

  const handleClickInside = () => {
    setActiveCardId(Id);
  };

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setActiveCardId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative w-[20rem] h-[15rem] m-4 overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer transform ${
        activeCardId === Id ? 'scale-110' : ''
      }`}
      ref={divRef}
      onClick={handleClickInside}
    >
      {/* Image */}
      <div className="w-full h-full relative">
        <img
          src={url}
          alt={`${name} project`}
          className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
          style={{ objectFit: 'cover' }} // Keeps image aspect ratio intact
        />
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center rounded-xl transition-all duration-500 ease-in-out transform ${
          activeCardId === Id ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Title */}
        <h1 className="text-white text-2xl font-bold mb-2">{name}</h1>

        {/* Description */}
        <p className="text-gray-300 text-center px-4">{description}</p>

        {/* View Button */}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg">
            View Project
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
