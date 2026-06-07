import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-soft">
      <img src={service.image} alt="" className="h-48 w-full object-cover" loading="lazy" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-navy">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.summary}</p>
        <Link to={`/services/${service.slug}`} className="mt-5 text-sm font-bold text-navy hover:text-gold">
          Learn more
        </Link>
      </div>
    </article>
  );
}
