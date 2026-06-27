import React from 'react';
import { Camera, MessageSquare, Send, Phone as WhatsApp, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-charcoal text-ivory/80 pt-20 pb-10 border-t border-gold/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-playfair font-bold text-white tracking-wider">
                            MAHALAKSHMI <span className="text-gold">SAREES</span>
                        </h3>
                        <p className="font-light leading-relaxed">
                            Bringing you the finest handpicked sarees from across India. Experience
                            luxury, tradition, and elegance in every weave.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-maroon transition-all duration-300">
                                <Camera size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-maroon transition-all duration-300">
                                <MessageSquare size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-maroon transition-all duration-300">
                                <Send size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-playfair text-xl font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Collections', 'Why Us', 'Register', 'Contact'].map(link => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-gold transition-colors duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Collections */}
                    <div>
                        <h4 className="text-white font-playfair text-xl font-semibold mb-6">Collections</h4>
                        <ul className="space-y-4">
                            {['Banarasi Silk', 'Kanchipuram', 'Chanderi', 'Bridal Wear', 'Designer Sarees'].map(item => (
                                <li key={item}>
                                    <a href="#" className="hover:text-gold transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-playfair text-xl font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-gold mt-1 shrink-0" />
                                <span>Luxury Lane, Fashion District, Your City, India</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-gold shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-gold shrink-0" />
                                <span>enquiry@mahalakshmisarees.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-sm font-light">
                    <p>© {new Date().getFullYear()} Mahalakshmi Sarees. Developed with Elegance. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
