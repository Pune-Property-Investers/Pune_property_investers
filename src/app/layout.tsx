import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0c1017",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://punepropertyinvestor.com"),
    title: {
        default: "Pune Property Investors | Verified Properties & Real Estate in Pune",
        template: "%s | Pune Property Investors",
    },
    description:
        "Discover residential properties, new launches, luxury apartments, and investment opportunities in Kharadi, Baner, Wakad, Hinjewadi, and across Pune.",
    keywords: [
        "Pune Real Estate",
        "Properties in Pune",
        "Buy Flat in Pune",
        "Kharadi Properties",
        "Baner Apartments",
        "Wakad Real Estate",
        "Hinjewadi Homes",
        "Pune Property Investors",
    ],
    authors: [{ name: "Pune Property Investors" }],
    creator: "Pune Property Investors",
    publisher: "Pune Property Investors",
    icons: {
        icon: "/favicon.svg",
        apple: "/favicon.svg",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://punepropertyinvestor.com",
        siteName: "Pune Property Investors",
        title: "Pune Property Investors | Real Estate Advisory in Pune",
        description:
            "Find verified residential properties, newly launched projects, and premium apartments across Pune.",
        images: [
            {
                url: "/images/logo.jpg",
                width: 800,
                height: 800,
                alt: "Pune Property Investors Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pune Property Investors",
        description:
            "Find verified residential properties, newly launched projects, and premium apartments across Pune.",
        images: ["/images/logo.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </head>
            <body>{children}</body>
        </html>
    );
}

