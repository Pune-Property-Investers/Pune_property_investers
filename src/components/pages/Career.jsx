"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Briefcase,
    MapPin,
    Clock,
    Award,
    TrendingUp,
    Users,
    HeartHandshake,
    Send,
    CheckCircle2,
    Phone,
    Mail,
    ArrowRight,
} from "lucide-react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageHeroBanner from "../common/PageHeroBanner";

const openRoles = [
    {
        id: 1,
        title: "Senior Property Advisory Consultant",
        department: "Residential Sales",
        location: "Kharadi & Baner, Pune",
        type: "Full Time",
        experience: "2–5 Years",
        salary: "Competitive + Uncapped Incentives",
        description:
            "Lead end-to-end client consultation for newly launched luxury apartments and gated communities across Pune. Guide buyers through requirements, builder comparisons, site visits, and closure.",
        requirements: [
            "Experience in Pune primary residential real estate sales.",
            "Excellent spoken Hindi, Marathi, and English communication.",
            "Strong negotiation and customer relationship skills.",
        ],
    },
    {
        id: 2,
        title: "Relationship Manager – Commercial Real Estate",
        department: "Commercial & Retail Leasing",
        location: "Kharadi, Pune",
        type: "Full Time",
        experience: "3–6 Years",
        salary: "Attractive Package + High Commission",
        description:
            "Partner with corporate clients, SMEs, and investors looking for Grade-A office spaces, IT park tech suites, and high-street retail showrooms in Kharadi and Hinjewadi.",
        requirements: [
            "Proven track record in commercial office sales or leasing.",
            "Strong understanding of lease structures, cap rates, and ROI.",
            "Strong corporate networking and presentation skills.",
        ],
    },
    {
        id: 3,
        title: "Digital Marketing & Growth Specialist",
        department: "Marketing & Strategy",
        location: "Pune (Hybrid)",
        type: "Full Time",
        experience: "2–4 Years",
        salary: "Industry Standard + Performance Bonuses",
        description:
            "Drive high-intent buyer acquisition through Google Ads, Meta Ads, SEO, and content campaigns for Pune's most sought-after new residential and commercial launches.",
        requirements: [
            "Hands-on expertise with Meta Ads Manager and Google Ads.",
            "Experience in real estate lead generation and CPL optimization.",
            "Knowledge of analytics, CRM integrations, and landing page testing.",
        ],
    },
    {
        id: 4,
        title: "Site Visit Coordinator / Field Executive",
        department: "Client Operations",
        location: "Wakad, Hinjewadi & Kharadi",
        type: "Full Time",
        experience: "1–3 Years",
        salary: "Fixed Salary + Travel Allowance + Incentives",
        description:
            "Coordinate and conduct on-ground property viewings for prospective buyers. Provide firsthand insights on project amenities, master layout plans, and neighborhood infrastructure.",
        requirements: [
            "Valid two-wheeler license and familiarity with Pune routes.",
            "Punctual, professional demeanor and customer-first attitude.",
            "Basic understanding of Pune residential projects.",
        ],
    },
];

const perks = [
    {
        icon: TrendingUp,
        title: "Uncapped Earning Potential",
        description:
            "Industry-leading commission slabs and performance bonuses on top of competitive fixed compensation.",
    },
    {
        icon: Award,
        title: "Career Growth & Mentorship",
        description:
            "Learn from senior real estate leaders with over a decade of transaction experience across Pune.",
    },
    {
        icon: Users,
        title: "High-Trust Team Culture",
        description:
            "Transparent working environment, zero internal politics, and collaborative celebrations for team milestones.",
    },
    {
        icon: HeartHandshake,
        title: "Builder Direct Portfolio",
        description:
            "Work with Pune's top tier-1 developers (Godrej, VTP, Kumar, Lodha, Panchshil) with exclusive project mandates.",
    },
];

export default function Career() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [applicantName, setApplicantName] = useState("");
    const [applicantPhone, setApplicantPhone] = useState("");
    const [applicantEmail, setApplicantEmail] = useState("");
    const [applicantRole, setApplicantRole] = useState(
        "Senior Property Advisory Consultant"
    );
    const [submitted, setSubmitted] = useState(false);

    const handleApply = (e) => {
        e.preventDefault();
        const msg = [
            `*Job Application via Pune Property Investors Website*`,
            `Role: ${applicantRole}`,
            `Name: ${applicantName}`,
            `Phone: ${applicantPhone}`,
            `Email: ${applicantEmail}`,
        ].join("\n");

        const whatsappUrl = `https://wa.me/917398174444?text=${encodeURIComponent(msg)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setSubmitted(true);
    };

    return (
        <div style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main>
                {/* Hero Header Section */}
                <PageHeroBanner
                    title="Build Your Career"
                    titleAccent="With Industry Leaders."
                    eyebrow="CAREERS AT PUNE PROPERTY INVESTOR"
                    description="Join our growing team of passionate real estate advisors, digital marketers, and client relationship champions shaping the future of Pune real estate."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Career" },
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=85"
                    icon={Users}
                />

                <div className="container" style={{ padding: "60px 0 80px" }}>
                    {/* Why Join Us */}
                    <section style={{ marginBottom: "70px" }}>
                        <div
                            style={{
                                textAlign: "center",
                                maxWidth: "700px",
                                margin: "0 auto 40px",
                            }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    padding: "5px 14px",
                                    borderRadius: "20px",
                                    background: "rgba(180, 139, 62, 0.12)",
                                    color: "var(--primary-color)",
                                    fontSize: "0.82rem",
                                    fontWeight: "700",
                                    marginBottom: "12px",
                                }}
                            >
                                WHY CHOOSE US
                            </span>
                            <h2
                                style={{
                                    fontSize: "2rem",
                                    fontWeight: "800",
                                    color: "var(--secondary-color)",
                                    marginBottom: "12px",
                                }}
                            >
                                Grow Your Real Estate Career With Pune's Trusted Advisory
                            </h2>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                                We provide the resources, builder relationships, and training you need to excel in the real estate consulting landscape.
                            </p>
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(260px, 1fr))",
                                gap: "24px",
                            }}
                        >
                            {perks.map((perk) => {
                                const IconComponent = perk.icon;
                                return (
                                    <div
                                        key={perk.title}
                                        style={{
                                            background: "#ffffff",
                                            padding: "32px 24px",
                                            borderRadius: "16px",
                                            border: "1px solid var(--border-subtle)",
                                            boxShadow: "var(--shadow-sm)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "12px",
                                                background:
                                                    "rgba(180, 139, 62, 0.12)",
                                                color: "var(--primary-color)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginBottom: "18px",
                                            }}
                                        >
                                            <IconComponent size={24} />
                                        </div>
                                        <h3
                                            style={{
                                                fontSize: "1.15rem",
                                                fontWeight: "700",
                                                color: "var(--secondary-color)",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            {perk.title}
                                        </h3>
                                        <p
                                            style={{
                                                color: "var(--text-secondary)",
                                                fontSize: "0.92rem",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {perk.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Open Roles & Quick Apply Form */}
                    <section>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-end",
                                flexWrap: "wrap",
                                gap: "20px",
                                marginBottom: "36px",
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
                                    CURRENT OPENINGS
                                </span>
                                <h2
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: "800",
                                        color: "var(--secondary-color)",
                                        marginTop: "8px",
                                    }}
                                >
                                    Explore Available Positions
                                </h2>
                            </div>

                            <a
                                href="mailto:careers@punepropertyinvestor.com"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    color: "var(--primary-color)",
                                    fontWeight: "700",
                                    textDecoration: "none",
                                    fontSize: "0.95rem",
                                }}
                            >
                                <Mail size={16} />
                                Send CV directly via email
                            </a>
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(340px, 1fr))",
                                gap: "26px",
                                marginBottom: "60px",
                            }}
                        >
                            {openRoles.map((role) => (
                                <article
                                    key={role.id}
                                    style={{
                                        background: "#ffffff",
                                        borderRadius: "16px",
                                        padding: "32px 28px",
                                        border: "1px solid var(--border-subtle)",
                                        boxShadow: "var(--shadow-sm)",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "flex-start",
                                            gap: "12px",
                                            marginBottom: "12px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                padding: "4px 10px",
                                                borderRadius: "6px",
                                                background:
                                                    "rgba(180, 139, 62, 0.12)",
                                                color: "var(--primary-color)",
                                                fontSize: "0.78rem",
                                                fontWeight: "700",
                                            }}
                                        >
                                            {role.department}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "0.8rem",
                                                color: "var(--text-muted)",
                                                fontWeight: "600",
                                            }}
                                        >
                                            {role.type}
                                        </span>
                                    </div>

                                    <h3
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: "800",
                                            color: "var(--secondary-color)",
                                            marginBottom: "12px",
                                            lineHeight: 1.35,
                                        }}
                                    >
                                        {role.title}
                                    </h3>

                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "14px",
                                            fontSize: "0.85rem",
                                            color: "var(--text-muted)",
                                            marginBottom: "16px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "5px",
                                            }}
                                        >
                                            <MapPin size={15} />
                                            {role.location}
                                        </span>
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "5px",
                                            }}
                                        >
                                            <Briefcase size={15} />
                                            {role.experience}
                                        </span>
                                    </div>

                                    <p
                                        style={{
                                            color: "var(--text-secondary)",
                                            fontSize: "0.92rem",
                                            lineHeight: 1.6,
                                            marginBottom: "20px",
                                            flex: 1,
                                        }}
                                    >
                                        {role.description}
                                    </p>

                                    <div
                                        style={{
                                            borderTop: "1px solid #f1f5f9",
                                            paddingTop: "18px",
                                            marginTop: "auto",
                                        }}
                                    >
                                        <a
                                            href={`https://wa.me/917398174444?text=${encodeURIComponent(
                                                `Hello, I want to apply for the ${role.title} role at Pune Property Investors.`
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="primary-button"
                                            style={{
                                                width: "100%",
                                                justifyContent: "center",
                                                display: "inline-flex",
                                            }}
                                        >
                                            Apply via WhatsApp
                                            <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Quick Resume Upload Form */}
                        <div
                            style={{
                                background: "#ffffff",
                                padding: "40px 32px",
                                borderRadius: "20px",
                                border: "1px solid var(--border-subtle)",
                                boxShadow: "var(--shadow-md)",
                                maxWidth: "780px",
                                margin: "0 auto",
                            }}
                        >
                            <div style={{ textAlign: "center", marginBottom: "28px" }}>
                                <h3
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "800",
                                        color: "var(--secondary-color)",
                                        marginBottom: "8px",
                                    }}
                                >
                                    Can't Find Your Exact Role?
                                </h3>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                                    Submit your contact details and our talent acquisition team will get in touch when a matching opening arises.
                                </p>
                            </div>

                            {submitted ? (
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "30px 20px",
                                        background: "rgba(34, 197, 94, 0.1)",
                                        borderRadius: "12px",
                                        color: "#15803d",
                                    }}
                                >
                                    <CheckCircle2 size={36} style={{ margin: "0 auto 10px" }} />
                                    <h4 style={{ fontWeight: "700", marginBottom: "6px" }}>
                                        Application Initiated!
                                    </h4>
                                    <p style={{ fontSize: "0.9rem" }}>
                                        Our recruitment team has received your application. Thank you for your interest in joining Pune Property Investors.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleApply} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                                        <div>
                                            <label style={{ display: "block", marginBottom: "6px", fontSize: "0.88rem", fontWeight: "600", color: "var(--secondary-color)" }}>
                                                Your Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={applicantName}
                                                onChange={(e) => setApplicantName(e.target.value)}
                                                placeholder="e.g. Rahul Sharma"
                                                style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "0.95rem" }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: "block", marginBottom: "6px", fontSize: "0.88rem", fontWeight: "600", color: "var(--secondary-color)" }}>
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={applicantPhone}
                                                onChange={(e) => setApplicantPhone(e.target.value)}
                                                placeholder="e.g. +91 98765 43210"
                                                style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "0.95rem" }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                                        <div>
                                            <label style={{ display: "block", marginBottom: "6px", fontSize: "0.88rem", fontWeight: "600", color: "var(--secondary-color)" }}>
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={applicantEmail}
                                                onChange={(e) => setApplicantEmail(e.target.value)}
                                                placeholder="e.g. rahul@example.com"
                                                style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "0.95rem" }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: "block", marginBottom: "6px", fontSize: "0.88rem", fontWeight: "600", color: "var(--secondary-color)" }}>
                                                Position of Interest
                                            </label>
                                            <select
                                                value={applicantRole}
                                                onChange={(e) => setApplicantRole(e.target.value)}
                                                style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "0.95rem", background: "#ffffff" }}
                                            >
                                                <option value="Senior Property Advisory Consultant">Senior Property Advisory Consultant</option>
                                                <option value="Relationship Manager - Commercial">Relationship Manager - Commercial</option>
                                                <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
                                                <option value="Site Visit Coordinator">Site Visit Coordinator</option>
                                                <option value="Other / General Application">Other / General Application</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="primary-button"
                                        style={{ marginTop: "10px", width: "100%", justifyContent: "center" }}
                                    >
                                        Submit Application via HR Desk
                                        <Send size={16} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

