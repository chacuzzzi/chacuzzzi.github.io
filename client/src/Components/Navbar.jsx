import React from 'react'
import icon from '../public/logo.png'

function Navbar() {
  return (
    <div className='w-full fixed top-0'>
      <div className='flex items-center justify-start'>
        <div className='flex'>
          <img src={icon} width={100} alt='Divine Care Home Health LLC'></img>
        </div>
        <div className='flex'>
          Divine Care Home Health LLC
        </div>
      </div>
    </div>
  )
}

export default Navbar