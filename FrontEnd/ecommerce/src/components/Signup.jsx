import React from 'react'
import SignBox from './SignBox'

function Signup() {
  return (
    <div className='w-full bg-white py-16 items-center justify-center gap-6'>
        <div className='flex w-full maxw-6xl items-center gap-16 bg-white p-10 rounded flex-x-6 justify-around'>
            <img src="https://i.pinimg.com/736x/0c/48/68/0c486869693fbd7b8d9e307f195a0aa2.jpg" 
            alt="Shopping Cart"  />
            <div className='w-1/2'>
            <SignBox />
            </div>
            
            </div>
    </div>
  )
}

export default Signup