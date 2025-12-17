import React from 'react'
import { estheticsServices } from '../constants'

const Esthetics = () => {
  return (
    <div className='container pt-30 pb-15 max-md:pt-20 '>
      <div className='mx-auto text-center mb-20 pb-10 max-md:mb-10 max-md:pb-5'>
        <span className='mb-6 inline-block text-md uppercase tracking-[0.25em] text-grey-400 '>
          Luxury Skincare & Wellness
        </span>
        <h1 className='mb-10 uppercase text-[70px] font-black leading-[100px] tracking-[-0.03em] text-brown-400 max-md:h2 max-md:mb-10 max-md:text-4xl max-md:leading-tight'>
          Esthetics Services</h1>
          <div >
            <p className='mb-14 text-[25px] leading-relaxed text-grey-400 max-md:text-base max-md:mb-10'>Rejuvenate and enhance your natural beauty with our professional esthetic treatments. Discover our 
              customized, relaxing services designed to leave you refreshed and glowing.</p>
          </div>
      </div>
      <div >
        {estheticsServices.map(({ id, title, img, description }) => (
          <article key={id} 
          className='rounded-2xl border p-6 mb-12 max-w-2xl mx-auto'>
            <img src={img} alt={`${title} service`} className='w-full h-50 object-cover rounded-xl'/>
            <h3 className='h5 mt-4 max-lg:2xl max-lg:break-words '>{title}</h3>
            <p className='body-3 mt-2'>{description}</p>

          </article>
        ))}

      </div>
      
    </div>
  )
}

export default Esthetics