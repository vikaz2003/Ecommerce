import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram, FaLinkedin } from 'react-icons/fa'

const Info = ({src,name,role}) => {
  return (
    <div className='flex flex-col space-y-3'>
        <img src={src} alt="" className='w-92.5 h-75'/>
        <span className='font-semibold text-xl'>{name}</span>
        <span className='text-sm text-black/59 relative bottom-3'>{role}</span>
        <div className='flex space-x-2 relative  bottom-2'>
                 <FaLinkedin className="cursor-pointer hover:text-gray-400" />
                 <FaTwitter className="cursor-pointer hover:text-gray-400" />
                 <FaInstagram className="cursor-pointer hover:text-gray-400" />
        </div>
    </div>
  )
}

export default Info