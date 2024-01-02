import { React, useState, useEffect } from 'react';

const AboutMe = ({id}) => {

  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 1280);

  useEffect(() => {
      const handleResize = () => {
          setIsNarrowScreen(window.innerWidth < 1280);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return(
    <div id={id} className={`${isNarrowScreen ? "flex-col" : "max-h-fit"} flex justify-center items-center max-h-fit bg-slate-100`}>
      <div className='w-5/6 md:w-2/3 lg:w-1/3 px-2 py-2 mt-20 text-center'>
          <div className='mb-10 md:mb-20 font-bold text-2xl md:text-3xl xl:text-4xl text-cyan-700'>WHO I AM</div>
          <div className='mb-20 text-justify text-sm md:text-base px-5 py-5 text-slate-900 bg-white rounded-2xl'>
            My name's Mayu. I'm a passionate full-stack developer based in Budapest, HU. I'm dedicated to crafting immersive digital experiences through web development and design. With a background in food trade and a knack for understanding food law and labeling, I've made a pivot into the dynamic world of software engineering. I completed my full-stack software development studies at Codecool in October this year and I'm open to work currently.
          </div>
        </div>
    </div>
  );
};

export default AboutMe;