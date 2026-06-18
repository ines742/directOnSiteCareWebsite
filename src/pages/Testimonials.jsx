import { heroContent } from "../constants";
import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <main className="bg-white text-[#002D74]">
      {/* Hero */}
      <section className="relative px-5 pb-20 pt-36">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#002D74] px-8 py-16 text-center text-white shadow-xl">
            <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
              Client Stories
            </p>

            <h1 className="text-4xl font-bold uppercase tracking-wide md:text-6xl">
              Testimonials
            </h1>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/85">
              Hear from companies that have experienced the impact of Direct
              Onsite Care in their workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 py-20">
        <div className="container mx-auto space-y-12">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10 lg:grid-cols-[0.35fr_1fr]"
            >
              <div className="flex flex-col justify-between rounded-[1.5rem] bg-[#002D74] p-8 text-white">
                <div>
                  <span className="text-6xl font-bold text-[#85754E]">“</span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                    Testimony {index + 1}
                  </p>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                  <p className="mt-2 text-white/80">{testimonial.role}</p>
                  <p className="font-semibold text-[#85754E]">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <p className="text-lg leading-9 text-slate-700">
                  “{testimonial.quote}”
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24">
        <div className="container mx-auto rounded-[2rem] bg-[#002D74] px-8 py-16 text-center text-white">
          <h2 className="mb-5 text-3xl font-bold md:text-5xl">
            Ready to Bring Onsite Care to Your Workplace?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-8 text-white/85">
            Direct Onsite Care helps companies support employees, reduce
            absenteeism, and improve workplace productivity.
          </p>

          <a
            href={heroContent.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#85754E] px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#002D74]"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;