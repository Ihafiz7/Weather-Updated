import React from 'react'

const NoLocation = () => {
  return (
    <>
    <div className='flex items-center justify-center'>
        
        <div className='flex items-center justify-center gap-2 text-xl bg-lime-200 w-[80vw] h-auto hover:bg-white p-3'>
          <img src='LocationOff.svg' alt='Icon' className='w-8 h-8 animate-bounce' />
          Could Not Find Your Location.Trun on Location Or Try Entering Name.
        </div>
    </div>
    </>
  )
}

export default NoLocation