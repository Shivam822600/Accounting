import { useState } from 'react';
import Hero from '../components/Hero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTASection from '../components/CTASection.jsx';
import { siteAssets } from '../assets/siteAssets.js';

export default function Industries() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionItems = [
    {
      id: 'profit',
      title: 'Maximise Profit',
      desc: 'Profit optimization is not about raw sales growth—it is about managing unit economics and margins. We review your current pricing structures, analyze product or service profit contributions, and isolate low-margin operations to ensure your business maximizes capital retention.'
    },
    {
      id: 'cashflow',
      title: 'Management of Cash Flow',
      desc: 'Cash flow is the lifeblood of any growing enterprise. We help you setup automated ledger reconciliation feeds, model weekly cash runway, manage working capital cycles, and structure accounts receivable/payable systems to prevent cash crunches.'
    },
    {
      id: 'costs',
      title: 'Cost Control Measures',
      desc: 'Keeping overheads tight requires active expense reviews. We audit utility cost margins, software subscription stacks, supplier allocations, and staff utilization figures, providing a clear dashboard showing where you can trim waste without sacrificing product quality.'
    },
    {
      id: 'benchmarking',
      title: 'Business Benchmarking',
      desc: 'We compare your operational performance metrics against verified ATO and industry averages. By identifying discrepancies in labor costs, inventory turnarounds, and gross margins, we highlight key performance gaps and opportunities.'
    }
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <>
      <Hero
        compact
        eyebrow="Specialist Support"
        title="Business Set-Up, Improvement & Advice"
        subtitle="CPA-led strategic advisory and structural setup designed to optimize margins, protect assets, and grow local Melbourne businesses."
        image={siteAssets.advisory}
        primaryTo="/contact"
      />

      {/* 1. Intro Section */}
      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Strategic Advisory"
              title="Tailored financial guidance for Melbourne businesses"
            />
            <div className="space-y-5 text-slate-600 text-sm leading-relaxed mt-6">
              <p>
                Navigating the complexities of business operations requires more than just submitting tax returns at the end of the financial year. At Capital Edge Accounting, we act as your year-round financial co-pilot, helping you establish a stable foundation for commercial scaling.
              </p>
              <p>
                <strong>Strategic Business Setup:</strong> We register your ABN, ACN, and GST configurations, structuring company and trust frameworks from day one. Choosing the correct setup prevents liability exposure, simplifies family group tax planning, and ensures your corporate assets remain insulated from operational risk.
              </p>
              <p>
                <strong>Continuous Improvement:</strong> Our team continuously monitors your bookkeeping ledgers (Xero/MYOB) to isolate pricing inefficiencies and margin leaks. We deliver clear, visual performance indicators and budget forecasts that enable you to make informed decisions about inventory purchases, capital expenditure, and employee recruitment.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-3xl shadow-soft">
            <h4 className="text-lg font-bold text-slate-900 font-serif mb-4">Our Advisory Value</h4>
            <div className="space-y-4">
              {[
                { title: 'Fixed-Fee Packaging', desc: 'No surprise hourly invoices. All advisory and setup projects are quoted upfront.' },
                { title: '100% Local CPA', desc: 'All ledger analysis and tax configurations are processed directly by our Epping HQ.' },
                { title: 'Tax-Efficient Structures', desc: 'Custom configured company, partnership, and family trust setups.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-goldAccent/10 text-goldAccent text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-slate-900">{item.title}</span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Accordion/Expandable List Section */}
      <section className="section bg-slate-50 border-t border-b border-slate-200/40">
        <div className="container-page max-w-4xl">
          <SectionHeader
            eyebrow="Key Focus Areas"
            title="Strategic improvement modules"
            subtitle="Explore how we audit and enhance specific areas of your corporate financial operations."
            center
          />

          <div className="mt-10 space-y-4">
            {accordionItems.map((item) => {
              const isOpen = activeAccordion === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200/60 bg-white overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left outline-none hover:bg-slate-50/50"
                  >
                    <span className="font-bold text-navy text-sm md:text-base leading-relaxed">{item.title}</span>
                    <span className="text-goldAccent font-bold text-xl leading-none transition-transform duration-200">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50/30 px-5 pb-5 pt-4 text-xs md:text-sm leading-relaxed text-slate-650 animate-fadeIn">
                      {item.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Business Benchmarking Highlight Section */}
      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          
          {/* Left Side: Illustration Card */}
          <div className="bg-slate-950 text-white p-8 md:p-10 rounded-3xl border border-slate-900 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-goldAccent/10 via-transparent to-transparent pointer-events-none" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-goldAccent">Performance Gaps</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-4 leading-tight">
              Is your business performing to its full potential?
            </h3>
            <p className="text-slate-400 text-xs mt-4 leading-relaxed">
              Without accurate benchmarking, business owners frequently miss key operational inefficiencies. We resolve this by running matching audits against real ATO data registers in your specific code industry.
            </p>
            <div className="border-t border-white/5 my-6" />
            <div className="flex items-center gap-3">
              <span className="text-4xl text-goldAccent">📈</span>
              <div>
                <h4 className="text-xs font-bold text-white">Compare margins</h4>
                <p className="text-[10px] text-slate-500">Benchmark your labor & COGS costs instantly</p>
              </div>
            </div>
          </div>

          {/* Right Side: 4-point question list */}
          <div>
            <SectionHeader
              eyebrow="Benchmarking Audit"
              title="Key questions we help you resolve"
            />
            <div className="mt-6 space-y-4">
              {[
                'How does your gross margin compare to verified industry standards in Melbourne?',
                'Is your employee cost-to-turnover ratio fully optimized for your sector?',
                'Are your administrative overhead costs aligned with similar-scale operators?',
                'How efficient is your working capital and inventory turnaround cycle?'
              ].map((question, idx) => (
                <div key={idx} className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-goldAccent/10 text-xs font-bold text-goldAccent">
                    {idx + 1}
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
