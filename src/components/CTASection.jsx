import { Link } from 'react-router-dom';
import { contact } from '../data/siteData.js';

export default function CTASection({ title = "Ready to Sort Your Tax? Let's Talk.", text }) {
  return (
    <section className="section bg-mint">
      <div className="container-page rounded-md bg-navy px-6 py-10 text-white shadow-soft sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Get started</p>
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">
            {text || 'Book a free 30-minute consult by phone, video or in-person at our Gateway Boulevard office.'}
          </p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3 lg:mt-0">
          <a href={contact.calendly} className="btn-primary">Book Now</a>
          <Link to="/contact" className="btn-secondary">Contact</Link>
        </div>
      </div>
    </section>
  );
}
