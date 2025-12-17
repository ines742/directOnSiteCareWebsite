import { ivTherapyServices } from "../constants"


const IVTherapy = () => {
  return (
    <>
      <section className="relative overflow-hidden pt-50 pb-30 max-lg:pt-52 
           max-md:pt-16 max-md:pb-18 ">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div>
            <h1 className="mb-6 text-[64px] font-black leading-[84px] tracking-[-0.03em] text-brown-400 uppercase 
               max-lg:mb-7 max-md:mb-4 max-md:text-3xl max-md:leading-12">
                IV Infusion Therapy
            </h1>
            <p className="max-w-[560px] text-lg leading-relaxed text-gray-700 max-md:text-base ">
              Rejuvenate your body and mind with our tailored IV therapy solutions,
              designed to boost hydration, enhance wellness, and revitalize your energy levels.
              </p>
              </div>
              <div className="relative">
                <div className="absolute -top-12 -right-12 h-full w-full rounded-2xl bg-brown-50 opacity-20 max-md:hidden" />
                <img
                 src="/images/hydration.jpg"
                 alt="IV Therapy Hydration"
                 className="relative z-10 w-full rounded-2xl object-cover shadow-xl max-md:rounded-3xl"
                 />
              </div>
        </div>
      </section>
      
      <section >
        <div className="container py-30 max-lg:py-20 max-md:py-12 ">
          <div className="space-y-28 max-lg:space-y-20 max-md:space-y-12">
            {ivTherapyServices.map(({ id, title, img, description }, index) => (
              <div 
                key={id}
                className={`grid items-center gap-18 max-lg:gap-8 max-md:gap-4 
                  ${index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2 lg:[direction:rtl]"}`}
                  >
                    {/*IMAGE*/}
                    <div className="relative overflow-hidden rounded-3xl">
                      <img
                        src={img}
                        alt={`${title} service`}
                        className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 max-md:h-[220px]"
                      />
                    </div>
                    <div className="max-w-[48ch] lg:[direction:ltr]"> 
                      <h2 className="mb-4 text-3xl font-bold tracking-tight text-brown-400 max-md:text-2xl">
                        {title}
                      </h2>
                      <p className="text-lg leading-relaxed text-gray-700 max-md:text-base" >{description}</p>
                    </div>
                </div>
            ))}

          </div>
        </div>
      </section>
  </>
  )
}

export default IVTherapy