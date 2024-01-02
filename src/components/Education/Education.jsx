import { React, useState, useEffect } from 'react';

const Education = ({id}) => {

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
    <div id={id} className={`${isNarrowScreen ? "flex-col" : "max-h-fit"} flex justify-center items-center bg-slate-100`}>
      
      <div className='mt-20 mb-20 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3 px-2 py-2 lg:mr-20 text-slate-900'>
        <div className={`${isNarrowScreen ? "text-center" : "text-left"}`}>
          <div className={`${isNarrowScreen ? "" : "ml-5"} mb-10 font-bold text-2xl lg:text-3xl xl:text-4xl text-cyan-700`}> EDUCATION</div>

          <div className={`${isNarrowScreen ? "h-fit mb-4" : "hidden"}`}>
            <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt='books'
              className='rounded-2xl' />

          </div>

          <div className='text-left mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2022 - 2023 {isNarrowScreen ? <br/> : ""} <span className='font-bold'>Codecool</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Full Stack Developer</div>
          </div>

          <div className='text-left mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2016 - 2018 {isNarrowScreen ? <br/> : ""} <span className='font-bold'>Szent István University</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Food Engineer MSc.</div>
          </div>

          <div className='text-left mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2012 - 2015 {isNarrowScreen ? <br/> : ""} <span className='font-bold'>Corvinus University of Budapest</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Food Engineer BSc.</div>
          </div>

          <div className='text-left mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2011 - 2012 {isNarrowScreen ? <br/> : ""} <span className='font-bold'>Budai Drawing School</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Photographer</div>
          </div>

          <div className='text-left mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2006 - 2011 {isNarrowScreen ? <br/> : ""} <span className='font-bold'>Eventus Business and Art High School</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Graphic Designer</div>
          </div>

        </div>
      </div>
      <div className={`${isNarrowScreen ? "hidden" : "h-fit"} w-1/3`}>
        <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt='books'
          className='rounded-2xl' />

      </div>
    </div>
  );
};

export default Education;