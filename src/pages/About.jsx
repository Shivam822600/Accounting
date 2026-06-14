import Hero from '../components/Hero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTASection from '../components/CTASection.jsx';
import { siteAssets } from '../assets/siteAssets.js';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <Hero
        compact
        eyebrow="About Us"
        title="An accounting partner that listens to you"
        subtitle="With Capital Edge Accounting & Business Advisors, your business-related issues are handled by experienced professionals who value clarity, trust and practical support."
        image={siteAssets.team}
        primaryTo="/contact"
      />

      {/* 1. Story Section (Split Layout) */}
      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Left Side: Narrative story */}
          <div>
            <SectionHeader
              eyebrow="Our Story & Philosophy"
              title="CPA-led advisory focused on your commercial growth"
            />
            <div className="space-y-5 text-slate-650 text-sm leading-relaxed mt-6">
              <p>
                Established with a vision to move beyond basic compliance form-filling, Capital Edge Accounting & Business Advisors was founded to give local businesses and families a dedicated financial partner. We believe that accounting should be collaborative and strategic. Unlike traditional firms that treat client files as transactions, we take the time to understand your commercial trajectory, cashflow pain points, and asset goals.
              </p>
              <p>
                All ledger management, corporate tax structuring, and compliance operations are conducted 100% in-house by our CPA-qualified team in Epping. By eliminating offshoring, we maintain absolute data security and ensure that the advice you receive is tailored to the Australian taxation framework and local regulations.
              </p>
              <p>
                From tradies setting up their first trust structures to medical practices optimizing multi-tier service agreements, we deliver transparent, fixed-fee arrangements. No surprise hourly rates, no hidden fees—just high-end, responsive support that empowers you to grow with confidence.
              </p>
            </div>
          </div>

          {/* Right Side: Image with overlapping stat badge */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-goldAccent/10 to-amber-500/10 blur-lg opacity-75" />
            <div className="relative rounded-2xl overflow-hidden shadow-soft border border-slate-100">
              <img
                src={siteAssets.about || siteAssets.team}
                alt="Capital Edge Accounting Team"
                className="w-full h-80 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Overlapping floating stat badge */}
            <div className="absolute -bottom-6 -left-6 bg-slate-950 text-white p-6 rounded-2xl shadow-soft border border-white/10 max-w-[200px]">
              <div className="text-center">
                <span className="block text-4xl font-extrabold text-goldAccent font-serif">2022</span>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Established</span>
                <div className="border-t border-white/5 my-3" />
                <span className="block text-2xl font-extrabold text-white font-serif">200+</span>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Clients Served</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Strategic Offerings Checklist Section */}
      <section className="section bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-goldAccent/10 via-transparent to-transparent pointer-events-none" />
        <div className="container-page relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-goldAccent">Core Competencies</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mt-3 leading-tight">
              Strategic Tax Solutions for Business Success
            </h2>
            <p className="mt-4 text-slate-400 text-sm max-w-xl">
              We align cloud-ledgers and legal structuring to secure your margins and protect your wealth. Explore the key pillars of our strategic solutions.
            </p>

            <ul className="mt-8 space-y-4 max-w-lg">
              {[
                'Legal tax minimization frameworks configured for immediate cash retention.',
                'Real-time cloud ledger architectures (Xero/MYOB) for daily runway visibility.',
                'Dual-advisor reviews on every ATO return to guarantee 99.8% compliance accuracy.',
                'Comprehensive corporate registry secretary support and ASIC compliance updates.',
                'Strategic wealth structures including SMSF setups and asset protection trusts.',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-goldAccent/25 text-goldAccent text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="text-xs text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:text-right">
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-md inline-block text-left w-full max-w-sm">
              <h4 className="text-lg font-bold text-white font-serif mb-2">Need a tailored plan?</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Connect with our local Epping advisors to map out your deductions and structuring.
              </p>
              <Link to="/contact" className="btn-pill w-full text-center block">
                Schedule Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 'Why Choose Us' Trio */}
      <section className="section bg-slate-50 border-t border-b border-slate-200/40">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Standards"
            title="The Capital Edge Commitments"
            subtitle="We hold ourselves to higher standards of operational excellence, transparency, and accounting precision."
            center
          />

          <div className="grid gap-8 md:grid-cols-3 mt-12">
            
            {/* Column 1: Professionalism */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-soft hover:border-goldAccent/30 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-goldAccent/10 text-goldAccent mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">Professionalism</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-3">
                Our operations are led by CPA-qualified practitioners and registered tax agents who maintain strict compliance with Tax Practitioners Board regulations. We review every client file with thorough attention to detail, ensuring zero compliance gaps.
              </p>
            </div>

            {/* Column 2: Responsiveness */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-soft hover:border-goldAccent/30 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-goldAccent/10 text-goldAccent mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">Responsiveness</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-3">
                No client should wait weeks for an answer. We prioritize proactive communication, maintaining average lodgement turnarounds of five business days for personal filings. We reply to ledger and billing inquiries promptly.
              </p>
            </div>

            {/* Column 3: Quality */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-soft hover:border-goldAccent/30 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-goldAccent/10 text-goldAccent mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">Quality</h3>
              <p className="text-slate-600 text-xs leading-relaxed mt-3">
                We deliver robust digital bookkeeping infrastructures and meticulous audits that protect your business runway. By tailoring asset protection trusts and structure configurations, we safeguard what you have worked to build.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
