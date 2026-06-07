import Hero from '../components/Hero.jsx';
import ContactForm from '../components/ContactForm.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { contact } from '../data/siteData.js';
import { siteAssets } from '../assets/siteAssets.js';

export default function Contact() {
  return (
    <>
      <Hero compact eyebrow="Contact Us" title="Get in Touch" subtitle="Our support team is here to help. Feel free to ask any question you may have." image={siteAssets.homeHero} />
      <section className="section bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader eyebrow="Contact" title="Feel Free To Get In Touch" />
            <div className="grid gap-4 text-sm leading-7 text-slate-600">
              <a href={contact.phoneHref} className="rounded-md border border-slate-200 p-5 font-semibold text-navy hover:border-gold">
                {contact.phone}
              </a>
              <a href={contact.emailHref} className="rounded-md border border-slate-200 p-5 font-semibold text-navy hover:border-gold">
                {contact.email}
              </a>
              <p className="rounded-md border border-slate-200 p-5 font-semibold text-navy">{contact.address}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="h-[420px] bg-slate-100">
        <iframe
          title="RPS Accountants location"
          src="https://www.google.com/maps?q=136%20Gateway%20Boulevard%2C%20Epping%2C%20VIC%2C%203076&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
