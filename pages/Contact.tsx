
import React, { useState, useEffect } from 'react';
import { Mail, MapPin, PhoneCall, Send, MessageCircle, Clock, Globe, AlertCircle, CheckCircle2, RefreshCcw } from 'lucide-react';

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormFields, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your inquiry details';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be more detailed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (touched.name || touched.email || touched.message) {
      validate();
    }
  }, [formData, touched]);

  const handleBlur = (field: keyof FormFields) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });
    
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({ name: false, email: false, subject: false, message: false });
      }, 1500);
    }
  };

  const getInputClass = (field: keyof FormErrors) => {
    const baseClass = "w-full bg-slate-50 border rounded-[1.5rem] px-8 py-5 focus:outline-none transition-all duration-300 font-bold text-slate-800 text-lg";
    if (touched[field] && errors[field]) {
      return `${baseClass} border-red-500 bg-red-50 focus:border-red-600 focus:ring-8 focus:ring-red-500/10`;
    }
    if (touched[field] && !errors[field] && formData[field as keyof FormFields]) {
      return `${baseClass} border-emerald-500 bg-emerald-50/30 focus:border-emerald-600`;
    }
    return `${baseClass} border-slate-200 focus:border-emerald-500 focus:ring-8 focus:ring-emerald-500/10`;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-slate-50 translate-y-1 clip-path-slant"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Let's Connect</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
            Contact us for wholesale inquiries, partnerships, or technical support for our animal health products.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="-mt-32 pb-24 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-10 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/30">
                    <MessageCircle size={24} />
                  </div>
                  <span>Quick Contact</span>
                </h3>
                
                <ul className="space-y-10">
                  <li className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-400 uppercase tracking-widest text-[10px] mb-2">Our Location</h4>
                      <p className="text-slate-800 font-bold leading-relaxed text-lg group-hover:text-emerald-600 transition-colors">
                        House-51, Flat: A-6 (6th Floor), Rabindra Sarani Road, Sector-3, Uttara, Dhaka-1230.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <PhoneCall size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-400 uppercase tracking-widest text-[10px] mb-2">Call Support</h4>
                      <p className="text-slate-800 font-bold text-xl">+88-02-58951859</p>
                      <p className="text-slate-500 font-bold">01777-703240</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-400 uppercase tracking-widest text-[10px] mb-2">Email Us</h4>
                      <p className="text-slate-800 font-bold text-lg">info@aranimalhealthltd.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-600 p-12 rounded-[3.5rem] shadow-2xl shadow-emerald-600/30 text-white">
                <h3 className="text-2xl font-black mb-10 flex items-center space-x-4">
                  <Clock size={28} className="text-emerald-200" />
                  <span>Business Hours</span>
                </h3>
                <ul className="space-y-6">
                  <li className="flex justify-between border-b border-white/20 pb-4">
                    <span className="font-bold">Saturday - Thursday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between pb-4">
                    <span className="font-bold">Friday</span>
                    <span className="font-black uppercase tracking-widest text-emerald-100 bg-white/10 px-3 py-1 rounded-lg">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="bg-white p-12 md:p-24 rounded-[4rem] shadow-2xl border border-slate-100 text-center animate-in zoom-in fade-in duration-500 h-full flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
                    <CheckCircle2 size={56} className="animate-bounce" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Message Sent!</h2>
                  <p className="text-slate-500 text-xl max-w-md mx-auto mb-10 font-medium leading-relaxed">
                    Thank you for reaching out. Our specialist team will review your inquiry and get back to you within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setSent(false)}
                    className="flex items-center space-x-3 bg-slate-900 hover:bg-emerald-600 text-white font-black px-10 py-5 rounded-[2rem] transition-all shadow-xl active:scale-95"
                  >
                    <RefreshCcw size={20} />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">Send a Message</h2>
                  <p className="text-slate-500 mb-12 text-lg font-medium">Fields marked with <span className="text-emerald-600 font-bold">*</span> are mandatory for our team to assist you.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name *</label>
                        <div className="relative">
                          <input 
                            required
                            type="text" 
                            placeholder="Ex: Atiar Rahman"
                            className={getInputClass('name')}
                            value={formData.name}
                            onBlur={() => handleBlur('name')}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                          {touched.name && !errors.name && formData.name && (
                            <CheckCircle2 className="absolute right-6 top-5 text-emerald-500" size={24} />
                          )}
                        </div>
                        {touched.name && errors.name && (
                          <p className="text-red-500 text-sm font-black flex items-center mt-2 ml-4 animate-in slide-in-from-left-2">
                            <AlertCircle size={16} className="mr-2" /> {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Address *</label>
                        <div className="relative">
                          <input 
                            required
                            type="email" 
                            placeholder="rahman@gmail.com"
                            className={getInputClass('email')}
                            value={formData.email}
                            onBlur={() => handleBlur('email')}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                          {touched.email && !errors.email && formData.email && (
                            <CheckCircle2 className="absolute right-6 top-5 text-emerald-500" size={24} />
                          )}
                        </div>
                        {touched.email && errors.email && (
                          <p className="text-red-500 text-sm font-black flex items-center mt-2 ml-4 animate-in slide-in-from-left-2">
                            <AlertCircle size={16} className="mr-2" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Inquiry Subject</label>
                      <input 
                        type="text" 
                        placeholder="Wholesale Inquiry / Partnership Proposal"
                        className="w-full bg-slate-50 border border-slate-200 rounded-[1.5rem] px-8 py-5 focus:outline-none focus:border-emerald-500 focus:ring-8 focus:ring-emerald-500/10 transition-all font-bold text-lg"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Message *</label>
                      <div className="relative">
                        <textarea 
                          required
                          rows={6}
                          placeholder="How can our biotechnology solutions help your business grow?"
                          className={getInputClass('message')}
                          value={formData.message}
                          onBlur={() => handleBlur('message')}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                      </div>
                      {touched.message && errors.message && (
                        <p className="text-red-500 text-sm font-black flex items-center mt-2 ml-4 animate-in slide-in-from-left-2">
                          <AlertCircle size={16} className="mr-2" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-black py-6 rounded-[1.5rem] flex items-center justify-center space-x-4 shadow-2xl shadow-slate-900/20 transform active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <RefreshCcw className="animate-spin" size={28} />
                      ) : (
                        <>
                          <span className="text-2xl tracking-tight">Submit Message</span>
                          <Send size={24} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="h-[600px] w-full bg-slate-200 rounded-[4rem] overflow-hidden shadow-2xl relative group border-8 border-slate-50">
            <iframe 
              title="AR Animal Health Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6206110909143!2d90.39530651439071!3d23.86760219020718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4230e6c5687%3A0xbe6a72361efb0bb9!2sRabindra%20Sarani%2C%20Dhaka%201230%2C%20Bangladesh!5e0!3m2!1sen!2sbg!4v1644134617529!5m2!1sen!2sbg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105"
            ></iframe>
            <div className="absolute top-12 left-12 bg-white p-10 rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] max-w-sm pointer-events-none group-hover:scale-105 transition-transform duration-700 border border-slate-100">
              <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Visit Our Office</h4>
              <p className="text-slate-500 font-bold mb-6">Located in the premium business zone of Uttara Sector-3.</p>
              <div className="flex items-center text-emerald-600 font-black text-sm uppercase tracking-widest">
                <span>Navigate</span>
                <Globe size={18} className="ml-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
