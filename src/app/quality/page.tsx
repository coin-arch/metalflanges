import { Metadata } from "next";
import QualityContent from "./QualityContent";

export const metadata: Metadata = {
    title: "Quality",
};

export default function Quality() {
    return <QualityContent />;
}
