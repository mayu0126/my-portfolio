import { React } from 'react';

const Experience = ({id}) => {

  return(
    <div id={id} className='flex justify-center items-center h-screen bg-slate-100'>

      <div className='h-fit w-1/3 -mt-24 mr-20'>
        <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt='table'
          className='rounded-2xl' />
      </div>

      <div className='-mt-52 w-1/3 px-2 py-2 text-slate-900'>
        <div className='text-right'>
          <div className='mb-10 ml-5 font-bold text-2xl xl:text-4xl text-cyan-700'>EXPERIENCE</div>

          <div className='text-justify mb-12 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2018 - 2022 <span className='font-bold'>TESCO-GLOBAL Áruházak Zrt.</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Central European Artwork Technologist</div>
          </div>

          <div className='text-justify mb-12 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2015 - 2015 <span className='font-bold'>Sky Marketing Communications Kft.</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Marketing Intern</div>
          </div>

          <div className='text-justify mb-12 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-normal text-md text-slate-900'>2010 - 2010 <span className='font-bold'>PAUL French Family Bakery and Patisserie since 1889</span></div>
            <div className='font-semibold text-lg text-cyan-700'>Cashier</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;