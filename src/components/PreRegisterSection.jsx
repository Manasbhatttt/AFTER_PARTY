import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PreRegisterSection() {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    rollNo: '',
    instagram: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // TODO: Replace this empty string with your deployed Google Apps Script URL
  const GOOGLE_SHEETS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwnLqycX8rZ3k8WWbDJDUTBgzs9BLxPiHRNnogHcbhU5NKSFQgDCBH-weIq8APhlKPy/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!GOOGLE_SHEETS_SCRIPT_URL) {
      alert("Please add your Google Sheets Script URL in PreRegisterSection.jsx");
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataObj = new FormData();
      Object.keys(formData).forEach(key => {
        formDataObj.append(key, formData[key]);
      });

      const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: 'POST',
        body: formDataObj,
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Failed to send request. Try again!");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Error submitting. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pre-register" className="py-32 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900 border-t border-white/5"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto bg-dark-900 border border-white/10 p-10 md:p-16 rounded-[3rem] relative overflow-hidden shadow-2xl group"
        >
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-neon-pink/20 transition-colors duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-neon-purple/20 transition-colors duration-1000"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-widest mb-6 drop-shadow-lg">
              Get On The <br/><span className="font-noir text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink italic pr-4">Guestlist</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto px-4">
              We&apos;re verifying all attendees to ensure an exclusive, safe, and elite crowd. 
              Drop your details below to request your invitation.
            </p>
          </div>

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="text-center py-16 relative z-10"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-neon-purple/20 border border-neon-purple mb-8 shadow-[0_0_40px_rgba(183,33,255,0.4)]">
                <svg className="w-12 h-12 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 tracking-tight">Request Received!</h3>
              <p className="text-white/50 text-lg">
                Your details are under review. If verified, you&apos;ll receive the exclusive invite link on your WhatsApp soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white hover:border-white/30 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all duration-300"
                    placeholder="Enter your real name"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/70 uppercase tracking-widest">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white hover:border-white/30 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/70 uppercase tracking-widest">College / University</label>
                  <input
                    type="text"
                    name="college"
                    required
                    value={formData.college}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white hover:border-white/30 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all duration-300"
                    placeholder="Where do you study?"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Student Roll No. / ID</label>
                  <input
                    type="text"
                    name="rollNo"
                    required
                    value={formData.rollNo}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white hover:border-white/30 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all duration-300"
                    placeholder="For quick verification"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Instagram Handle (Optional but recommended)</label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 font-bold">@</span>
                  <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white hover:border-white/30 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all duration-300"
                    placeholder="yourusername"
                  />
                </div>
              </div>

              <div className="pt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-16 py-5 rounded-full font-black text-lg tracking-widest uppercase bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:shadow-[0_0_30px_rgba(183,33,255,0.6)] transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-3 mx-auto"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : 'Submit Request'}
                </motion.button>
                <p className="text-xs text-white/40 mt-6 max-w-lg mx-auto leading-relaxed">
                  * By requesting an invite, you agree to our verification process. Submission does not guarantee entry.
                </p>
              </div>
            </form>
          )}

        </motion.div>
      </div>
    </section>
  );
}
