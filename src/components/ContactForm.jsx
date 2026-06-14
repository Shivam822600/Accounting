import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "8a2d9235-7f38-4493-8fd5-f99db60eccab");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Success! Your message has been sent.");
        setForm(initialState);
      } else {
        setResult("Error: " + (data.message || "Failed to submit."));
      }
    } catch (error) {
      setResult("Error: Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
            className="rounded-md border border-slate-200 px-4 py-3 font-normal text-ink outline-none focus:border-gold focus:ring-4 focus:ring-gold/20"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Phone
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="rounded-md border border-slate-200 px-4 py-3 font-normal text-ink outline-none focus:border-gold focus:ring-4 focus:ring-gold/20"
          />
        </label>

      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-navy">
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          disabled={isSubmitting}
          className="rounded-md border border-slate-200 px-4 py-3 font-normal text-ink outline-none focus:border-gold focus:ring-4 focus:ring-gold/20"
        />
      </label>
      <button type="submit" disabled={isSubmitting} className="btn-primary mt-6 w-full sm:w-auto disabled:opacity-50">
        {isSubmitting ? "Submitting..." : "Submit Now"}
      </button>
      {result && (
        <p className={`mt-4 text-sm font-semibold ${
          result.startsWith("Success") ? "text-emerald-700" : result.startsWith("Error") ? "text-red-600" : "text-amber-600"
        }`}>
          {result}
        </p>
      )}
    </form>
  );
}
