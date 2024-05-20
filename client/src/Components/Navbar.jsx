import React, { useState } from 'react'
import icon from '../public/logo.png'
import { useNavigate } from 'react-router-dom'

function PageItem({page, link}) {
  const navigate = useNavigate()

  return (<li className='hover:cursor-pointer hover:text-pinkTheme' onClick={() => navigate(link)}>{page}</li>)
}

function Navbar() {
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  
  return (
    <div className='w-full top-0 relative'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center hover:cursor-pointer hover:text-pinkTheme' onClick={() => navigate('/')}>
          <img src={icon} width={75} className='m-2 pl-2' alt='Divine Care Home Health LLC'></img>
          <div className='text-xl font-semibold mr-auto text-blueTheme hidden md:block'>
            <span>Divine Care Home Health LLC</span>
          </div>
        </div>

        <div>
          <div className='md:hidden hover:cursor-pointer mr-2 flex flex-col' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>  
          </div>
          
          <ul className='md:flex space-x-6 list-none text-xl font-semibold px-8 text-blueTheme hidden'>
            <PageItem page={'About Us'} link={'/about'}/>
            <PageItem page={'Our Services'} link={'/services'}/>
            <PageItem page={'Contact Us'} link={'/contact'}/>
          </ul>
        </div>
      </div>
      <div>
        <ul className={`md:hidden m-0 flex flex-col list-none text-xl font-semibold px-8 text-blueTheme text-right ${menuOpen ? 'block' : 'hidden'}`}>
          <PageItem page={'About Us'} link={'/about'}/>
          <PageItem page={'Our Services'} link={'/services'}/>
          <PageItem page={'Contact Us'} link={'/contact'}/>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
