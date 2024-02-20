import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>

      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src='https://www.ethnicplus.in/media/blueskytechco/testimonial/e/z/ezgif-3-497db1e615.jpg' alt='' />

      </div>

      <div className='p-4' bLack>
        <h3 className='text-lg font-medium text-gray-900'>Nofiltere</h3>
        <p className='mt-2 text-sm text-gray-500'>Men Solid pure Cotton Straight Kurta</p>
      </div>

      <div>
      <h3 className='text-lg font-medium text-gray-900'>hello this is your first view</h3>
        <p className='mt-3 text-sm text-gray-400'>women solid cotton steaight kurta</p>
      </div>

    </div>
  )
}

export default HomeSectionCard
