import { Link } from 'react-router-dom';
import { contact, services } from '../data/siteData.js';
import { siteAssets } from '../assets/siteAssets.js';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section pb-10">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div>
            <img src={siteAssets.footerMark} alt="RPS Accountants" className="mb-5 h-20 w-20 object-contain" loading="lazy" />
            <p className="max-w-md text-sm leading-7 text-white/75">
              We are one of Melbourne's preferred partners for building and growing a business. You focus on your work;
              we help keep the numbers clean, compliant and useful.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Quick Links</h2>
            <div className="grid gap-3 text-sm text-white/75">
              <Link to="/" className="hover:text-gold">Home</Link>
              <Link to="/about" className="hover:text-gold">About Us</Link>
              <Link to="/blog" className="hover:text-gold">Blog</Link>
              <Link to="/contact" className="hover:text-gold">Contact</Link>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Our Services</h2>
            <div className="grid gap-3 text-sm text-white/75">
              {services.map((service) => (
                <Link key={service.slug} to={`/services/${service.slug}`} className="hover:text-gold">
                  {service.navLabel}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Contact</h2>
            <div className="grid gap-3 text-sm leading-7 text-white/75">
              <a href={contact.phoneHref} className="hover:text-gold">{contact.phone}</a>
              <a href={contact.emailHref} className="hover:text-gold">{contact.email}</a>
              <p>{contact.address}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/65">
        (c) 2026 RPS Accountants & Business Advisors. All rights reserved. Design & Developed by WVD.
      </div>
    </footer>
  );
}
