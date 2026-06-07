import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  const { title, summary, slug, image } = service;

  // Derive service category tags
  let category = "Core Accounting";
  let tagColor = "bg-slate-100 text-navy border-slate-200";
  
  if (slug === 'taxation') {
    category = "Tax & Compliance";
    tagColor = "bg-mint text-navy border-emerald-100";
  } else if (slug === 'business-advisory') {
    category = "Growth Advisory";
    tagColor = "bg-gold/10 text-navy border-gold/20";
  } else if (slug === 'smsf-accountants') {
    category = "Superannuation";
    tagColor = "bg-blue-50 text-blue-800 border-blue-100";
  } else if (slug === 'medical-accountants') {
    category = "Specialized Industry";
    tagColor = "bg-purple-50 text-purple-800 border-purple-100";
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-soft">
      
      {/* Image Container with Hover Zoom */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Floating Category Tag */}
        <span className={`absolute top-4 left-4 rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${tagColor}`}>
          {category}
        </span>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold text-navy tracking-tight group-hover:text-gold transition-colors duration-200">
          {title.replace(' Service', '')}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {summary}
        </p>

        {/* Learn More Action */}
        <div className="mt-6 border-t border-slate-50 pt-4 flex items-center justify-between">
          <Link 
            to={`/services/${slug}`} 
            className="inline-flex items-center gap-1.5 text-sm font-bold text-navy transition-colors hover:text-gold"
          >
            Explore Service
            <svg 
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
