import { React } from 'react';

const Skills = ({id}) => {

  return(
    <div id={id} className='flex justify-center items-center h-screen bg-slate-900'>
      <div className='-mt-36 w-2/3 px-2 py-2 mr-20 text-slate-900'>
        <div className='text-center'>
          <div className='mb-10 font-bold text-2xl xl:text-4xl text-amber-100'> SKILLS</div>

          <div className='text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='mb-5 font-semibold text-lg text-cyan-700'>Hard skills</div>
              <div className='flex-col justify-center items-center'>

                <div className='flex justify-center items-center'>
                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"/>
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="csharp"/>
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react"/>
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="express"/>
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html5"/>
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3"/>
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"/>
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt="dotnetcore"/>
                  </div>
                </div>

                <div className='flex justify-center items-center'>
                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" alt="docker" />
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="tailwindcss"/>
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="bootstrap"/>
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" />
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" alt="mssql" />
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" />
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="git" />
                  </div>

                  <div className='p-4 w-24 h-24 xs:w-24 xs:h-24 sm:w-28 sm:h-28 rounded-full'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="github" />
                  </div>
                </div>

            </div>
          </div>

          <div className='text-center mb-4 px-3 py-3 bg-white rounded-2xl'>
            <div className='mb-5 font-semibold text-lg text-cyan-700'>Soft skills</div>

            <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center text-sm font-bold text-slate-900 uppercase p-4'>
                proactivity
              </div>
              <div className='flex justify-center items-center text-base font-bold text-cyan-700'>
                •
              </div>
              <div className='flex justify-center items-center text-sm font-bold text-slate-900 uppercase p-4'>
                great <br/> problem solving
              </div>
              <div className='flex justify-center items-center text-base font-bold text-cyan-700'>
                •
              </div>
              <div className='flex justify-center items-center text-sm font-bold text-slate-900 uppercase p-4'>
                creativity
              </div>
              <div className='flex justify-center items-center text-base font-bold text-cyan-700'>
                •
              </div>
              <div className='flex justify-center items-center text-sm font-bold text-slate-900 uppercase p-4'>
                attention <br/> to detail
              </div>
              <div className='flex justify-center items-center text-base font-bold text-cyan-700'>
                •
              </div>
              <div className='flex justify-center items-center text-sm font-bold text-slate-900 uppercase p-4'>
                adaptability
              </div>
              <div className='flex justify-center items-center text-base font-bold text-cyan-700'>
                •
              </div>
              <div className='flex justify-center items-center text-sm font-bold text-slate-900 uppercase p-4'>
                empathy
              </div>
              <div className='flex justify-center items-center text-base font-bold text-cyan-700'>
                •
              </div>
              <div className='flex justify-center items-center text-sm font-bold text-slate-900 uppercase p-4'>
                team <br/> collaboration
              </div>
              <div className='flex justify-center items-center text-base font-bold text-cyan-700'>
                •
              </div>
              <div className='flex justify-center items-center text-sm font-bold text-slate-900 uppercase p-4'>
                scrum
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;