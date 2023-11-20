import { Link } from 'react-router-dom';
import { React, useState, useEffect } from 'react';

const navigation = [
  { name: 'About me', href: 'aboutme' },
  { name: 'Projects', href: 'projects' },
  { name: 'Education', href: 'education' },
  { name: 'Skills', href: 'skills' },
  { name: 'Resume', href: 'resume' },
  { name: `Let's talk`, href: 'letstalk' },

];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCloseIcon, setIsCloseIcon] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsHeaderOpen(currentScrollPos <= 0); // görgetés irányának ellenőrzésére
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCloseIcon(!isCloseIcon);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsCloseIcon(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${isHeaderOpen ? 'h-28' : 'h-20'}`}>
      <nav className={`flex items-center justify-between p-4 xl:px-4" aria-label="Global" ${isHeaderOpen ? 'h-28' : 'h-20'}`}>

        <div className="flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            <img
              className="h-16 w-auto"
              src="https://pngimg.com/uploads/letter_m/letter_m_PNG120.png"
              alt=""
            />
          </Link>
        </div>

        <div className="md:hidden">
          <div className="flex items-center">

            <button
              className="text-gray-900 p-2 focus:outline-none focus:ring"
              onClick={toggleMenu}
            >
              {isCloseIcon ? (
                // X ikon
                <svg
                  className="h-6 w-6 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger ikon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
              
            </button>
            {isMenuOpen && (
              <div className="absolute top-16 right-0 w-48 bg-white border border-gray-200 rounded-lg p-2">
                  <>
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.href} onClick={closeMenu} className="text-sm font-semibold leading-6 block px-4 py-2 text-gray-900 hover:bg-gray-100">
                      {item.name}
                    </Link>
                  ))
                  }
                </>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="text-base font-semibold text-slate-800 hover:text-slate-600">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;