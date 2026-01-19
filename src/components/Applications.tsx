"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const applications = [
  { id: 1, title: "Aviation Industry", image: "/images/aviation.jpg" },
  { id: 2, title: "Chemical Industry", image: "/images/chemical-industry.jpg" },
  { id: 3, title: "Food & Dairy Industry", image: "/images/food-dairy-industry.jpg" },
  { id: 4, title: "Oil & Gas Industry", image: "/images/oil-gas-industry.jpg" },
  { id: 5, title: "Energy Sector", image: "/images/energy-sector.jpg" },
  { id: 6, title: "Automobile Industry", image: "/images/automobile-industry.jpg" },
  { id: 7, title: "Electronic Sector", image: "/images/electronic-sector.jpg" },
  { id: 8, title: "Railway Sector", image: "/images/railway-sector.jpg" },
  { id: 9, title: "Pharmaceutical Industry", image: "/images/pharmaceutical-industry.jpg" },
  { id: 10, title: "Petrochemical Components", image: "/images/petrochemical-components.jpg" },
];

export default function Applications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const checkScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scroll = useCallback((direction: "left" | "right") => {
    if (containerRef.current) {
      // Adjusted scroll amount to match roughly one card width
      const scrollAmount = direction === "left" ? -344 : 344;

      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
        // Loop back to start for continuous feel 
        containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }

      setTimeout(checkScroll, 300);
    }
  }, [checkScroll]);

  // Auto-play functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isHovered) {
      intervalId = setInterval(() => {
        scroll("right");
      }, 3000); // 3 seconds interval
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovered, scroll]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Thousands Of Applications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our high-quality flanges are trusted across diverse industries worldwide.
          </p>
        </motion.div>

        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Container */}
          <div
            ref={containerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[280px] md:min-w-[320px] snap-center"
              >
                {/* Reduced height to 250px per user request */}
                <div className="group/card relative h-[250px] rounded-2xl overflow-hidden shadow-xl cursor-pointer">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-1 bg-primary mb-2 w-0 group-hover/card:w-12 transition-all duration-300"></div>
                    <h3 className="text-white font-bold text-xl leading-tight mb-1">
                      {app.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/90 shadow-lg text-gray-800 transition-all duration-300 hover:bg-white hover:scale-110 disabled:opacity-0 disabled:cursor-not-allowed ${canScrollLeft || isHovered ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Scroll left"
          >
            <FaArrowLeft className="text-xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/90 shadow-lg text-gray-800 transition-all duration-300 hover:bg-white hover:scale-110 ${canScrollRight || isHovered ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Scroll right"
          >
            <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
