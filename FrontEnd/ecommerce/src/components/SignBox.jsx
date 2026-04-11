import React from 'react'
import { useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignBox() {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
   
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
         e.preventDefault();
         console.log("clicked")
         if (!name||!name.trim()) {
        setError("Name is required");
        return;
        }

        if (!email||!email.trim()) {
          setError("Email is required");
           return;
         }

        if (!emailchecker(email)) {
           setError("Enter valid email or phone number");
           return;
        }

        if (!password||!password.trim()) {
           setError("Password is required");
            return;
         }

         setError("")
         axios.post("http://localhost:8080/api/user/signup",{username:name,email,password})
         .then((res)=>{
            console.log(res.data)
            navigate('/login')
         })
         .catch((err)=>{
            console.log(err);
            setError(err);
         })
    }


    const emailchecker=(email)=>{
         
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    const phoneRegex = /^[6-9]\d{9}$/;

    return emailRegex.test(email) || phoneRegex.test(email);
    }


    
  return (
    <div className='flex flex-col gap-x-10'>
         <div className='flex justify-around flex-col gap-y-2 mb-4'>
        <h1 className='text-3xl font-bold'>Create an account</h1>
        <h3 className='text-m mb-4'>Enter your details below</h3>
        </div>
        <form className='flex flex-col gap-y-6 my-6' 
        onSubmit={handleSubmit}
        >
           
            <input type="text" placeholder='Name' value={name} onChange={(e)=>{
              setName(e.target.value)
              setError("")
            }} 
            className="w-1/2 border-b border-gray-300 p-2 outline-none focus:border-black focus:ring-0"/>
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
            <div className='text-center bg-red-400 w-1/2 p-5 text-white mt-2'>
           
            <button type="submit">Create Account</button>
            </div>
       </form>
        <div className="border border-black text-black p-4 w-1/2 flex items-center justify-center gap-3 cursor-pointer">
        <img 
           src="https://www.svgrepo.com/show/475656/google-color.svg"
           alt="Google"
             className="w-5 h-5"
         />

        <p className="text-sm">Sign up with Google</p>

        </div>
        <div className='text-black text-center w-1/2 mt-5 flex flex-row gap-x-3 p-5 justify-center'>
             <p>Already have Account?</p>
             <Link to='/login' className='border-b border-gray-400'>
                 Log in 
             </Link>
        </div>
        
    </div>
  )
}

export default SignBox