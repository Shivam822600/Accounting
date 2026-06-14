import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { contact, services } from '../data/siteData.js';
import Logo from './Logo.jsx';

const mainLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
];

// We move linkClasses inside Navbar or pass scrolled parameter to it
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = (isActive) => {
    return `text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-goldAccent ${
      isActive
        ? 'text-goldAccent font-bold'
        : scrolled
        ? 'text-slate-700'
        : 'text-white/85 hover:text-white'
    }`;
  };

  // Service details mapping for mega menu descriptions & icons
  const serviceDetails = {
    'bookkeeping-accounting': {
      desc: 'Cloud ledger setup, STP payroll & bookkeeping.',
      icon: (
        <svg className="w-6 h-6 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    'taxation': {
      desc: 'Tactical tax planning & registered ATO return filing.',
      icon: (
        <svg className="w-6 h-6 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    'smsf-accountants': {
      desc: 'Private SMSF setup, annual accounts & audit coordination.',
      icon: (
        <svg className="w-6 h-6 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  };

  const getServiceMeta = (slug) => {
    return serviceDetails[slug] || {
      desc: 'CPA-qualified business advisory and solutions.',
      icon: (
        <svg className="w-6 h-6 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    };
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 1. Thin Top Bar (Contact info, hidden on mobile) */}
      <div className="bg-slate-950 text-slate-300 text-[11px] font-medium border-b border-white/5 py-2.5 hidden lg:block">
        <div className="container-page flex justify-between items-center px-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href={contact.phoneHref} className="flex items-center gap-1.5 hover:text-goldAccent transition-colors">
              <svg className="w-3.5 h-3.5 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="flex items-center gap-1.5 hover:text-goldAccent transition-colors">
              <svg className="w-3.5 h-3.5 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <svg className="w-3.5 h-3.5 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Mon–Sat · 9:00 AM – 5:00 PM</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md border-b border-slate-150 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-page flex items-center justify-between px-5 sm:px-6 lg:px-8">
          
          {/* Logo on Left */}
          <Link to="/" className="flex items-center" aria-label="Capital Edge Accounting home">
            <Logo light={!scrolled} className="h-11 transition-all duration-300" />
          </Link>

          {/* Links Centered/Right-aligned */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {mainLinks.slice(0, 2).map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => getLinkClasses(isActive)}>
                {link.label}
              </NavLink>
            ))}

            {/* Restyled Dropdown as a Mega-Menu style panel */}
            <div className="group relative">
              <NavLink
                to="/services"
                end
                className={({ isActive }) =>
                  `${getLinkClasses(isActive)} flex items-center gap-1 py-2`
                }
              >
                Services
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </NavLink>
              
              {/* Mega-menu panel container */}
              <div className="invisible absolute left-1/2 top-full w-[460px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl bg-white p-5 shadow-2xl border border-slate-100 grid grid-cols-1 gap-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pb-1 border-b border-slate-50">
                    Services Categories
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service) => {
                      const meta = getServiceMeta(service.slug);
                      return (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="flex items-start gap-3.5 rounded-xl p-3 hover:bg-slate-50 transition-colors duration-200"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-goldAccent/10">
                            {meta.icon}
                          </div>
                          <div>
                            <span className="block text-xs font-bold text-slate-900 group-hover:text-goldAccent transition-colors">
                              {service.navLabel}
                            </span>
                            <span className="block text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                              {meta.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                    <Link
                      to="/services"
                      className="text-xs font-bold text-slate-900 hover:text-goldAccent transition-colors inline-flex items-center gap-1"
                    >
                      View All Services
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {mainLinks.slice(2).map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => getLinkClasses(isActive)}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Pill-shaped Rounded CTA on Right */}
          <div className="hidden lg:flex items-center">
            <Link to="/contact" className="btn-pill">
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 lg:hidden ${
              scrolled ? 'border-slate-200 text-slate-900 bg-slate-50' : 'border-white/20 text-white bg-slate-950/20 backdrop-blur-xs'
            }`}
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* 3. Mobile Navigation Slide-in Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-slate-950/65 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 right-0 h-full w-[310px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div>
            <div className="flex h-20 items-center justify-between px-6 border-b border-slate-100">
              <Logo className="h-9" />
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-500 hover:text-slate-900 border border-slate-100"
                onClick={() => setOpen(false)}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1 p-6" aria-label="Mobile navigation links">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                    isActive ? 'bg-goldAccent/10 text-goldAccent' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                    isActive ? 'bg-goldAccent/10 text-goldAccent' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                    isActive ? 'bg-goldAccent/10 text-goldAccent' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                Services
              </NavLink>
              
              {/* Nested mobile service list */}
              <div className="pl-4 pr-2 py-2 flex flex-col gap-1">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg py-2 px-3 text-xs font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  >
                    • {service.navLabel}
                  </Link>
                ))}
              </div>

              <NavLink
                to="/industries"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                    isActive ? 'bg-goldAccent/10 text-goldAccent' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                Industries
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                    isActive ? 'bg-goldAccent/10 text-goldAccent' : 'text-slate-800 hover:bg-slate-50'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Footer - contact details & CTA inside Mobile Drawer */}
          <div className="p-6 border-t border-slate-100 bg-slate-50/50">
            <div className="flex flex-col gap-4 text-xs text-slate-600 mb-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Contact & Hours
              </span>
              <a href={contact.phoneHref} className="flex items-center gap-2.5 hover:text-goldAccent transition-colors">
                <svg className="w-4 h-4 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contact.phone}
              </a>
              <a href={contact.emailHref} className="flex items-center gap-2.5 hover:text-goldAccent transition-colors">
                <svg className="w-4 h-4 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {contact.email}
              </a>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-goldAccent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon–Sat · 9:00 AM – 5:00 PM</span>
              </div>
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-pill w-full text-center block"
            >
              Book Now
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}
