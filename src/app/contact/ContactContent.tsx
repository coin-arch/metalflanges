"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaPaperPlane,
    FaChevronRight,
    FaWhatsapp
} from "react-icons/fa";

const ContactContent = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Thank you. We have received your message.");
        setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
        setIsSubmitting(false);
    };

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt />,
            title: "Address",
            details: "517, Prasad Chambers, Opera House, Mumbai - 400004"
        },
        {
            icon: <FaPhone />,
            title: "Phone",
            details: "+91-9892171042"
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            details: "enquiry@metalministry.in"
        }
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            {/* Hero Section with Banner */}
            <section className="relative pt-64 md:pt-52 pb-32 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/contact-banner-v2.png"
                        alt="Contact Banner"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-6 md:mb-10 drop-shadow-2xl"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "120px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-primary mx-auto"
                    />
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Information Area */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                                <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
                                    Have a requirement or question? Fill out the form or reach us through our contact details.
                                </p>

                                <div className="space-y-8">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex gap-5">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{info.title}</h3>
                                                <p className="text-gray-800 font-medium">{info.details}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Simple Map */}
                            <div className="h-[300px] w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.801!2d72.82!3d18.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce103e6ec89d%3A0xe9100d13231f6ef6!2sOpera%20House%2C%20Mumbai!5e0!3m2!1sen!2sin!4v123456789"
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                                    className="grayscale"
                                ></iframe>
                            </div>
                        </div>

                        {/* Form Area */}
                        <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                                    <textarea
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {isSubmitting ? "Sending..." : "Submit"}
                                    {!isSubmitting && <FaPaperPlane size={14} />}
                                </button>

                                <div className="pt-6 border-t border-gray-100 flex justify-center">
                                    <a href="https://wa.me/919892171042" className="flex items-center gap-2 text-green-600 font-bold hover:underline">
                                        <FaWhatsapp size={20} /> Chat on WhatsApp
                                    </a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactContent;
