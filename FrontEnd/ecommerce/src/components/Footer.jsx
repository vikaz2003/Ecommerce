import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { QRCodeCanvas } from "qrcode.react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";



function Footer() {


  const handle=()=>{

  }


  return (
    <div className='bg-black text-white mt-20 flex flex-row justify-between pt-10 pl-5 pb-20 pr-5 w-full gap-x-5'>
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
               <div className='flex flex-row items-center gap-0.5 '>
                    <div>
                       <QRCodeCanvas value="https://yourapp.com" size={96} className=' p-1 rounded' />
                    </div>
                    <div className='flex flex-col h-24 gap-1'>
                         <img src="https://storage.googleapis.com/pe-portal-consumer-prod-wagtail-static/images/googleplay-badge-01-getit.width-1440.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=wagtail%40pe-portal-consumer-prod.iam.gserviceaccount.com%2F20260405%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260405T092930Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=41e07255aa899ea347280c2b71bde26066fafb9aec7c19fe04486d1111d798a2214ab314b1cfaa5378e707491f55aa6e01d100683cc30276984155944014d73e2b6330914a29c96685ad378394a1afe81de0cf0c29ce1c2fa98f84fdb821a4a9b1833ac6946aad15fc1294ac7e01ce1686803704c0f22d8b0c458b6960349653f5d3018deb4f31069aadcfce23357334260fde275e36efe85a16e625038a0ef9120ea8b6f4ff06679fad5d1c518bd782b3acff4f2d4e5a69eb4fcd32cc3182bacf19daa7f934af021dc5d4c383268393813f679c27b4267de64ff682c70fb00ce590db698e6fb94cd241633fe20b205eb3a2a4dfe89bc0f51b7d4a307f5eeb16" 
                         alt="Google Icon" className="w-32 object-contain rounded  h-[45%]"/>
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
  )
}

export default Footer