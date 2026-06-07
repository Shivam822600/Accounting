import React from "react";
import Hero from "../../components/Hero.jsx";
import SectionHeader from "../../components/SectionHeader.jsx";
import CTASection from "../../components/CTASection.jsx";
import { services } from "../../data/siteData.js";

const SMSFServices = () => {
  const data = services.find((s) => s.slug === "smsf-accountants") || {
    title: "SMSF Accountants",
    subtitle: "Self-Managed Super Fund (SMSF) Accounting & Administration",
    summary: "Thinking about a self-managed super fund? RPS Accountants provides SMSF setup and compliance.",
    intro: "SMSFs offer incredible flexibility and control over retirement wealth.",
    sections: []
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Hero
        compact
        eyebrow="Services"
        title={data.title}
        subtitle={data.subtitle}
        image="https://rpsaccountants.com.au/wp-content/uploads/2026/01/Superannuation-SMSF-Services-1-1024x576.jpg"
      />

      {/* SMSF Details */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          
          {/* Sidebar */}
          <aside className="sticky top-28 rounded-2xl bg-mint p-8 shadow-sm">
            <span className="eyebrow">Retirement & Wealth</span>
            <h2 className="text-3xl font-extrabold text-navy mt-3 mb-5 leading-snug">
              Unlock Your Retirement Control
            </h2>
            <p className="body-copy text-sm leading-relaxed mb-6">
              {data.summary}
            </p>
            <div className="border-t border-navy/10 pt-6">
              <p className="text-xs font-bold uppercase text-navy/60 tracking-wider">SMSF Operations</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Fund Trust Deed", "Annual Returns", "SMSF Audits", "LRBA Loans"].map((lbl) => (
                  <span key={lbl} className="bg-white px-3.5 py-1.5 rounded-md text-xs font-bold text-navy shadow-sm">
                    {lbl}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Details Content */}
          <div>
            <div className="mb-10">
              <SectionHeader
                eyebrow="SMSF Specialists"
                title="End-to-End Super Fund Administration"
              />
              <p className="body-copy mt-4 text-slate-700 leading-8">
                {data.intro}
              </p>
            </div>

            {/* Sub-sections Grid */}
            <div className="grid gap-10">
              {data.sections.map((sect, idx) => (
                <article key={idx} className="border-t border-slate-100 pt-8 first:border-t-0 first:pt-0">
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

      <CTASection title="Do you want to establish an SMSF or check compliance?" />
    </main>
  );
};

export default SMSFServices;