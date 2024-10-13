import React from 'react';
import SkillCard from './SkillCard';

const skills = [
  {
    skill: 'Web Development',
    description: 'Experienced in building responsive and interactive websites using HTML, CSS, JavaScript, and ReactJS.',
  },
  {
    skill: 'Data Structures & Algorithms',
    description: 'Proficient in implementing various data structures and algorithms to solve complex problems efficiently.',
  },
  {
    skill: 'Machine Learning',
    description: 'Understanding of ML concepts and experience in building models using Python and popular libraries like Scikit-learn.',
  },
  {
    skill: 'Backend Development',
    description: 'Understanding of Backend Framework of python called Django',
  },
];

function Services() {
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-[100vh] flex flex-col items-center py-12 px-4" id="services">
      
      <h1 className="text-4xl font-bold text-white mb-6" data-aos="fade-left" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
        <span className="text-5xl font-bold text-gray-100 tracking-wide hover:underline hover:decoration-blue-500 transition-all duration-300">
          Skills
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8" data-aos='fade-right' data-aos-duration="2000">
        {skills.map((skillItem, index) => (
          <SkillCard
            key={index}
            skill={skillItem.skill}
            description={skillItem.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
