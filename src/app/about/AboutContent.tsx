"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const weManufacture = [
    "Pipe Fittings",
    "Instrumentation Fittings",
    "Flanges & Fasteners",
    "Valves",
    "Gaskets",
    "Refractory Anchors",
    "Pharma Fittings",
    "Stainless Steel Railing & Accessories",
    "Forged & Precision CNC components",
];

const weStockSupply = [
    "Strips, Sheets, Plates & Coils",
    "Seamless & Welded Pipes",
    "Capillary pipes & Tubing's",
    "Round, Hex, Square Bars",
    "Angles & Channels",
];

const grades = [
    {
        category: "Nickel Alloys",
        items: "Nickel 200/201, 400, K500, 600, 601, 625, 617, 718, 738, X750, 800/800HT, 825, 945",
    },
    {
        category: "Hastelloy",
        items: "C 276, C 22, C 2000, B 2, B 3, G 30 & X",
    },
    {
        category: "Titanium",
        items: "Grades 1, 2, 3, 5 & 7",
    },
    {
        category: "Aluminium",
        items: "Marine & Aerospace grades (2024, 5083, 6061, 7075, etc.) in all Tempers",
    },
    {
        category: "Duplex & Super Duplex",
        items: "UNS 31803, UNS 32760",
    },
    {
        category: "Stainless Steel",
        items: "304, 310, 316, 316L, 317L, 321, 347, 17-7PH, 17-4PH, 15-5PH",
    },
    {
        category: "Other Alloys",
        items: "904L, 254 SMO, Alloy 20, Maraging Steels, Tantalum, Invar, Kovar, MuMetal",
    },
];

const fabricationServices = [
    "Piping components / Instrumentation fittings",
    "Aerospace & Defence Forged components",
    "Discs / Tubes / Rivets / Springs",
    "Manifold valves / Ball valves",
    "Sheet metal components",
    "Metal / Jacketed / Spiral wound Gaskets",
    "Spray Nozzles",
    "Nuts, Bolts & Studs",
    "CNC, VMC or Lathe machined components",
    "Stainless Steel Tanks",
    "Stainless steel Utensils",
];

export default function AboutContent() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about-bg-corrected.png"
                        alt="About Metal Ministry"
                        fill
                        className="object-cover"
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
                        About Us
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
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2"
                        >
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/who-we-are.jpg"
                                    alt="Who We Are"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Why Metal Ministry Inc.?
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6 text-justify">
                                Metal Ministry Inc. is a leading ISO 9001-2015 Manufacturer & Stockholder of a wide range of products in grades of Stainless Steel, Duplex & Super Duplex Steel, Nickel Alloys, Copper Alloys, Titanium Alloys, Aluminium Alloys, Carbon & Alloy Steels, Tool Steels, and other Aerospace and Marine grades.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify">
                                We are your one-stop solution for all your metal product needs. We specialize in the fabrication of Precision Components, Fasteners, Tank Heads, Valves, and various custom products as per customer requirements, designs, or drawings.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* What We Manufacture */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">What We Manufacture?</h3>
                            <ul className="grid grid-cols-1 gap-3">
                                {weManufacture.map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* What We Stock & Supply */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">What We Stock & Supply?</h3>
                            <ul className="grid grid-cols-1 gap-3">
                                {weStockSupply.map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Grades We Deal In */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Materials & Grades</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {grades.map((grade, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h4 className="text-xl font-bold text-primary mb-3">{grade.category}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{grade.items}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fabrication Services */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">Fabrication & Manufacturing Jobs</h2>
                        <p className="max-w-2xl mx-auto opacity-90">
                            Some of the specialized fabricated manufacturing jobs executed at Metal Ministry Inc.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {fabricationServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-default"
                            >
                                {service}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
