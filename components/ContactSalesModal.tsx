import React from 'react';
import { X, Phone, Mail, MapPin } from 'lucide-react';

interface ContactSalesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactSalesModal: React.FC<ContactSalesModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-beige-black/90 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl max-h-[95vh] bg-white rounded-3xl sm:rounded-[4rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300 flex flex-col">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 hover:bg-brand-red hover:text-white rounded-xl sm:rounded-2xl flex items-center justify-center transition-all z-10"
                >
                    <X size={20} className="sm:hidden" />
                    <X size={24} className="hidden sm:block" />
                </button>

                {/* Header */}
                <div className="bg-gradient-to-br from-brand-red to-red-800 p-6 sm:p-8 md:p-12 text-center flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <Phone size={28} className="text-white sm:hidden" />
                        <Phone size={36} className="text-white hidden sm:block" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-bold text-white mb-2 sm:mb-3 tracking-tight">Contact Our Sales Team</h2>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg font-medium">We're here to help you with your requirements</p>
                </div>

                {/* Contact Information - Scrollable */}
                <div className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8 overflow-y-auto flex-1">
                    {/* Mobile Numbers */}
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400 mb-3 sm:mb-4 flex items-center gap-2">
                            <Phone size={12} className="text-brand-red sm:hidden" />
                            <Phone size={14} className="text-brand-red hidden sm:block" />
                            Mobile Numbers
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                            <a
                                href="tel:+8801819254983"
                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 hover:bg-brand-red/5 border border-slate-100 hover:border-brand-red/20 transition-all group"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors flex-shrink-0">
                                    <Phone size={16} className="sm:hidden" />
                                    <Phone size={20} className="hidden sm:block" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-brand-beige-black text-base sm:text-lg">+880 1819-254983</p>
                                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Primary Contact</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Email Addresses */}
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400 mb-3 sm:mb-4 flex items-center gap-2">
                            <Mail size={12} className="text-brand-red sm:hidden" />
                            <Mail size={14} className="text-brand-red hidden sm:block" />
                            Email Addresses
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                            <a
                                href="mailto:aranimalhealth@gmail.com"
                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 hover:bg-brand-red/5 border border-slate-100 hover:border-brand-red/20 transition-all group"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors flex-shrink-0">
                                    <Mail size={16} className="sm:hidden" />
                                    <Mail size={20} className="hidden sm:block" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-brand-beige-black text-sm sm:text-base md:text-lg break-all">aranimalhealth@gmail.com</p>
                                    <p className="text-[10px] sm:text-xs text-slate-500 font-medium">General Inquiries</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Office Address */}
                    <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400 mb-3 sm:mb-4 flex items-center gap-2">
                            <MapPin size={12} className="text-brand-red sm:hidden" />
                            <MapPin size={14} className="text-brand-red hidden sm:block" />
                            Office Address
                        </h3>
                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                            <p className="font-bold text-brand-beige-black text-sm sm:text-base md:text-lg mb-2 leading-relaxed">
                                House-51, Flat: A-7 (7th Floor)<br />
                                Rabindra Sarani Road, Sector-3<br />
                                Uttara, Dhaka-1230<br />
                                Bangladesh
                            </p>
                            <a
                                href="https://maps.app.goo.gl/MyFxsrBcW7VsAHUXA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-brand-red hover:text-red-800 font-bold text-xs sm:text-sm mt-3 sm:mt-4 transition-colors"
                            >
                                <MapPin size={14} className="sm:hidden" />
                                <MapPin size={16} className="hidden sm:block" />
                                <span>View on Google Maps</span>
                            </a>
                        </div>
                    </div>

                    {/* Working Hours */}
                    <div className="bg-brand-beige-black text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center">
                        <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-brand-gold mb-2">Working Hours</p>
                        <p className="font-bold text-base sm:text-lg">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1">Closed on Fridays & Saturdays</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSalesModal;
