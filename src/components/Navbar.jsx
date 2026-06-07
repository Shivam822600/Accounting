import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { contact, locations, services } from '../data/siteData.js';
import { siteAssets } from '../assets/siteAssets.js';

const mainLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

function linkClasses({ isActive }) {
  return `text-sm font-semibold transition hover:text-gold ${isActive ? 'text-gold' : 'text-navy'}`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
      <div className="container-page flex h-20 items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="RPS Accountants home">
          <img src={siteAssets.logo} alt="RPS Accountants" className="h-14 w-auto brightness-0" loading="eager" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {mainLinks.slice(0, 2).map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
          <div className="group relative">
            <button type="button" className={`${linkClasses({ isActive: false })} cursor-default flex items-center gap-1 focus:outline-none`}>
              Location
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="rounded-md bg-white p-2 shadow-soft border border-slate-100">
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    to={`/locations/${location.slug}`}
                    className="block rounded px-4 py-2 text-sm font-semibold text-ink hover:bg-mint hover:text-navy whitespace-nowrap"
                  >
                    {location.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="group relative">
            <NavLink to="/services" className={({ isActive }) => `${linkClasses({ isActive })} flex items-center gap-1`}>
              Services
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </NavLink>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="rounded-md bg-white p-2 shadow-soft border border-slate-100">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="block rounded px-3 py-2 text-sm font-medium text-ink hover:bg-mint hover:text-navy"
                  >
                    {service.navLabel}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {mainLinks.slice(2).map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a href={contact.calendly} className="btn-primary hidden lg:inline-flex">
          Book Now
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy/20 text-navy lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-2xl leading-none">{open ? 'x' : '='}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-5 pb-6 lg:hidden" aria-label="Mobile navigation">
          <div className="container-page grid gap-2 pt-3">
            {[...mainLinks, { label: 'Services', to: '/services' }, { label: 'Locations', to: '/locations/epping' }].map(
              (link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded px-3 py-3 text-sm font-semibold text-navy hover:bg-slate-50"
                >
                  {link.label}
                </NavLink>
              )
            )}
            <a href={contact.calendly} className="btn-primary mt-2">
              Book Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
