import React from 'react'
import icon from '../public/logo.png'
import { useNavigate } from 'react-router-dom'

function PageItem({page, link}) {
  const navigate = useNavigate()

  return (<li className='hover:cursor-pointer hover:text-pinkTheme' onClick={() => navigate(link)}>{page}</li>)
}

function Navbar() {
  const navigate = useNavigate()
  
  return (
    <div className='w-full bg-blueTheme top-0'>
      <div className='flex items-center justify-between text-white'>
        <div className='flex items-center hover:cursor-pointer hover:text-pinkTheme' onClick={() => navigate('/')}>
          <img src={icon} width={75} className='m-2 pl-2' alt='Divine Care Home Health LLC'></img>
          <div className='text-xl font-semibold mr-auto'>
            <span>Divine Care Home Health LLC</span>
          </div>
        </div>

        <div>
          <ul className='flex space-x-6 list-none text-xl font-semibold px-8'>
            <PageItem page={'About Us'} link={'/about'}/>
            <PageItem page={'Our Services'} link={'/services'}/>
            {/* <PageItem page={'Careers'} link={'/careers'}/> */}
            <PageItem page={'Contact Us'} link={'/contact'}/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
