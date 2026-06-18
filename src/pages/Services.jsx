import { Link } from "react-router-dom";
import {
  commonCareServices,
  heroContent,
  serviceCategories,
  supportServices,
} from "../constants";


const Services = () => {
  return (
    <main className="bg-white text-[#002D74]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#002D74] px-5 pb-24 pt-36 text-white">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#85754E]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="container relative mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
              Our Services
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Onsite Healthcare Services Built for the Workplace
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/85">
              Direct On Site Care helps employers provide convenient medical
              services at work, supporting healthier employees, lower healthcare
              costs, and improved productivity.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <img
              src="/images/services.png"
              alt="Onsite healthcare services"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 text-[#002D74]">
                <p className="text-3xl font-bold text-[#85754E]">35+</p>
                <p className="text-sm font-semibold">Years Experience</p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-[#002D74]">
                <p className="text-3xl font-bold text-[#85754E]">100+</p>
                <p className="text-sm font-semibold">Clients Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-5 py-24">
        <div className="container mx-auto">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
              What We Provide
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Complete Healthcare Management Solutions
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {serviceCategories.map((service) => (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:border-[#85754E] hover:shadow-xl"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-[#002D74] transition group-hover:bg-[#85754E]" />
                  <h3 className="text-2xl font-bold text-[#002D74]">
                    {service.title}
                  </h3>
                </div>

                <p className="mb-6 leading-8 text-slate-600">
                  {service.description}
                </p>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Medical Care */}
      <section className="bg-slate-50 px-5 py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <img
              src="/images/treatments.png"
              alt="Common onsite medical care"
              className="h-[520px] w-full rounded-[2rem] object-cover shadow-lg"
            />

            <div className="absolute -bottom-8 left-6 right-6 rounded-3xl bg-white p-6 shadow-xl">
              <h3 className="mb-2 text-xl font-bold text-[#002D74]">
                Care When Employees Need It
              </h3>
              <p className="text-slate-600">
                Helping reduce unnecessary urgent care and ER visits.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
              Onsite Care
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
              Treatment for Common Illnesses and Minor Injuries
            </h2>

            <p className="mb-8 leading-8 text-slate-600">
              Employees can receive care for common health concerns directly at
              the workplace during scheduled onsite clinic hours.
            </p>

            <div className="flex flex-wrap gap-3">
              {commonCareServices.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-[#002D74]/15 bg-white px-5 py-3 text-sm font-semibold text-[#002D74] shadow-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="px-5 py-24">
        <div className="container mx-auto">
          <div className="rounded-[2.5rem] bg-[#002D74] p-8 text-white md:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
                  Additional Support
                </p>

                <h2 className="mb-5 text-3xl font-bold md:text-5xl">
                  Cost-Saving Services That Support Better Care
                </h2>

                <p className="leading-8 text-white/85">
                  Direct On Site Care can help employers control services with
                  pharmacy, laboratory, radiology, prevention programs, and
                  onsite support.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {supportServices.map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-white/15 bg-white/10 p-5 font-semibold backdrop-blur-md"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee + Employer Benefits */}
      <section className="bg-slate-50 px-5 py-24">
        <div className="container mx-auto grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <img
              src="/images/access.png"
              alt="Employee healthcare benefits"
              className="mb-8 h-64 w-full rounded-[1.5rem] object-cover"
            />

            <h3 className="mb-5 text-3xl font-bold text-[#002D74]">
              Benefits for Employees
            </h3>

            <ul className="space-y-4 text-slate-700">
              <li>Convenient access to healthcare</li>
              <li>Timely diagnosis and treatment</li>
              <li>Enhanced overall well-being</li>
              <li>Preventative care and health education</li>
            </ul>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <img
              src="/images/productivity.png"
              alt="Employer healthcare benefits"
              className="mb-8 h-64 w-full rounded-[1.5rem] object-cover"
            />

            <h3 className="mb-5 text-3xl font-bold text-[#002D74]">
              Benefits for Employers
            </h3>

            <ul className="space-y-4 text-slate-700">
              <li>Improved productivity</li>
              <li>Reduced absenteeism</li>
              <li>Enhanced company morale and loyalty</li>
              <li>Cost savings and controlled services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24">
        <div className="container mx-auto rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-xl md:p-16">
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
            Ready to Learn More?
          </p>

          <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold text-[#002D74] md:text-5xl">
            Build a Healthier, More Productive Workplace
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-8 text-slate-600">
            Ask how Direct On Site Care can help your company reduce healthcare
            costs while supporting employees with convenient onsite care.
          </p>

          <a
            href={heroContent.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#002D74] px-8 py-4 font-semibold text-white transition hover:bg-[#85754E]"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;