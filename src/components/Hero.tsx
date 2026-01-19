"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        image: "/images/slider-1.jpg",
        title: "Leading Manufacturer Of",
        highlight: "Stainless Steel Flanges",
        subtitle: "Precision engineering for the world's most demanding industries."
    },
    {
        id: 2,
        image: "/images/slider-2.jpg",
        title: "World's Largest Manufacturer Of",
        highlight: "High Quality Flanges",
        subtitle: "Delivering excellence and durability in every component."
    },
    {
        id: 3,
        image: "/images/slider-3.jpg", // Assuming this exists based on old index.html
        title: "Providing the Best Quality Of",
        highlight: "Industrial Services",
        subtitle: "ISO 9001:2015 Certified Manufacturer & Stockholder."
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden group bg-black">
            {/* Background Slider */}
            <AnimatePresence>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].highlight}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={true}
                        className="brightness-[0.35]"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>

            {/* Content Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center text-white px-4 pt-40 md:pt-32"> {/* Increased padding to prevent overlap */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-5xl mx-auto"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="inline-block px-5 py-1 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-md text-sm font-medium tracking-[0.2em] uppercase text-gray-300"
                        >
                            ISO 9001:2015 Certified
                        </motion.span>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans tracking-tight leading-tight">
                            {slides[currentSlide].title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-red-500 to-red-600 drop-shadow-sm">
                                {slides[currentSlide].highlight}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                            {slides[currentSlide].subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <a href="#" className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg hover:shadow-primary/50 transition duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                                Explore Products
                            </a>
                            <a href="/contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-lg transition duration-300 w-full sm:w-auto">
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-primary w-8" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
