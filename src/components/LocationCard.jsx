import { Link } from 'react-router-dom';

export default function LocationCard({ location }) {
  const { slug, title, subtitle, services = [], audience = [] } = location;
  
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_12px_30px_-10px_rgba(12,27,51,0.1)]">
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-gold to-mint transition-all duration-500 group-hover:w-full" />

      {/* Header Info */}
      <div className="flex items-start gap-4">
        {/* Map pin icon with glowing dynamic background */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy transition-all duration-300 group-hover:bg-navy group-hover:text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gold">Melbourne North</span>
          <h3 className="text-xl font-extrabold text-navy tracking-tight mt-0.5 leading-snug transition-colors duration-200 group-hover:text-gold">
            {title.replace('Trusted Tax Accountants in ', '').replace('Specialists Serving ', '')}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-slate-600 flex-1">
        {subtitle}
      </p>

      {/* Services tags */}
      {services.length > 0 && (
        <div className="mt-5 border-t border-slate-100 pt-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Focus Services</span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {services.slice(0, 3).map((srv) => (
              <span 
                key={srv} 
                className="rounded-md bg-slate-50 px-2 py-1 text-[11px] font-medium text-navy border border-slate-100 transition-colors group-hover:bg-mint/10 group-hover:text-navy/90"
              >
                {srv}
              </span>
            ))}
            {services.length > 3 && (
              <span className="text-[10px] text-slate-400 self-center font-semibold ml-1">
                +{services.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Action button */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <Link
          to={`/locations/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-navy transition-colors hover:text-gold"
        >
          Explore Location Services
          <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
