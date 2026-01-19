import Link from "next/link";

const SIDEBAR_MAPPING: Record<string, { href: string; text: string }[]> = {
    "alloy-20": [
        { "href": "20-flange-manufacturer", "text": "Alloy 20 Flange" },
        { "href": "20-sorf-flange-manufacturer", "text": "Alloy 20 SORF Flange" },
        { "href": "20-wnrf-flange-manufacturer", "text": "Alloy 20 WNRF Flange" },
        { "href": "20-blind-flange-manufacturer", "text": "Alloy 20 Blind Flange" },
        { "href": "20-orifice-flange-manufacturer", "text": "Alloy 20 Orifice Flange" },
        { "href": "20-socket-weld-flange-manufacturer", "text": "Alloy 20 Socketweld Flange" },
        { "href": "20-nipo-flange-manufacturer", "text": "Alloy 20 Nipo Flange" }
    ],
    "alloy-286": [
        { "href": "286-flange-manufacturer", "text": "Alloy A-286 Flange" },
        { "href": "286-sorf-flange-manufacturer", "text": "Alloy A-286 SORF Flange" },
        { "href": "286-wnrf-flange-manufacturer", "text": "Alloy A-286 WNRF Flange" },
        { "href": "286-blind-flange-manufacturer", "text": "Alloy A-286 Blind Flange" },
        { "href": "286-orifice-flange-manufacturer", "text": "Alloy A-286 Orifice Flange" },
        { "href": "286-socket-weld-flange-manufacturer", "text": "Alloy A-286 Socketweld Flange" },
        { "href": "286-nipo-flange-manufacturer", "text": "Alloy A-286 Nipo Flange" }
    ],
    "hastelloy": [
        { "href": "hastelloy-c22-c276-flange-manufacturer", "text": "Hastelloy C22 / C276 Flange" },
        { "href": "hastelloy-c22-c276-sorf-flange-manufacturer", "text": "Hastelloy C22 / C276 SORF Flange" },
        { "href": "hastelloy-c22-c276-wnrf-flange-manufacturer", "text": "Hastelloy C22 / C276 WNRF Flange" },
        { "href": "hastelloy-c22-c276-blind-flange-manufacturer", "text": "Hastelloy C22 / C276 Blind Flange" },
        { "href": "hastelloy-c22-c276-orifice-flange-manufacturer", "text": "Hastelloy C22 / C276 Orifice Flange" },
        { "href": "hastelloy-c22-c276-socket-weld-flange-manufacturer", "text": "Hastelloy C22 / C276 Socketweld Flange" },
        { "href": "hastelloy-c22-c276-nipo-flange-manufacturer", "text": "Hastelloy C22 / C276 Nipo Flange" }
    ],
    "incoloy": [
        { "href": "incoloy-800-800ht-flange-manufacturer", "text": "Incoloy Alloy 800 / 800HT Flange" },
        { "href": "incoloy-800-800ht-sorf-flange-manufacturer", "text": "Incoloy Alloy 800 / 800HT SORF Flange" },
        { "href": "incoloy-800-800ht-wnrf-flange-manufacturer", "text": "Incoloy Alloy 800 / 800HT WNRF Flange" },
        { "href": "incoloy-800-800ht-blind-flange-manufacturer", "text": "Incoloy Alloy 800 / 800HT Blind Flange" },
        { "href": "incoloy-800-800ht-orifice-flange-manufacturer", "text": "Incoloy Alloy 800 / 800HT Orifice Flange" },
        { "href": "incoloy-800-800ht-socket-weld-flange-manufacturer", "text": "Incoloy Alloy 800 / 800HT Socketweld Flange" },
        { "href": "incoloy-800-800ht-nipo-flange-manufacturer", "text": "Incoloy Alloy 800 / 800HT Nipo Flange" }
    ],
    "inconel-600": [
        { "href": "inconel-600-601-flange-manufacturer", "text": "Inconel 600 / 601 Flange" },
        { "href": "inconel-600-601-sorf-flange-manufacturer", "text": "Inconel 600 / 601 SORF Flange" },
        { "href": "inconel-600-601-wnrf-flange-manufacturer", "text": "Inconel 600 / 601 WNRF Flange" },
        { "href": "inconel-600-601-blind-flange-manufacturer", "text": "Inconel 600 / 601 Blind Flange" },
        { "href": "inconel-600-601-orifice-flange-manufacturer", "text": "Inconel 600 / 601 Orifice Flange" },
        { "href": "inconel-600-601-socket-weld-flange-manufacturer", "text": "Inconel 600 / 601 Socketweld Flange" },
        { "href": "inconel-600-601-nipo-flange-manufacturer", "text": "Inconel 600 / 601 Nipo Flange" }
    ],
    "inconel-625": [
        { "href": "inconel-625-flange-manufacturer", "text": "Inconel 625 Flange" },
        { "href": "inconel-625-sorf-flange-manufacturer", "text": "Inconel 625 SORF Flange" },
        { "href": "inconel-625-wnrf-flange-manufacturer", "text": "Inconel 625 WNRF Flange" },
        { "href": "inconel-625-blind-flange-manufacturer", "text": "Inconel 625 Blind Flange" },
        { "href": "inconel-625-orifice-flange-manufacturer", "text": "Inconel 625 Orifice Flange" },
        { "href": "inconel-625-socket-weld-flange-manufacturer", "text": "Inconel 625 Socketweld Flange" },
        { "href": "inconel-625-nipo-flange-manufacturer", "text": "Inconel 625 Nipo Flange" }
    ],
    "inconel-718": [
        { "href": "inconel-718-flange-manufacturer", "text": "Inconel 718 Flange" },
        { "href": "inconel-718-sorf-flange-manufacturer", "text": "Inconel 718 SORF Flange" },
        { "href": "inconel-718-wnrf-flange-manufacturer", "text": "Inconel 718 WNRF Flange" },
        { "href": "inconel-718-blind-flange-manufacturer", "text": "Inconel 718 Blind Flange" },
        { "href": "inconel-718-orifice-flange-manufacturer", "text": "Inconel 718 Orifice Flange" },
        { "href": "inconel-718-socket-weld-flange-manufacturer", "text": "Inconel 718 Socketweld Flange" },
        { "href": "inconel-718-nipo-flange-manufacturer", "text": "Inconel 718 Nipo Flange" }
    ],
    "inconel-x750": [
        { "href": "inconel-x750-flange-manufacturer", "text": "Inconel X-750 Flange" },
        { "href": "inconel-x750-sorf-flange-manufacturer", "text": "Inconel X-750 SORF Flange" },
        { "href": "inconel-x750-wnrf-flange-manufacturer", "text": "Inconel X-750 WNRF Flange" },
        { "href": "inconel-x750-blind-flange-manufacturer", "text": "Inconel X-750 Blind Flange" },
        { "href": "inconel-x750-orifice-flange-manufacturer", "text": "Inconel X-750 Orifice Flange" },
        { "href": "inconel-x750-socket-weld-flange-manufacturer", "text": "Inconel X-750 Socketweld Flange" },
        { "href": "inconel-x750-nipo-flange-manufacturer", "text": "Inconel X-750 Nipo Flange" }
    ],
    "monel": [
        { "href": "monel-400-k500-flange-manufacturer", "text": "Monel Alloy 400 / K500 Flange" },
        { "href": "monel-400-k500-sorf-flange-manufacturer", "text": "Monel Alloy 400 / K500 SORF Flange" },
        { "href": "monel-400-k500-wnrf-flange-manufacturer", "text": "Monel Alloy 400 / K500 WNRF Flange" },
        { "href": "monel-400-k500-blind-flange-manufacturer", "text": "Monel Alloy 400 / K500 Blind Flange" },
        { "href": "monel-400-k500-orifice-flange-manufacturer", "text": "Monel Alloy 400 / K500 Orifice Flange" },
        { "href": "monel-400-k500-socket-weld-flange-manufacturer", "text": "Monel Alloy 400 / K500 Socketweld Flange" },
        { "href": "monel-400-k500-nipo-flange-manufacturer", "text": "Monel Alloy 400 / K500 Nipo Flange" }
    ],
    "nickel": [
        { "href": "nickel-200-201-flange-manufacturer", "text": "Nickel Alloy 200/201 Flange" },
        { "href": "nickel-200-201-sorf-flange-manufacturer", "text": "Nickel Alloy 200/201 SORF Flange" },
        { "href": "nickel-200-201-wnrf-flange-manufacturer", "text": "Nickel Alloy 200/201 WNRF Flange" },
        { "href": "nickel-200-201-blind-flange-manufacturer", "text": "Nickel Alloy 200/201 Blind Flange" },
        { "href": "nickel-200-201-orifice-flange-manufacturer", "text": "Nickel Alloy 200/201 Orifice Flange" },
        { "href": "nickel-200-201-socket-weld-flange-manufacturer", "text": "Nickel Alloy 200/201 Socketweld Flange" },
        { "href": "nickel-200-201-nipo-flange-manufacturer", "text": "Nickel Alloy 200/201 Nipo Flange" }
    ],
    "ss-304": [
        { "href": "stainless-steel-304-304l-304h-flange-manufacturer", "text": "Stainless Steel 304 / 304L /304H Flange" },
        { "href": "stainless-steel-304-304l-304h-sorf-flange-manufacturer", "text": "Stainless Steel 304 / 304L /304H SORF Flange" },
        { "href": "stainless-steel-304-304l-304h-wnrf-flange-manufacturer", "text": "Stainless Steel 304 / 304L /304H WNRF Flange" },
        { "href": "stainless-steel-304-304l-304h-blind-flange-manufacturer", "text": "Stainless Steel 304 / 304L /304H Blind Flange" },
        { "href": "stainless-steel-304-304l-304h-orifice-flange-manufacturer", "text": "Stainless Steel 304 / 304L /304H Orifice Flange" },
        { "href": "stainless-steel-304-304l-304h-socket-weld-flange-manufacturer", "text": "Stainless Steel 304 / 304L /304H Socketweld Flange" },
        { "href": "stainless-steel-304-304l-304h-nipo-flange-manufacturer", "text": "Stainless Steel 304 / 304L /304H Nipo Flange" }
    ],
    "ss-310": [
        { "href": "stainless-steel-310-flange-manufacturer", "text": "Stainless Steel 310 Flange" },
        { "href": "stainless-steel-310-sorf-flange-manufacturer", "text": "Stainless Steel 310 SORF Flange" },
        { "href": "stainless-steel-310-wnrf-flange-manufacturer", "text": "Stainless Steel 310 WNRF Flange" },
        { "href": "stainless-steel-310-blind-flange-manufacturer", "text": "Stainless Steel 310 Blind Flange" },
        { "href": "stainless-steel-310-orifice-flange-manufacturer", "text": "Stainless Steel 310 Orifice Flange" },
        { "href": "stainless-steel-310-socket-weld-flange-manufacturer", "text": "Stainless Steel 310 Socketweld Flange" },
        { "href": "stainless-steel-310-nipo-flange-manufacturer", "text": "Stainless Steel 310 Nipo Flange" }
    ],
    "ss-316": [
        { "href": "stainless-steel-316-316l-316ti-flange-manufacturer", "text": "Stainless Steel 316 / 316L / 316Ti Flange" },
        { "href": "stainless-steel-316-316l-316ti-sorf-flange-manufacturer", "text": "Stainless Steel 316 / 316L / 316Ti SORF Flange" },
        { "href": "stainless-steel-316-316l-316ti-wnrf-flange-manufacturer", "text": "Stainless Steel 316 / 316L / 316Ti WNRF Flange" },
        { "href": "stainless-steel-316-316l-316ti-blind-flange-manufacturer", "text": "Stainless Steel 316 / 316L / 316Ti Blind Flange" },
        { "href": "stainless-steel-316-316l-316ti-orifice-flange-manufacturer", "text": "Stainless Steel 316 / 316L / 316Ti Orifice Flange" },
        { "href": "stainless-steel-316-316l-316ti-socket-weld-flange-manufacturer", "text": "Stainless Steel 316 / 316L / 316Ti Socketweld Flange" },
        { "href": "stainless-steel-316-316l-316ti-nipo-flange-manufacturer", "text": "Stainless Steel 316 / 316L / 316Ti Nipo Flange" }
    ],
    "ss-317": [
        { "href": "stainless-steel-317-317l-flange-manufacturer", "text": "Stainless Steel 317 / 317l Flange" },
        { "href": "stainless-steel-317-317l-sorf-flange-manufacturer", "text": "Stainless Steel 317 / 317l SORF Flange" },
        { "href": "stainless-steel-317-317l-wnrf-flange-manufacturer", "text": "Stainless Steel 317 / 317l WNRF Flange" },
        { "href": "stainless-steel-317-317l-blind-flange-manufacturer", "text": "Stainless Steel 317 / 317l Blind Flange" },
        { "href": "stainless-steel-317-317l-orifice-flange-manufacturer", "text": "Stainless Steel 317 / 317l Orifice Flange" },
        { "href": "stainless-steel-317-317l-socket-weld-flange-manufacturer", "text": "Stainless Steel 317 / 317l Socketweld Flange" },
        { "href": "stainless-steel-317-317l-nipo-flange-manufacturer", "text": "Stainless Steel 317 / 317l Nipo Flange" }
    ],
    "ss-321": [
        { "href": "stainless-steel-321-flange-manufacturer", "text": "Stainless Steel 321 Flange" },
        { "href": "stainless-steel-321-sorf-flange-manufacturer", "text": "Stainless Steel 321 SORF Flange" },
        { "href": "stainless-steel-321-wnrf-flange-manufacturer", "text": "Stainless Steel 321 WNRF Flange" },
        { "href": "stainless-steel-321-blind-flange-manufacturer", "text": "Stainless Steel 321 Blind Flange" },
        { "href": "stainless-steel-321-orifice-flange-manufacturer", "text": "Stainless Steel 321 Orifice Flange" },
        { "href": "stainless-steel-321-socket-weld-flange-manufacturer", "text": "Stainless Steel 321 Socketweld Flange" },
        { "href": "stainless-steel-321-nipo-flange-manufacturer", "text": "Stainless Steel 321 Nipo Flange" }
    ],
    "ss-347": [
        { "href": "stainless-steel-347-flange-manufacturer", "text": "Stainless Steel 347 Flange" },
        { "href": "stainless-steel-347-sorf-flange-manufacturer", "text": "Stainless Steel 347 SORF Flange" },
        { "href": "stainless-steel-347-wnrf-flange-manufacturer", "text": "Stainless Steel 347 WNRF Flange" },
        { "href": "stainless-steel-347-blind-flange-manufacturer", "text": "Stainless Steel 347 Blind Flange" },
        { "href": "stainless-steel-347-orifice-flange-manufacturer", "text": "Stainless Steel 347 Orifice Flange" },
        { "href": "stainless-steel-347-socket-weld-flange-manufacturer", "text": "Stainless Steel 347 Socketweld Flange" },
        { "href": "stainless-steel-347-nipo-flange-manufacturer", "text": "Stainless Steel 347 Nipo Flange" }
    ],
    "ss-410": [
        { "href": "stainless-steel-410-flange-manufacturer", "text": "Stainless Steel 410 Flange" },
        { "href": "stainless-steel-410-sorf-flange-manufacturer", "text": "Stainless Steel 410 SORF Flange" },
        { "href": "stainless-steel-410-wnrf-flange-manufacturer", "text": "Stainless Steel 410 WNRF Flange" },
        { "href": "stainless-steel-410-blind-flange-manufacturer", "text": "Stainless Steel 410 Blind Flange" },
        { "href": "stainless-steel-410-orifice-flange-manufacturer", "text": "Stainless Steel 410 Orifice Flange" },
        { "href": "stainless-steel-410-socket-weld-flange-manufacturer", "text": "Stainless Steel 410 Socketweld Flange" },
        { "href": "stainless-steel-410-nipo-flange-manufacturer", "text": "Stainless Steel 410 Nipo Flange" }
    ],
    "ss-430": [
        { "href": "stainless-steel-430-flange-manufacturer", "text": "Stainless Steel 430 Flange" },
        { "href": "stainless-steel-430-sorf-flange-manufacturer", "text": "Stainless Steel 430 SORF Flange" },
        { "href": "stainless-steel-430-wnrf-flange-manufacturer", "text": "Stainless Steel 430 WNRF Flange" },
        { "href": "stainless-steel-430-blind-flange-manufacturer", "text": "Stainless Steel 430 Blind Flange" },
        { "href": "stainless-steel-430-orifice-flange-manufacturer", "text": "Stainless Steel 430 Orifice Flange" },
        { "href": "stainless-steel-430-socket-weld-flange-manufacturer", "text": "Stainless Steel 430 Socketweld Flange" },
        { "href": "stainless-steel-430-nipo-flange-manufacturer", "text": "Stainless Steel 430 Nipo Flange" }
    ],
    "ss-904l": [
        { "href": "stainless-steel-904l-flange-manufacturer", "text": "Stainless Steel 904l Flange" },
        { "href": "stainless-steel-904l-sorf-flange-manufacturer", "text": "Stainless Steel 904l SORF Flange" },
        { "href": "stainless-steel-904l-wnrf-flange-manufacturer", "text": "Stainless Steel 904l WNRF Flange" },
        { "href": "stainless-steel-904l-blind-flange-manufacturer", "text": "Stainless Steel 904l Blind Flange" },
        { "href": "stainless-steel-904l-orifice-flange-manufacturer", "text": "Stainless Steel 904l Orifice Flange" },
        { "href": "stainless-steel-904l-socket-weld-flange-manufacturer", "text": "Stainless Steel 904l Socketweld Flange" },
        { "href": "stainless-steel-904l-nipo-flange-manufacturer", "text": "Stainless Steel 904l Nipo Flange" }
    ],
    "ss-15-5ph": [
        { "href": "stainless-steel-15-5ph-flange-manufacturer", "text": "Stainless Steel 15-5PH Flange" },
        { "href": "stainless-steel-15-5ph-sorf-flange-manufacturer", "text": "Stainless Steel 15-5PH SORF Flange" },
        { "href": "stainless-steel-15-5ph-wnrf-flange-manufacturer", "text": "Stainless Steel 15-5PH WNRF Flange" },
        { "href": "stainless-steel-15-5ph-blind-flange-manufacturer", "text": "Stainless Steel 15-5PH Blind Flange" },
        { "href": "stainless-steel-15-5ph-orifice-flange-manufacturer", "text": "Stainless Steel 15-5PH Orifice Flange" },
        { "href": "stainless-steel-15-5ph-socket-weld-flange-manufacturer", "text": "Stainless Steel 15-5PH Socketweld Flange" },
        { "href": "stainless-steel-15-5ph-nipo-flange-manufacturer", "text": "Stainless Steel 15-5PH Nipo Flange" }
    ],
    "ss-17-4ph": [
        { "href": "stainless-steel-17-4ph-flange-manufacturer", "text": "Stainless Steel 17-4PH Flange" },
        { "href": "stainless-steel-17-4ph-sorf-flange-manufacturer", "text": "Stainless Steel 17-4PH SORF Flange" },
        { "href": "stainless-steel-17-4ph-wnrf-flange-manufacturer", "text": "Stainless Steel 17-4PH WNRF Flange" },
        { "href": "stainless-steel-17-4ph-blind-flange-manufacturer", "text": "Stainless Steel 17-4PH Blind Flange" },
        { "href": "stainless-steel-17-4ph-orifice-flange-manufacturer", "text": "Stainless Steel 17-4PH Orifice Flange" },
        { "href": "stainless-steel-17-4ph-socket-weld-flange-manufacturer", "text": "Stainless Steel 17-4PH Socketweld Flange" },
        { "href": "stainless-steel-17-4ph-nipo-flange-manufacturer", "text": "Stainless Steel 17-4PH Nipo Flange" }
    ],
    "ss-17-7ph": [
        { "href": "stainless-steel-17-7ph-flange-manufacturer", "text": "Stainless Steel 17-7PH Flange" },
        { "href": "stainless-steel-17-7ph-sorf-flange-manufacturer", "text": "Stainless Steel 17-7PH SORF Flange" },
        { "href": "stainless-steel-17-7ph-wnrf-flange-manufacturer", "text": "Stainless Steel 17-7PH WNRF Flange" },
        { "href": "stainless-steel-17-7ph-blind-flange-manufacturer", "text": "Stainless Steel 17-7PH Blind Flange" },
        { "href": "stainless-steel-17-7ph-orifice-flange-manufacturer", "text": "Stainless Steel 17-7PH Orifice Flange" },
        { "href": "stainless-steel-17-7ph-socket-weld-flange-manufacturer", "text": "Stainless Steel 17-7PH Socketweld Flange" },
        { "href": "stainless-steel-17-7ph-nipo-flange-manufacturer", "text": "Stainless Steel 17-7PH Nipo Flange" }
    ]
};

function getCategoryFromSlug(slug: string): string {
    const lowSlug = slug.toLowerCase();

    // Explicit priority mappings derived from legacy analysis
    if (lowSlug.startsWith("20-") || lowSlug.includes("alloy-20")) return "alloy-20";
    if (lowSlug.startsWith("286-") || lowSlug.includes("alloy-286")) return "alloy-286";
    if (lowSlug.includes("hastelloy")) return "hastelloy";
    if (lowSlug.includes("incoloy")) return "incoloy";
    if (lowSlug.includes("inconel") && (lowSlug.includes("600") || lowSlug.includes("601"))) return "inconel-600";
    if (lowSlug.includes("inconel-625")) return "inconel-625";
    if (lowSlug.includes("inconel-718")) return "inconel-718";
    if (lowSlug.includes("inconel-x750")) return "inconel-x750";
    if (lowSlug.includes("monel")) return "monel";
    if (lowSlug.includes("nickel")) return "nickel";
    if (lowSlug.includes("15-5ph")) return "ss-15-5ph";
    if (lowSlug.includes("17-4ph")) return "ss-17-4ph";
    if (lowSlug.includes("17-7ph")) return "ss-17-7ph";
    if (lowSlug.includes("304")) return "ss-304";
    if (lowSlug.includes("310")) return "ss-310";
    if (lowSlug.includes("316")) return "ss-316";
    if (lowSlug.includes("317")) return "ss-317";
    if (lowSlug.includes("321")) return "ss-321";
    if (lowSlug.includes("347")) return "ss-347";
    if (lowSlug.includes("410")) return "ss-410";
    if (lowSlug.includes("430")) return "ss-430";
    if (lowSlug.includes("904l")) return "ss-904l";

    return "ss-304"; // Default fallback
}

export default function Sidebar({ slug }: { slug: string }) {
    const category = getCategoryFromSlug(slug);
    const links = SIDEBAR_MAPPING[category] || SIDEBAR_MAPPING["ss-304"];

    return (
        <div className="space-y-4">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={`/products/${link.href}`}
                    className="block py-3 px-5 text-[14px] text-white bg-[#5a5e61] hover:bg-primary transition-colors font-medium border-b border-white/10 last:border-b-0"
                >
                    {link.text}
                </Link>
            ))}
        </div>
    );
}
