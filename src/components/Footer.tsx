import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white text-2xl font-bold mb-8">Metal Flange</h3>
                        <p className="mb-6 leading-relaxed opacity-80">
                            Leading Manufacturer & Stockholder of Stainless Steel, Nickel Alloys, and specialized metal components for global industries.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                                <span>Office No. 517, 5th Floor, Prasad Chambers, Tata Road No. 2, Opera House, Mumbai: 400004. India.</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Contact */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-8 border-b-2 border-primary/50 inline-block pb-2">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:+919892171042" className="flex items-center gap-3 hover:text-primary transition group">
                                    <span className="p-2 bg-gray-800 rounded-full group-hover:bg-primary group-hover:text-white transition"><FaPhone size={14} /></span>
                                    +91-9892171042
                                </a>
                            </li>
                            <li>
                                <a href="mailto:enquiry@metalministry.in" className="flex items-center gap-3 hover:text-primary transition group">
                                    <span className="p-2 bg-gray-800 rounded-full group-hover:bg-primary group-hover:text-white transition"><FaEnvelope size={14} /></span>
                                    enquiry@metalministry.in
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@metalministry.in" className="flex items-center gap-3 hover:text-primary transition group">
                                    <span className="p-2 bg-gray-800 rounded-full group-hover:bg-primary group-hover:text-white transition"><FaEnvelope size={14} /></span>
                                    info@metalministry.in
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Products Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-8 border-b-2 border-primary/50 inline-block pb-2">Key Products</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'SS 304/304L/304H Flanges', href: '/products/stainless-steel-304-304L-304H-flange-manufacturer' },
                                { name: 'Nickel 200/201 Flanges', href: '/products/nickel-200-201-flange-manufacturer' },
                                { name: 'Monel 400/K500 Flanges', href: '/products/monel-400-k500-flange-manufacturer' },
                                { name: 'Inconel 600/601 Flanges', href: '/products/inconel-600-601-flange-manufacturer' },
                                { name: 'Hastelloy C22/C276 Flanges', href: '/products/hastelloy-c22-c276-flange-manufacturer' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="flex items-center gap-2 hover:text-primary transition group">
                                        <FaChevronRight size={10} className="text-primary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Google Map */}
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 h-64">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.4800237225054!2d72.81506301489935!3d18.95439638715771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce103e6ec89d%3A0xe9100d13231f6ef6!2sPrasad%20Chambers%2C%20Tata%20Rd%20No%202%2C%20Charni%20Road%20East%2C%20Opera%20House%2C%20Girgaon%2C%20Mumbai%2C%20Maharashtra%20400004!5e0!3m2!1sen!2sin!4v1591000587989!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="grayscale hover:grayscale-0 transition duration-700"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-black py-8 border-t border-gray-800/50">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
                    <p className="mb-4 md:mb-0">© 2026 Metal Ministry Inc. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-white transition">Disclaimer</Link>
                        <Link href="#" className="hover:text-white transition">Terms of Use</Link>
                        <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
