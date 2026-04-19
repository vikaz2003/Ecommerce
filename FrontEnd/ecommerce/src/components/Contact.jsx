import React from 'react'
import { Phone,Mail } from 'lucide-react'

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto place-items-center mt-20 mb-20">
       <div className="md:col-span-1 bg-white shadow-sm p-6 rounded text-center">
            <div className='flex flex-col p-3 space-y-3 text-sm'>
                 
                 <div className='flex gap-2 text-center'>
                 <div className='rounded-full p-2 bg-red-400'>
                       <Phone />
                 </div>
                 <p className='relative top-3 left-2 font-semibold'>Call To US</p>
                 </div>

                 <div className="flex flex-col gap-1 items-start">
                        <p className="text-sm ">We are available 24/7, 7 days a week.</p>
                         <p className="text-sm">Phone : +88016111222</p>
                 </div>

                 
                 
                <hr className="border-t border-gray-300 my-4" />
                <div className='flex gap-2 text-center'>
                <div className='rounded-full p-2 bg-red-400'>
                       <Mail />
                 </div>
                 <p className='relative top-1.75 left-2 font-semibold text-md'>Write To US</p>
                 </div>
                </div>
                
                <div className="flex flex-col gap-2.5 items-start">
                <p className='text-sm'>Fill out our form and we will contact</p>
                <p className='text-sm'>you within 24 hours.</p>
                <p className='text-sm'>Emails: customer@exclusive.com</p>
                <p className='text-sm'>Emails: support@exclusive.com</p>
                </div>
            </div>
           
           
       
        
       <div className="md:col-span-2  shadow-sm p-6 rounded w-full ">
               <div className="flex flex-col space-y-6 p-6">
                       <div className='flex flex-row space-x-2 justify-between outline-none'>
                       <div>
                         <input placeholder="Your Name" className='outline-none border-gray-400 text-gray-500 border p-2  rounded-md '>
                         </input>
                       </div>
                       <div >
                           <input placeholder="Your Email" className='outline-none border-gray-400 text-gray-500 border p-2  rounded-md '>
                         </input>
                       </div>
                       <div>
                          <input placeholder="Your Phone" className='outline-none border-gray-400 text-gray-500 border p-2  rounded-md ' />
                        
                       </div>
                       </div>
                       <div >
                          <textarea placeholder="Your Message" className='outline-none border-gray-400 text-gray-500 border p-2 rounded-md h-[140px] w-full resize-none'/>
                         

                       </div>
                       <div className='flex justify-end'>
                           <button className='bg-red-500 p-2 rounded-md text-white cursor-pointer'>Send Message</button>
                       </div>
               </div>
            
            <div>
                 
            </div>
       </div>
    </div>
  )
}

export default Contact