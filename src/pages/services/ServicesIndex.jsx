import Hero from '../../components/Hero.jsx';
import SectionHeader from '../../components/SectionHeader.jsx';
import ServiceCard from '../../components/ServiceCard.jsx';
import CTASection from '../../components/CTASection.jsx';
import { services } from '../../data/siteData.js';
import { siteAssets } from '../../assets/siteAssets.js';

export default function ServicesIndex() {
  return (
    <>
      <Hero
        compact
        eyebrow="Services"
        title="Accounting and Tax Services Epping"
        subtitle="No matter whether your business is small, medium or growing fast, we help make financial management easier."
        image={siteAssets.advisory}
      />
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader
            title="Services"
            subtitle="Tax, bookkeeping, business advisory, SMSF and medical accounting support under one roof."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
