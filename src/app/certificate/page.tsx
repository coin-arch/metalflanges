import { Metadata } from "next";
import CertificateContent from "./CertificateContent";

export const metadata: Metadata = {
    title: "Certificate",
};

export default function Certificate() {
    return <CertificateContent />;
}
