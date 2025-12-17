import React from 'react'
import { weightLossServices } from '../constants'

const WeightLoss = () => {
  return (
    <section className='bg-brown-50/10 py-20 max-lg:py-24'>
      <div className='container '>
        <div className='mb-24 max-lg:mb-16 max-md:mb-10 text-center'>
          <h1 className='text-brown-400 uppercase text-[54px] font-black leading-[84px] tracking-[-0.03em] mb-8
               max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-4xl max-md:leading-12'>Semaglutide & Tirzepatide 
            <br/>Weight Loss Program</h1>
            <p className='body-1 text-gray-500 max-w-3xl mx-auto'>
              A refined monthly program combining personalized lab work,
              physician-guided consultations, and discreet delivery of your
              GLP-1 and GIP medications — designed for sustainable results.
            </p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {weightLossServices.map(({ id, title, img }) => (
            <div 
             key={id}
             className='relative overflow-hidden rounded-2xl group'>
              <img 
                src={img}
                alt={title}
                className='h-[360px] w-full object-cover' />
              </div>
          ))}

        </div>

      </div>

    </section>

  )
}

export default WeightLoss