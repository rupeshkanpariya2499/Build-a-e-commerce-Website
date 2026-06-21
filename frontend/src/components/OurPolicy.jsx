import React from 'react'
import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className= 'flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

    <div>
        <img src= {assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>Not satisfied with your purchase? No problem! We offer a hassle-free exchange policy within 30 days of delivery.</p>
    </div>
    <div>
        <img src= {assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>Not satisfied with your purchase? No problem! We offer a hassle-free return policy within 7 days of delivery.</p>
    </div>
    <div>
        <img src= {assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>24/7 Customer Support</p>
        <p className='text-gray-400'>Have questions or need assistance? Our dedicated customer support team is available 24/7 to help you with any inquiries.</p>
    </div>
    </div>
  )
}

export default OurPolicy