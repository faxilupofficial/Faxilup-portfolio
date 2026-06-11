import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new URLSearchParams();

    // Lowercase parameter names (Standard)
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('service', formState.service);
    formData.append('phone', formState.phone);
    formData.append('message', formState.message || '');

    // PascalCase / Space-separated / CamelCase parameter names (for maximum column matching compatibility)
    formData.append('Name', formState.name);
    formData.append('Email', formState.email);
    formData.append('Service', formState.service);
    formData.append('Service Type', formState.service);
    formData.append('serviceType', formState.service);
    formData.append('Phone', formState.phone);
    formData.append('Phone Number', formState.phone);
    formData.append('phoneNumber', formState.phone);
    formData.append('Message', formState.message || '');

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwQ83p1I6XEHmiungM0QP_zi9Y3qelBX1iiXcNp4XS9r_EfGhiV7d4V01QxXP6NtJlW/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
      });

      setSubmitStatus('success');
      setFormState({ name: '', email: '', service: '', phone: '', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Let's build something <br />
            <span className="text-gradient">amazing</span> together
          </h2>
          <p className="text-gray-400 text-lg">Ready to scale your digital presence? Drop us a line.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitStatus === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 md:p-12 rounded-3xl text-center space-y-6 max-w-2xl mx-auto border border-accent/20 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto border border-accent/40 text-accent">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-medium text-white">Project Request Sent!</h3>
              <p className="text-gray-400 font-sans max-w-md mx-auto text-sm leading-relaxed">
                Thank you for reaching out. We have successfully logged your details into our tracking system and will contact you shortly.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass-panel p-8 md:p-12 rounded-3xl text-left space-y-6 max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-colors"
                    placeholder="John Doe"
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-colors"
                    placeholder="john@example.com"
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Service Type</label>
                <select
                  name="service"
                  required
                  value={formState.service}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-colors appearance-none"
                  onChange={e => setFormState({ ...formState, service: e.target.value })}
                >
                  <option value="" className="bg-gray-900">Select a service...</option>
                  <option value="Full Stack" className="bg-gray-900">Full Stack Development</option>
                  <option value="UI/UX" className="bg-gray-900">UI/UX Design</option>
                  <option value="AI" className="bg-gray-900">AI Solutions</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formState.phone}
                  pattern="^(\+91[\-\s]?)?[6789]\d{9}$"
                  title="Please enter a valid Indian phone number (10 digits, optionally starting with +91)"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-colors"
                  placeholder="+91 98765 43210"
                  onChange={e => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formState.message}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-colors resize-none"
                  placeholder="Tell us about your project (optional)..."
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              {submitStatus === 'error' && (
                <div className="text-red-400 font-mono text-sm text-center bg-red-500/10 border border-red-500/20 py-3 rounded-xl">
                  Submission failed. Please check your network and try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] group disabled:bg-white/50 disabled:text-black/50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? 'Sending...' : 'Start Your Project'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
