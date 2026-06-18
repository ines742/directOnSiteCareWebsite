import { Link } from "react-router-dom";
import { challenges, teamMembers, heroContent } from "../constants";

const About = () => {
  return (
    <main className="bg-white text-[#002D74]">
      {/* Hero */}
      <section className="px-5 pt-36 pb-20">
        <div className="container mx-auto max-w-6xl">
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
            About Direct Onsite Care
          </p>

          <h1 className="mb-8 text-4xl font-bold md:text-6xl">
            Healthcare Solutions Built Around the Workplace
          </h1>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p>
                Since 1990, Direct Onsite Care has been committed to making
                healthcare more accessible and convenient for businesses and
                employees throughout Pittsburg, Kansas and surrounding areas.
              </p>

              <p>
                We understand that businesses face unique healthcare challenges,
                including rising insurance costs, employee absenteeism, and lost
                productivity. Our mission is to provide workplace-focused
                healthcare solutions that improve employee wellness while
                supporting employers.
              </p>

              <p>
                Through onsite healthcare services, preventative care, and
                tailored workplace programs, we help businesses create healthier
                and more productive environments.
              </p>
            </div>

            <img
              src="/images/about.png"
              alt="Direct Onsite Care"
              className="h-[500px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold md:text-5xl">
            Challenges Businesses Face
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {challenges.map((challenge, index) => (
              <div
                key={challenge}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#002D74] text-lg font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-[#002D74]">
                  {challenge}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-5 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-3xl bg-[#002D74] p-10 text-white">
            <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
              What Makes Us Different
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Direct, Convenient, and Cost-Effective Care
            </h2>

            <div className="space-y-5 text-lg leading-8 text-white/85">
              <p>
                Our healthcare services are designed specifically for the
                workplace, helping employees receive care without unnecessary
                time away from work.
              </p>

              <p>
                We focus on preventative care, convenient scheduling, and
                workplace wellness programs that support both employers and
                employees.
              </p>

              <p>
                By bringing healthcare directly onsite, businesses can improve
                productivity, employee satisfaction, and overall workplace
                wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 px-5 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14">
            <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#85754E]">
              Meet Our Team
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              Experienced Healthcare Professionals
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-95 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#002D74]">
                    {member.name}
                  </h3>

                  <p className="mt-2 font-semibold text-[#85754E]">
                    {member.role}
                  </p>

                  <p className="mt-5 leading-7 text-slate-700">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24">
        <div className="container mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm md:p-16">
          <h2 className="mb-5 text-3xl font-bold md:text-5xl">
            Supporting Healthier Workplaces
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-700">
            Direct Onsite Care helps businesses improve employee wellness,
            reduce absenteeism, and create more productive work environments
            through convenient onsite healthcare services.
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

export default About;