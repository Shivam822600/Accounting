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
        eyebrow="Our Expertise"
        title="Accounting & Strategic Tax Services"
        subtitle="CPA-guided financial services tailored for individual taxpayers, family trusts, and fast-growing Melbourne businesses."
        image={siteAssets.advisory}
      />
      
      <section className="section bg-[#F8FAFC]">
        <div className="container-page">
          <SectionHeader
            title="Comprehensive Financial Solutions"
            subtitle="CPA Qualified reviews, fixed-upfront pricing, and expert ATO compliance advice."
            center
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust credentials banner */}
      <section className="bg-white py-16 px-5 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="p-6 rounded-2xl border border-slate-100/80 bg-slate-50/50">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-extrabold text-navy text-lg">CPA Qualified Reviews</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Every return and financial statement is audited and reviewed in-house by a fully qualified CPA accountant.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100/80 bg-slate-50/50">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-extrabold text-navy text-lg">Xero Platinum Partner</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Certified Xero expertise to streamline bookkeeping, payroll, single touch payroll, and GST reconciliations.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100/80 bg-slate-50/50">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-extrabold text-navy text-lg">Registered Tax Agent</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                TPB Agent No. 16657196248. Fully authorized ATO representation with year-round lodgement extensions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
