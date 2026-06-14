import React from "react";
import Hero from "../../components/Hero.jsx";
import SectionHeader from "../../components/SectionHeader.jsx";
import CTASection from "../../components/CTASection.jsx";
import { services } from "../../data/siteData.js";

const MedicalAccountants = () => {
  const data = services.find((s) => s.slug === "medical-accountants") || {
    title: "Medical Accountants",
    subtitle: "Specialist Medical Accountants for Melbourne Health Professionals",
    summary: "Supporting healthcare professionals with GST, BAS, payroll, structuring, and ATO compliance.",
    intro: "Handling a medical practice is challenging; its accounting shouldn't be.",
    sections: []
  };

  const featureCards = [
    {
      title: "Dedicated Accountant",
      desc: "Get a dedicated specialist who knows the healthcare sector rules and handles practice accounting directly."
    },
    {
      title: "Real-Time Support",
      desc: "Instant answers and support tailored around daily clinical workflows without waiting."
    },
    {
      title: "Expert Structuring",
      desc: "Maximize practice deductions, manage service trusts correctly, and lower personal income taxes legally."
    },
    {
      title: "Practice Insights",
      desc: "Actionable cash flow projections, practice fit-out calculations, and equipment tax strategies."
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Hero
        compact
        eyebrow="Services"
        title={data.title}
        subtitle={data.subtitle}
        image="https://rpsaccountants.com.au/wp-content/uploads/2026/01/Accounting-Services-for-Healthcare-Firms.jpg"
      />

      {/* Overview Block */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 rounded-2xl bg-mint p-8 shadow-sm">
            <span className="eyebrow">Medical Specialists</span>
            <h2 className="text-3xl font-extrabold text-navy mt-3 mb-5 leading-snug">
              Focus on Patients, We Do the Numbers
            </h2>
            <p className="body-copy text-sm leading-relaxed mb-6">
              {data.summary}
            </p>
            <div className="border-t border-navy/10 pt-6">
              <p className="text-xs font-bold uppercase text-navy/60 tracking-wider">Clinicians We Serve</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["General Practitioners", "Dentists", "Allied Health", "Specialists"].map((doc) => (
                  <span key={doc} className="bg-white px-3.5 py-1.5 rounded-md text-xs font-bold text-navy shadow-sm">
                    {doc}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-navy/10 pt-6 mt-6">
              <p className="text-xs font-bold uppercase text-navy/60 tracking-wider mb-3">Practice Specialties</p>
              <ul className="space-y-3 text-xs text-navy/80 font-semibold">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Personal Services Income (PSI) Rules
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Service Trust Agreements (AMA Compliance)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Practice Acquisition & Goodwill Valuation
                </li>
              </ul>
            </div>
          </aside>

          {/* Details Content */}
          <div>
            <div className="mb-10">
              <SectionHeader
                eyebrow="Healthcare Accounting"
                title="Specialist Tax & BAS Lodgement for Medical Professionals"
              />
              <p className="body-copy mt-4 text-slate-700 leading-8">
                {data.intro}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6 sm:grid-cols-2 mb-12">
              {featureCards.map((feat, idx) => (
                <div key={idx} className="border border-slate-200 bg-slate-50/25 p-6 rounded-2xl transition hover:shadow-soft hover:bg-white hover:border-gold/30">
                  <h4 className="text-lg font-bold text-navy mb-2.5">{feat.title}</h4>
                  <p className="text-sm leading-6 text-slate-600">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Dynamic Sections */}
            <div className="grid gap-10">
              {data.sections.map((sect, idx) => (
                <article key={idx} className="border-t border-slate-100 pt-8">
                  <h3 className="text-xl font-bold text-navy mb-5 flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                    {sect.title}
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {sect.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/30 p-4 transition-all hover:bg-slate-50 hover:border-gold/30 hover:shadow-sm"
                      >
                        <svg className="h-5 w-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-semibold text-navy leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Request an expert medical consultation call" />
    </main>
  );
};

export default MedicalAccountants;