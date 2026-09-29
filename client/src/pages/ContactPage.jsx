import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ArrowLeft, Sparkles, Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, Loader2, MessageSquare, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import TiltCard from '../components/TiltCard';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/SocialIcons';

const ContactPage = () => {
  const formRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus('error');
      setStatusMsg('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_tdtezjs",
        "template_85h2msu",
        formRef.current,
        "CoA0m8HzSq_KvTGFi"
      )
      .then(
        () => {
          setStatus('success');
          setStatusMsg('Thank you! Your message was sent successfully. I will get back to you as soon as possible.');
          setFormData({ user_name: '', user_email: '', message: '' });
          setLoading(false);
        },
        (error) => {
          console.error("Error sending message via EmailJS:", error);
          setStatus('error');
          setStatusMsg('Could not send message automatically. Please write to me directly at zeeshanlateef2016@gmail.com');
          setLoading(false);
        }
      );
  };

  return (
    <div className="pt-28 pb-20 relative animated-bg min-h-screen">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Back Navigation */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-primary transition-colors glass-panel px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 bg-primary/5 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Let's Talk
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mb-4"
          >
            Get In <span className="title-gradient">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed"
          >
            Whether you have a job opportunity, a web project, or just want to connect, feel free to drop me a message.
          </motion.p>
        </div>

        {/* 3D Quick Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <TiltCard className="p-6 text-center flex flex-col items-center justify-between group">
            <div className="p-4 bg-primary/10 rounded-2xl text-primary border border-primary/20 mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-1">Email</h3>
            <p className="text-xs text-gray-400 mb-4">Feel free to send an email anytime</p>
            <a
              href="mailto:zeeshanlateef2016@gmail.com"
              className="text-sm font-semibold text-primary hover:underline break-all"
            >
              zeeshanlateef2016@gmail.com
            </a>
          </TiltCard>

          <TiltCard className="p-6 text-center flex flex-col items-center justify-between group">
            <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20 mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-1">Phone & WhatsApp</h3>
            <p className="text-xs text-gray-400 mb-4">Available for quick calls & chat</p>
            <a
              href="https://wa.me/919572306596"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-emerald-400 hover:underline"
            >
              +91 9572306596
            </a>
          </TiltCard>

          <TiltCard className="p-6 text-center flex flex-col items-center justify-between group">
            <div className="p-4 bg-secondary/10 rounded-2xl text-secondary border border-secondary/20 mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-1">Location</h3>
            <p className="text-xs text-gray-400 mb-4">Based in Delhi, India</p>
            <span className="text-sm font-semibold text-gray-200">
              Open to Remote & Local Roles
            </span>
          </TiltCard>
        </div>

        {/* Contact Form & Additional Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 h-full flex flex-col justify-center">
              <div className="mb-6">
                <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Send a Message
                </h2>
                <p className="text-xs text-gray-400 font-sans mt-1">
                  Fill in your details below and I will reply as soon as possible.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="subject" value="Contact Form Message from Portfolio Page" />

                <div>
                  <label htmlFor="user_name" className="block text-xs font-semibold uppercase text-gray-300 tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(0,210,255,0.08)] transition-all duration-300 text-sm font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-xs font-semibold uppercase text-gray-300 tracking-wider mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(0,210,255,0.08)] transition-all duration-300 text-sm font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase text-gray-300 tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(0,210,255,0.08)] transition-all duration-300 text-sm font-sans resize-none"
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
                  className="w-full py-4 px-6 bg-primary text-black font-bold rounded-xl hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer font-display"
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
          </div>

          {/* Social Connections (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-secondary" />
                Social Profiles
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Check out my code repositories on GitHub or connect with me professionally on LinkedIn.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="https://github.com/zeeshanlateef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    <div>
                      <h4 className="text-sm font-bold text-white">GitHub</h4>
                      <p className="text-[11px] text-gray-400">github.com/zeeshanlateef</p>
                    </div>
                  </div>
                  <span className="text-xs text-primary font-semibold group-hover:translate-x-1 transition-transform">Visit →</span>
                </a>

                <a
                  href="https://linkedin.com/in/zeeshanlateef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                    <div>
                      <h4 className="text-sm font-bold text-white">LinkedIn</h4>
                      <p className="text-[11px] text-gray-400">linkedin.com/in/zeeshanlateef</p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">Connect →</span>
                </a>

                <a
                  href="https://wa.me/919572306596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <WhatsappIcon className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300" />
                    <div>
                      <h4 className="text-sm font-bold text-white">WhatsApp</h4>
                      <p className="text-[11px] text-gray-400">+91 9572306596</p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">Chat →</span>
                </a>
              </div>
            </div>

            {/* Quick Note Box */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Clock className="w-4 h-4" />
                Quick Response
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                I check emails and messages regularly and try to respond within a few hours.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
