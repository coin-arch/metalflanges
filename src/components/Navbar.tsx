"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaChevronDown, FaChevronRight, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
        name: "Products",
        href: "#",
        submenu: [
            {
                name: "Stainless Steel Flanges",
                href: "#",
                subItems: [
                    { name: "SS 304/304L/304H Flanges", href: "/products/stainless-steel-304-304L-304H-flange-manufacturer" },
                    { name: "SS 316/316L/316TI Flanges", href: "/products/stainless-steel-316-316l-316ti-flange-manufacturer" },
                    { name: "SS 310 Flanges", href: "/products/stainless-steel-310-flange-manufacturer" },
                    { name: "SS 317/317L Flanges", href: "/products/stainless-steel-317-317l-flange-manufacturer" },
                    { name: "SS 321 Flanges", href: "/products/stainless-steel-321-flange-manufacturer" },
                    { name: "SS 347 Flanges", href: "/products/stainless-steel-347-flange-manufacturer" },
                    { name: "SS 410 Flanges", href: "/products/stainless-steel-410-flange-manufacturer" },
                    { name: "SS 430 Flanges", href: "/products/stainless-steel-430-flange-manufacturer" },
                    { name: "SS 17-7PH Flanges", href: "/products/stainless-steel-17-7ph-flange-manufacturer" },
                    { name: "SS 17-4PH Flanges", href: "/products/stainless-steel-17-4ph-flange-manufacturer" },
                    { name: "SS 15-5PH Flanges", href: "/products/stainless-steel-15-5ph-flange-manufacturer" },
                    { name: "SS 904L Flanges", href: "/products/stainless-steel-904l-flange-manufacturer" },
                ]
            },
            { name: "Nickel Alloy 200/201 Flanges", href: "/products/nickel-200-201-flange-manufacturer" },
            { name: "Monel Alloy 400/K500 Flanges", href: "/products/monel-400-k500-flange-manufacturer" },
            {
                name: "Inconel Alloy Flanges",
                href: "#",
                subItems: [
                    { name: "Inconel Alloy 600/601 Flanges", href: "/products/inconel-600-601-flange-manufacturer" },
                    { name: "Inconel Alloy 625 Flanges", href: "/products/inconel-625-flange-manufacturer" },
                    { name: "Inconel Alloy 718 Flanges", href: "/products/inconel-718-flange-manufacturer" },
                    { name: "Inconel Alloy X-750 Flanges", href: "/products/inconel-x750-flange-manufacturer" },
                ]
            },
            { name: "Hastelloy C22/ C276 Flanges", href: "/products/hastelloy-c22-c276-flange-manufacturer" },
            { name: "Alloy 20 Flanges", href: "/products/20-flange-manufacturer" },
            { name: "Incoloy Alloy 800/800HT Flanges", href: "/products/incoloy-800-800ht-flange-manufacturer" },
            { name: "Alloy 286 Flanges", href: "/products/286-flange-manufacturer" },
        ]
    },
    { name: "Certificates", href: "/certificate" },
    { name: "Quality", href: "/quality" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
    const [mobileInnerSubmenu, setMobileInnerSubmenu] = useState<string | null>(null);

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setMobileSubmenu(null);
        setMobileInnerSubmenu(null);
    }, [pathname]);

    return (
        <header className={twMerge(
            "fixed w-full z-50 transition-all duration-300",
            scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-3"
        )}>
            {/* Top Bar */}
            <AnimatePresence>
                {!scrolled && (
                    <motion.div
                        initial={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="container mx-auto px-4 hidden lg:flex justify-between items-center text-white/90 text-sm mb-3 border-b border-white/10 pb-2"
                    >
                        <div className="flex space-x-6 items-center">
                            <span className="flex items-center gap-2 font-medium tracking-wide">
                                <FaPhoneAlt size={12} className="text-secondary" /> +91-9892171042
                            </span>
                            <span className="flex items-center gap-2 font-medium tracking-wide border-l border-white/20 pl-6">
                                <FaEnvelope size={12} className="text-secondary" /> enquiry@metalministry.in
                            </span>
                        </div>
                        <div className="flex space-x-5 items-center">
                            <a href="#" className="hover:text-secondary transition-colors duration-300"><FaFacebookF /></a>
                            <a href="#" className="hover:text-secondary transition-colors duration-300"><FaTwitter /></a>
                            <a href="#" className="hover:text-secondary transition-colors duration-300"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-secondary transition-colors duration-300"><FaYoutube /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-4 overflow-x-clip">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="relative z-50">
                        <div className={clsx("transition-all duration-300", scrolled ? "w-40" : "w-48")}>
                            <Image
                                src="/images/logo.png"
                                alt="Metal Flange Logo"
                                width={200}
                                height={60}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:block lg:pr-24 xl:pr-40">
                        <ul className="flex space-x-6 xl:space-x-8 items-center">
                            {navLinks.map((link) => (
                                <li key={link.name} className="relative group">
                                    <div
                                        className="flex items-center cursor-pointer"
                                        onMouseEnter={() => link.submenu && setHoveredProduct(link.name)}
                                        onMouseLeave={() => link.submenu && setHoveredProduct(null)}
                                    >
                                        <Link
                                            href={link.href}
                                            className={twMerge(
                                                "font-bold tracking-wide text-sm uppercase transition-colors duration-300 flex items-center gap-1 py-4",
                                                scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-primary-light"
                                            )}
                                        >
                                            {link.name}
                                            {link.submenu && <FaChevronDown size={10} />}
                                        </Link>

                                        {/* Dropdown Menu */}
                                        {link.submenu && (
                                            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-left">
                                                <ul className="py-2">
                                                    {link.submenu.map((subItem) => (
                                                        <li key={subItem.name} className="relative group/sub">
                                                            <Link
                                                                href={subItem.href}
                                                                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary text-sm border-b border-gray-100 last:border-0 flex justify-between items-center"
                                                            >
                                                                {subItem.name}
                                                                {subItem.subItems && <FaChevronRight size={10} />}
                                                            </Link>

                                                            {/* Nested Dropdown */}
                                                            {subItem.subItems && (
                                                                <div className="absolute top-0 left-full w-72 bg-white shadow-xl rounded-lg border-t-2 border-primary invisible opacity-0 group-hover/sub:visible group-hover/sub:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 ml-1">
                                                                    <ul className="py-2 max-h-[80vh] overflow-y-auto">
                                                                        {subItem.subItems.map((innerItem) => (
                                                                            <li key={innerItem.name}>
                                                                                <Link
                                                                                    href={innerItem.href}
                                                                                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary text-sm border-b border-gray-100 last:border-0"
                                                                                >
                                                                                    {innerItem.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={twMerge(
                            "lg:hidden z-[70] focus:outline-none",
                            scrolled ? "text-gray-800" : (isOpen ? "text-gray-800" : "text-white")
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-white z-[60] lg:hidden overflow-y-auto pt-32 pb-10"
                    >
                        <div className="container mx-auto px-6">
                            <ul className="space-y-4">
                                {navLinks.map((link) => (
                                    <li key={link.name} className="border-b border-gray-100 last:border-0 pb-4">
                                        <div className="flex justify-between items-center">
                                            <Link
                                                href={link.href}
                                                className="text-xl font-bold text-gray-800 hover:text-primary block"
                                                onClick={() => !link.submenu && setIsOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                            {link.submenu && (
                                                <button
                                                    onClick={() => setMobileSubmenu(mobileSubmenu === link.name ? null : link.name)}
                                                    className="p-2 text-gray-500"
                                                >
                                                    <FaChevronDown className={clsx("transition-transform duration-300", mobileSubmenu === link.name ? "rotate-180" : "")} />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Submenu Level 1 */}
                                        {link.submenu && (
                                            <AnimatePresence>
                                                {mobileSubmenu === link.name && (
                                                    <motion.ul
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden bg-gray-50 rounded-lg mt-2"
                                                    >
                                                        {link.submenu.map((subItem) => (
                                                            <li key={subItem.name} className="border-b border-gray-200 last:border-0">
                                                                <div className="flex justify-between items-center px-4 py-3">
                                                                    <Link
                                                                        href={subItem.href}
                                                                        className="text-gray-700 text-sm font-medium hover:text-primary"
                                                                        onClick={() => !subItem.subItems && setIsOpen(false)}
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                    {subItem.subItems && (
                                                                        <button
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                setMobileInnerSubmenu(mobileInnerSubmenu === subItem.name ? null : subItem.name);
                                                                            }}
                                                                            className="p-2 text-gray-500"
                                                                        >
                                                                            <FaChevronDown size={12} className={clsx("transition-transform duration-300", mobileInnerSubmenu === subItem.name ? "rotate-180" : "")} />
                                                                        </button>
                                                                    )}
                                                                </div>

                                                                {/* Mobile Submenu Level 2 */}
                                                                {subItem.subItems && (
                                                                    <AnimatePresence>
                                                                        {mobileInnerSubmenu === subItem.name && (
                                                                            <motion.ul
                                                                                initial={{ height: 0, opacity: 0 }}
                                                                                animate={{ height: "auto", opacity: 1 }}
                                                                                exit={{ height: 0, opacity: 0 }}
                                                                                className="overflow-hidden bg-gray-100 border-t border-gray-200"
                                                                            >
                                                                                {subItem.subItems.map((innerItem) => (
                                                                                    <li key={innerItem.name}>
                                                                                        <Link
                                                                                            href={innerItem.href}
                                                                                            className="block px-8 py-2.5 text-gray-600 text-sm hover:text-primary"
                                                                                            onClick={() => setIsOpen(false)}
                                                                                        >
                                                                                            {innerItem.name}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </motion.ul>
                                                                        )}
                                                                    </AnimatePresence>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
