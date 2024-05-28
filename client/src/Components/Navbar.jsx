import React, { useState } from 'react'
import icon from '../public/logo.png'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavigation = (route) => {
    setMenuOpen(false)
    navigate(route)
  }
  
  return (
    <div className='w-full bg-blueTheme top-0 fixed z-100'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center text-white hover:cursor-pointer hover:text-pinkTheme' onClick={() => handleNavigation('/')}>
          <img src={icon} className='m-2 w-12 sm:w-16' alt='Divine Care Home Health LLC'></img>
          <div className='text-xl font-semibold mr-auto hidden md:block lg:text-2xl xl:text-3xl'>
            <span>Divine Care Home Health LLC</span>
          </div>
        </div>

        <div>
          <div className={`lg:hidden group hover:cursor-pointer mr-2 flex flex-col p-2 rounded-md ${menuOpen ? 'bg-lightBlue' : ''}`} onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 448 512" className={`fill-current text-lightBlue ${menuOpen ? 'hidden' : 'block'}`}>
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 384 512" className={`fill-current text-blueTheme bg-lightBlue ${menuOpen ? 'block' : 'hidden'}`}>
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
            </svg>
          </div>
          
          <ul className='lg:flex space-x-6 list-none text-2xl font-semibold px-8 text-white hidden'>
            <li className='hover:cursor-pointer hover:text-pinkTheme' onClick={() => navigate('/about')}>About Us</li>
            <li className='hover:cursor-pointer hover:text-pinkTheme' onClick={() => navigate('/contact')}>Contact Us</li>
          </ul>
        </div>
      </div>
      <div>
        <ul className={`lg:hidden m-0 flex flex-col list-none text-xl font-semibold px-8 text-white text-right ${menuOpen ? 'block' : 'hidden'}`}>
          <li className='hover:cursor-pointer hover:text-pinkTheme' onClick={() => handleNavigation('/about')}>About Us</li>
          <li className='hover:cursor-pointer hover:text-pinkTheme' onClick={() => handleNavigation('/contact')}>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
