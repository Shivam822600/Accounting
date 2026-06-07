import { Link } from 'react-router-dom';
import { contact } from '../data/siteData.js';
import { siteAssets } from '../assets/siteAssets.js';

export default function Hero({ eyebrow, title, subtitle, image, primaryLabel = 'Book consultation', primaryTo, compact = false }) {
  if (compact) {
    return (
      <section className="relative overflow-hidden bg-navy text-white section">
        <div className="absolute inset-0">
          {image && <img src={image} alt="" className="h-full w-full object-cover opacity-25" loading="eager" />}
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        </div>
        <div className="container-page relative max-w-3xl">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {subtitle && <p className="mt-6 text-lg leading-8 text-white/80">{subtitle}</p>}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {primaryLabel}
            </a>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
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
              <a href={contact.calendly} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {primaryLabel}
              </a>
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

