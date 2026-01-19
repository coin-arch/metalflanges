"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const products = [
    {
        title: "Stainless Steel Flanges",
        image: "/images/stainless-steel-flanges.jpg",
        link: "/stainless-steel-304-304L-304H-flange-manufacturer",
        description: "High durability flanges for corrosive environments."
    },
    {
        title: "Nickel Alloy Flanges",
        image: "/images/nickel-alloy-flange.jpg",
        link: "/products/nickel-200-201-flange-manufacturer",
        description: "Superior strength and resistance for extreme conditions."
    },
    {
        title: "Monel Alloy Flanges",
        image: "/images/monel-alloy-flange.jpg",
        link: "/products/monel-400-k500-flange-manufacturer",
        description: "Excellent fatigue and corrosion resistance."
    },
    {
        title: "Alloy 20 Flange",
        image: "/images/alloy-20-flange.jpg",
        link: "/products/20-flange-manufacturer",
        description: "Perfect for handling sulfuric acid applications."
    },
    {
        title: "Hastelloy Flanges",
        image: "/images/hastelloy-flange.jpg",
        link: "/products/hastelloy-c22-c276-flange-manufacturer",
        description: "Versatile corrosion resistance for chemical processing."
    },
    {
        title: "Alloy 286 Flange",
        image: "/images/alloy-286-flange.jpg",
        link: "/products/286-flange-manufacturer",
        description: "High strength and oxidation resistance at high temperatures."
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut"
        }
    })
};

const ServicesSection = () => {
    return (
        <section id="products" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Explore our extensive range of high-quality flanges manufactured to meet global standards.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden group"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed mb-4">
                                        {product.description}
                                    </p>
                                    <Link
                                        href={product.link}
                                        className="inline-block px-6 py-2 bg-primary text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 hover:bg-white hover:text-primary"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
