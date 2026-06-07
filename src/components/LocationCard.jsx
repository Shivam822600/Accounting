import { Link } from 'react-router-dom';

export default function LocationCard({ location }) {
  const { slug, title, subtitle, image } = location;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-soft">
      {image && (
        <img src={image} alt={title} className="h-48 w-full object-cover" loading="lazy" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-navy">{title}</h3>
        {subtitle && (
          <p className="mt-3 text-sm leading-7 text-slate-600">{subtitle}</p>
        )}
        <Link
          to={`/locations/${slug}`}
          className="mt-5 text-sm font-bold text-navy hover:text-gold"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}
