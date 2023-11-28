import { React } from 'react';

const AboutMe = ({id}) => {

  return(
    <div id={id} className='flex justify-center items-center h-screen bg-slate-100'>
      <div className='w-2/3 lg:w-1/3 px-2 py-2 -mt-72 sm:-mt-36 md:-mt-44 text-center'>
          <div className='mb-20 font-bold text-xl sm:text-2xl md:text-3xl 2xl:text-4xl text-cyan-700'>WHO I AM</div>
          <div className='text-justify text-sm md:text-base px-5 py-5 text-slate-900 bg-white rounded-2xl'>
            My name's Mayu. I'm a passionate full-stack developer based in Budapest, HU. I'm dedicated to crafting immersive digital experiences through web development and design. With a background in food trade and a knack for understanding food law and labeling, I've made a pivot into the dynamic world of software engineering. I completed my full-stack software development studies at Codecool in October this year and I'm open to work currently.
          </div>
        </div>
    </div>
  );
};

export default AboutMe;