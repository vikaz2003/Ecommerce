import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { login } from '../store/authSlice';

function Login() {

   const [email,setEmail]=useState();
   const [password,setPassword]=useState();
   const [error,setError]=useState();

   const navigate=useNavigate()
   const dispatch=useDispatch()

   const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("clicked");
      if(!email||!email.trim()){
          setError("Email is Required")
      }

      if(!password||!password.trim()){
         setError("Password is Required")
      }
      
      if(!emailchecker(email)){
         setError("Enter valid or Email or Phone Number")
      }
      setError("")
      axios.post("http://localhost:8080/api/user/login",{email,password})
      .then((res)=>{
            console.log(res.data);
            const responseData=res.data;
            const token=responseData.token??responseData;

            const user=responseData.id??null;
            console.log(user+" "+token)

            dispatch(login({user,token}))
            navigate("/")
         


          

      })
      .catch((err)=>{
           setError("Login Failed! Please Try Again")
      })
   }

   const emailchecker=(email)=>{
         
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
       const phoneRegex = /^[6-9]\d{9}$/;

        return emailRegex.test(email) || phoneRegex.test(email);
    }

    

   return (
    <div className='w-full bg-white py-16 items-center justify-center gap-6'>
        <div className='flex w-full maxw-6xl items-center gap-16 bg-white p-10 rounded flex-x-6 justify-around'>
            <img src="https://i.pinimg.com/736x/0c/48/68/0c486869693fbd7b8d9e307f195a0aa2.jpg" 
            alt="Shopping Cart"  />
            <div className='w-1/2'>
                   <div className='flex flex-col gap-x-10'>
                         <div className='flex justify-around flex-col gap-y-2 mb-4'>
                                  <h1 className='text-3xl font-bold'>Log in to Exclusive</h1>
                                  <h3 className='text-m mb-4'>Enter your details below</h3>
                         </div>
                         <form className='flex flex-col gap-y-6 my-6' 
                         onSubmit={handleSubmit}>
                              <input type="text" placeholder='Email or Phone Number' value={email} onChange={(e)=>{
                                  setEmail(e.target.value)
                                  setError("")
                               }} 
                              className="w-1/2 border-b border-gray-300 p-2 outline-none focus:border-black focus:ring-0"/>
                              <input type="password" placeholder='Password' value={password} onChange={(e)=>{
                                  setPassword(e.target.value)
                                  setError("")
                               }} 
                              className="w-1/2 border-b border-gray-300 p-2 outline-none focus:border-black focus:ring-0"/>
                               {error && (
                                <p className="text-red-500 text-sm w-1/2 font-bold">{error}</p>
                             )}
                              <div className='flex flex-row gap-x-20 items-center mt-10'>
                            
                              <button type="submit" className="bg-red-400  py-4 px-8 text-white text-lg font-semibold shadow-md hover:bg-red-600 transition duration-200  text-center rounded-xl">Log In</button>
                              <p className='text-center hover:text-red-800 cursor-pointer'>Forgot Password?</p>
                              </div>
                        </form>
                   </div>
            </div>
            
            </div>
    </div>
  )
}

export default Login