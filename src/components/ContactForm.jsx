import { useState } from 'react';
import { services } from '../data/siteData.js';

const initialState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-md border border-slate-200 px-4 py-3 font-normal text-ink outline-none focus:border-gold focus:ring-4 focus:ring-gold/20"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-md border border-slate-200 px-4 py-3 font-normal text-ink outline-none focus:border-gold focus:ring-4 focus:ring-gold/20"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Phone
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="rounded-md border border-slate-200 px-4 py-3 font-normal text-ink outline-none focus:border-gold focus:ring-4 focus:ring-gold/20"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Select service
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="rounded-md border border-slate-200 px-4 py-3 font-normal text-ink outline-none focus:border-gold focus:ring-4 focus:ring-gold/20"
          >
            <option value="">Select service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-navy">
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="rounded-md border border-slate-200 px-4 py-3 font-normal text-ink outline-none focus:border-gold focus:ring-4 focus:ring-gold/20"
        />
      </label>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Submit Now
      </button>
      {submitted && <p className="mt-4 text-sm font-semibold text-emerald-700">Thanks. Your enquiry has been captured locally.</p>}
    </form>
  );
}
