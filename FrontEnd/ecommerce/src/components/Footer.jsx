import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { QRCodeCanvas } from "qrcode.react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";



function Footer() {


  const handle=()=>{

  }


  return (
    <div className='bg-black text-white mt-20  pt-10 pl-5 pb-20 pr-5 w-full h-[400px]'>
        <div className='flex justify-between space-x-5'>

        
           <div className='flex flex-col gap-4 text-white max-w-xs'>

               <p className='text-lg font-semibold'>Exclusive</p>
               <p className='text-base font-medium'>Subscribe</p>
               <p className='text-sm text-gray-400'>Get 10% of your first order</p>
               <div className='flex flex-row items-center justify-between  border-gray-500 rounded-md px-4 py-2 border-2'>
                   <input type='text' placeholder='Enter your email' className='
                   bg-transparent outline-none text-white placeholder-gray-400'/>
                   <IoIosArrowForward className='cursor-pointer ml-2 text-white'/>
               </div>
              
           </div>
           <div className='flex flex-col gap-3 text-white max-w-xs'>
               <p className='text-lg font-semibold'>Support</p>
               <div>
                <p className='text-sm text-gray-400'>111 Bijoy sarani, Dhaka,</p>
                <p className='text-sm text-gray-400'> DH 1515, Bangladesh.</p>
               </div>
               
               <p className='text-sm text-gray-400 cursor-pointer'>exlusive@gmail.com</p>
               <p className='text-sm text-gray-400 cursor-pointer'>+88015-88888-9999</p>

           </div>
           <div className='flex flex-col gap-3'>
                <p className='text-lg font-semibold '>Account</p>
                <p className='text-sm text-gray-400 cursor-pointer'>My Account</p>
                <p className='text-sm text-gray-400 cursor-pointer'>Login / Register</p>
                <p className='text-sm text-gray-400 cursor-pointer'>Cart</p>
                <p className='text-sm text-gray-400 cursor-pointer'>Wishlist</p>
                <p className='text-sm text-gray-400 cursor-pointer'>Shop</p>
           </div>
           <div className='flex flex-col gap-3'>
              <p className='text-lg font-semibold'>Quick Link</p>
                <p className='text-sm text-gray-400 cursor-pointer'>Privacy Policy</p>
                <p className='text-sm text-gray-400 cursor-pointer'>Terms of Use</p>
                <p className='text-sm text-gray-400 cursor-pointer'>FAQ</p>
                <p className='text-sm text-gray-400 cursor-pointer'>Contact</p>
              
           </div>
           <div className='flex flex-col gap-3'>
               <p className='text-lg font-semibold'>Download App</p>
               <p className='text-sm text-gray-400'>Save $3 with App New User Only</p>
               <div className='flex flex-row items-center gap-1 '>
                    <div>
                       <QRCodeCanvas value="https://yourapp.com" size={96} className=' p-1 rounded' />
                    </div>
                    <div className='flex flex-col h-24 gap-2 items-center justify-center'>
                        <img 
                             src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                             alt="Get it on Google Play"
                             className="object-contain rounded h-5 w-auto"
                        />
                         <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-pre-order-on-the-app-store.svg" 
                         alt="Apple Icon" className="h-5 w-auto object-contain"/>
                    </div>
               </div>
               <div className="flex gap-5 text-white text-lg ml-3 items-center mt-3">
                   <FaFacebookF className="cursor-pointer hover:text-gray-400" />
                   <FaTwitter className="cursor-pointer hover:text-gray-400" />
                   <FaInstagram className="cursor-pointer hover:text-gray-400" />
                   <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
               </div>
           </div>
        </div>

           <div className='w-full text-center justify-center mt-20 mb-0 gap-x-1 flex'>
               <span className='text-gray-400 text-md relative top-0.125'>©</span>
                <span className='text-gray-400 text-sm'>Copyright Rimel 2022. All right reserved</span>
           </div>
    </div>

    
  )
}

export default Footer