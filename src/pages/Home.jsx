import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services, contact, reviews } from '../data/siteData.js';
import { siteAssets } from '../assets/siteAssets.js';

// Onboarding steps for vertical roadmap
const processSteps = [
  {
    step: '01',
    title: 'Discovery & Ledger Audit',
    desc: 'Book a free 30-minute discovery consult. We analyze your ledger frameworks, identify missing deduction options, and establish your optimization goals.'
  },
  {
    step: '02',
    title: 'Tailored Tax & Growth Strategy',
    desc: 'We construct a customized strategy, mapping out deductions, structuring business assets, or organizing BAS/bookkeeping. Everything tailored to your specific goals.'
  },
  {
    step: '03',
    title: 'Seamless ATO Lodgement & Support',
    desc: 'We file your returns and BAS with 99.8% compliance accuracy. Our Melbourne CPA team remains your proactive financial co-pilot all year round.'
  }
];

// Strategic Industry List
const industriesList = [
  {
    id: 'tradies',
    label: 'Tradies & Subcontractors',
    title: 'Precision Bookkeeping & BAS for Trade Businesses',
    text: 'Keep your vehicle claims, tool write-offs, and subcontractor allocations fully sorted. We integrate your bank accounts with Xero so you can manage invoicing directly from site, keeping your ledger clean and audit-ready.',
    metrics: ['Average $8,400 saved annually', 'Quarterly BAS filed on time', 'Optimal asset protection trust structures']
  },
  {
    id: 'medical',
    label: 'Medical & Healthcare Practice',
    title: 'Professional Medical Practice Financial Operations',
    text: 'General practitioners, dentists, and allied health professionals manage unique billing regulations. We optimize your service trusts, calculate GST-exempt service allocations, and structure practice assets safely.',
    metrics: ['Service Trust arrangement compliance', 'Equipment lease deductions', 'CPA-prepared practice returns']
  },
  {
    id: 'startups',
    label: 'Startups & SMEs',
    title: 'Strategic Growth Structuring & Capital Allocation',
    text: 'From starting your corporate setup and getting ASIC registration to forecasting monthly cash runway. We prepare clear, bank-ready financial reports to help secure corporate funding and grants.',
    metrics: ['Xero setup & payroll matching', 'Cash flow runway modeling', 'ABN/TFN/GST setup in 24 hours']
  },
  {
    id: 'property',
    label: 'Property Investors',
    title: 'Taxation Strategy for Residential & Commercial Portfolios',
    text: 'Maximize depreciation schedules, plan for Capital Gains Tax (CGT) events, and structure negative gearing setups to grow your real estate portfolio safely.',
    metrics: ['Capital Gains Tax calculations', 'Depreciation scheduling coordination', 'Trust investment configuration']
  }
];

export default function Home() {
  const [activeIndustry, setActiveIndustry] = useState('tradies');
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-slate-50 text-slate-700 font-sans overflow-hidden">

      {/* 1. Asymmetric SaaS-Style Hero (Obsidian card visual split) */}
      <section className="relative pt-32 pb-28 lg:pt-48 lg:pb-40 bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-goldAccent/10 via-transparent to-transparent pointer-events-none" />

        <div className="container-page px-5 sm:px-6 lg:px-8 relative z-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">

          {/* Left Text Card Wrapper */}
          <div className="bg-slate-900/40 p-8 sm:p-12 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-md">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#d97706] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#d97706] animate-ping" />
              CPA Tax Agents No. 16657196248
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight tracking-tight">
              Proactive tax planning.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] to-amber-300">
                Strategic wealth setup.
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-400">
              We replace basic form-filling with custom tax architecture and automated cloud ledgers. Get CPA-qualified expertise backed by fixed-fee proposals and zero hourly billing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Schedule Strategy Session
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                to="/services"
                className="btn-secondary-light"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Floating Elements */}
          <div className="relative lg:block hidden">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#d97706]/20 to-amber-500/10 blur-xl opacity-75 animate-pulse" />
            <div className="relative bg-slate-900 border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">MELBOURNE HQ LEDGER MONITOR</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold uppercase tracking-wider">COMPLIANT</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5">
                  <span className="text-xs text-slate-400 block">Deductions Identified YTD</span>
                  <div className="flex justify-between items-end mt-1">
                    <span className="text-2xl font-bold text-white font-serif">$14,820.00</span>
                    <span className="text-emerald-400 text-xs font-semibold">+12.4%</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs text-slate-400 block">Xero Cloud Ledger Status</span>
                      <span className="text-sm font-semibold text-white mt-1 block">Q3 BAS Statement</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-[9px] font-bold">LODGED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tiny overlay info badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-xl shadow-2xl border border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#d97706]/10 text-[#d97706] flex items-center justify-center font-bold text-xs">
                CPA
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">100% In-House Team</h4>
                <p className="text-[9px] text-slate-500">No outsourcing, Epping HQ</p>
              </div>
            </div>
          </div>

        </div>

        {/* Curved Wave SVG Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg className="relative block w-full h-[30px] lg:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* 2. Moved Up: Industry Solutions Tab Showcase (Highly Conversional) */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="container-page px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow">SECTOR FOCUS</span>
            <h2 className="heading-lg mt-3">Tailored financial setups for your industry</h2>
            <p className="text-slate-500 mt-4 text-sm">
              Discover how we structure your taxation parameters based on your business sector.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start max-w-5xl mx-auto">
            {/* Tab buttons sidebar */}
            <div className="space-y-2">
              {industriesList.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind.id)}
                  className={`w-full text-left px-6 py-4 rounded-2xl border font-bold text-sm transition-all duration-200 flex justify-between items-center ${activeIndustry === ind.id
                    ? 'bg-slate-900 border-slate-900 text-white shadow-soft'
                    : 'bg-slate-50 border-slate-200/60 text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  <span>{ind.label}</span>
                  <span className="text-xs opacity-50 font-normal">→</span>
                </button>
              ))}
            </div>

            {/* Content panel */}
            <div className="bg-slate-50 border border-slate-200/60 p-8 md:p-10 rounded-3xl">
              {industriesList.map((ind) => {
                if (ind.id !== activeIndustry) return null;
                return (
                  <div key={ind.id} className="animate-fadeIn">
                    <h3 className="text-2xl font-bold text-slate-900 font-serif">{ind.title}</h3>
                    <p className="text-slate-600 text-sm mt-4 leading-relaxed">{ind.text}</p>

                    <div className="mt-8 border-t border-slate-200/60 pt-6">
                      <span className="text-xs font-bold text-slate-450 uppercase tracking-widest block mb-4 text-slate-500">Core Deliverables & Financial Outcomes</span>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {ind.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-2.5 rounded-xl bg-white p-3 text-xs text-slate-600 border border-slate-200/40 shadow-sm">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        to="/contact"
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        Request Industry Advice
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Growth Metrics Board (Asymmetric grid layout) */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-goldAccent/5 to-transparent pointer-events-none" />
        <div className="container-page px-5 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr] items-stretch">
            <div className="p-8 md:p-12 rounded-3xl bg-slate-950 border border-white/5 flex flex-col justify-between hover:border-goldAccent/30 transition duration-300">
              <div>
                <span className="eyebrow">OUR CUMULATIVE IMPACT</span>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white mt-4 leading-tight">
                  Over $15 Million Saved for Melbourne Businesses
                </h3>
              </div>
              <p className="text-slate-400 text-sm mt-6 leading-relaxed">
                We continuously audit ledger accounts to find legal write-offs, small business capital concessions, and optimization angles for sole traders, property builders, and practices.
              </p>
            </div>

            <div className="space-y-8 lg:space-y-0 lg:grid lg:gap-8 lg:grid-rows-2">
              <div className="p-8 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-goldAccent/20 transition duration-300">
                <span className="text-3xl font-extrabold text-white font-serif block">99.8%</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-2">Filing Accuracy Rate</span>
                <p className="text-xs text-slate-500 mt-2">Rigorous dual-advisor ledger checks prevent ATO audit concerns.</p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-goldAccent/20 transition duration-300">
                <span className="text-3xl font-extrabold text-white font-serif block">5 Days</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-2">Average Lodgement Speed</span>
                <p className="text-xs text-slate-500 mt-2">Most individual returns processed and lodged within 5 business days.</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-950/60 border border-white/5 flex flex-col justify-center hover:border-goldAccent/20 transition duration-300">
              <span className="text-5xl font-extrabold text-goldAccent font-serif block">200+</span>
              <span className="text-sm font-semibold text-slate-400 block mt-3">Active Melbourne Corporate Clients</span>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">Partnering with trade contractors, healthcare directors, SMSF funds, and sole traders across Melbourne's northern growth corridors.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Horizontal Service Row Showcase (Zebra Striped rows instead of standard card grid) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-page px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow">SERVICES</span>
            <h2 className="heading-lg mt-3">Streamlined, high-end ledger and tax advisory</h2>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="grid gap-8 lg:grid-cols-[1fr_2.5fr] items-start p-8 rounded-3xl bg-slate-50 border border-slate-200/60 hover:shadow-soft transition-all duration-300"
              >
                <div>
                  <span className="text-[#d97706] font-mono text-xs font-bold uppercase block mb-1">Pillar 0{index + 1}</span>
                  <h3 className="text-xl font-bold text-slate-900 font-serif leading-snug">{service.title}</h3>
                </div>

                <div className="flex flex-col justify-between h-full">
                  <p className="text-slate-600 text-sm leading-relaxed">{service.summary}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200/40">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs font-bold text-slate-900 hover:text-[#d97706] transition duration-300 inline-flex items-center gap-1.5"
                    >
                      Explore Details
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Alternating Why Us Focus Cards */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-b border-slate-200/40">
        <div className="container-page px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow">THE CAPITAL EDGE PILLARS</span>
            <h2 className="heading-lg mt-3">Why local owners choose us over traditional firms</h2>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Box 1 */}
            <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-center p-8 bg-white rounded-3xl border border-slate-200/60 shadow-sm">
              <div className="text-center md:text-left">
                <span className="text-5xl font-black font-serif text-[#d97706]/20">01</span>
                <h4 className="text-lg font-bold text-slate-900 mt-2">CPA Signed</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Registered Tax Agent No. 16657196248. Every ledger reconciliation, BAS draft, and corporate tax return is reviewed and signed off by qualified local advisors. Fully registered with the Tax Practitioners Board.
              </p>
            </div>

            {/* Box 2 */}
            <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-center p-8 bg-white rounded-3xl border border-slate-200/60 shadow-sm">
              <div className="text-center md:text-left">
                <span className="text-5xl font-black font-serif text-[#d97706]/20">02</span>
                <h4 className="text-lg font-bold text-slate-900 mt-2">Zero surprises</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                We work exclusively on clear fixed-fee proposals. No hourly billing, no surprise invoices for phone consults, and no hidden add-ons at filing time. You always know your exact compliance costs.
              </p>
            </div>

            {/* Box 3 */}
            <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-center p-8 bg-white rounded-3xl border border-slate-200/60 shadow-sm">
              <div className="text-center md:text-left">
                <span className="text-5xl font-black font-serif text-[#d97706]/20">03</span>
                <h4 className="text-lg font-bold text-slate-900 mt-2">100% In-house</h4>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                We value your data security. Unlike traditional corporate agencies that outsource administrative ledger tasks to offshore processors, all accounting is handled within our local Melbourne team environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Onboarding Flow Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-page px-5 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-20">
            <span className="eyebrow">ROADMAP</span>
            <h2 className="heading-lg mt-3">Simple 3-step transition to audit-ready ledgers</h2>
          </div>

          <div className="relative pl-8 sm:pl-16 border-l-2 border-slate-200 space-y-16">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative">
                {/* Timeline node */}
                <div
                  onClick={() => setActiveStep(idx)}
                  className={`absolute -left-[45px] sm:-left-[77px] top-0.5 w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-soft cursor-pointer transition ${activeStep === idx ? 'bg-[#d97706] text-white scale-110' : 'bg-slate-200 text-slate-600 hover:bg-slate-350'
                    }`}
                >
                  {step.step}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif">{step.title}</h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Typographic Testimonials */}
      {/* <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200/40">
        <div className="container-page px-5 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="eyebrow">CLIENT REVIEWS</span>
            <h2 className="heading-lg mt-3">What our Melbourne partners say</h2>
          </div>

          <div className="space-y-16">
            {reviews.map((rev, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-[#d97706]">
                <span className="absolute -top-6 -left-4 text-7xl font-serif text-[#d97706]/10 leading-none">“</span>
                <p className="text-lg md:text-xl text-slate-800 font-serif italic leading-relaxed">
                  "{rev.quote}"
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-bold text-slate-900">{rev.author}</h4>
                  <p className="text-[10px] text-slate-400">Capital Edge Verified Client</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 8. Final CTA with Pattern Background */}
      <section className="py-20 md:py-28 bg-slate-950 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#d97706]/15 to-transparent pointer-events-none" />

        <div className="container-page px-5 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white leading-tight">
            Ready to optimize your business taxes?
          </h2>
          <p className="mt-6 text-slate-350 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-slate-300">
            Book a free 30-minute discovery consult. Walk through your ledger accounts with a registered tax agent.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Schedule Strategy Call
            </Link>

            <Link
              to="/services"
              className="btn-secondary-light"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
