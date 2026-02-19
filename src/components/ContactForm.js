import { useState } from 'react';
import Link from 'next/link';

const fieldClassName =
  'w-full rounded-xl border border-gray-300/90 dark:border-gray-700/80 bg-white/90 dark:bg-gray-900/80 px-4 py-3 text-dark dark:text-light placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary/70 transition';

const labelClassName = 'mb-2 block text-sm font-semibold text-dark dark:text-light';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'animation', label: '2D Animation' },
    { value: 'explainer', label: 'Explainer Video' },
    { value: 'uiux', label: 'UI/UX Design' },
    { value: 'branding', label: 'Branding' },
    { value: 'web', label: 'Web Design' },
    { value: 'other', label: 'Other' },
  ];

  const quickServiceChips = services.slice(1, 6);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuickService = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required.');
      return false;
    }

    if (!formData.email.trim()) {
      setErrorMessage('Email is required.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Message is required.');
      return false;
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage('Message must be at least 10 characters.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'general',
          message: '',
        });

        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      console.error('Contact form error:', error);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/40 dark:border-gray-700/70 bg-white/85 dark:bg-dark/80 p-7 lg:p-6 md:p-5 shadow-[0_24px_80px_-40px_rgba(87,46,229,0.45)]">
      <div className="absolute -top-24 -right-20 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primaryDark/20 blur-3xl" />

      <div className="relative">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            Secure Brief Form
          </span>
          <span className="rounded-full border border-cyan-400/35 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-300">
            Reply Under 24h
          </span>
        </div>

        <h3 className="text-3xl lg:text-2xl font-black text-dark dark:text-light">Start Your Brief</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Drop your idea and goals. We will send a clear plan, timeline, and pricing options.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {quickServiceChips.map((chip) => {
            const active = formData.service === chip.value;
            return (
              <button
                key={chip.value}
                type="button"
                onClick={() => handleQuickService(chip.value)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  active
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className={labelClassName}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={fieldClassName}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClassName}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={fieldClassName}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div>
              <label htmlFor="phone" className={labelClassName}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className={fieldClassName}
              />
            </div>

            <div>
              <label htmlFor="service" className={labelClassName}>
                Service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={fieldClassName}
              >
                {services.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClassName}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project goals, style, timeline, and deliverables."
              rows={6}
              className={`${fieldClassName} resize-y min-h-[140px]`}
              required
            />
            <div className="mt-2 text-right text-xs text-gray-500 dark:text-gray-400">
              {formData.message.trim().length} characters
            </div>
          </div>

          {status === 'error' && (
            <div
              role="alert"
              className="rounded-xl border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 px-4 py-3 text-sm text-red-700 dark:text-red-300"
            >
              X {errorMessage || 'Something went wrong. Please try again.'}
            </div>
          )}

          {status === 'success' && (
            <div
              role="status"
              className="rounded-xl border border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20 px-4 py-3 text-sm text-green-700 dark:text-green-300"
            >
              Message sent successfully. We will get back to you soon.
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="group w-full rounded-xl bg-gradient-to-r from-primary to-primaryDark px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.01] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === 'loading' ? 'Sending your brief...' : 'Send Message'}
          </button>

          <p className="text-center text-xs text-gray-600 dark:text-gray-400">
            By sending this form, you agree to our{' '}
            <Link href="/privacy" className="font-semibold text-primary hover:underline">
              privacy policy
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
