import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import EnquiryForm from "@/components/EnquiryForm";
import { FaChevronRight } from "react-icons/fa";

// Define Types
type ContentBlock = {
    type: "paragraph" | "heading" | "image" | "table" | "html";
    level?: number;
    text?: string;
    src?: string;
    alt?: string;
    html?: string;
};

type Post = {
    id: string;
    title: string;
    content: string;
    structured_content: ContentBlock[];
    meta_title?: string;
    meta_description?: string;
    keywords?: string[];
    updated_at: string;
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const { data: post } = await supabase
        .from("post")
        .select("meta_title, meta_description, keywords")
        .eq("slug", slug)
        .single();

    if (!post) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: post.meta_title || "Metal Flange Product",
        description: post.meta_description,
        keywords: post.keywords,
    };
}

// Utility to get short title for breadcrumbs/banner
function getShortTitle(title: string): string {
    if (!title) return "";
    // Split by common SEO separators
    const separators = [" Manufacturer", " Exporter", " Stockist", " Dealer", " Suppliers", " Stockholder", " Supplier", ","];
    let shortTitle = title;
    for (const sep of separators) {
        const parts = shortTitle.split(sep);
        if (parts.length > 1) {
            shortTitle = parts[0].trim();
        }
    }
    // Final cleanup of any trailing hyphens or pipe symbols
    return shortTitle.split('|')[0].trim().split(' - ')[0].trim();
}

export default async function ProductPage({ params }: PageProps) {
    const { slug } = await params;

    // Fetch Data
    const { data: post, error } = await supabase
        .from("post")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error || !post) {
        console.error("Error fetching post:", error);
        notFound();
    }

    const shortTitle = getShortTitle(post.title);

    const structuredContent = (post.structured_content as ContentBlock[]).filter(block => {
        return !(block.type === 'image' && block.src === '/images/1star.png');
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Banner Section - Synced with reference HTML style */}
            <section className="relative min-h-[250px] md:min-h-[300px] pt-32 pb-12 md:pt-44 md:pb-16 flex items-end bg-[#5a5e61] text-white overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.featured_image || "/images/about-bg-corrected.png"}
                        alt={post.title}
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Container for alignment - centered breadcrumbs */}
                <div className="relative z-10 container mx-auto max-w-[1240px] px-4 flex justify-between items-end">
                    <div className="hidden md:block">
                        <h3 className="text-[25px] font-bold text-white mb-0 capitalize">
                            {shortTitle}
                        </h3>
                    </div>
                    <nav className="text-[14px] md:text-[15px] font-medium whitespace-nowrap">
                        <ol className="flex items-center space-x-2 text-white/90">
                            <li>
                                <Link href="/" className="hover:underline transition-colors">Home</Link>
                            </li>
                            <li className="text-white/50">
                                <FaChevronRight size={10} />
                            </li>
                            <li>
                                <Link href="/products" className="hover:underline transition-colors">Products</Link>
                            </li>
                            <li className="text-white/50">
                                <FaChevronRight size={10} />
                            </li>
                            <li className="font-bold text-white">
                                {shortTitle}
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="bg-white min-h-screen py-10 md:py-16">
                <div className="container mx-auto max-w-[1240px] px-4 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content - Column 9 */}
                        <div className="lg:col-span-9 space-y-8">
                            <div className="prose max-w-none text-gray-800">
                                {structuredContent && structuredContent.map((block, index) => {
                                    switch (block.type) {
                                        case "heading":
                                            if (block.level === 1) {
                                                return <h1 key={index} className="text-[20px] font-bold text-gray-900 mb-6 leading-tight">{block.text}</h1>;
                                            }
                                            if (block.level === 2) {
                                                return <h2 key={index} className="text-[16px] font-bold text-gray-900 mt-10 mb-4">{block.text}</h2>;
                                            }
                                            const Htag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
                                            return <Htag key={index} className="text-[18px] font-bold text-gray-800 mt-8 mb-4">{block.text}</Htag>;

                                        case "paragraph":
                                            return (
                                                <p key={index} className="text-[15px] leading-[1.8] text-justify text-gray-700 mb-6">
                                                    {block.text}
                                                </p>
                                            );

                                        case "image":
                                            return (
                                                <div key={index} className="my-8 flex justify-center">
                                                    <div className="relative w-full md:w-2/3 h-[300px] border border-gray-200 p-2 bg-white shadow-sm">
                                                        <Image
                                                            src={block.src || "/placeholder.jpg"}
                                                            alt={block.alt || post.title}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                </div>
                                            );

                                        case "table":
                                            const captionMatch = block.html?.match(/<caption[^>]*>([\s\S]*?)<\/caption>/i);
                                            const captionText = captionMatch ? captionMatch[1].replace(/<[^>]*>/g, '').trim() : "";
                                            const tableHtml = block.html?.replace(/<caption[^>]*>[\s\S]*?<\/caption>/i, "") || "";

                                            return (
                                                <div key={index} className="my-10">
                                                    {captionText && (
                                                        <h4 className="text-[18px] font-bold text-gray-900 mb-4 whitespace-nowrap">
                                                            {captionText}
                                                        </h4>
                                                    )}
                                                    <div className="overflow-x-auto">
                                                        <div
                                                            className="
                                                                [&_table]:w-full [&_table]:border-collapse [&_table]:border [&_table]:border-gray-300
                                                                [&_th]:bg-gray-50 [&_th]:p-3 [&_th]:border [&_th]:border-gray-300 [&_th]:text-left [&_th]:text-[14px] [&_th]:font-bold [&_th]:whitespace-nowrap
                                                                [&_td]:p-3 [&_td]:border [&_td]:border-gray-300 [&_td]:text-[14px] [&_td]:text-gray-700
                                                            "
                                                            dangerouslySetInnerHTML={{ __html: tableHtml }}
                                                        />
                                                    </div>
                                                </div>
                                            );

                                        case "html":
                                            return (
                                                <div
                                                    key={index}
                                                    className="my-8 text-[15px] text-gray-700
                                                        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2
                                                        [&_li]:text-justify [&_h5]:text-[18px] [&_h5]:font-bold [&_h5]:mt-8 [&_h5]:mb-4"
                                                    dangerouslySetInnerHTML={{ __html: block.html || "" }}
                                                />
                                            );

                                        default:
                                            return null;
                                    }
                                })}
                            </div>
                        </div>

                        {/* Sidebar - Column 3 */}
                        <aside className="lg:col-span-3">
                            <div className="sticky top-32 space-y-10">
                                <Sidebar slug={slug} />
                                <EnquiryForm title={post.title} />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}
