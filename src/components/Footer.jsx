import { Link } from 'react-router-dom';
import { contact, services } from '../data/siteData.js';
import { siteAssets } from '../assets/siteAssets.js';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900">
      <div className="section pb-10">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr]">
          <div>
            <Logo light={true} className="mb-5 h-20" />
            <p className="max-w-md text-sm leading-7 text-white/70">
              We are one of Melbourne's preferred partners for building and growing a business. You focus on your work;
              we help keep the numbers clean, compliant and useful.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Contact</h2>
            <div className="grid gap-3 text-sm leading-7 text-white/70">
              <a href={contact.phoneHref} className="hover:text-goldAccent">{contact.phone}</a>
              <a href={contact.emailHref} className="hover:text-goldAccent">{contact.email}</a>
              <p className="text-xs">{contact.address}</p>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Our Services</h2>
            <div className="grid gap-3 text-sm text-white/70">
              {services.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="hover:text-goldAccent">
                  {service.navLabel}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Quick Links</h2>
            <div className="grid gap-3 text-sm text-white/70">
              <Link to="/" className="hover:text-goldAccent">Home</Link>
              <Link to="/about" className="hover:text-goldAccent">About Us</Link>
              <Link to="/blog" className="hover:text-goldAccent">Blog</Link>
              <Link to="/contact" className="hover:text-goldAccent">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-5 text-center text-xs text-white/40">
        &copy; 2026 Capital Edge Accounting. All rights reserved. Registered Tax Agent No. 16657196248.
      </div>
    </footer>
  );
}
