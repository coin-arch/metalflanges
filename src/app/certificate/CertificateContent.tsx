"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaAward, FaCheckCircle, FaSearchPlus } from "react-icons/fa";

export default function CertificateContent() {
    const certificates = [
        {
            id: 1,
            title: "ISO 9001:2015 Certification",
            description: "Certified for Manufacturing & Stocking of Carbon & Alloy Steel",
            image: "/images/ISO-UKAS.jpg",
            alt: "ISO UKAS Certificate"
        },
        {
            id: 2,
            title: "Jindal Steel Certification",
            description: "Authorized Dealer Certificate",
            image: "/images/Jindal-certificate.jpg",
            alt: "Jindal Certificate"
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/certificate-banner.png"
                        alt="Quality Assurance"
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
                        Success Certificates
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "120px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-primary mx-auto"
                    />
                </div>
            </section>

            {/* Introduction */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Commitment to Quality</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            At Metal Ministry Inc., quality is not just a standard—it's our promise. We adhere to strict quality control measures and international standards to ensure that every product we deliver meets the highest levels of performance and reliability.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Certificates Grid */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative h-[400px] w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={cert.image}
                                        alt={cert.alt}
                                        fill
                                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <a
                                            href={cert.image}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-primary p-4 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"
                                        >
                                            <FaSearchPlus size={24} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaAward className="text-secondary text-2xl" />
                                        <h3 className="text-xl font-bold text-gray-800">{cert.title}</h3>
                                    </div>
                                    <p className="text-gray-600 pl-9">{cert.description}</p>

                                    <div className="mt-6 flex items-center gap-2 text-sm text-green-600 font-semibold pl-9">
                                        <FaCheckCircle /> Verified & Valid
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
