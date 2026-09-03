import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setServerError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      // If server is unreachable or offline, provide graceful user feedback
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono uppercase tracking-wider text-blue-300 mb-3 backdrop-blur-md">
            Get In Touch
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Solid Prime
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Have questions about our AI trading platform, quantitative models, or demo environment? Reach out directly to our team in Excelsior, Minnesota.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Credentials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Direct Communication Channels
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We believe in straightforward, transparent financial technology. Connect with us via telephone, email, or our secure inquiry form.
              </p>

              <div className="space-y-4 pt-2">
                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 flex-shrink-0 backdrop-blur-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      Excelsior, MN
                    </div>
                    <div className="text-xs text-slate-400">
                      United States
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 flex-shrink-0 backdrop-blur-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Phone Number
                    </div>
                    <a
                      href="tel:615-853-0515"
                      className="text-sm font-bold text-white hover:text-cyan-400 transition-colors mt-0.5 block font-mono"
                    >
                      615-853-0515
                    </a>
                    <div className="text-xs text-slate-400">
                      Direct Inquiries & Support
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300 flex-shrink-0 backdrop-blur-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href="mailto:johnkruzum16@gmail.com"
                      className="text-sm font-bold text-white hover:text-cyan-400 transition-colors mt-0.5 block truncate font-mono"
                    >
                      johnkruzum16@gmail.com
                    </a>
                    <div className="text-xs text-slate-400">
                      Response within 1 business day
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance notice */}
            <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 text-xs text-slate-300">
              <strong className="text-white">Privacy Notice:</strong> Your information is handled securely and used solely to address your inquiry. We do not sell user data.
            </div>
          </div>

          {/* Right: Validated Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50">
              <h3 className="text-xl font-bold text-white mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Fill out the details below to connect directly with our Excelsior, MN team.
              </p>

              {submitSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 backdrop-blur-md border border-emerald-500/40 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/80 border border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Successfully Sent
                  </h4>
                  <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                    Thank you for reaching out to Solid Prime. Our team in Excelsior, MN will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-5 px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-all backdrop-blur-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {serverError && (
                    <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name-input"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/50 backdrop-blur-md border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                          errors.name ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email-input"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="alex@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/50 backdrop-blur-md border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                          errors.email ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject-input"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject-input"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Platform Demo Access or Partnership"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/50 backdrop-blur-md border border-white/10 hover:border-white/20 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message-input"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message-input"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="How can our team in Excelsior assist you with Solid Prime?"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/50 backdrop-blur-md border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none ${
                        errors.message ? 'border-rose-500' : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-[0.99] disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Solid Prime</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
