import React from 'react'

function About() {
  return (
       
        <div className='flex flex-col mt-20'>
            <div className='flex flex-row justify-between p-3'>
                 <div className='flex flex-col gap-6 max-w-[600px] align-middle bg-red-600'>
                       <h1 className="text-3xl font-semibold text-center">
                            Our Story
                       </h1>
                      <div className='flex flex-col text-center items-center gap-6'>
                         <p className="text-gray-600 text-sm leading-6">
    Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
  </p>
                         <p className="text-gray-600 text-sm leading-6">
    Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.
  </p>

                      </div>
                 </div>
                 <img src="/images/side_image.png" className='w-150 h-85'/>
               <div>

                 </div>
            </div>

        </div>
  )
}

export default About