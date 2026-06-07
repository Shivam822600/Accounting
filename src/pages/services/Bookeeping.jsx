import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero.jsx";
import SectionHeader from "../../components/SectionHeader.jsx";
import CTASection from "../../components/CTASection.jsx";
import { services } from "../../data/siteData.js";

const BookkeepingAccounting = () => {
  const data = services.find((s) => s.slug === "bookkeeping-accounting") || {
    title: "Bookkeeping and Accounting Service",
    subtitle: "Melbourne Bookkeeping & Accounting Services for Small Business",
    summary: "Managing bookkeeping and accounting processes to predict the future course of your business.",
    intro: "Our bookkeeping and accounting services help Australian companies meet ongoing compliance requirements.",
    sections: []
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <Hero
        compact
        eyebrow="Services"
        title={data.title}
        subtitle={data.subtitle}
        image="https://rpsaccountants.com.au/wp-content/uploads/2026/01/Bookkeeping-taxation-1024x576.jpg"
      />

      {/* Main content grid */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          
          {/* Sidebar */}
          <aside className="sticky top-28 rounded-2xl bg-mint p-8 shadow-sm">
            <span className="eyebrow">Overview</span>
            <h2 className="text-3xl font-extrabold text-navy mt-3 mb-5 leading-snug">
              Why get professional bookkeeping?
            </h2>
            <p className="body-copy text-sm leading-relaxed mb-6">
              {data.summary}
            </p>
            <div className="border-t border-navy/10 pt-6">
              <p className="text-xs font-bold uppercase text-navy/60 tracking-wider">Software We Use</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Xero", "MYOB", "QuickBooks"].map((sw) => (
                  <span key={sw} className="bg-white px-3.5 py-1.5 rounded-md text-xs font-bold text-navy shadow-sm">
                    {sw}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-navy/10 pt-6 mt-6">
              <p className="text-xs font-bold uppercase text-navy/60 tracking-wider mb-3">Trust & Compliance</p>
              <ul className="space-y-3 text-xs text-navy/80 font-semibold">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  CPA Qualified Reviews
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Xero Platinum Practice
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  100% In-House Processing
                </li>
              </ul>
            </div>
          </aside>

          {/* Core Info */}
          <div>
            <div className="mb-10">
              <SectionHeader
                eyebrow="Compliance & Accuracy"
                title="Secure Your Books with Professional CPA Accounting"
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

      <CTASection title="Looking for seamless bookkeeping support?" />
    </main>
  );
};

export default BookkeepingAccounting;