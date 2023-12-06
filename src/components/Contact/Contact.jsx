import { React, useState } from 'react';

const Contact = ({id}) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    //További lépések: email küldése, adatok kezelése stb.
  };

  return(
    <div id={id} className='flex justify-center items-center h-screen bg-slate-900'>
      <div className='-mt-36 w-1/3 px-2 py-2 mr-20 text-slate-900'>
        <div className='text-center'>
          <div className='mb-10 font-bold text-2xl xl:text-4xl text-amber-100'>CONTACT</div>

          <form
            className='text-center mb-16 px-3 py-6 bg-white rounded-2xl'
            onSubmit={handleSubmit}
          >
            <div className='mb-2 font-semibold text-lg text-cyan-700'>Name</div>
            <div className='flex-col justify-center items-center'>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='border border-gray-300 px-3 py-2 mb-3 w-2/3 rounded-full'
                required
              />
            </div>

            <div className='mb-2 font-semibold text-lg text-cyan-700'>Email</div>
            <div className='flex-col justify-center items-center'>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='border border-gray-300 px-3 py-2 mb-3 w-2/3 rounded-full'
                required
              />
            </div>

            <div className='mb-2 font-semibold text-lg text-cyan-700'>Message</div>
            <div className='flex-col justify-center items-center'>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='border border-gray-300 rounded-2xl px-3 py-2 mb-3 w-2/3 resize-none'
                rows='4'
                required
              ></textarea>
            </div>

            <button
              type='submit'
              className='bg-cyan-700 hover:bg-cyan-600 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded-full'
            >
              Send ➤
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;