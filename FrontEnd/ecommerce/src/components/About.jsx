import React from 'react'
import { Store,CircleDollarSign,BriefcaseBusiness,BadgeDollarSign} from 'lucide-react'
import Card from './Card'
import Info from'./Info'

function About() {
  return (
       <div>
       <div className='grid md:grid-cols-2 grid-cols-1 mt-25 p-3 gap-12'>
                
                <div className='flex justify-center items-center relative right-10'>
                    <div className='flex flex-col space-y-4 relative bottom-6'>
                         <h1 className='text-[35px] font-semibold leading-tight mb-6'>
                            Our Story
                         </h1>
                         <span>
                         <span className='block text-md '>
                          Launced in 2015, Exclusive is South Asia’s premier online shopping
                         </span>
                         <span className='block text-md '>
                          makterplace with an active presense in Bangladesh. Supported 
                         </span>
                         <span className='block text-md '>
                          by wide range of tailored marketing, data and service solutions,
                         </span>
                         <span className='block text-md '>
                          Exclusive has 10,500 sallers and 300 brands and serves 3 
                         </span>
                         <span className='block text-md '>
                          millioons customers across the region. 
                         </span>
                         </span>
                         <span>
                          <span className='block text-md '>
                          Exclusive has more than 1 Million products to offer, growing at a
                          </span>
                         <span className='block text-md '>
                          very fast. Exclusive offers a diverse assotment in categories 
                         </span>
                         <span className='block text-md '>
                          ranging  from consumer.
                         </span>
                        </span>
                    </div>
                </div>
                <div className='w-full'>
                    <img src="images/side_image.png" alt=""  className='h-[450px] w-auto'/>
                </div>


        </div>

        <div className='mt-6 p-20 pr-30 pl-30 '>
            <div className='grid sm:grid-cols-4 grid-cols-2 gap-4'>
                  <Card text1="10.5k" text2="Sellers active our site" Icon={Store}/>
                  <Card text1="33k" text2="Monthly Product Sales" Icon={CircleDollarSign}/>
                  <Card text1="45.5k" text2="Sellers active our site" Icon={BriefcaseBusiness}/>
                  <Card text1="25k" text2="Annaul gross sale in ourr site" Icon={BadgeDollarSign}/>
            </div>
        </div>

        <div className='grid sm:grid-cols-3 grid-cols-1'>
             <Info></Info>
        </div>


        </div>
  )
} 

export default About