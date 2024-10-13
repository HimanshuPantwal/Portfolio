import React from 'react';
import TechCard from './TechCard';

function About() {
  return (
    <div className=" h-full w-full p-6 flex flex-col gap-y-12" data-aos="fade-down" id="about">
      {/* About Me Section */}
      <div className="text-center text-gray-300">
        <h1 className="text-5xl font-bold text-gray-100 tracking-wide hover:underline hover:decoration-blue-500 transition-all duration-300">
          About Me
        </h1>
        <p className="text-lg md:text-xl leading-7 tracking-wide text-gray-200 max-w-4xl mx-auto font-light mt-6">
          <span className="text-xl md:text-3xl text-green-400">Hey, I’m Himanshu Pantwal</span>, a BTech graduate from Dehradun with a passion for web development. I focus on React.js and modern front-end technologies. In my free time, I enjoy playing chess, hitting the gym, and exploring the stock market.
        </p>
      </div>

      
      <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl py-12 px-8 flex flex-col items-center gap-y-8 shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent  tracking-wide hover:underline transition-all duration-300 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-3 hover:text-white p-2">
          Languages and Technologies I Know
        </h2>

        <p className="text-base md:text-lg leading-7 tracking-wide text-gray-300 max-w-4xl mx-auto font-light mt-4 text-center">
          I have experience building projects with various technologies, frameworks, and libraries, ensuring clean code and efficient performance in both frontend and backend development.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" data-aos="fade-up">
          <TechCard
            name="React"
            url="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
            description="A JavaScript library for building highly interactive and attractive user interfaces."
            link="https://reactjs.org/"
          />
          <TechCard
            name="Tailwind CSS"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
            description="A utility-first CSS framework for rapid UI development."
            link="https://tailwindcss.com/"
          />
          <TechCard
            name="Python"
            url="https://w1.pngwing.com/pngs/835/530/png-transparent-python-logo-programming-language-computer-programming-python-programming-basics-for-absolute-beginners-scripting-language-source-code-php-code-climate-inc.png"
            description="A high-level, general-purpose programming language."
            link="https://www.python.org/"
          />
          <TechCard
            name="Django"
            url="https://static.djangoproject.com/img/logos/django-logo-negative.1d528e2cb5fb.png"
            description="A high-level Python Web framework for rapid development."
            link="https://www.djangoproject.com/"
          />
          <TechCard
            name="Firebase"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniE5Ru0BemYWo2fLDZ6R9aDE0mwM7VjIR7g&s"
            description="A platform developed by Google for creating mobile and web applications."
            link="https://firebase.google.com/"
          />
          <TechCard
            name="Appwrite"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9Oe06SIl1admJwmJAVyLtoKC-6YmTWZwgg&s"
            description="An open-source backend server for web, mobile, and Flutter developers."
            link="https://appwrite.io/"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
