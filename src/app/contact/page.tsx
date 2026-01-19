import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Metal Ministry Inc. for all your stainless steel and high alloy metal requirements. Based in Mumbai, India.",
};

export default function Contact() {
    return <ContactContent />;
}
