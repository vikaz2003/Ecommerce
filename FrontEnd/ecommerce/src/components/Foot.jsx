import React from 'react'

const Foot = ({Icon,heading,note}) => {
  return (
     <div className='flex flex-col space-y-1.5 w-[260px] items-center text-center'>
        <div className='bg-gray-400 rounded-full p-1 w-fit flex items-center justify-center mb-3'>
         <div className='bg-black text-white p-3 rounded-full flex items-center justify-center'>
             <Icon/>
         </div>
         </div>
        <h1 className='text-xl font-bold'>{heading}</h1>
        <p className='text-xs'>{note}</p>
     </div>
  )
}

export default Foot