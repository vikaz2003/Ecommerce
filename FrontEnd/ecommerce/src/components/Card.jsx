import React from 'react'
import { Store } from 'lucide-react'

const Card = ({text1,text2,Icon}) => {
  return (
     <div className='flex flex-col space-y-4 hover:bg-red-400 border border-gray-300 justify-between items-center text-center px-6 py-4'>
            <div className='bg-gray-200 rounded-full p-2 w-fit '>
                <div className='bg-black/85 rounded-full p-4 text-center justify-center flex '>
                    <Icon className='text-white '/>
                </div>
            </div>
            <span className='block font-semibold text-2xl'>
                {text1}
            </span>

            <span className='text-xs text-black'>
                {text2}
            </span>
     
                            
     
    </div>
  )
}

export default Card