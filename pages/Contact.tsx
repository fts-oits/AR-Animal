
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
    const baseClass = "w-full bg-white border-2 rounded-2xl px-6 py-4 focus:outline-none transition-all duration-300 font-ubuntu font-bold text-slate-800 text-lg";
    if (touched[field] && errors[field]) {
      return `${baseClass} border-red-200 bg-red-50 focus:border-red-500`;
    }
    if (touched[field] && !errors[field] && formData[field as keyof FormFields]) {
      return `${baseClass} border-brand-emerald/20 bg-brand-emerald/5 focus:border-brand-emerald`;
    }
    return `${baseClass} border-slate-100 focus:border-brand-emerald bg-slate-50/50`;
  };

  return (
    <div className="bg-brand-beige-white min-h-screen">
      {/* Premium Header */}
      <section className="bg-brand-beige-black pt-40 pb-60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/20 via-transparent to-brand-gold/10"></div>
        <div className="absolute -bottom-1 w-[120%] h-40 bg-brand-beige-white -rotate-3 translate-x-[-10%]"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-[1900px]">
          <div className="max-w-4xl">
            <span className="text-brand-emerald font-black tracking-[0.5em] uppercase text-xs mb-6 block">Transmission Line</span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-ubuntu font-bold text-white mb-8 tracking-tighter leading-none">
              Get In <span className="text-brand-emerald">Touch.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
              Experience the future of biotechnology. Our experts are ready to assist with your agricultural and animal health needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="-mt-48 pb-32 relative z-20">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100">

            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 bg-brand-beige-black p-12 md:p-20 text-white relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 blur-[100px] pointer-events-none" />

              <h3 className="text-3xl font-ubuntu font-bold mb-12 flex items-center gap-4">
                <span className="w-12 h-1 bg-brand-emerald" />
                Information
              </h3>

              <div className="space-y-12">
                <div className="group flex gap-8">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-all duration-500 border border-white/10">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Our Office</h4>
                    <p className="text-xl font-medium leading-relaxed text-slate-300">
                      House-51, Flat: A-6, Rabindra Sarani Road, Sector-3, Uttara, Dhaka-1230.
                    </p>
                  </div>
                </div>

                <div className="group flex gap-8">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-all duration-500 border border-white/10">
                    <PhoneCall size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Direct Line</h4>
                    <p className="text-2xl font-ubuntu font-bold">+88-02-58951859</p>
                    <p className="text-lg text-slate-400 font-medium">Mob: 01777-703240</p>
                  </div>
                </div>

                <div className="group flex gap-8">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-all duration-500 border border-white/10">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Email</h4>
                    <p className="text-xl font-medium text-slate-300">info@aranimalhealthltd.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-24 p-8 rounded-3xl bg-brand-emerald/10 border border-brand-emerald/20">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="text-brand-emerald" />
                  <span className="font-ubuntu font-bold text-lg">Working Hours</span>
                </div>
                <p className="text-slate-400 font-medium ml-10">Sat - Thu: 09:00 AM - 07:00 PM</p>
                <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] ml-10 mt-2">Closed on Fridays</p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 p-12 md:p-20 bg-white">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in fade-in duration-700">
                  <div className="w-32 h-32 bg-brand-emerald/10 text-brand-emerald rounded-full flex items-center justify-center mb-10">
                    <CheckCircle2 size={64} className="animate-bounce" />
                  </div>
                  <h2 className="text-5xl font-ubuntu font-bold text-slate-900 mb-6">Success!</h2>
                  <p className="text-slate-500 text-xl max-w-md mx-auto mb-12 leading-relaxed">
                    Your message has been received. Our team of specialists will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="group flex items-center gap-4 bg-brand-beige-black text-white px-10 py-5 rounded-2xl font-ubuntu font-bold text-lg hover:bg-brand-emerald transition-all active:scale-95 shadow-2xl"
                  >
                    <RefreshCcw size={22} className="group-hover:rotate-180 transition-transform duration-700" />
                    <span>Resubmit Form</span>
                  </button>
                </div>
              ) : (
                <div className="h-full">
                  <h3 className="text-4xl font-ubuntu font-bold text-slate-900 mb-10">Leave a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className={getInputClass('name')}
                          value={formData.name}
                          onBlur={() => handleBlur('name')}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {touched.name && errors.name && (
                          <div className="flex items-center gap-2 text-red-500 text-xs font-bold mt-2 ml-2">
                            <AlertCircle size={14} /> {errors.name}
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className={getInputClass('email')}
                          value={formData.email}
                          onBlur={() => handleBlur('email')}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {touched.email && errors.email && (
                          <div className="flex items-center gap-2 text-red-500 text-xs font-bold mt-2 ml-2">
                            <AlertCircle size={14} /> {errors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Subject</label>
                      <input
                        type="text"
                        placeholder="Partnership Inquiry"
                        className="w-full bg-slate-50/50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-emerald transition-all font-ubuntu font-bold text-slate-800 text-lg"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Message</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your requirements..."
                        className={getInputClass('message')}
                        value={formData.message}
                        onBlur={() => handleBlur('message')}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                      {touched.message && errors.message && (
                        <div className="flex items-center gap-2 text-red-500 text-xs font-bold mt-2 ml-2">
                          <AlertCircle size={14} /> {errors.message}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-emerald hover:bg-emerald-600 text-white font-ubuntu font-bold py-6 rounded-2xl flex items-center justify-center gap-4 shadow-2xl shadow-brand-emerald/30 transform active:scale-95 transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <RefreshCcw className="animate-spin" size={24} />
                      ) : (
                        <>
                          <span className="text-xl">Transmit Message</span>
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

      {/* Map Section - Full Width */}
      <section className="py-32 bg-brand-beige-white">
        <div className="container mx-auto px-6">
          <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group">
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
            <div className="absolute top-12 left-12 bg-white/90 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl max-w-sm border border-white/50 hidden md:block group-hover:bg-white transition-colors duration-500">
              <h4 className="text-2xl font-ubuntu font-bold text-slate-900 mb-2">Technical Hub</h4>
              <p className="text-slate-500 font-medium mb-6">Our headquarters in Uttara serves as the strategic center for nationwide distribution.</p>
              <div className="inline-flex items-center gap-3 text-brand-emerald font-black text-xs uppercase tracking-widest">
                <span>View Directions</span>
                <Globe size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Contact;
