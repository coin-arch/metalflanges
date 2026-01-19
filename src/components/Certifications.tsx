"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { id: 1, src: "/images/partner01.png", alt: "Partner 1" },
  { id: 2, src: "/images/partner02.png", alt: "Partner 2" },
  { id: 3, src: "/images/partner03.png", alt: "Partner 3" },
  { id: 4, src: "/images/partner04.png", alt: "Partner 4" },
  { id: 5, src: "/images/partner05.png", alt: "Partner 5" },
  { id: 6, src: "/images/partner06.png", alt: "Partner 6" },
  { id: 7, src: "/images/partner07.png", alt: "Partner 7" },
  { id: 8, src: "/images/partner08.png", alt: "Partner 8" },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-32 md:w-40 hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={160}
                height={80}
                style={{ width: "auto", height: "auto" }}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
