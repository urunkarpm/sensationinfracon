'use client';

import React, { useState } from 'react';

interface EnquiryFormProps {
  defaultRole?: string;
  projectContext?: string;
  className?: string;
}

export default function EnquiryForm({
  defaultRole = 'investor',
  projectContext,
  className = '',
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: defaultRole,
    city: '',
    message: '',
    _gotcha: '', // Honeypot antispam field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number.';
    } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid phone number (8 to 15 digits).';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Please state your city.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details on your inquiry or property parcel.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData._gotcha) {
      // Spam detected, simulate silent success
      setStatus('success');
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          projectContext: projectContext || 'Private client consultation',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: defaultRole,
          city: '',
          message: '',
          _gotcha: '',
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setErrorMessage(
          errorData?.error ||
            'Submission could not be completed at this moment. You can also reach our private desk directly on WhatsApp.'
        );
        setStatus('error');
      }
    } catch {
      setErrorMessage(
        'Submission request recorded. (Formspree placeholder YOUR_FORM_ID is active). Our developer desk can also be contacted directly at +91 98853 33333.'
      );
      setStatus('error');
    }
  };

  return (
    <div className={`bg-paper border border-mist/80 rounded-2xl p-8 sm:p-12 relative overflow-hidden ${className}`}>
      {/* Corner crosshairs */}
      <span className="absolute top-3 left-3 text-[10px] font-mono text-text/30">+</span>
      <span className="absolute top-3 right-3 text-[10px] font-mono text-text/30">+</span>
      <span className="absolute bottom-3 left-3 text-[10px] font-mono text-text/30">+</span>
      <span className="absolute bottom-3 right-3 text-[10px] font-mono text-text/30">+</span>

      <div className="mb-8">
        <span className="text-[10px] font-mono tracking-luxury text-brass uppercase block mb-1">
          Confidential client consultation
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl text-ink font-semibold tracking-tight">
          {projectContext ? `Inquire: ${projectContext}` : 'Request a private consultation'}
        </h3>
        <p className="font-body text-xs sm:text-sm text-text/75 mt-2 leading-relaxed max-w-xl">
          We invite inquiries from experienced investors, landowners exploring joint development structures, and accredited channel partners. Every consultation is managed with strict discretion.
        </p>
      </div>

      {status === 'success' ? (
        <div
          role="alert"
          className="p-8 bg-white border border-brass/40 rounded-xl text-center space-y-3"
        >
          <div className="w-10 h-10 mx-auto rounded-full bg-brass/10 text-brass flex items-center justify-center font-bold text-base">
            ✓
          </div>
          <h4 className="font-heading text-xl text-ink font-semibold">
            Inquiry registered in confidence
          </h4>
          <p className="font-body text-xs sm:text-sm text-text/80 max-w-md mx-auto leading-relaxed">
            Thank you for connecting with Sensation Infracon. An executive director or investment partner will contact you directly within one business day.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 px-6 py-2.5 bg-ink text-paper rounded-full text-xs font-mono tracking-folio uppercase hover:bg-brass transition-colors"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {status === 'error' && (
            <div
              role="alert"
              className="p-4 bg-red-50/80 border border-red-200 rounded-xl text-xs text-red-800 leading-relaxed"
            >
              {errorMessage}
            </div>
          )}

          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_field">Do not fill this field</label>
            <input
              id="hp_field"
              type="text"
              name="_gotcha"
              tabIndex={-1}
              value={formData._gotcha}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono tracking-folio uppercase text-text/70 mb-1.5">
                Full name <span className="text-brass">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Anand Varma"
                className={`w-full px-4 py-3 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none focus:border-ink transition-colors ${
                  errors.name ? 'border-red-500' : 'border-mist'
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-[11px] text-red-600 mt-1 font-mono">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono tracking-folio uppercase text-text/70 mb-1.5">
                Email address <span className="text-brass">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. anand@domain.com"
                className={`w-full px-4 py-3 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none focus:border-ink transition-colors ${
                  errors.email ? 'border-red-500' : 'border-mist'
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-[11px] text-red-600 mt-1 font-mono">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-mono tracking-folio uppercase text-text/70 mb-1.5">
                Phone number <span className="text-brass">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98853 33333"
                className={`w-full px-4 py-3 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none focus:border-ink transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-mist'
                }`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-[11px] text-red-600 mt-1 font-mono">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-xs font-mono tracking-folio uppercase text-text/70 mb-1.5">
                Your role <span className="text-brass">*</span>
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs sm:text-sm bg-white border border-mist rounded-xl focus:outline-none focus:border-ink transition-colors"
              >
                <option value="investor">Investor</option>
                <option value="landowner">Landowner</option>
                <option value="buyer">Buyer</option>
                <option value="channel partner">Channel partner</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-xs font-mono tracking-folio uppercase text-text/70 mb-1.5">
                Your city <span className="text-brass">*</span>
              </label>
              <input
                id="city"
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Hyderabad, Mumbai"
                className={`w-full px-4 py-3 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none focus:border-ink transition-colors ${
                  errors.city ? 'border-red-500' : 'border-mist'
                }`}
                aria-invalid={!!errors.city}
                aria-describedby={errors.city ? 'city-error' : undefined}
              />
              {errors.city && (
                <p id="city-error" className="text-[11px] text-red-600 mt-1 font-mono">
                  {errors.city}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-mono tracking-folio uppercase text-text/70 mb-1.5">
              Consultation brief / Parcel details <span className="text-brass">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="State your plot size interest, joint venture land parcel coordinates, or capital horizon..."
              className={`w-full px-4 py-3 text-xs sm:text-sm bg-white border rounded-xl focus:outline-none focus:border-ink transition-colors resize-none ${
                errors.message ? 'border-red-500' : 'border-mist'
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-[11px] text-red-600 mt-1 font-mono">
                {errors.message}
              </p>
            )}
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-mono text-text/50">
              Handled strictly in-house. No unverified third-party brokers.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto px-8 py-3.5 bg-ink hover:bg-brass text-paper rounded-full text-xs font-mono tracking-luxury uppercase font-semibold transition-colors duration-200 disabled:opacity-50"
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit confidential inquiry'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
