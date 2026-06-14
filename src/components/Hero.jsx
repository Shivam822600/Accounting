import { Link } from 'react-router-dom';
import { contact } from '../data/siteData.js';
import { siteAssets } from '../assets/siteAssets.js';

export default function Hero({ eyebrow, title, subtitle, image, primaryLabel = 'Book consultation', primaryTo, compact = false }) {
  if (compact) {
    return (
      <section className="relative overflow-hidden bg-slate-950 text-white pt-28 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-goldAccent/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-20">
          {image && <img src={image} alt="" className="h-full w-full object-cover" loading="eager" />}
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        <div className="container-page px-5 sm:px-6 lg:px-8 relative z-10 max-w-3xl text-left">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-goldAccent text-xs font-semibold uppercase tracking-wider mb-6">
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              {primaryLabel}
            </Link>
            <Link to="/contact" className="btn-secondary-light">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Curved Wave SVG Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg className="relative block w-full h-[30px] lg:h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-[#FFF7ED] text-[#111827] px-5 py-16 sm:px-6 lg:px-8 lg:py-24 border-b border-slate-100">
        <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">{title}</h1>
            {subtitle && <p className="mt-6 text-base leading-8 text-ink">{subtitle}</p>}
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {primaryLabel}
              </Link>
              <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Our Tax Services
              </Link>
            </div>

            <div className="mt-8">
              <img src={siteAssets.googleRating} alt="Five star rating on Google Reviews" className="h-10 w-auto object-contain" />
            </div>
          </div>

          <div className="relative w-full">
            {image && (
              <img src={image} alt="Capital Edge Accounting" className="w-full h-auto rounded-md object-cover shadow-soft" loading="eager" />
            )}
          </div>
        </div>
      </section>

      <div className="bg-navy py-3 text-center text-sm font-semibold text-white">
        <div className="container-page px-5 sm:px-6 lg:px-8">
          5-Star Rated on Google <span className="text-gold">&nbsp;|&nbsp;</span> 200+ Melbourne Clients <span className="text-gold">&nbsp;|&nbsp;</span> Registered Tax Agent
        </div>
      </div>
    </>
  );
}

