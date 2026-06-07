import SectionHeader from './SectionHeader.jsx';
import { reviews } from '../data/siteData.js';

export default function Testimonials({ showGoogleBtn = false }) {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="Client Reviews"
          title="5-Star Reviews From Clients"
          subtitle="Real reviews from real Melbourne clients."
          center
        />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.quote} className="rounded-md border border-slate-200 bg-white p-6 shadow-soft">
              <blockquote className="text-sm leading-7 text-slate-600">"{review.quote}"</blockquote>
              <figcaption className="mt-5 text-sm font-bold text-navy">{review.author}</figcaption>
            </figure>
          ))}
        </div>

        {showGoogleBtn && (
          <div className="mt-10 text-center">
            <a 
              href="https://maps.app.goo.gl/uiyyajBDd8ioasYW6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Read all reviews on Google
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

