import { Navigate, useParams } from 'react-router-dom';
import Hero from '../../components/Hero.jsx';
import SectionHeader from '../../components/SectionHeader.jsx';
import Testimonials from '../../components/Testimonials.jsx';
import CTASection from '../../components/CTASection.jsx';
import { locations } from '../../data/siteData.js';
import { siteAssets } from '../../assets/siteAssets.js';

export default function LocationDetail() {
  const { slug } = useParams();
  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    return <Navigate to="/locations/epping" replace />;
  }

  return (
    <>
      <Hero compact eyebrow="Location" title={location.title} subtitle={location.subtitle} image={siteAssets.homeHero} />
      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader eyebrow="Local support" title="Tax should not be confusing." />
            <p className="body-copy">{location.intro}</p>
          </div>
          <div className="rounded-md bg-mint p-6">
            <h2 className="text-2xl font-bold text-navy">Why locals choose RPS</h2>
            <div className="mt-5 grid gap-3">
              {['Registered tax agents', 'Fixed fees quoted upfront', 'Named point of contact', 'Remote or in-person support'].map((item) => (
                <p key={item} className="rounded-md bg-white p-4 text-sm font-semibold text-navy shadow-sm">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Who we serve" title="Industries and clients we work with" />
            <div className="grid gap-3 sm:grid-cols-2">
              {location.audience.map((item) => (
                <p key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-navy">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Services" title="Everything most individuals and small businesses need" />
            <div className="grid gap-3 sm:grid-cols-2">
              {location.services.map((item) => (
                <p key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-navy">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader eyebrow="Our process" title="Five steps. You always know what's happening." center />
          <div className="grid gap-4 md:grid-cols-5">
            {['Book a call', 'Send documents', 'We prepare', 'You approve', 'We lodge'].map((step, index) => (
              <div key={step} className="rounded-md border border-slate-200 p-5 text-center">
                <p className="text-3xl font-bold text-gold">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-3 text-sm font-bold text-navy">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <CTASection title="Book your free consultation" />
    </>
  );
}
