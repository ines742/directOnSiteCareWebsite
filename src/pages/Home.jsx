
import { Link } from "react-router-dom";
import { services } from "../constants";
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-16 max-md:pb-3">
        <div className="container">
          <div className="relative z-2">
            <div className="caption small-2 uppercase "> 
              Beauty & Health
            </div>
            <h1 className="mb-6 text-[84px] font-black leading-[84px] tracking-[-0.03em]
           text-brown-400 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-4xl max-md:leading-12">
              Empowered Confidence
            </h1>
            <p className="max-w-140 mb-14 text-[25px] leading-[36px] max-md:mb-10"> 
              Redefine your Beauty, Reclaim your
            Energy, Empower your best self with Skinny DRIP</p>
          </div>
          <img 
          src="/images/skinnyDripHero.png"
          alt="Skinny Drip Hero"
          className="absolute top-3 left-[calc(55%-10px)] lg:w-[560px] max-lg:left-[calc(50%-10px)] 
          max-md:relative max-md:top-0 max-md:left-0"
          />
        </div>
      </section>
      {/* Services Section */}
      <section >
        <div className="container lg:mt-26 max-md:mt-16 ">
          <div className="relative flex md:flex-wrap flex-nowrap md:overflow-hidden max-md:flex-col 
          max-md:gap-3 border-2 border-brown-50 max-md:border-none rounded-lg">
            {services.map(({id, title, description, button, img}) => (
              <div key={id}
              className="relative z-2 md:px-10 px-5 md:py-10 pb-5 flex-50 max-md:g6 max-md:border-2 
              max-md:rounded-3xl max-md:flex-320">
                <div className="w-full flex justify-start items-start">
                  <div className="mb-6 overflow-hidden rounded-2xl max-md:mt-4">
                    <img
                      src={img}
                      alt={title}
                      className="h-[180px] w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105 "
                     />
                  </div>
              </div>
              <h2 className=" max-w-400 mb-7 mt-8 h3 max-md:mb-6 max-md:h5" >{title}</h2>  
              <p className="mb-11 body-1 max-md:mb-8 max-md:body-3" >{description}</p>
              <Button href={button?.link}>{button.text}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
