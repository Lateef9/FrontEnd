import React from 'react'

const Header = () => {
  return (
    <div className='flex h-18 border-b-2 border-gray-300 shadow-md' >
      <div className='w-24 flex flex-row justify-center my-auto'>
      
      <svg  className='mt-1' width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path id="Vector 5" d="M7 1L1.5 6.5L7 12" stroke="#B4B4B4" stroke-width="2"/>
      </svg>
      

      <p className='ml-3 text-font text-sm' >Back</p>

   
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