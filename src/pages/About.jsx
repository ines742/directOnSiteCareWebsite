import React from 'react'
import { professionals } from '../constants'

const About = () => {
  return (
    <>
    <section className='py-32 max-lg:py-24 max-md:py-16' >
      <div className='container'>
        <h1 className='mb-6 text-[84px] font-black leading-[84px] tracking-[-0.03em]
           text-brown-400 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-4xl max-md:leading-12'>
          About Us
        </h1>
        <p className='body-1 text-gray-600 leading-[28px] max-lg:text-2xl max-md:2xl max-lg:leading-7 mb-10'>
          SkinnyDRIP helps individuals achieve their health and beauty goals through
          advanced IV hydration, effective weight loss programs, and aesthetic treatments.
          We focus on creating a welcoming environment, providing personalized care, and
          maintaining the highest service standards.
        <br /><br />
          Our mission is to foster a community where individuals can embrace their best
          selves with the support of innovative treatments and a dedicated team.
        </p>
      </div>
      
    </section>
    <section className="bg-brown-50/10 py-32 max-lg:py-24 max-md:py-16">
  <div className="container space-y-32 items-center max-lg:space-y-20 max-md:space-y-16">
    {professionals.map(({ id, name, img, biography }, index) => (
      <div
        key={id}
        className={`grid lg:grid-cols-2 gap-10 items-center 
          ${ index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Image */}
        <img
          src={img}
          alt={name}
          className={`h-[320px] max-lg:h-[280px] max-md:h-[220px] overflow-hidden rounded-4xl 
            ${ index % 2 === 1 ? "lg:col-start-2" : ""
          }`}
        />
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-brown-400 mb-6">
            {name}
          </h2>

          <p className="body-1 text-gray-700 leading-relaxed whitespace-pre-line">
            {biography}
          </p>
        </div>
      </div>
    ))}

  </div>
</section>

    </>
  )
}

export default About