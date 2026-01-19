"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaIndustry } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 transform translate-x-20 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-stretch gap-16">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative min-h-[500px]"
                    >
                        <div className="absolute inset-0 bg-gray-900 rounded-2xl transform rotate-3 scale-95 opacity-10"></div>
                        <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/who-we-are.jpg"
                                alt="About Metal Ministry"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                            {/* Floating Stats Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-primary flex items-center gap-4 max-w-xs"
                            >
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <FaAward size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">ISO 9001:2015</p>
                                    <p className="text-sm text-gray-600">Certified Company</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Stats Card 2 - Experience */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, type: "spring" }}
                            className="absolute -top-10 -right-10 bg-primary text-white w-40 h-40 rounded-full shadow-2xl hidden md:flex flex-col items-center justify-center z-20 border-4 border-white"
                        >
                            <span className="text-4xl font-bold block mb-1">25+</span>
                            <span className="text-xs uppercase tracking-wider font-medium opacity-90 text-center leading-tight">Years<br />Experience</span>
                        </motion.div>
                    </motion.div>

                    {/* Text Column */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-0.5 w-12 bg-primary"></span>
                                <span className="text-primary font-bold uppercase tracking-widest text-sm">Who We Are</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                                Manufacturing Excellence & <br />
                                <span className="text-primary relative inline-block">
                                    Global Precision
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-20" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 43.6015 1.55825 81.334 1.55825C119.066 1.55825 198 6.99997 198 6.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                                </span>
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Metal Ministry Inc. stands as a beacon of quality in the metal manufacturing industry. As a leading <strong>Stockholder & Manufacturer</strong>, we engineer components that drive the world's most critical sectors—from Aerospace to Heavy Engineering.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                {[
                                    "Precision Engineering",
                                    "Global Export Network",
                                    "Certified Quality Assurance",
                                    "Timely Delivery",
                                    "High-Grade Materials",
                                    "Customer-Centric Approach"
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                        className="flex items-center gap-3"
                                    >
                                        <FaCheckCircle className="text-primary flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/about-v1.html"
                                    className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                                >
                                    <FaIndustry /> Read Our Story
                                </Link>
                                <Link
                                    href="/certificate.html"
                                    className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 font-semibold rounded-lg hover:border-primary hover:text-primary transition flex items-center gap-2"
                                >
                                    <FaAward /> View Certificates
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
