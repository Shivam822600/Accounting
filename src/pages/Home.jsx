import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTASection from '../components/CTASection.jsx';
import { locations, services, contact } from '../data/siteData.js';
import { siteAssets } from '../assets/siteAssets.js';

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    text: "Book a free 30-minute call with one of our Melbourne tax advisors. We'll review your situation, understand your goals, and identify where you may be leaving money on the table."
  },
  {
    number: '02',
    title: 'Tailored Tax Strategy',
    text: "We build a clear plan whether that's maximising deductions on your return, structuring your business correctly, or managing your BAS obligations. No cookie-cutter advice. Everything is specific to you."
  },
  {
    number: '03',
    title: 'Lodgement & Ongoing Support',
    text: "We prepare and lodge everything with the ATO accurately and on time. And we don't disappear after that — we're available year-round for questions, planning, and anything your finances need next."
  }
];

const features = [
  {
    title: 'TPB Registered Tax Agent',
    desc: 'Fully accountable to the Tax Practitioners Board — verify our registration any time on the TPB public register.',
    badge: 'No. 16657196248'
  },
  {
    title: 'Fixed-Fee Pricing',
    desc: "Know exactly what you'll pay before we start. No hourly surprises, no hidden add-ons at invoice time."
  },
  {
    title: 'Advice That Grows You',
    desc: 'Not just form-filling. We help you structure, save and plan ahead.'
  },
  {
    title: '5-Day Turnaround',
    desc: 'Most individual tax returns completed within 5 business days.'
  },
  {
    title: 'In-House, No Offshoring',
    desc: 'Every return reviewed by our Melbourne team. Never offshored.'
  }
];

export default function Home() {
  return (
    <>
      <Hero
        title="Melbourne's Trusted Tax Accountant & Business Accounting Firm"
        subtitle="RPS Accountants & Business Advisors is a registered Melbourne accounting firm providing expert tax returns, BAS lodgement, bookkeeping, SMSF, and business advisory services for individuals, sole traders, and growing businesses across Melbourne City and surrounds. Tax Agent No. 16657196248."
        image={siteAssets.homeHero}
      />

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <img src={siteAssets.about} alt="About RPS Accountants" className="rounded-md object-cover shadow-soft w-full h-auto" loading="lazy" />
          <div>
            <SectionHeader
              eyebrow="About RPS"
              title="Melbourne's Trusted Accounting Partner Since 2022"
            />
            <p className="body-copy">
              At RPS Accountants & Business Advisors, we believe accounting should work for you not the other way around. We’re a Melbourne-based firm of CPA-qualified accountants and registered tax agents who specialise in making tax season stress-free for individuals, families, and small-to-medium businesses across the city.
            </p>
            <p className="body-copy mt-4">
              Whether you’re lodging a personal return, setting up an SMSF, managing payroll, or planning your next business move our team brings the expertise, technology, and genuine care to get it right, every time.
            </p>
            <p className="body-copy mt-4">
              We use Xero, MYOB, and QuickBooks to keep your books accurate and up-to-date, and we stay current with ATO requirements so you never have to worry about compliance. From Melbourne CBD to the northern suburbs, our clients trust us because we’re responsive, transparent, and genuinely invested in their financial success.
            </p>
            <Link to="/about" className="btn-primary mt-7 inline-flex items-center gap-2">
              Know More About Us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-mint">
        <div className="container-page">
          <div className="text-center mb-10">
            <span className="eyebrow">Our Services</span>
            <h2 className="heading-lg mt-2">3-Step Tax Process</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.number} className="rounded-md border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-4xl font-bold text-gold">{step.number}</p>
                <h3 className="mt-5 text-xl font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white border-t border-slate-100">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">Why RPS</span>
            <h2 className="heading-lg mt-4">Why Melbourne clients choose us</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div key={i} className="rounded-md border border-slate-200 bg-white p-6 shadow-soft flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink leading-relaxed">{feature.desc}</p>
                </div>
                {feature.badge && (
                  <div className="mt-4">
                    <span className="rounded bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold">{feature.badge}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving Suburbs / Where We Work */}
      <section className="section bg-navy text-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="eyebrow">Where We Work</span>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl mt-3">Serving Melbourne's Northern Suburbs</h2>
            <p className="mt-6 text-sm leading-7 text-white/75">
              Our office is based in Epping, right in the heart of Melbourne’s northern growth corridor. We provide in-person and online tax and accounting services to individuals, families, tradies, and small businesses across the region — with local knowledge that a CBD firm simply can’t offer.
            </p>
            <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a local consult
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {locations.map((loc) => {
              const isEpping = loc.slug === 'epping';
              return (
                <article key={loc.slug} className="rounded-md border border-white/10 bg-white/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-white">{loc.slug.charAt(0).toUpperCase() + loc.slug.slice(1)}</h3>
                      {isEpping && (
                        <span className="rounded bg-gold/15 px-2 py-0.5 text-xs font-semibold text-gold">HQ Office</span>
                      )}
                    </div>
                    <p className="mt-3 text-xs leading-6 text-white/70">
                      {loc.slug === 'epping' 
                        ? "Tax and accounting services from our Epping office — conveniently located on Gateway Boulevard for clients across Melbourne's north."
                        : loc.slug === 'bundoora'
                        ? "Accounting support for La Trobe University staff, students, and local professionals navigating complex income and deduction scenarios."
                        : loc.slug === 'lalor'
                        ? "Practical tax and bookkeeping advice for Lalor's growing community of tradies, sole traders, and multicultural small business owners."
                        : loc.slug === 'mill-park'
                        ? "Trusted tax returns and business accounting for Mill Park families and owner-operators in one of Melbourne's most established northern suburbs."
                        : loc.slug === 'south-morang'
                        ? "Helping South Morang's fast-growing residential community stay on top of tax obligations, SMSF, and first-time business finances."
                        : loc.slug === 'thomastown'
                        ? "Specialist accounting for Thomastown's industrial and manufacturing businesses — from BAS lodgement to payroll and ATO compliance."
                        : "Local tax advice for Whittlesea's mix of rural landowners, small businesses, and new estate residents managing their finances with confidence."
                      }
                    </p>
                  </div>
                  <div className="mt-5">
                    <Link to={`/locations/${loc.slug}`} className="text-xs font-bold text-gold hover:underline inline-flex items-center gap-1">
                      Learn More
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="text-center mb-10">
            <span className="eyebrow">What We Do</span>
            <h2 className="heading-lg mt-2">Accounting and tax services across Melbourne</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {services.map((service, idx) => (
              <div key={service.slug} className="flex gap-4 border-b border-slate-100 pb-6 last:border-0 md:border-b-0">
                <span className="text-3xl font-extrabold text-gold">{`0${idx + 1}`}</span>
                <div>
                  <h3 className="text-xl font-bold text-navy hover:text-gold transition">
                    <Link to={`/services/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm text-ink leading-relaxed">{service.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials showGoogleBtn={true} />
      <CTASection />

      {/* Hours and Map Section */}
      <section className="section bg-white border-t border-slate-100">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-md border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-soft">
            <div>
              <h3 className="text-xl font-bold text-navy flex items-center gap-2 mb-4">
                <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hours
              </h3>
              <ul className="text-sm text-ink space-y-2.5">
                <li className="flex justify-between border-b border-slate-200/60 pb-1.5"><span>Monday</span> <span className="font-semibold text-navy">9:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between border-b border-slate-200/60 pb-1.5"><span>Tuesday</span> <span className="font-semibold text-navy">9:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between border-b border-slate-200/60 pb-1.5"><span>Wednesday</span> <span className="font-semibold text-navy">9:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between border-b border-slate-200/60 pb-1.5"><span>Thursday</span> <span className="font-semibold text-navy">9:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between border-b border-slate-200/60 pb-1.5"><span>Friday</span> <span className="font-semibold text-navy">9:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span className="font-semibold text-navy">9:00 AM – 5:00 PM</span></li>
              </ul>
            </div>
            <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 text-center">
              Book Now
            </a>
          </div>

          <div className="h-[350px] w-full rounded-md overflow-hidden border border-slate-200 shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501.6291040903327!2d144.99877768181491!3d-37.6352793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65106014faa8f%3A0x1b757606388e99e9!2sRPS%20Accountants%20%26%20Business%20Advisors!5e1!3m2!1sen!2sau!4v1776236633262!5m2!1sen!2sau" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="RPS Accountants & Business Advisors Google Map Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}

