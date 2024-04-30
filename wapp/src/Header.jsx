import React from 'react'
import From from './From'

const Header = () => {
  return (
    <div>
      <div className='flex items-center justify-between px-12 py-4'>
        <img src='/w.svg' className='w-20 h-20' alt='Logo' />
        {<From />}
      </div>
    </div>
  ) 
}

export default Header