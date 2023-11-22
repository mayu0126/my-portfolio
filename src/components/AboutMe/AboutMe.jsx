import { React } from 'react';

const AboutMe = () => {

  return(
    <div className='flex justify-center items-center h-screen bg-slate-100'>
      <div className={`w-2/3 sm:w-1/3 px-2 py-2 text-slate-900`}>
        <div className='text-center'>
          <div className='mb-20 font-bold text-2xl xl:text-4xl text-cyan-700'>WHO I AM</div>
          <div className='text-justify'>
            My name's Mayu. I'm a passionate full-stack developer based in Budapest, HU. I'm dedicated to crafting immersive digital experiences through web development and design. With a background in food trade and a knack for understanding food law and labeling, I've made a pivot into the dynamic world of software engineering. I completed my full-stack software development studies at Codecool in October this year and I'm open to work currently.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;