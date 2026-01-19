"use client";

import { useState } from "react";

export default function EnquiryForm({ title }: { title: string }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Enquiry submitted successfully! (Demo)");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="widget">
            <h3 className="text-[18px] font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                Enquiry For {title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors text-[14px]"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors text-[14px]"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone No."
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors text-[14px]"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors text-[14px] resize-none"
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white font-bold hover:bg-primary-dark transition-colors text-[14px] uppercase tracking-wider"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
