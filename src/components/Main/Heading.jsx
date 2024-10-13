import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import CV from '../../assets/HimanshuPantwal_InternshalaResume (4).pdf'
function Heading() {
  const textArr = ["Web Developer", "Software Developer", "Python Developer"];
  const [text, setText] = useState("Programmer");
  const [count, setCount] = useState(0);
  const [fade, setFade] = useState(true);

  
  const handleText = () => {
    setFade(false);
    setTimeout(() => {
      setText(textArr[count]);
      setFade(true);
      setCount((prevCount) => (prevCount === textArr.length - 1 ? 0 : prevCount + 1));
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(handleText, 4000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className='container m-4 p-4 h-full flex flex-col lg:flex-row gap-x-8 w-full items-center' id="home">
      <div className='flex flex-col lg:items-start items-center'>
        <div className='text-[#8b8b8b] text-3xl lg:text-5xl p-2 m-2 text-center lg:text-left' data-aos='fade-right'>
          Hi, I am <span className='text-green-500'> Himanshu Pantwal </span>
        </div>
        <div className='font-mono m-2 mx-3 p-2 flex gap-1 text-green-500 text-2xl lg:text-3xl items-center w-full'>
          I am a
          <div
            className={`bg-green-300 typing-text border-white border-2 londrina-sketch-regular  text-black transition-all ease-in-out duration-500 px-2 ${
              fade ? 'opacity-100 w-auto' : 'opacity-0'
            }`}
          >
            {text}
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center'>
          <a download="Himanshu_CV" href={CV}>
          <Button classname="m-2 mx-5 p-2 hover:border-white" text="Download CV" />
          </a>
        </div>
      </div>
      <div className='mt-4 lg:mt-0' data-aos="fade-left" data-aos-duration='3000' data-aos-delay='1000'>
        <img src=""  className='h-[20rem] w-[20rem] lg:h-[30rem] lg:w-[30rem] rounded-sm shadow-md bg-transparent border-none' border="0" alt='Profile' />
      </div>
    </div>
  );
}

export default Heading;
