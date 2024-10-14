import React, { useState, useEffect } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('#home');

  const sections = ['#home', '#about', '#services', '#projects', '#contact'];

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(id);
  };

  useEffect(() => {
    const observerOptions = {
      root: null, 
      threshold: 0.6, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const section = document.querySelector(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.querySelector(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [sections]);

  return (
    <div className='w-full bg-[#111111] h-[4rem] transition-all duration-1000 text-[#8b8b8b] sticky top-0 z-20 shadow-md'>
      <nav className='h-full'>
        <ul className='h-full flex justify-end items-center pr-4 md:pr-8'>
          <li className='cursor-pointer hover:scale-110 duration-200 transition-all'>
            <a
              href='#home'
              className={`text-[0.85rem] md:text-[1rem] px-2 md:px-4 py-2 transition-colors duration-300 ${
                activeSection === '#home' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-white'
              }`}
              onClick={() => scrollToSection('#home')}
            >
              Home
            </a>
          </li>
          <li className='cursor-pointer hover:scale-110 duration-200 transition-all'>
            <a
              href='#services'
              className={`text-[0.85rem] md:text-[1rem] px-2 md:px-4 py-2 transition-colors duration-300 ${
                activeSection === '#services' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-white'
              }`}
              onClick={() => scrollToSection('#services')}
            >
              Skills
            </a>
          </li>
          <li className='cursor-pointer hover:scale-110 duration-200 transition-all'>
            <a
              href='#about'
              className={`text-[0.85rem] md:text-[1rem] px-2 md:px-4 py-2 transition-colors duration-300 ${
                activeSection === '#about' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-white'
              }`}
              onClick={() => scrollToSection('#about')}
            >
              About
            </a>
          </li>
          <li className='cursor-pointer hover:scale-110 duration-200 transition-all'>
            <a
              href='#projects'
              className={`text-[0.85rem] md:text-[1rem] px-2 md:px-4 py-2 transition-colors duration-300 ${
                activeSection === '#projects' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-white'
              }`}
              onClick={() => scrollToSection('#projects')}
            >
              Projects
            </a>
          </li>
          <li className='cursor-pointer hover:scale-110 duration-200 transition-all'>
            <a
              href='#contact'
              className={`text-[0.85rem] md:text-[1rem] px-2 md:px-4 py-2 transition-colors duration-300 ${
                activeSection === '#contact' ? 'text-green-500 border-b-2 border-green-500' : 'hover:text-white'
              }`}
              onClick={() => scrollToSection('#contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
