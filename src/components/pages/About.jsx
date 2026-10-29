"use client";

import Link from "next/link";
import {
    Building2,
    ShieldCheck,
    MapPin,
    Users,
    TrendingUp,
    Phone,
    Mail,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageHeroBanner from "../common/PageHeroBanner";

export default function AboutPage() {
    return (
        <div style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main>
                {/* Hero Header Section */}
                <PageHeroBanner
                    title="Guiding Your Journey With"
                    titleAccent="Trust & Expertise."
                    eyebrow="ABOUT PUNE PROPERTY INVESTOR"
                    description="Pune Property Investors is your dedicated advisory partner helping homebuyers, NRI investors, and commercial clients make verified, high-yielding property decisions across Pune's fastest growing corridors."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "About Us" },
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
                />

                <div style={{ padding: "60px 0 80px" }}>
                    {/* Core Pillars */}
                    <section className="container" style={{ marginBottom: "70px" }}>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                gap: "24px",
                            }}
                        >
                            <div
                                style={{
                                    background: "#ffffff",
                                    padding: "36px 28px",
                                    borderRadius: "16px",
                                    border: "1px solid var(--border-subtle)",
                                    boxShadow: "var(--shadow-sm)",
                                }}
                            >
                                <div
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        borderRadius: "12px",
                                        background: "rgba(197, 155, 39, 0.12)",
                                        color: "var(--primary-color)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <ShieldCheck size={26} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: "1.3rem",
                                        fontWeight: "700",
                                        color: "var(--secondary-color)",
                                        marginBottom: "12px",
                                    }}
                                >
                                    100% Verified Properties
                                </h3>
                                <p
                                    style={{
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.6,
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    Every property listed is vetted for legal
                                    compliance, developer credentials, RERA
                                    approvals, and clear titles to ensure your
                                    peace of mind.
                                </p>
                            </div>

                            <div
                                style={{
                                    background: "#ffffff",
                                    padding: "36px 28px",
                                    borderRadius: "16px",
                                    border: "1px solid var(--border-subtle)",
                                    boxShadow: "var(--shadow-sm)",
                                }}
                            >
                                <div
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        borderRadius: "12px",
                                        background: "rgba(197, 155, 39, 0.12)",
                                        color: "var(--primary-color)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <TrendingUp size={26} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: "1.3rem",
                                        fontWeight: "700",
                                        color: "var(--secondary-color)",
                                        marginBottom: "12px",
                                    }}
                                >
                                    High Capital Appreciation
                                </h3>
                                <p
                                    style={{
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.6,
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    We identify strategic micro-markets positioned
                                    near major upcoming infrastructure like Metro
                                    corridors, Ring Road, and IT hubs for maximum
                                    ROI.
                                </p>
                            </div>

                            <div
                                style={{
                                    background: "#ffffff",
                                    padding: "36px 28px",
                                    borderRadius: "16px",
                                    border: "1px solid var(--border-subtle)",
                                    boxShadow: "var(--shadow-sm)",
                                }}
                            >
                                <div
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        borderRadius: "12px",
                                        background: "rgba(197, 155, 39, 0.12)",
                                        color: "var(--primary-color)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <Users size={26} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: "1.3rem",
                                        fontWeight: "700",
                                        color: "var(--secondary-color)",
                                        marginBottom: "12px",
                                    }}
                                >
                                    Personalized Advisory
                                </h3>
                                <p
                                    style={{
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.6,
                                        fontSize: "0.95rem",
                                    }}
                                >
                                    Our seasoned real estate consultants guide you
                                    end-to-end, from requirement analysis, site
                                    visits, price negotiations, to loan
                                    sanctioning.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Company Story & Office */}
                    <section className="container" style={{ marginBottom: "20px" }}>
                        <div
                            style={{
                                background: "#ffffff",
                                padding: "48px 36px",
                                borderRadius: "20px",
                                border: "1px solid var(--border-subtle)",
                                boxShadow: "var(--shadow-md)",
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                                gap: "40px",
                                alignItems: "center",
                            }}
                        >
                            <div>
                                <span
                                    style={{
                                        color: "var(--primary-color)",
                                        fontWeight: "700",
                                        fontSize: "0.85rem",
                                        letterSpacing: "1px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    OUR MISSION
                                </span>
                                <h2
                                    style={{
                                        fontSize: "2rem",
                                        color: "var(--secondary-color)",
                                        fontWeight: "800",
                                        margin: "12px 0 20px",
                                    }}
                                >
                                    Empowering Homebuyers With Market Transparency
                                </h2>
                                <p
                                    style={{
                                        color: "var(--text-secondary)",
                                        lineHeight: 1.7,
                                        marginBottom: "20px",
                                    }}
                                >
                                    Headquartered in Kharadi, Pune, Pune Property
                                    Investors was founded with a singular focus:
                                    bringing complete honesty, professional advisory,
                                    and data-backed market analysis to Pune's
                                    thriving real estate landscape.
                                </p>
                                <ul
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px",
                                        marginBottom: "30px",
                                    }}
                                >
                                    <li
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            color: "var(--text-primary)",
                                        }}
                                    >
                                        <CheckCircle2
                                            size={18}
                                            color="var(--primary-color)"
                                        />{" "}
                                        Direct builder tie-ups offering exclusive
                                        zero-brokerage deals.
                                    </li>
                                    <li
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            color: "var(--text-primary)",
                                        }}
                                    >
                                        <CheckCircle2
                                            size={18}
                                            color="var(--primary-color)"
                                        />{" "}
                                        Complete portfolio across East, West, North,
                                        and South Pune corridors.
                                    </li>
                                    <li
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            color: "var(--text-primary)",
                                        }}
                                    >
                                        <CheckCircle2
                                            size={18}
                                            color="var(--primary-color)"
                                        />{" "}
                                        Dedicated post-sales and property management
                                        assistance.
                                    </li>
                                </ul>
                                <Link
                                    href="/buy"
                                    className="primary-button"
                                    style={{ display: "inline-flex" }}
                                >
                                    Browse Available Properties
                                    <ArrowRight size={17} />
                                </Link>
                            </div>

                            <div
                                style={{
                                    background: "var(--secondary-color)",
                                    color: "#ffffff",
                                    padding: "36px 30px",
                                    borderRadius: "16px",
                                }}
                            >
                                <h3
                                    style={{
                                        color: "var(--accent-gold)",
                                        fontSize: "1.4rem",
                                        fontWeight: "700",
                                        marginBottom: "20px",
                                    }}
                                >
                                    Get in Touch With Us
                                </h3>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "18px",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "14px",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <MapPin
                                            size={20}
                                            color="var(--primary-color)"
                                            style={{
                                                flexShrink: 0,
                                                marginTop: "4px",
                                            }}
                                        />
                                        <span
                                            style={{
                                                fontSize: "0.95rem",
                                                color: "#e2e8f0",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            3rd Floor, Gera Imperium Alpha, Grant
                                            Road, Vitthal Nagar, Kharadi, Pune,
                                            Maharashtra 411014
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "14px",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Phone
                                            size={18}
                                            color="var(--primary-color)"
                                            style={{ flexShrink: 0 }}
                                        />
                                        <a
                                            href="tel:+917398174444"
                                            style={{
                                                color: "#ffffff",
                                                fontWeight: "600",
                                            }}
                                        >
                                            +91 73981 74444
                                        </a>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "14px",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Mail
                                            size={18}
                                            color="var(--primary-color)"
                                            style={{ flexShrink: 0 }}
                                        />
                                        <a
                                            href="mailto:info@punepropertyinvestor.com"
                                            style={{ color: "#ffffff" }}
                                        >
                                            info@punepropertyinvestor.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
