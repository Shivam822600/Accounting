import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { contact } from "../../data/siteData.js";

const locations = [
  {
    id: "epping",
    name: "Epping",
    badge: "HQ Office",
    isHQ: true,
    icon: "🏢",
    tagline: "Our main office — walk in, drive in, or connect online.",
    address: "453 Lithgow Street, Beveridge VIC 3753",
    phone: "1300 110 120",
    email: "admin@capitaledgeaccounting.com.au",
    hours: "Mon–Sat · 9:00 AM – 5:00 PM",
    distance: "Beveridge is our registered HQ",
    mapUrl: "https://maps.google.com/maps?q=453%20Lithgow%20Street%2C%20Beveridge%2C%20VIC%2C%203753&t=&z=13&ie=UTF8&iwloc=&output=embed",
    bookingUrl: "https://calendly.com/capitaledgeaccounting",
    description: "A CPA-led practice and registered tax agent serving individuals, sole traders, and growing businesses across Melbourne's northern growth corridor — Epping, Wollert, Mernda, South Morang and beyond.",
    whoWeServe: [
      "Salaried & PAYG workers",
      "Sole traders & ABN holders",
      "Property investors",
      "SMSF trustees",
      "Self-funded retirees",
      "GPs & dentists",
      "Cafés & restaurants",
      "Building & construction",
      "Electricians & plumbers",
      "Transport & logistics",
    ],
    services: [
      { title: "Individual Tax Returns", desc: "Employees, students, retirees and complex personal returns. Deductions, rentals, capital gains, shares, crypto, offsets." },
      { title: "Sole Trader & Partnership", desc: "ABN income, business expenses, motor vehicle, home office, asset depreciation and quarterly BAS bundled in." },
      { title: "Company & Trust Returns", desc: "Form C company returns, ASIC reviews, Division 7A, trust distributions, resolutions and end-of-year planning." },
      { title: "Bookkeeping", desc: "Xero, MYOB and QuickBooks setup, monthly recs, AP/AR, payroll, STP, and super processing." },
      { title: "BAS, GST & PAYG", desc: "Quarterly BAS, monthly IAS, PAYG instalments and withholding setup — lodged on time, every quarter." },
      { title: "SMSF", desc: "Setup, annual returns, member statements, audit coordination, and ongoing compliance." },
      { title: "Business Advisory", desc: "Structure reviews, cashflow forecasting, budgeting, profit improvement and exit-planning conversations." },
      { title: "Medical Accountants", desc: "Specialist tax and structuring for GPs, specialists, dentists, and allied health professionals." },
    ],
    whyUs: [
      "Real walk-in office with free parking at 453 Lithgow Street",
      "CPA-led, nothing offshored — every return reviewed locally",
      "TPB Registered Tax Agent No. 16657196248",
      "Fixed-fee pricing quoted upfront, no surprises",
      "5-day turnaround on personal returns",
      "Year-round support — we don't disappear after July",
    ],
    faqs: [
      { q: "Do I need to come in or can I do it online?", a: "Either works. About half our clients lodge fully online through our secure portal. The other half prefer face-to-face — especially first-timers, sole traders and clients with rental properties." },
      { q: "What do I need to bring?", a: "Photo ID, bank account details, and records for deductions you want to claim. We pull your PAYG income, interest, dividends and health details directly from the ATO once authorised." },
      { q: "How long for my refund?", a: "Once lodged electronically, the ATO typically processes refunds within 7–14 business days directly into your bank account." },
      { q: "Can you help if I haven't lodged for years?", a: "Yes — we regularly catch up clients who are 2–10+ years behind. We'll work out which years are outstanding and lodge them in order." },
    ],
  },
  {
    id: "bundoora",
    name: "Bundoora",
    isHQ: false,
    icon: "🎓",
    tagline: "Serving La Trobe University staff, students & healthcare professionals.",
    address: "453 Lithgow Street, Beveridge VIC 3753",
    phone: "1300 110 120",
    email: "admin@capitaledgeaccounting.com.au",
    hours: "Mon–Sat · 9:00 AM – 5:00 PM",
    distance: "15 min from Bundoora via Plenty Road",
    bookingUrl: "https://calendly.com/capitaledgeaccounting",
    description: "Bundoora is home to La Trobe University, a cluster of medical facilities along Plenty Road, and some of Melbourne's most complex taxpayers — academics, healthcare workers navigating salary packaging, PhD students, and allied health practitioners.",
    whoWeServe: [
      "University academics & researchers",
      "PhD students with stipend income",
      "Healthcare workers at Northern Health",
      "Allied health practitioners",
      "Small businesses on commercial strips",
      "Medical professionals considering structure changes",
    ],
    services: [
      { title: "Individual returns", desc: "For academics, researchers and healthcare workers with multiple income streams — salary plus consulting, grants, royalties." },
      { title: "PhD & Stipend guidance", desc: "Research Training Program stipend tax treatment and interaction with tutoring or casual academic income." },
      { title: "Medical structures", desc: "Service entity and trust structures for medical professional practices in Bundoora." },
      { title: "Salary packaging reviews", desc: "Annual review of packaging arrangements for health and education employees to maximise take-home." },
      { title: "BAS & GST compliance", desc: "Quarterly lodgements, IAS and GST advice for Bundoora businesses." },
      { title: "SMSF setup & compliance", desc: "Setup, annual compliance and auditing for professionals wanting more control over their super." },
      { title: "Allied health business reviews", desc: "Modelling sole trader vs company vs service trust structures based on your income and plans." },
      { title: "Investment & property", desc: "Negative gearing, capital gains planning, and investment property structuring." },
    ],
    whyUs: [
      "Knowledge of academic, medical and healthcare sector tax situations",
      "Understanding of university salary packaging and research grant treatment",
      "Epping office 15 minutes from Bundoora via Plenty Road",
      "SMSF specialists on team for professionals managing their own super",
      "Registered Tax Agents with full ATO representation",
    ],
    faqs: [
      { q: "I'm an academic at La Trobe — what can I claim?", a: "Academic staff can claim books and subscriptions, conference attendance where presenting, home office costs, and computer equipment. We'll work through your specific role and what qualifies under the ATO's test." },
      { q: "I'm a PhD student with stipend and tutoring income. Do I need to lodge?", a: "Research Training Program stipends are generally tax-exempt. However, if you have additional income from tutoring or casual work, you may need to lodge. We resolve this quickly." },
      { q: "Is my allied health business structure still tax-efficient?", a: "Allied health practitioners often start as sole traders and later question whether a company or trust would save money. We'll model the numbers and give a grounded recommendation." },
      { q: "Does Capital Edge Accounting handle SMSF for Bundoora professionals?", a: "Yes. We handle SMSF setup, annual compliance, auditing, and contribution strategy advice — growing part of our practice for professionals wanting control of retirement savings." },
    ],
  },
  {
    id: "lalor",
    name: "Lalor",
    isHQ: false,
    icon: "🔧",
    tagline: "For Lalor tradies, sole traders & multicultural small businesses.",
    address: "453 Lithgow Street, Beveridge VIC 3753",
    phone: "1300 110 120",
    email: "admin@capitaledgeaccounting.com.au",
    hours: "Mon–Sat · 9:00 AM – 5:00 PM",
    distance: "~10 min from Lalor",
    bookingUrl: "https://calendly.com/capitaledgeaccounting",
    description: "Lalor is a vibrant, multicultural suburb with a strong tradies and small business community. Our Epping office is minutes away and we understand the specific tax needs of this community — from ABN deductions to BAS lodgement for growing businesses.",
    whoWeServe: [
      "Tradies & subcontractors",
      "Sole traders & ABN holders",
      "Multicultural small business owners",
      "Retail & hospitality operators",
      "Property investors",
      "PAYG employees with side income",
    ],
    services: [
      { title: "Tradie tax returns", desc: "Motor vehicle logbooks, tools & equipment, workwear, home office, and subcontractor income — all maximised." },
      { title: "Sole trader & ABN returns", desc: "Complete ABN income returns with all business deductions correctly applied." },
      { title: "BAS lodgement", desc: "Quarterly BAS prepared and lodged on time, every quarter — no ATO penalties." },
      { title: "Bookkeeping setup", desc: "Xero, MYOB or QuickBooks setup so your books stay clean year-round." },
      { title: "Company returns", desc: "Small company tax returns, ASIC compliance and end-of-year planning." },
      { title: "SMSF", desc: "Self-managed super fund setup and annual compliance." },
      { title: "Business advisory", desc: "Structuring advice for growing Lalor businesses — when to incorporate, how to minimise tax." },
      { title: "Catch-up lodgements", desc: "Behind on tax returns? We sort out overdue lodgements and negotiate with the ATO." },
    ],
    whyUs: [
      "Fixed-fee pricing — know your cost before we start",
      "5-day turnaround on personal returns",
      "Local knowledge of Lalor's business community",
      "Multilingual — we serve Lalor's multicultural community",
      "TPB Registered Tax Agents with full ATO access",
      "Year-round availability, not just at tax time",
    ],
    faqs: [
      { q: "I'm a tradie — what vehicle costs can I claim?", a: "If you use your vehicle for work, you can claim fuel, servicing, registration and depreciation — either via logbook method (actual %) or the cents-per-km method. We'll recommend the better option based on your usage." },
      { q: "I run a small business in Lalor. When should I register for GST?", a: "You must register for GST once your turnover hits $75,000. We can register you, set up BAS lodgement and get your Xero configured so you never miss a deadline." },
      { q: "Can you help me catch up on late tax returns?", a: "Yes. We handle overdue lodgements regularly. The earlier you start, the better — penalties stop growing once you're back in the system." },
      { q: "Do you work with multicultural families in Lalor?", a: "Absolutely. We regularly work with Lalor's multicultural community and understand the importance of clear communication about tax obligations." },
    ],
  },
  {
    id: "millpark",
    name: "Mill Park",
    isHQ: false,
    icon: "🏡",
    tagline: "Trusted tax returns for Mill Park families & owner-operators.",
    address: "453 Lithgow Street, Beveridge VIC 3753",
    phone: "1300 110 120",
    email: "admin@capitaledgeaccounting.com.au",
    hours: "Mon–Sat · 9:00 AM – 5:00 PM",
    distance: "Close via Plenty Road corridor",
    bookingUrl: "https://calendly.com/capitaledgeaccounting",
    description: "Mill Park is one of Melbourne's most established northern suburbs — a mix of families, professionals, and small business owners. We're minutes away and understand what Mill Park residents need: straightforward tax advice, honest pricing, and year-round support.",
    whoWeServe: [
      "Families with investment properties",
      "PAYG employees & professionals",
      "Small business owners",
      "Sole traders & ABN holders",
      "SMSF trustees",
      "Self-funded retirees",
    ],
    services: [
      { title: "Personal tax returns", desc: "Wages, investment income, rental properties, capital gains and all deductions — clean and maximised." },
      { title: "Investment property returns", desc: "Negative gearing, depreciation schedules, capital gains and rental income correctly handled." },
      { title: "Sole trader & small business", desc: "Business income returns, BAS, bookkeeping and tax planning for Mill Park operators." },
      { title: "SMSF compliance", desc: "Annual SMSF returns, member statements and audit coordination." },
      { title: "BAS & GST", desc: "Quarterly BAS prepared and lodged accurately and on time." },
      { title: "Business advisory", desc: "Structure reviews and tax planning for growing businesses." },
      { title: "Bookkeeping", desc: "Xero setup and ongoing bookkeeping support." },
      { title: "Retirement planning tax", desc: "Tax advice for approaching and current retirees managing super and investments." },
    ],
    whyUs: [
      "Close to Mill Park via Plenty Road corridor",
      "Fixed-fee pricing with no surprises",
      "5-day turnaround on personal returns",
      "CPA-qualified team — all work done locally",
      "TPB Registered Tax Agents",
      "Year-round support including ATO queries",
    ],
    faqs: [
      { q: "I have a rental property in Mill Park — what can I claim?", a: "Rental property deductions include interest on the investment loan, rates, property management fees, repairs, depreciation on assets, and travel to inspect (with restrictions). We prepare a full depreciation schedule if needed." },
      { q: "We're a dual-income family — is there tax planning we should be doing?", a: "Yes — income splitting, investment structuring and super contribution strategies can all reduce your combined tax. We review this annually for our family clients." },
      { q: "How does fixed-fee pricing work?", a: "We provide a written quote before we start. You know exactly what you'll pay for your return, BAS, or bookkeeping engagement — no hourly rate surprises." },
      { q: "Can we do everything online?", a: "Yes. About half our clients manage their returns entirely online via phone, email and our secure portal. Others prefer face-to-face at our Epping office — either works." },
    ],
  },
  {
    id: "southmorang",
    name: "South Morang",
    isHQ: false,
    icon: "🏘️",
    tagline: "For South Morang's fast-growing community & new business owners.",
    address: "453 Lithgow Street, Beveridge VIC 3753",
    phone: "1300 110 120",
    email: "admin@capitaledgeaccounting.com.au",
    hours: "Mon–Sat · 9:00 AM – 5:00 PM",
    distance: "Adjacent to Epping — very close",
    bookingUrl: "https://calendly.com/capitaledgeaccounting",
    description: "South Morang is one of Melbourne's fastest-growing residential areas — full of young families, first-time property owners and new business owners starting out. We're right next door in Epping and understand the financial stages South Morang residents are navigating.",
    whoWeServe: [
      "First home buyers & owner-occupiers",
      "Young families with growing finances",
      "New business owners & sole traders",
      "PAYG employees with investment goals",
      "Property investors",
      "First-time SMSF trustees",
    ],
    services: [
      { title: "First-year business returns", desc: "We help new South Morang business owners set up correctly from the start — structure, GST, BAS and deductions." },
      { title: "Personal tax returns", desc: "PAYG employees, investment income, rental properties, and first-time lodgements handled with care." },
      { title: "BAS lodgement", desc: "Quarterly BAS lodged accurately for South Morang's growing small business community." },
      { title: "Bookkeeping setup", desc: "Xero cloud accounting setup so your finances are organised from day one." },
      { title: "SMSF setup", desc: "First-time SMSF establishment and annual compliance for South Morang professionals." },
      { title: "Property tax planning", desc: "Investment property structuring and negative gearing for South Morang's new estate residents." },
      { title: "Business advisory", desc: "When to incorporate, how to structure, what to claim — practical advice for growing businesses." },
      { title: "Catch-up returns", desc: "We handle overdue lodgements for clients who've fallen behind." },
    ],
    whyUs: [
      "Right next door — Epping and South Morang are adjacent",
      "Specialise in first-time business owners and young families",
      "Fixed-fee, transparent pricing",
      "5-day turnaround on personal returns",
      "Registered Tax Agents — full ATO representation",
      "Year-round support, not just tax season",
    ],
    faqs: [
      { q: "I've just started a business in South Morang — where do I begin?", a: "Start with an ABN registration and decide your structure (sole trader, company, or trust). We offer a free 30-minute consult to walk you through the options and give you a clear plan." },
      { q: "We just bought our first investment property — what tax do we need to think about?", a: "You'll need to declare rental income, claim deductions (including a depreciation schedule if it's a new build), and plan for CGT when you sell. We handle all of this and can also plan for when you eventually sell." },
      { q: "Can I set up an SMSF through Capital Edge?", a: "Yes. We handle SMSF establishment, annual compliance, member statements and audit coordination. We'll also help you understand whether an SMSF is the right choice given your balance and goals." },
      { q: "How close is your office to South Morang?", a: "We're at 453 Lithgow Street, Beveridge — we serve South Morang clients remotely or via our office." }
    ],
  },
  {
    id: "thomastown",
    name: "Thomastown",
    isHQ: false,
    icon: "🏭",
    tagline: "Specialist accounting for Thomastown's industrial & manufacturing businesses.",
    address: "453 Lithgow Street, Beveridge VIC 3753",
    phone: "1300 110 120",
    email: "admin@capitaledgeaccounting.com.au",
    hours: "Mon–Sat · 9:00 AM – 5:00 PM",
    distance: "~10 min from Thomastown",
    bookingUrl: "https://calendly.com/capitaledgeaccounting",
    description: "Thomastown is an established industrial and manufacturing hub in Melbourne's north. Businesses here face specific tax and compliance challenges — payroll, super, BAS for goods, FBT, and complex asset depreciation. We handle all of it.",
    whoWeServe: [
      "Manufacturing & wholesale businesses",
      "Industrial operators & warehousing",
      "Trade businesses & subcontractors",
      "Transport & logistics operators",
      "Small business owners in industrial estates",
      "Owner-operators with employees",
    ],
    services: [
      { title: "Business & company returns", desc: "Form C company returns, ASIC compliance, Division 7A loans and trust distributions for Thomastown businesses." },
      { title: "Payroll & STP", desc: "Single Touch Payroll setup and compliance, payroll tax advice, and super processing." },
      { title: "BAS & GST", desc: "Quarterly BAS for manufacturing and wholesale businesses — we understand industry-specific GST treatment." },
      { title: "Asset depreciation", desc: "Plant, equipment and vehicle depreciation schedules to maximise your deductions legally." },
      { title: "Bookkeeping", desc: "Xero or MYOB bookkeeping so your accounts are always ATO-ready." },
      { title: "SMSF", desc: "Self-managed super fund compliance for Thomastown business owners." },
      { title: "FBT advice", desc: "Fringe Benefits Tax planning for businesses providing cars, equipment or entertainment to staff." },
      { title: "Business advisory", desc: "Cashflow forecasting, business structure reviews and succession planning for Thomastown operators." },
    ],
    whyUs: [
      "Experience with industrial, manufacturing and trade tax situations",
      "Understanding of asset depreciation and COGS accounting",
      "Close to Thomastown — ~10 min from industrial estates",
      "Fixed-fee pricing quoted before we start",
      "Full payroll & STP compliance support",
      "Registered Tax Agents with ATO representation",
    ],
    faqs: [
      { q: "We have 8 employees — can you handle our payroll and super?", a: "Yes. We manage payroll processing, STP reporting, super guarantee obligations, and annual PAYG payment summaries. We'll also advise on any payroll tax obligations at state level." },
      { q: "We have a lot of plant and equipment — how do we maximise depreciation?", a: "We prepare a full asset depreciation schedule covering all eligible assets and apply the most beneficial depreciation method (prime cost vs diminishing value) to maximise your deduction each year." },
      { q: "Is our current company structure still right for us?", a: "Good question — one we recommend revisiting every 2–3 years as the business grows. We'll model your current structure vs alternatives and identify any tax savings or liability improvements." },
      { q: "We provide company cars — do we have FBT exposure?", a: "Yes. Providing vehicles to employees or directors triggers FBT obligations. We calculate your FBT liability annually and advise on how to structure vehicle arrangements to minimise it." },
    ],
  },
  {
    id: "whittlesea",
    name: "Whittlesea",
    isHQ: false,
    icon: "🌾",
    tagline: "Local tax advice for Whittlesea's rural landowners, small businesses & new estates.",
    address: "453 Lithgow Street, Beveridge VIC 3753",
    phone: "1300 110 120",
    email: "admin@capitaledgeaccounting.com.au",
    hours: "Mon–Sat · 9:00 AM – 5:00 PM",
    distance: "15–20 min from Whittlesea township",
    bookingUrl: "https://calendly.com/capitaledgeaccounting",
    description: "The Whittlesea local government area spans rural landholdings, hobby farms, newer residential estates and established small businesses. Each comes with its own tax profile. We understand the whole picture — from primary producer concessions to first-time investor planning.",
    whoWeServe: [
      "Rural landowners & hobby farmers",
      "Primary producers",
      "New estate residents & first home buyers",
      "Small business owners",
      "Lifestyle property investors",
      "PAYG workers with rural income",
    ],
    services: [
      { title: "Rural & primary producer returns", desc: "Farm income, primary producer averaging, rural concessions and hobby farm vs business classification." },
      { title: "Hobby farm tax advice", desc: "Determining whether your rural activity is a business or hobby — and the tax implications of each." },
      { title: "Personal tax returns", desc: "PAYG workers, lifestyle property owners, and investors in Whittlesea's new estates." },
      { title: "Land & property tax", desc: "Land tax obligations, investment property deductions and capital gains planning for rural holdings." },
      { title: "BAS & GST", desc: "BAS lodgement for Whittlesea small businesses — including primary production GST treatment." },
      { title: "SMSF compliance", desc: "SMSF setup and annual compliance, including rural asset considerations." },
      { title: "Business advisory", desc: "Structure and tax planning for Whittlesea's mix of business types." },
      { title: "Bookkeeping", desc: "Cloud-based bookkeeping setup for rural and small business clients." },
    ],
    whyUs: [
      "Experience with rural, primary producer and lifestyle property tax situations",
      "Understanding of hobby farm vs business classifications",
      "Close enough — 15–20 min from Whittlesea township",
      "Fixed-fee pricing, no hourly rate surprises",
      "Registered Tax Agents with ATO representation",
      "Online consultations available for remote clients",
    ],
    faqs: [
      { q: "I have a hobby farm in Whittlesea — is it a business for tax purposes?", a: "The ATO applies a 'business test' based on factors like commercial intent, scale, and whether you're expecting to make a profit. We'll assess your situation and advise whether primary producer concessions or general deductions apply." },
      { q: "Do you handle land tax for Whittlesea rural properties?", a: "Yes. Land tax is assessed by the State Revenue Office, and exemptions apply to primary production land. We advise on eligibility and help ensure you're not paying land tax on exempt rural holdings." },
      { q: "I live in a new estate in Whittlesea and just bought an investment property — what do I need to do?", a: "You'll need to declare rental income, claim deductions (including a depreciation schedule if it's a new build), and plan for CGT when you sell. We can set all of this up efficiently." },
      { q: "Can I meet with you online instead of driving to Epping?", a: "Absolutely. We offer phone and video consultations for all Whittlesea clients. Many of our rural clients manage everything remotely through our secure online portal." },
    ],
  },
];

const TabBtn = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`rounded-lg px-4 py-2 text-xs font-bold transition-all duration-200 outline-none ${
      active
        ? "bg-gold text-navy shadow-sm"
        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
    }`}
  >
    {children}
  </button>
);

function LocationModal({ loc, onClose }) {
  const [tab, setTab] = useState("overview");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 border-b border-slate-100 bg-white/95 px-6 py-6 backdrop-blur-md">
          <div className="flex items-start justify-between">
            <div>
              {loc.isHQ && (
                <span className="inline-flex items-center gap-1 rounded bg-mint px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                  ⭐ HQ Office
                </span>
              )}
              <div className="mt-2 text-3xl">{loc.icon}</div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy">
                {loc.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500">{loc.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-navy transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          {/* Quick info bar */}
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 border-t border-slate-50 pt-4">
            <span className="flex items-center gap-1">📍 {loc.address}</span>
            <span className="flex items-center gap-1">📞 {loc.phone}</span>
            <span className="flex items-center gap-1">🕐 {loc.hours}</span>
          </div>

          {/* Tabs Selector */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["overview", "services", "who we serve", "why us", "faqs"].map((t) => (
              <TabBtn key={t} active={tab === t} onClick={() => setTab(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </TabBtn>
            ))}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {tab === "overview" && (
            <div className="space-y-6">
              <p className="text-sm leading-relaxed text-slate-600">
                {loc.description}
              </p>
              {loc.mapUrl ? (
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <iframe
                    src={loc.mapUrl}
                    width="100%"
                    height="280"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    title={`Map for ${loc.name}`}
                  />
                </div>
              ) : (
                <div className="rounded-xl bg-slate-50 border border-slate-100 p-6 text-center text-xs text-slate-500">
                  📍 {loc.distance} · Managed by our CPA team at Epping HQ
                </div>
              )}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/contact"
                  className="btn-primary py-2.5 px-6"
                >
                  Book Free Consultation
                </Link>
                <a
                  href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                  className="btn-secondary py-2.5 px-6"
                >
                  Call {loc.phone}
                </a>
              </div>
            </div>
          )}

          {tab === "services" && (
            <div className="grid gap-4 md:grid-cols-2">
              {loc.services.map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-100 bg-white p-4 transition-all hover:border-gold/30 hover:shadow-sm border-l-4 border-l-gold"
                >
                  <h4 className="font-bold text-navy text-sm">{s.title}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {tab === "who we serve" && (
            <div className="space-y-4">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                We regularly support the following client types in {loc.name}:
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {loc.whoWeServe.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-slate-50/50 p-3"
                  >
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-xs font-semibold text-navy">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "why us" && (
            <div className="space-y-3">
              {loc.whyUs.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl border border-slate-100 bg-white p-4"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold text-navy">
                    {i + 1}
                  </div>
                  <span className="text-xs leading-relaxed text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}

          {tab === "faqs" && (
            <div className="space-y-3">
              {loc.faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex flex-wrap items-center justify-between gap-3 rounded-b-2xl">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Registered Tax Agent · No. 16657196248 · TPB
          </div>
          <Link
            to="/contact"
            className="text-xs font-bold text-navy hover:text-gold transition-colors inline-flex items-center gap-1"
          >
            Book Online Consult →
          </Link>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-slate-100 bg-white overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left outline-none"
      >
        <span className="font-bold text-navy text-xs leading-relaxed">{q}</span>
        <span className="text-gold font-bold text-lg leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="border-t border-slate-50 bg-slate-50/30 px-4 pb-4 pt-3 text-xs leading-relaxed text-slate-500">
          {a}
        </div>
      )}
    </div>
  );
}

export default function LocationSection() {
  const [selected, setSelected] = useState(null);
  const hq = locations.find((l) => l.isHQ);
  const suburbs = locations.filter((l) => !l.isHQ);

  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-50 py-16 px-5 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy">
            📍 Our Service Locations
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Serving Melbourne's <span className="text-gold">Northern Suburbs</span>
          </h1>
          <p className="mt-4 mx-auto max-w-xl text-sm leading-relaxed text-slate-600">
            Localized tax advisory and CPA expertise that city-centered firms simply can't match. Click on any suburb below to view custom services, local FAQs, and booking availability.
          </p>
        </div>
      </section>

      {/* HQ Office banner block */}
      <section className="bg-white py-10 px-5 sm:px-6 lg:px-8">
        <div className="container-page">
          <div
            onClick={() => setSelected(hq)}
            className="group relative flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-gold/30 hover:shadow-soft"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-2xl text-white shadow-sm transition-all duration-300 group-hover:bg-gold group-hover:text-navy">
                🏢
              </div>
              <div>
                <span className="inline-flex items-center rounded bg-mint px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                  ⭐ Headquarters
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-navy tracking-tight group-hover:text-gold transition-colors">
                  {hq.name} Office
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {hq.address} · {hq.hours}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-navy transition-colors group-hover:border-gold/30">
                View Full Details →
              </span>
              <Link
                to="/contact"
                onClick={(e) => e.stopPropagation()}
                className="btn-primary py-2.5 px-5 text-xs"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs Grid */}
      <section className="bg-slate-50/30 py-12 px-5 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="container-page">
          <div className="mb-8">
            <h2 className="text-xl font-extrabold text-navy tracking-tight">
              Other Suburbs We Serve
            </h2>
            <p className="mt-1.5 text-xs text-slate-500">
              Select your local area to explore specific services, compliance requirements, and guides.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {suburbs.map((loc) => (
              <div
                key={loc.id}
                onClick={() => setSelected(loc)}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-soft"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-xl transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                    {loc.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy tracking-tight group-hover:text-gold transition-colors">
                    {loc.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {loc.tagline}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-50 flex items-center text-xs font-bold text-navy group-hover:text-gold transition-colors gap-1">
                  View Local Guide <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Online consultation block */}
      <section className="bg-navy py-16 px-5 sm:px-6 lg:px-8 text-white text-center">
        <div className="container-page max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Not located in Northern Melbourne?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            We support individuals, investors, and business clients remotely all across Victoria and Australia via phone, email, and secure Zoom consultations.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="btn-primary bg-gold text-navy hover:bg-white hover:text-navy border-none py-3 px-8 text-sm"
            >
              Book a Free Online Consult
            </Link>
          </div>
        </div>
      </section>

      {selected && <LocationModal loc={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
