import React from 'react'

const Header = () => {
  return (
    <div className='flex h-18' >
      <div className='w-14'>

      </div>
      <div class="h-full border-l border-gray-300"></div>
      <div className=' flex p-4 '>
        <div className='bg-divcolor w-10 h-10'>
        </div>
        <div className='flex flex-col h-10 pl-4'>
          <div className='flex flex-row text-sm font-bold'>
          <p>Reliance Industries Ltd</p>
          </div >
          <div className='flex flex-row text-font text-sm'>
          <p className='flex '>Following</p>
          <p className='px-4'> NSE: <span className='font-semibold'>EUREKAFO</span> </p>
          <p className=''>Market Cap:(11/16/23) <span className='font-semibold'>$11.3 Billion</span> </p>
          </div>
          </div>      
          
          </div >
          

    </div>
  )
}

export default Header