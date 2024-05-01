import React from 'react'
import From from './From'

const Header = () => {
  return (
    <div>
      <div className='flex items-center justify-around sm:px-2 md:px-8 xl:px-12 py-4'>
        <img src='/w.svg' className='sm:w-12 sm:h-12 md:w-16 md:h-16 xl:w-20 xl:h-20' alt='Logo' />
        {<From />}
      </div>
    </div>
  ) 
}

export default Header