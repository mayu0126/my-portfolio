import { React } from 'react';

const Education = ({id}) => {

  return(
    <div id={id} className='flex justify-center items-center h-screen bg-slate-100'>
      <div className='-mt-36 w-1/3 px-2 py-2 mr-20 text-slate-900'>
        <div className='text-left'>
          <div className='mb-10 ml-5 font-bold text-2xl xl:text-4xl text-cyan-700'> EDUCATION</div>

          <div className='text-justify mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2022 - 2023 <span className='font-bold'>Codecool</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Full Stack Developer</div>
          </div>

          <div className='text-justify mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2016 - 2018 <span className='font-bold'>Szent István University</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Food Engineer MSc.</div>
          </div>

          <div className='text-justify mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2012 - 2015 <span className='font-bold'>Corvinus University of Budapest</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Food Engineer BSc.</div>
          </div>

          <div className='text-justify mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2011 - 2012 <span className='font-bold'>Budai Drawing School</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Photographer</div>
          </div>

          <div className='text-justify mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2006 - 2011 <span className='font-bold'>Eventus Business and Art High School</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Graphic Designer</div>
          </div>

        </div>
      </div>
      <div className='h-fit w-1/3 -mt-24'>
        <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt='books'
          className='rounded-2xl' />

      </div>
    </div>
  );
};

export default Education;