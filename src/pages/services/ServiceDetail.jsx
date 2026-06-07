import { Navigate, useParams } from 'react-router-dom';
import Hero from '../../components/Hero.jsx';
import SectionHeader from '../../components/SectionHeader.jsx';
import CTASection from '../../components/CTASection.jsx';
import { services } from '../../data/siteData.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Hero compact eyebrow="Services" title={service.title} subtitle={service.subtitle} image={service.image} primaryTo="/contact" />
      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-md bg-mint p-6 h-fit">
            <p className="eyebrow mb-3">Our Services</p>
            <h2 className="text-2xl font-bold text-navy">{service.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {service.summary}
            </p>
          </aside>
          <div className="grid gap-10">
            <section>
              <SectionHeader title="Service Overview" />
              <p className="body-copy leading-relaxed">{service.intro}</p>
            </section>
            
            {service.sections.map((section) => (
              <section key={section.title} className="border-t border-slate-100 pt-8">
                <h3 className="text-xl font-bold text-navy mb-4">{section.title}</h3>
                {section.body && <p className="body-copy mb-4">{section.body}</p>}
                {section.items && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <div key={item} className="rounded-md border border-slate-200 p-4 text-sm font-semibold text-navy flex items-start gap-2 bg-slate-50/50">
                        <span className="text-gold mt-1">&#8226;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
      <CTASection title={`Need help with our ${service.title}?`} />
    </>
  );
}
