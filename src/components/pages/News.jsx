"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Calendar,
    Newspaper,
    ExternalLink,
    ArrowRight,
    MapPin,
    AlertCircle,
    TrendingUp,
} from "lucide-react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageHeroBanner from "../common/PageHeroBanner";

const newsArticles = [
    {
        id: 1,
        title: "Pune Metro Line 3 Trials Commence: 23 Stations Connecting Hinjewadi to Civil Court",
        category: "Metro & Transit",
        date: "October 27, 2026",
        source: "Pune Urban Infrastructure Bureau",
        image:
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
        summary:
            "The 23.3 km elevated corridor enters final trial runs. Major residential localities like Wakad, Baner, Balewadi, and Aundh report rising housing inquiries ahead of full public operations.",
        impact: "Expected 20-30 min commute time reduction between West Pune IT hubs and downtown.",
    },
    {
        id: 2,
        title: "PMC Approves New 36-Meter DP Road Links Connecting Upper Kharadi Directly to Wagholi",
        category: "Infrastructure",
        date: "October 22, 2026",
        source: "Civic Development Authority",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
        summary:
            "New arterial connecting corridors cleared to decongest Nagar Road and facilitate direct connectivity between EON IT Park, WTC Tower 4, and eastern residential developments.",
        impact: "Eases heavy freight and daily IT commuter traffic through eastern suburbs.",
    },
    {
        id: 3,
        title: "Pune Real Estate Registers 18% Annual Appreciation in Premium Residential Townships",
        category: "Market Reports",
        date: "October 15, 2026",
        source: "Maharashtra Property Index",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        summary:
            "Third-quarter data reveals robust demand for 2 and 3 BHK gated communities, with NRI buyers driving significant capital into integrated riverfront and lifestyle township projects.",
        impact: "Rental yields across Kharadi, Hinjewadi, and Baner remain healthy at 3.8% to 4.5%.",
    },
    {
        id: 4,
        title: "MahaRERA Enforces Stringent Quality Audits & Escrow Verification for Mega Projects",
        category: "Policy & RERA",
        date: "October 08, 2026",
        source: "RERA Maharashtra Press Release",
        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85",
        summary:
            "All residential developments above 500 units must now undergo quarterly construction progress certification by independent structural engineers to ensure timely delivery.",
        impact: "Boosts buyer confidence and prevents project delivery delays across Maharashtra.",
    },
    {
        id: 5,
        title: "Pune Ring Road Phase-1 Land Acquisition Progresses Across 14 Key Southern Villages",
        category: "Infrastructure",
        date: "September 30, 2026",
        source: "MSRDC Infrastructure Updates",
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
        summary:
            "The 173 km Ring Road network aims to divert inter-state through traffic away from central city roads, spurring rapid logistics and plotted community development along Shirwal and Pirangut corridors.",
        impact: "Transforms peripheral micro-markets into prime suburban residential destinations.",
    },
    {
        id: 6,
        title: "Commercial Grade-A Office Absorption Hits Record 7.2 Million Sq.Ft. in Pune",
        category: "Market Reports",
        date: "September 19, 2026",
        source: "Commercial Real Estate Pulse",
        image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
        summary:
            "Global capability centers (GCCs), semiconductor research offices, and fintech firms drive historic space absorption in Kharadi and Baner business hubs.",
        impact: "Spurs sustained housing rental demand from top corporate professionals.",
    },
];

const categories = [
    "All",
    "Metro & Transit",
    "Infrastructure",
    "Market Reports",
    "Policy & RERA",
];

export default function News() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredArticles = newsArticles.filter((article) => {
        if (selectedCategory === "All") return true;
        return article.category === selectedCategory;
    });

    return (
        <div style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main>
                {/* Hero Header Section */}
                <PageHeroBanner
                    title="Pune Property News"
                    titleAccent="& Market Updates."
                    eyebrow="PUNE PROPERTY INVESTOR NEWSROOM"
                    description="Stay informed with real-time news on Metro expansions, civic master plans, Ring Road progress, and MahaRERA real estate policy updates."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "News" },
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85"
                    icon={Newspaper}
                />

                <div className="container" style={{ padding: "60px 0 80px" }}>
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

                    {/* News Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(340px, 1fr))",
                            gap: "28px",
                        }}
                    >
                        {filteredArticles.map((article) => (
                            <article
                                key={article.id}
                                style={{
                                    background: "#ffffff",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    border: "1px solid var(--border-subtle)",
                                    boxShadow: "var(--shadow-sm)",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        height: "200px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src={article.image}
                                        alt={article.title}
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
                                            background: "rgba(24, 30, 27, 0.88)",
                                            backdropFilter: "blur(4px)",
                                            color: "#e0b77f",
                                            fontSize: "0.78rem",
                                            fontWeight: "700",
                                        }}
                                    >
                                        {article.category}
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
                                            justifyContent: "space-between",
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
                                            {article.date}
                                        </span>
                                        <span>{article.source}</span>
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
                                        {article.title}
                                    </h3>

                                    <p
                                        style={{
                                            color: "var(--text-secondary)",
                                            fontSize: "0.9rem",
                                            lineHeight: 1.6,
                                            marginBottom: "18px",
                                            flex: 1,
                                        }}
                                    >
                                        {article.summary}
                                    </p>

                                    {article.impact && (
                                        <div
                                            style={{
                                                background: "#f8fafc",
                                                borderLeft:
                                                    "3px solid var(--primary-color)",
                                                padding: "10px 14px",
                                                borderRadius: "0 8px 8px 0",
                                                fontSize: "0.82rem",
                                                color: "var(--secondary-color)",
                                                fontWeight: "600",
                                                marginBottom: "20px",
                                            }}
                                        >
                                            Key Takeaway: {article.impact}
                                        </div>
                                    )}

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
                                        Consult Our Advisors
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

