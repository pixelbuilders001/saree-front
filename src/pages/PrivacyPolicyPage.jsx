import React, { useEffect } from 'react';
import { Shield, Lock, ShieldCheck, Mail, MapPin, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-ivory text-charcoal pt-12 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-poppins">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -tr-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -bl-1/4 w-[600px] h-[600px] rounded-full bg-maroon/5 blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Back to Home Link */}
                <Link
                    to="/"
                    className="inline-flex items-center space-x-2 text-sm text-maroon hover:text-gold transition-colors duration-300 mb-8 group"
                >
                    <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold tracking-wider text-xs">BACK TO HOME</span>
                </Link>

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gold/10 rounded-full border border-gold/20 text-gold relative animate-float">
                            <Shield size={36} />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-maroon mb-4 tracking-wide">
                        Privacy Policy
                    </h1>
                    <div className="ornament-line my-4">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    </div>
                    <p className="text-sm font-medium text-gold-dark tracking-wider">
                        Effective Date: July 11, 2026
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="bg-white/60 backdrop-blur-md border border-gold/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-t-3xl" />

                    <p className="lead text-base md:text-lg text-charcoal/80 mb-8 leading-relaxed font-light">
                        Welcome to <strong className="font-semibold text-maroon">SHREE Banarasi Sarees</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect the information you share with us through our website, Facebook/Instagram Lead Forms, WhatsApp, and other communication channels.
                    </p>

                    {/* Policy Sections */}
                    <div className="space-y-8 text-charcoal/85">

                        {/* Section 1 */}
                        <section className="border-b border-gold/5 pb-8">
                            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-maroon mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20">1</span>
                                Information We Collect
                            </h2>
                            <p className="mb-4 leading-relaxed font-light">
                                When you interact with us, we may collect the following information:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4">
                                {[
                                    'Full Name',
                                    'Mobile Number',
                                    'Email Address (if provided)',
                                    'City or Locality',
                                    'Saree Preferences (such as preferred style, fabric, color, and budget)',
                                    'Shopping Interests and Survey Responses',
                                    'Any additional information you voluntarily provide'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start space-x-2 text-sm">
                                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"></span>
                                        <span className="font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section className="border-b border-gold/5 pb-8">
                            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-maroon mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20">2</span>
                                How We Use Your Information
                            </h2>
                            <p className="mb-4 leading-relaxed font-light">
                                We use your information to:
                            </p>
                            <ul className="space-y-3 pl-4">
                                {[
                                    'Contact you regarding our products and services.',
                                    'Inform you about our Grand Opening, special offers, and promotional events.',
                                    'Share updates about new saree collections.',
                                    'Understand customer preferences to improve our product selection.',
                                    'Respond to your inquiries and provide customer support.',
                                    'Improve our website, services, and shopping experience.'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start space-x-2 text-sm">
                                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"></span>
                                        <span className="font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="border-b border-gold/5 pb-8">
                            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-maroon mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20">3</span>
                                Marketing Communication
                            </h2>
                            <p className="mb-4 leading-relaxed font-light">
                                If you provide your contact details, you may receive promotional messages through:
                            </p>
                            <div className="flex flex-wrap gap-3 pl-4 mb-4">
                                {['WhatsApp', 'Phone Calls', 'SMS', 'Email'].map((channel, index) => (
                                    <span key={index} className="px-3 py-1 bg-gold/5 border border-gold/10 rounded-full text-xs font-medium text-gold-dark">
                                        {channel}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm font-light leading-relaxed italic text-charcoal/70">
                                You can request to stop receiving promotional communications at any time by contacting us.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="border-b border-gold/5 pb-8">
                            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-maroon mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20">4</span>
                                Information Sharing
                            </h2>
                            <p className="mb-4 leading-relaxed font-light">
                                We respect your privacy.
                            </p>
                            <div className="bg-gold/5 border border-gold/10 p-5 rounded-2xl mb-4">
                                <p className="text-sm leading-relaxed text-maroon font-semibold text-center">
                                    We do NOT sell, rent, or trade your personal information to third parties.
                                </p>
                            </div>
                            <p className="text-sm leading-relaxed font-light">
                                Your information may only be shared with trusted service providers who assist us in operating our business, such as website hosting, communication platforms, or marketing tools, and only when necessary.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="border-b border-gold/5 pb-8">
                            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-maroon mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20">5</span>
                                Data Security
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4 mb-4 items-start bg-ivory/50 p-4 rounded-xl border border-gold/5">
                                <div className="p-3 bg-white rounded-lg text-gold border border-gold/10 shrink-0">
                                    <Lock size={20} />
                                </div>
                                <p className="text-sm leading-relaxed font-light">
                                    We take reasonable technical and organizational measures to protect your personal information from unauthorized access, misuse, alteration, or disclosure.
                                </p>
                            </div>
                            <p className="text-sm leading-relaxed font-light text-charcoal/70 italic">
                                **Note:** While we strive to safeguard your information, no online transmission or storage system can be guaranteed to be completely secure.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section className="border-b border-gold/5 pb-8">
                            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-maroon mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20">6</span>
                                Cookies and Website Analytics
                            </h2>
                            <p className="mb-3 leading-relaxed font-light">
                                Our website may use cookies and similar technologies to:
                            </p>
                            <ul className="space-y-2 pl-4 mb-3">
                                {[
                                    'Improve website performance.',
                                    'Understand visitor behavior.',
                                    'Enhance your browsing experience.'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start space-x-2 text-sm">
                                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0"></span>
                                        <span className="font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm font-light leading-relaxed text-charcoal/70">
                                You may disable cookies through your browser settings if you prefer.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="border-b border-gold/5 pb-8">
                            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-maroon mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20">7</span>
                                Your Rights
                            </h2>
                            <p className="mb-4 leading-relaxed font-light">
                                You have the right to request access to, correction of, or deletion of your personal information, or to withdraw consent for marketing. Enjoy the following controls over your data:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
                                {[
                                    'Request access to your personal information.',
                                    'Request correction of inaccurate information.',
                                    'Request deletion of your personal information.',
                                    'Withdraw your consent for marketing communications.'
                                ].map((right, index) => (
                                    <div key={index} className="flex items-start space-x-3 text-sm">
                                        <ShieldCheck size={16} className="text-gold shrink-0 mt-0.5" />
                                        <span className="font-light">{right}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section className="border-b border-gold/5 pb-8">
                            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-maroon mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20">8</span>
                                Third-Party Platforms
                            </h2>
                            <p className="text-sm leading-relaxed font-light">
                                We may use third-party platforms such as Meta (Facebook & Instagram), WhatsApp, Google services, or similar providers for lead generation, communication, and analytics. Your use of these platforms is also subject to their respective privacy policies.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section className="border-b border-gold/5 pb-8">
                            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-maroon mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20">9</span>
                                Changes to This Privacy Policy
                            </h2>
                            <p className="text-sm leading-relaxed font-light">
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page along with the updated effective date.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-maroon mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-semibold border border-gold/20">10</span>
                                Contact Us
                            </h2>
                            <p className="mb-6 leading-relaxed font-light">
                                If you have any questions about this Privacy Policy or how we handle your information, please contact us:
                            </p>

                            <div className="bg-ivory border border-gold/10 p-6 rounded-2xl space-y-4">
                                <h3 className="font-playfair font-bold text-maroon text-lg">
                                    SHREE Banarasi Sarees
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3 text-sm">
                                        <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                                        <span className="font-light">Rudauli Chowk, Harpur Aloth, Samastipur, Bihar – 848101</span>
                                    </div>
                                    {/* <div className="flex items-center space-x-3 text-sm">
                                        <Phone size={18} className="text-gold shrink-0" />
                                        <span className="font-light">coming soon</span>
                                    </div> */}
                                    <div className="flex items-center space-x-3 text-sm">
                                        <Mail size={18} className="text-gold shrink-0" />
                                        <a href="mailto:shreebanarasi180@gmail.com" className="font-light hover:text-gold transition-colors duration-300">
                                            shreebanarasi180@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gold/10 text-center">
                        <p className="text-sm font-playfair italic text-maroon-light">
                            Thank you for trusting SHREE Banarasi Sarees. We value your privacy and are committed to protecting your personal information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
