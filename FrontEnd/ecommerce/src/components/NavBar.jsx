import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { RiAccountPinCircleLine } from "react-icons/ri";
import axios from 'axios';
import { useDispatch ,useSelector} from 'react-redux';

function NavBar() {
    const [text,setText]=useState('')

    
    const user = useSelector((state) => state.auth.user);
    console.log(user)



  return (
    <div className='w-full h-18 flex border-gray-300 flex-row items-center bg-white border-b px-6'>
        <div >
            <h1 className='text-black font-bold text-xl items-center mr-100'>Exclusive</h1>
        </div>
        <div className='flex flex-row justify-between space-x-7 text-m'>
            <NavLink to='/' className='text-black'>Home</NavLink>
            <NavLink to='/contact' className='text-black'>Contact</NavLink>
            <NavLink to='/about' className='text-black'>About</NavLink>
             {!user && (
            <NavLink className='text-black' to='/signup'>Sign Up</NavLink>
             )}
             {user && (
                 <NavLink className='text-black' to='/logout'>Logout</NavLink>
             )}
        </div>
        <div className='flex flex-row gap-4 items-center ml-45'>
             <div className='bg-gray-200 flex p-2  gap-4 mx-4 my-auto items-center text-m w-65 rounded-md '>
                  <input type="text" placeholder='What are you looking for?' value={text} onChange={(e)=>setText(e.target.value)} className=" outline-none text-sm text-black bg-transparent w-[75%] p-2" />
                  <SearchIcon className='cursor-pointe' onClick={()=>console.log(text)}/>
                  
             </div>

              <BsCart3 className='text-2xl cursor-pointer'/> 
            <FaRegHeart className='text-2xl  cursor-pointer'/>
            <RiAccountPinCircleLine className='text-4xl p-1 hover:bg-red-600'/>
        </div>
        
    </div>
  )
}

export default NavBar