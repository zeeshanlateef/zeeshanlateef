import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon, AnimatedSocial } from '../components/SocialIcons';

const Contact = () => {
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setStatusMsg('');

    // Basic Validation
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus('error');
      setStatusMsg('Please fill in all fields.');
      setLoading(false);
      return;
    }

    // EmailJS Send Integration from previous project
    emailjs
      .sendForm(
        "service_tdtezjs",   // Service ID
        "template_85h2msu",   // Template ID
        formRef.current,
        "CoA0m8HzSq_KvTGFi"   // Public Key
      )
      .then(
        () => {
          setStatus('success');
          setStatusMsg('Thank you! Your message has been sent successfully.');
          setFormData({ user_name: '', user_email: '', message: '' }); // reset form
          setLoading(false);
        },
        (error) => {
          console.error("Error sending message via EmailJS:", error);
          setStatus('error');
          setStatusMsg('Failed to send message. Please check your connection or contact directly.');
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#08080f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Get In <span className="title-gradient">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>

        {/* Content Layout (Equal heights layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between w-full">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-white mb-4">Contact Information</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  Feel free to reach out for project collaboration, job inquiries, or just to say hello. I'll get back to you as soon as possible!
                </p>

                <div className="space-y-6 pt-4">
                  <a
                    href="mailto:zeeshanlateef2016@gmail.com"
                    className="flex items-center space-x-4 p-3 bg-white/5 border border-white/5 hover:border-primary/20 rounded-xl transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="font-sans">
                      <p className="text-xs text-gray-500 font-semibold uppercase">Email Me</p>
                      <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">zeeshanlateef2016@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919572306596"
                    className="flex items-center space-x-4 p-3 bg-white/5 border border-white/5 hover:border-primary/20 rounded-xl transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="font-sans">
                      <p className="text-xs text-gray-500 font-semibold uppercase">Call / WhatsApp</p>
                      <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">+91-9572306596</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-3 bg-white/5 border border-white/5 rounded-xl">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="font-sans">
                      <p className="text-xs text-gray-500 font-semibold uppercase">Current Location</p>
                      <p className="text-sm font-medium text-gray-300">Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social media connections merged inside bottom of the card */}
              <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between gap-4">
                <span className="font-display font-bold text-xs text-gray-500 uppercase tracking-wider">Connect Socially</span>
                <div className="flex gap-2">
                  <AnimatedSocial
                    href="https://github.com/zeeshanlateef"
                    icon={GithubIcon}
                    label="GitHub"
                    colorClass="hover:border-white/30 hover:text-white hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  />
                  <AnimatedSocial
                    href="https://linkedin.com/in/zeeshanlateef"
                    icon={LinkedinIcon}
                    label="LinkedIn"
                    colorClass="hover:border-blue-400/30 hover:text-blue-400 hover:bg-blue-400/5 hover:shadow-[0_0_15px_rgba(96,165,250,0.15)]"
                  />
                  <AnimatedSocial
                    href="https://wa.me/919572306596"
                    icon={WhatsappIcon}
                    label="WhatsApp"
                    colorClass="hover:border-emerald-400/30 hover:text-emerald-400 hover:bg-emerald-400/5 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/5 h-full flex flex-col justify-center">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden subject field for EmailJS template variable compatibility */}
                <input type="hidden" name="subject" value="Contact Form Message from Portfolio" />

                <div>
                  <label htmlFor="user_name" className="block text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(0,210,255,0.05)] transition-all duration-300 text-sm font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(0,210,255,0.05)] transition-all duration-300 text-sm font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase text-gray-400 tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message details here..."
                    className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(0,210,255,0.05)] transition-all duration-300 text-sm font-sans resize-none"
                  />
                </div>

                {/* Status Alerts */}
                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-start gap-3 p-4 rounded-xl border text-sm ${
                        status === 'success'
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                          : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                      }`}
                    >
                      {status === 'success' ? (
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      )}
                      <span>{statusMsg}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-primary text-black font-semibold rounded-xl hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,210,255,0.25)] disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
