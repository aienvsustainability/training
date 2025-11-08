import type { Metadata } from "next"
import "./globals.css"
import { geistMono, robson, satoshi } from "@/lib/fonts"
import GsapProvider from "@/components/blocks/gsap-provider"
import Header from "@/components/blocks/header"
import Footer from "@/components/blocks/footer"

export const metadata: Metadata = {
    metadataBase: new URL("https://training.caienvsus.org"),
    title: {
        default: "Training & Courses - CAIES Fondation",
        template: "CAIES Fondation - %s",
    },
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Sushant Singh" }, { name: "Eshan Singh" }],
    description:
        "Modular, research-aligned courses in AI, Cybersecurity, Data Science, Python, and Sustainability, preparing learners for advanced study and professional practice.",
    twitter: {
        card: "summary_large_image",
        site: "@CaiesF",
        title: "CAIES Fondation",
        description:
            "Modular, research-aligned courses in AI, Cybersecurity, Data Science, Python, and Sustainability, preparing learners for advanced study and professional practice.",
    },
    creator: "Eshan Singh",
    openGraph: {
        title: "Training & Courses - CAIES Fondation",
        description:
            "Modular, research-aligned courses in AI, Cybersecurity, Data Science, Python, and Sustainability, preparing learners for advanced study and professional practice.",
        url: "https://training.caienvsus.org",
        siteName: "CAIES Fondation",
        images: [
            {
                url: "/og-image.webp",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
    category: "Non-Profit Organization",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${satoshi.variable} ${geistMono.variable} ${robson.variable} max-w-screen scroll-smooth antialiased`}>
                <Header />
                <GsapProvider>
                    <div className="relative h-full w-full overflow-hidden scroll-smooth bg-neutral-900">
                        {children}
                        <Footer />
                    </div>
                </GsapProvider>
            </body>
        </html>
    )
}
