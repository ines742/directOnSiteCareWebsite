import {
  heroContent,
  homeStats,
  homeBenefits,
  servicesPreview,
  wellnessContent,
  employeeBenefits,
} from "../constants";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-white text-[#002D74]">
      {/* Hero */}
      <section className="min-h-screen px-5 pt-32 pb-20">
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
              Direct On Site Care
            </p>

            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              {heroContent.title}
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-700">
              {heroContent.subtitle}
            </p>

            <a
             href={heroContent.buttonLink}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block rounded-full bg-[#002D74] px-8 py-4 font-semibold text-white transition hover:bg-[#85754E]"
             >
             {heroContent.buttonText}
            </a>
          </div>

          <div className="relative">
            <img
              src="/images/hero.png"
              alt="Healthcare professionals onsite"
              className="h-[480px] w-full rounded-[2rem] object-cover shadow-xl"
            />

            <div className="absolute -bottom-8 left-6 right-6 rounded-3xl bg-white p-6 shadow-xl">
              <p className="font-semibold text-[#85754E]">
                Onsite Healthcare Services
              </p>
              <p className="mt-2 text-slate-700">
                Convenient medical care directly at the workplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#002D74] px-5 py-20 text-white">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          {homeStats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center"
            >
              <h3 className="mb-3 text-5xl font-bold text-[#85754E]">
                {stat.value}
              </h3>
              <p className="leading-7 text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="px-5 py-24">
        <div className="container relative mx-auto">
          <div className="mb-14 w-full text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
              Employer Benefits
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#002D74] md:text-5xl">
              Reduce Costs. Support Employees. Improve Productivity.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {homeBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="h-85 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-[#002D74]">
                    {benefit.title}
                  </h3>
                  <p className="leading-7 text-slate-700">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-slate-50 px-5 py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src="/images/OnSiteCare.png"
              alt="Onsite healthcare services"
              className="h-[520px] w-full rounded-[2rem] object-cover shadow-lg"
            />

            <div className="absolute -right-4 -top-4 hidden rounded-3xl bg-[#85754E] px-8 py-6 text-white shadow-lg md:block">
              <p className="text-3xl font-bold">35+</p>
              <p className="text-sm font-medium">Years Experience</p>
            </div>
          </div>

          <div>
            <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
              Services Offered
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Healthcare Services Designed for the Workplace
            </h2>

            <p className="mb-8 leading-8 text-slate-700">
              Direct On Site Care provides convenient workplace healthcare
              services that help employees receive timely care while helping
              employers manage healthcare costs.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {servicesPreview.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold text-[#002D74] shadow-sm"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wellness */}
      <section className="px-5 py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
              Wellness Programs
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              {wellnessContent.title}
            </h2>

            <p className="mb-8 text-lg leading-8 text-slate-700">
              {wellnessContent.description}
            </p>

            <ul className="space-y-4">
              {employeeBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-2xl border-l-4 border-[#85754E] bg-slate-50 px-5 py-4 text-slate-700"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/images/wellness.png"
            alt="Employee wellness program"
            className="h-[520px] w-full rounded-[2rem] object-cover shadow-lg"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <div className="container mx-auto overflow-hidden rounded-[2rem] bg-[#002D74]">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 text-white md:p-16">
              <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
                Get Started
              </p>

              <h2 className="mb-5 text-3xl font-bold md:text-5xl">
                Bring Healthcare Directly to Your Workplace
              </h2>

              <p className="mb-8 max-w-xl leading-8 text-white/90">
                Help your team access convenient care while supporting lower
                costs, stronger retention, and a healthier workplace.
              </p>

              <a
                href={heroContent.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#85754E] px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#002D74]"
              >
                Schedule Now
              </a>
            </div>

            <img
              src="/images/dreamTeam.png"
              alt="Workplace healthcare"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;