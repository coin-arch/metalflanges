"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckDouble, FaClipboardCheck, FaMicroscope, FaShieldAlt, FaIndustry, FaUserCheck } from "react-icons/fa";

const assurancePoints = [
    {
        text: "Material Supplied by us are according to the standards tried by the Government recognized Laboratories and with Lab Test Certificate.",
        icon: <FaCheckDouble size={32} />
    },
    {
        text: "To prepare, motivate and support representatives in accomplishing organization's goals.",
        icon: <FaUserCheck size={32} />
    },
    {
        text: "Better supply chain management system to ensure prompt delivery and service to clients.",
        icon: <FaIndustry size={32} />
    },
    {
        text: "All products go through best quality systems for material control, process control, testing, finishing and packing.",
        icon: <FaClipboardCheck size={32} />
    },
    {
        text: "Continually enhance Quality Management System to ensure its continuing suitability to enable us to stay ahead of competition.",
        icon: <FaShieldAlt size={32} />
    }
];

export default function QualityContent() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/quality-banner-img.png"
                        alt="Quality Policy"
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center pt-40 pb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-6 md:mb-10 drop-shadow-2xl"
                    >
                        Quality Policy
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "120px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-primary mx-auto"
                    />
                </div>
            </section>

            {/* Quality Policy Quote */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <FaShieldAlt className="text-secondary text-5xl mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Commitment</h2>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify md:text-center">
                            Quality is exceptionally basic for our organization and we attempt to join it in every one of our exercises. We ascertain that we get and import our products from established and well-reputed suppliers. We work for a result-oriented work culture to satisfy clients' needs in terms of Cost, Quality, and Delivery. By upgrading the effectiveness of people and plant equipment safely, we are aiming towards zero losses. We likewise believe in constant improvement for the effectiveness of the Quality Management System through Team Work, Training, and Focus on Actions and Results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quality Control */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2"
                        >
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/blog-8.jpg" // Using legacy image to match original content
                                    alt="Quality Control"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                    <h3 className="text-white text-2xl font-bold">Rigorous Testing Standards</h3>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:w-1/2 space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-4 rounded-full text-primary">
                                    <FaMicroscope size={24} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800">Quality Control</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                Quality is exceptionally fundamental for our organization and we attempt to fuse it in every one of our exercises. Our quality control division is outfitted with highly accurate estimation and inspection devices and manned by proficient and skilled engineers. This unparalleled combination ensures that we have total control over the quality of the product, right from the procurement of raw materials to the final packaging.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-justify">
                                Our organization is equipped with adequate inspection gauges and test equipment suitable for everything from raw material checking to finished products. These include chemical checking of raw material, dimensional inspection gauges, and more.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Quality Assurance & Objectives</h2>
                        <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {assurancePoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group"
                            >
                                <div className="mb-6 text-secondary group-hover:text-primary transition-colors duration-300">
                                    {point.icon}
                                </div>
                                <p className="text-gray-700 font-medium leading-relaxed">
                                    {point.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
