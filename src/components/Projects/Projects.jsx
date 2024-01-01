import { Link } from 'react-router-dom';
import { React, useState, useEffect } from 'react';

const Projects = ({id}) => {

  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
      const handleResize = () => {
          setIsNarrowScreen(window.innerWidth < 1024);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return(
    <div id={id} className={`${isNarrowScreen ? `flex-col` : `h-screen`} flex justify-center items-center bg-slate-900`}>
      <div className={`${isNarrowScreen ? "mt-10" : "-mt-28"} w-3/4 px-2 py-2 text-white`}>
        <div className='text-center'>
          <div className={`${isNarrowScreen ? "mt-10" : "mt-24"} mb-10 xl:mb-14 2xl:mb-20 font-bold text-2xl md:text-3xl xl:text-4xl text-amber-100`}>PROJECTS</div>
          <div className={`${isNarrowScreen ? `flex-col items-center` : `justify-between`} flex`}>

            <div className={`${isNarrowScreen ? `w-11/12` : `w-1/3 px-4`} flex flex-col xl:px-6 2xl:px-8 3xl:px-10`}>
              <div className='h-56 rounded-2xl overflow-hidden relative group'>
                <a href="https://github.com/mayu0126/food-import-label-generator">
                  <img src="https://i.imgur.com/yGH6IFC.jpg" alt="project-1" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
                </a>
              </div>
              <div className='mb-4 mt-4 font-bold text-md text-cyan-500'>FOOD IMPORT LABEL GENERATOR</div>
              <div className='text-justify mb-4'>
                With this web application you can create Hungarian labels for your imported food products by providing the English text, and you can enhance the quality of each label. Leveraging translations derived from the most recent EU and local Hungarian regulations, it ensures accuracy and legal compliance.
              </div>
              <a href="https://food-import-label-generator.onrender.com" className='mt-auto'>
              <div className='flex justify-center mb-16'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(6 182 212)" className="w-10 h-10 hover:stroke-cyan-200 transition duration-300 ease-in-out">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </div>
              </a>
            </div>

            <div className={`${isNarrowScreen ? `w-11/12` : `w-1/3 px-4`} flex flex-col xl:px-6 2xl:px-8 3xl:px-10`}>
              <div className='h-56 rounded-2xl overflow-hidden relative group'>
                <a href="https://github.com/mayu0126/solarwatch">
                  <img src="https://i.imgur.com/H2iBUAE.jpg" alt="project-2" className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
                </a>
              </div>
              <div className='mb-4 mt-4 font-bold text-md text-cyan-500'>SOLAR WATCH</div>
              <div className='text-justify mb-4'>
                SolarWatch is a simple application designed to deliver precise sunrise and sunset information for a specified city. The app saves the data that has already been queried from the external API to its own database for future usage. Enjoy accurate sunrise and sunset data for your favorite cities!
              </div>
              <a href="https://solarwatch-mayu0126.onrender.com/" className='mt-auto'>
              <div className='flex justify-center mb-16'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(6 182 212)" className="w-10 h-10 hover:stroke-cyan-200 transition duration-300 ease-in-out">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </div>
              </a>
            </div>

            <div className={`${isNarrowScreen ? `w-11/12` : `w-1/3 px-4`} flex flex-col xl:px-6 2xl:px-8 3xl:px-10`}>
              <div className='h-56 rounded-2xl overflow-hidden relative group'>
                <a href="https://github.com/Walrider32/The-Everything-App">
                  <img src="https://imgur.com/LBMZhyl.jpg" alt="project-3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
                </a>
              </div>
              <div className='mb-4 mt-4 font-bold text-md text-cyan-500'>THE EVERYTHING</div>
              <div className='text-justify mb-4'>
              The Everything is one of our school teamworks in which I was responsible for mainly the frontend of the application. It is a website where you can access top-quality tools for your DIY and home improvement projects, available for both rental and purchase. If you're a new user, you can easily register and place an order.
              </div>
              <a href="https://the-everything-app-static.onrender.com/" className='mt-auto'>
              <div className='flex justify-center mb-16'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(6 182 212)" className="w-10 h-10 hover:stroke-cyan-200 transition duration-300 ease-in-out">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </div>
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;