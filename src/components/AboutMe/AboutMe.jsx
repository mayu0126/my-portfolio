import { Link } from 'react-router-dom';
import { React, useState, useEffect } from 'react';

const AboutMe = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return(
    <div className='flex justify-center items-center h-96 bg-white'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed sagittis libero quis risus rutrum, at accumsan augue ullamcorper. 
      Maecenas vitae turpis bibendum, tincidunt dui quis, fringilla arcu. 
      Nullam in dictum nisi, sit amet congue diam. Suspendisse potenti. 
      Phasellus non dolor quis purus volutpat scelerisque eu eu erat. 
      Proin non eleifend neque. Nullam fermentum, ligula ut varius accumsan,
      velit mauris tincidunt nibh, nec pellentesque sapien augue sit amet lectus. 
      Donec nec convallis eros. Cras fermentum ligula ipsum, nec consectetur arcu blandit id. 
      Proin dapibus ante rhoncus, pulvinar felis ullamcorper, faucibus mi. Vivamus sagittis eget nunc ut porta.
    </div>
  );
};

export default AboutMe;