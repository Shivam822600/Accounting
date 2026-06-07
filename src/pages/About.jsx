import Hero from '../components/Hero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTASection from '../components/CTASection.jsx';
import { siteAssets } from '../assets/siteAssets.js';

export default function About() {
  return (
    <>
      <Hero
        compact
        eyebrow="About Us"
        title="An accounting service that listens to you"
        subtitle="With RPS Accountants & Business Advisors, your business-related issues are handled by experienced professionals who value clarity, trust and practical support."
        image={siteAssets.team}
        primaryTo="/contact"
      />

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-md border border-slate-200 bg-white p-8 text-center shadow-soft">
              <span className="block text-5xl font-extrabold text-gold">2022</span>
              <span className="mt-2 block text-sm font-semibold text-ink uppercase tracking-wider">Established</span>
            </div>
            <div className="rounded-md border border-slate-200 bg-white p-8 text-center shadow-soft">
              <span className="block text-5xl font-extrabold text-gold">200+</span>
              <span className="mt-2 block text-sm font-semibold text-ink uppercase tracking-wider">Clients Served</span>
            </div>
            <img src={siteAssets.about} alt="RPS Accounting Team" className="rounded-md object-cover shadow-soft col-span-2 w-full h-48 lg:h-64" loading="lazy" />
          </div>

          <div>
            <SectionHeader
              eyebrow="Why choose us ?"
              title="Why choose RPS Accountants & Business Performance Services?"
            />
            <p className="body-copy">
              Accounting and financing can be tricky without the right kind of support and tools. With RPS Accountants & Business Advisors, you and your business-related issues are in safe hands. We are not only experienced, professional and reliable but also take your views and concerns into consideration.
            </p>
            <p className="body-copy mt-4">
              Unlike other accounting firms out there, your opinions, references, and worries matter at RPS Accountants & Business Advisors. In addition, we make it a point to resolve all your queries and provide services that will aid your business in growing.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-mint">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Cases"
            title="What We Have Done"
            subtitle="At RPS we understand the importance of using technology and staying up-to-date with digital innovations."
            center
          />
          <div className="grid gap-6 md:grid-cols-3">
            {['Accounting and Taxation', 'GST and Superannuation', 'Business Growth'].map((title) => (
              <article key={title} className="rounded-md bg-white p-6 shadow-soft">
                <h3 className="text-xl font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Practical accounting support designed to save time, reduce uncertainty and help you focus on the
                  work that matters.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CTASection />
    </>
  );
}

