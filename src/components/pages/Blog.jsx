"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    Tag,
    BookOpen,
    TrendingUp,
} from "lucide-react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageHeroBanner from "../common/PageHeroBanner";

const blogPosts = [
    {
        id: 1,
        title: "Top 7 High-Growth Localities to Buy Property in Pune (2026 Edition)",
        slug: "top-high-growth-localities-pune",
        category: "Locality Guide",
        date: "October 24, 2026",
        readTime: "6 min read",
        author: "Pune Property Research Team",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        excerpt:
            "From Kharadi's IT corridor expansion to Baner and Wakad's connectivity surge, discover where smart homebuyers and NRI investors are securing highest rental yields.",
        featured: true,
    },
    {
        id: 2,
        title: "First-Time Homebuyer's Checklist: Documents, RERA, and Stamp Duty in Maharashtra",
        slug: "first-time-homebuyer-checklist-maharashtra",
        category: "Buying Guide",
        date: "October 18, 2026",
        readTime: "8 min read",
        author: "Legal Advisory Desk",
        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85",
        excerpt:
            "A step-by-step roadmap to navigating MahaRERA registration, title clearance verification, home loan eligibility, and government registration fees in Pune.",
        featured: false,
    },
    {
        id: 3,
        title: "Why Kharadi and EON Free Zone Corridor Remain Pune's #1 Real Estate Hotspot",
        slug: "why-kharadi-eon-free-zone-real-estate-hotspot",
        category: "Investment",
        date: "October 12, 2026",
        readTime: "5 min read",
        author: "Investment Advisory Team",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
        excerpt:
            "With multi-national tech hubs, World Trade Center Tower 4, and direct riverfront township developments, Kharadi continues to deliver consistent double-digit appreciation.",
        featured: false,
    },
    {
        id: 4,
        title: "Under-Construction vs. Ready-to-Move Flats: Which Offers Better ROI in Pune?",
        slug: "under-construction-vs-ready-to-move-flats-pune",
        category: "Investment",
        date: "October 05, 2026",
        readTime: "7 min read",
        author: "Property Advisory Desk",
        image:
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
        excerpt:
            "Compare upfront capital outlays, price escalation advantages, tax saving benefits, and occupancy timeline risks when picking between ready and newly launched towers.",
        featured: false,
    },
    {
        id: 5,
        title: "Pune Metro Line 3 Impact: How IT Hub Transit Drives Baner & Hinjewadi Values",
        slug: "pune-metro-line-3-impact-baner-hinjewadi",
        category: "Infrastructure",
        date: "September 28, 2026",
        readTime: "6 min read",
        author: "Urban Infrastructure Desk",
        image:
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
        excerpt:
            "Connecting Hinjewadi Phase 3 to Shivajinagar, Metro Line 3 is slashing commute times and driving 15-20% price appreciation along Balewadi and Baner corridors.",
        featured: false,
    },
    {
        id: 6,
        title: "Gated Community NA Plots in Pune: What Smart Investors Must Check Before Buying",
        slug: "gated-community-na-plots-pune-checklist",
        category: "Buying Guide",
        date: "September 20, 2026",
        readTime: "5 min read",
        author: "Land & Plot Specialist",
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
        excerpt:
            "Understand Collector NA sanctions, 7/12 extract verification, demarcation fencing, and internal road infrastructure in Wagholi, Pirangut, and Shirwal layouts.",
        featured: false,
    },
];

const categories = [
    "All",
    "Buying Guide",
    "Investment",
    "Locality Guide",
    "Infrastructure",
];

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = blogPosts.filter((post) => {
        if (selectedCategory === "All") return true;
        return post.category === selectedCategory;
    });

    const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

    return (
        <div style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main>
                {/* Hero Header Section */}
                <PageHeroBanner
                    title="Real Estate Insights"
                    titleAccent="& Market Trends."
                    eyebrow="PUNE PROPERTY INVESTOR BLOG"
                    description="Expert guidance, neighborhood deep-dives, home buying checklists, and verified market trends from seasoned Pune real estate specialists."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Blog" },
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85"
                    icon={BookOpen}
                />

                <div className="container" style={{ padding: "60px 0 80px" }}>
                    {/* Featured Article Spotlight */}
                    {selectedCategory === "All" && (
                        <div
                            style={{
                                background: "#ffffff",
                                borderRadius: "20px",
                                overflow: "hidden",
                                border: "1px solid var(--border-subtle)",
                                boxShadow: "var(--shadow-md)",
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(320px, 1fr))",
                                marginBottom: "50px",
                            }}
                        >
                            <div style={{ height: "340px", overflow: "hidden" }}>
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    padding: "40px 36px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        alignSelf: "flex-start",
                                        padding: "5px 12px",
                                        borderRadius: "20px",
                                        background: "rgba(180, 139, 62, 0.12)",
                                        color: "var(--primary-color)",
                                        fontSize: "0.8rem",
                                        fontWeight: "700",
                                        marginBottom: "14px",
                                    }}
                                >
                                    FEATURED STORY • {featuredPost.category}
                                </span>

                                <h2
                                    style={{
                                        fontSize: "1.75rem",
                                        fontWeight: "800",
                                        color: "var(--secondary-color)",
                                        marginBottom: "14px",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {featuredPost.title}
                                </h2>

                                <p
                                    style={{
                                        color: "var(--text-secondary)",
                                        fontSize: "0.98rem",
                                        lineHeight: 1.65,
                                        marginBottom: "20px",
                                    }}
                                >
                                    {featuredPost.excerpt}
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "18px",
                                        fontSize: "0.85rem",
                                        color: "var(--text-muted)",
                                        marginBottom: "24px",
                                    }}
                                >
                                    <span
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                        }}
                                    >
                                        <Calendar size={15} />
                                        {featuredPost.date}
                                    </span>
                                    <span
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                        }}
                                    >
                                        <Clock size={15} />
                                        {featuredPost.readTime}
                                    </span>
                                </div>

                                <Link
                                    href={`/buy?projectType=projects`}
                                    className="primary-button"
                                    style={{
                                        display: "inline-flex",
                                        alignSelf: "flex-start",
                                    }}
                                >
                                    Explore Top Localities
                                    <ArrowRight size={17} />
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Category Filter Pills */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            flexWrap: "wrap",
                            marginBottom: "36px",
                        }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    padding: "8px 18px",
                                    borderRadius: "24px",
                                    border:
                                        selectedCategory === cat
                                            ? "1px solid var(--primary-color)"
                                            : "1px solid #e2e8f0",
                                    background:
                                        selectedCategory === cat
                                            ? "var(--secondary-color)"
                                            : "#ffffff",
                                    color:
                                        selectedCategory === cat
                                            ? "#ffffff"
                                            : "var(--text-secondary)",
                                    fontWeight: "600",
                                    fontSize: "0.9rem",
                                    cursor: "pointer",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Blog Posts Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(320px, 1fr))",
                            gap: "28px",
                        }}
                    >
                        {filteredPosts.map((post) => (
                            <article
                                key={post.id}
                                style={{
                                    background: "#ffffff",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    border: "1px solid var(--border-subtle)",
                                    boxShadow: "var(--shadow-sm)",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "transform 0.25s ease",
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        height: "210px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <span
                                        style={{
                                            position: "absolute",
                                            top: "14px",
                                            left: "14px",
                                            padding: "5px 12px",
                                            borderRadius: "6px",
                                            background: "rgba(24, 30, 27, 0.85)",
                                            backdropFilter: "blur(4px)",
                                            color: "#e0b77f",
                                            fontSize: "0.78rem",
                                            fontWeight: "700",
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        {post.category}
                                    </span>
                                </div>

                                <div
                                    style={{
                                        padding: "24px 22px",
                                        display: "flex",
                                        flexDirection: "column",
                                        flex: 1,
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "14px",
                                            fontSize: "0.8rem",
                                            color: "var(--text-muted)",
                                            marginBottom: "12px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "5px",
                                            }}
                                        >
                                            <Calendar size={14} />
                                            {post.date}
                                        </span>
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "5px",
                                            }}
                                        >
                                            <Clock size={14} />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h3
                                        style={{
                                            fontSize: "1.15rem",
                                            fontWeight: "700",
                                            color: "var(--secondary-color)",
                                            marginBottom: "12px",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {post.title}
                                    </h3>

                                    <p
                                        style={{
                                            color: "var(--text-secondary)",
                                            fontSize: "0.9rem",
                                            lineHeight: 1.6,
                                            marginBottom: "20px",
                                            flex: 1,
                                        }}
                                    >
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href="/contact"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            color: "var(--primary-color)",
                                            fontWeight: "700",
                                            fontSize: "0.9rem",
                                            textDecoration: "none",
                                        }}
                                    >
                                        Speak with an Advisor
                                        <ArrowRight size={15} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

