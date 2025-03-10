import React, {useState, useEffect} from 'react';
//import header data
import {headerData} from '../data';
//import components
import Nav from './Nav.jsx';
import NavMobile from "./NavMobile.jsx";
import Socials from "./Socials.jsx";
//import icons
import {TiThMenuOutline} from 'react-icons/ti';

const Header = () => {
  //Destructure header data
  const {logo} = headerData;
  //header state
  const [isActive, setIsActive] = useState(false);
  //nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    })
  }, []);

  return (
    <header className={`${isActive ? 'h-[120px] shadow-lg' : 'h-[140px] lg:h-[150px]'} fixed
            bg-white left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}>
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
        {/* logo */}
        <a href='/'>
          <img className='w-[110px] h-[110px]' src={logo} alt='logo'/>
        </a>
        <div className='hidden xl:flex'>
          <Nav/>
        </div>
        {/* nav menu btn - showing by default - hidden on desktop mode */}
        <div onClick={() => {setNavMobile(!navMobile)}} className='xl:hidden absolute right-[5%]
        bg-dark text-white p-2 rounded-md cursor-pointer'>
          <TiThMenuOutline className='text-3xl'/>
        </div>
        {/* nav mobile */}
        <div className={`${navMobile ? 'max-h-full' : 'max-h-0'} 
        ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'} 
        fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}>
          <NavMobile/>
        </div>
        {/* Socials */}
        <div className='hidden xl:flex'>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
