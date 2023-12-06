import { React } from 'react';

const Skills = ({id}) => {

  return(
    <div id={id} className='flex justify-center items-center h-screen bg-slate-900'>
      <div className='-mt-36 w-2/3 px-2 py-2 mr-20 text-slate-900'>
        <div className='text-center'>
          <div className='mb-10 ml-5 font-bold text-2xl xl:text-4xl text-amber-100'> SKILLS</div>

          <div className='text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-semibold text-lg text-cyan-700'>Hard skills</div>
              <div className='flex justify-center items-center'>

                <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                  
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="javascript"/>
          
                </div>

                <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" />
                </div>

            </div>
          </div>

          <div className='text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='font-semibold text-lg text-cyan-700'>Soft skills</div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Skills;