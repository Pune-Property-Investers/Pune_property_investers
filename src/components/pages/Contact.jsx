"use client";

import { useState } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Send,
    MessageCircle,
    ShieldCheck,
    Building2,
    Clock,
} from "lucide-react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageHeroBanner from "../common/PageHeroBanner";

const WHATSAPP_NUMBER = "917398174444";
const PHONE_NUMBER = "+917398174444";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        locality: "Kharadi",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = [
            `*New Property Inquiry via Contact Page*`,
            `Name: ${formData.name}`,
            `Phone: ${formData.phone}`,
            `Email: ${formData.email || "Not specified"}`,
            `Preferred Locality: ${formData.locality}`,
            `Message: ${formData.message || "I would like to speak to a Pune Property Advisor."}`,
        ].join("\n");

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setSubmitted(true);
    };

    return (
        <div style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main>
                {/* Hero Header Section */}
                <PageHeroBanner
                    title="Connect With Our"
                    titleAccent="Pune Real Estate Advisors."
                    eyebrow="GET IN TOUCH"
                    description="Have questions about newly launched projects, pricing, or property investment in Pune? Reach out today for personalized recommendations and site visit scheduling."
                    breadcrumbs={[
                        { label: "Home", href: "/" },
                        { label: "Contact Us" },
                    ]}
                    backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
                    icon={Phone}
                />

                <div className="container" style={{ padding: "60px 0 80px" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                            gap: "40px",
                        }}
                    >
                        {/* Contact Form */}
                        <div
                            style={{
                                background: "#ffffff",
                                padding: "40px 32px",
                                borderRadius: "20px",
                                border: "1px solid var(--border-subtle)",
                                boxShadow: "var(--shadow-md)",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "1.6rem",
                                    fontWeight: "700",
                                    color: "var(--secondary-color)",
                                    marginBottom: "8px",
                                }}
                            >
                                Send Us a Message
                            </h2>
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "0.95rem",
                                    marginBottom: "28px",
                                }}
                            >
                                Fill out your details below and we will connect with you right away on WhatsApp or by call.
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "18px",
                                }}
                            >
                                <div>
                                    <label
                                        style={{
                                            display: "block",
                                            marginBottom: "6px",
                                            fontSize: "0.88rem",
                                            fontWeight: "600",
                                            color: "var(--secondary-color)",
                                        }}
                                    >
                                        Your Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Amit Patil"
                                        style={{
                                            width: "100%",
                                            padding: "12px 14px",
                                            borderRadius: "8px",
                                            border: "1px solid #cbd5e1",
                                            fontSize: "0.95rem",
                                        }}
                                    />
                                </div>

                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "repeat(auto-fit, minmax(180px, 1fr))",
                                        gap: "14px",
                                    }}
                                >
                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                marginBottom: "6px",
                                                fontSize: "0.88rem",
                                                fontWeight: "600",
                                                color: "var(--secondary-color)",
                                            }}
                                        >
                                            Phone / WhatsApp *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="e.g. +91 98765 43210"
                                            style={{
                                                width: "100%",
                                                padding: "12px 14px",
                                                borderRadius: "8px",
                                                border: "1px solid #cbd5e1",
                                                fontSize: "0.95rem",
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                marginBottom: "6px",
                                                fontSize: "0.88rem",
                                                fontWeight: "600",
                                                color: "var(--secondary-color)",
                                            }}
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="e.g. amit@example.com"
                                            style={{
                                                width: "100%",
                                                padding: "12px 14px",
                                                borderRadius: "8px",
                                                border: "1px solid #cbd5e1",
                                                fontSize: "0.95rem",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        style={{
                                            display: "block",
                                            marginBottom: "6px",
                                            fontSize: "0.88rem",
                                            fontWeight: "600",
                                            color: "var(--secondary-color)",
                                        }}
                                    >
                                        Preferred Pune Locality
                                    </label>
                                    <select
                                        name="locality"
                                        value={formData.locality}
                                        onChange={handleChange}
                                        style={{
                                            width: "100%",
                                            padding: "12px 14px",
                                            borderRadius: "8px",
                                            border: "1px solid #cbd5e1",
                                            fontSize: "0.95rem",
                                            background: "#ffffff",
                                        }}
                                    >
                                        <option value="Kharadi">Kharadi (East Pune)</option>
                                        <option value="Baner">Baner (West Pune)</option>
                                        <option value="Wakad">Wakad (West Pune)</option>
                                        <option value="Hinjewadi">Hinjewadi (IT Park)</option>
                                        <option value="Wagholi">Wagholi (Nagar Road)</option>
                                        <option value="Hadapsar / Magarpatta">Hadapsar / Magarpatta</option>
                                        <option value="NIBM / Undri">NIBM / Undri (South Pune)</option>
                                        <option value="Other">Other / Flexible</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        style={{
                                            display: "block",
                                            marginBottom: "6px",
                                            fontSize: "0.88rem",
                                            fontWeight: "600",
                                            color: "var(--secondary-color)",
                                        }}
                                    >
                                        Your Requirements / Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Looking for 2 or 3 BHK near IT Park with budget around 80 Lakhs..."
                                        style={{
                                            width: "100%",
                                            padding: "12px 14px",
                                            borderRadius: "8px",
                                            border: "1px solid #cbd5e1",
                                            fontSize: "0.95rem",
                                            fontFamily: "inherit",
                                        }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="primary-button"
                                    style={{
                                        width: "100%",
                                        justifyContent: "center",
                                        padding: "14px",
                                    }}
                                >
                                    Send Inquiry via WhatsApp
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>

                        {/* Direct Contact Info & Office */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "24px",
                            }}
                        >
                            <div
                                style={{
                                    background: "#ffffff",
                                    padding: "36px 30px",
                                    borderRadius: "20px",
                                    border: "1px solid var(--border-subtle)",
                                    boxShadow: "var(--shadow-sm)",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "1.3rem",
                                        fontWeight: "700",
                                        color: "var(--secondary-color)",
                                        marginBottom: "20px",
                                    }}
                                >
                                    Office Headquarters
                                </h3>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "14px",
                                        alignItems: "flex-start",
                                        marginBottom: "22px",
                                    }}
                                >
                                    <MapPin
                                        size={22}
                                        color="var(--primary-color)"
                                        style={{ flexShrink: 0, marginTop: "4px" }}
                                    />
                                    <div>
                                        <strong
                                            style={{
                                                display: "block",
                                                color: "var(--secondary-color)",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            Pune Property Investors
                                        </strong>
                                        <span
                                            style={{
                                                color: "var(--text-secondary)",
                                                lineHeight: 1.6,
                                                fontSize: "0.95rem",
                                            }}
                                        >
                                            3rd Floor, Gera Imperium Alpha, Grant Road,
                                            Vitthal Nagar, Kharadi, Pune, Maharashtra
                                            411014
                                        </span>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "14px",
                                        alignItems: "center",
                                        marginBottom: "16px",
                                    }}
                                >
                                    <Phone
                                        size={20}
                                        color="var(--primary-color)"
                                        style={{ flexShrink: 0 }}
                                    />
                                    <div>
                                        <span
                                            style={{
                                                fontSize: "0.82rem",
                                                color: "var(--text-muted)",
                                                display: "block",
                                            }}
                                        >
                                            Advisory Hotline
                                        </span>
                                        <a
                                            href={`tel:${PHONE_NUMBER}`}
                                            style={{
                                                color: "var(--secondary-color)",
                                                fontWeight: "700",
                                                fontSize: "1.05rem",
                                                textDecoration: "none",
                                            }}
                                        >
                                            +91 73981 74444
                                        </a>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "14px",
                                        alignItems: "center",
                                        marginBottom: "16px",
                                    }}
                                >
                                    <Mail
                                        size={20}
                                        color="var(--primary-color)"
                                        style={{ flexShrink: 0 }}
                                    />
                                    <div>
                                        <span
                                            style={{
                                                fontSize: "0.82rem",
                                                color: "var(--text-muted)",
                                                display: "block",
                                            }}
                                        >
                                            General & Builder Inquiries
                                        </span>
                                        <a
                                            href="mailto:info@punepropertyinvestor.com"
                                            style={{
                                                color: "var(--secondary-color)",
                                                fontWeight: "600",
                                                textDecoration: "none",
                                            }}
                                        >
                                            info@punepropertyinvestor.com
                                        </a>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "14px",
                                        alignItems: "center",
                                    }}
                                >
                                    <Clock
                                        size={20}
                                        color="var(--primary-color)"
                                        style={{ flexShrink: 0 }}
                                    />
                                    <div>
                                        <span
                                            style={{
                                                fontSize: "0.82rem",
                                                color: "var(--text-muted)",
                                                display: "block",
                                            }}
                                        >
                                            Working Hours
                                        </span>
                                        <span
                                            style={{
                                                color: "var(--secondary-color)",
                                                fontWeight: "600",
                                                fontSize: "0.95rem",
                                            }}
                                        >
                                            Monday – Sunday: 9:30 AM – 7:30 PM
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Fast Track Card */}
                            <div
                                style={{
                                    background:
                                        "linear-gradient(135deg, #128C7E 0%, #075E54 100%)",
                                    color: "#ffffff",
                                    padding: "32px 28px",
                                    borderRadius: "20px",
                                    boxShadow: "var(--shadow-md)",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        marginBottom: "14px",
                                    }}
                                >
                                    <MessageCircle size={30} />
                                    <h4
                                        style={{
                                            fontSize: "1.3rem",
                                            fontWeight: "700",
                                        }}
                                    >
                                        Instant WhatsApp Consultation
                                    </h4>
                                </div>
                                <p
                                    style={{
                                        fontSize: "0.95rem",
                                        lineHeight: 1.6,
                                        opacity: 0.95,
                                        marginBottom: "20px",
                                    }}
                                >
                                    Need instant brochures, floor plans, and
                                    pricing for Pune properties? Chat directly with
                                    our senior property consultant.
                                </p>
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                                        "Hello Pune Property Investor, I want to consult about buying a property in Pune."
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        background: "#ffffff",
                                        color: "#075E54",
                                        padding: "12px 22px",
                                        borderRadius: "8px",
                                        fontWeight: "700",
                                        fontSize: "0.95rem",
                                        textDecoration: "none",
                                    }}
                                >
                                    Start WhatsApp Chat
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
