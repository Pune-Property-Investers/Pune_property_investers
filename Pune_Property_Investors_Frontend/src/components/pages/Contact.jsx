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

            <main style={{ paddingTop: "120px", paddingBottom: "80px" }}>
                <section className="container" style={{ textAlign: "center", marginBottom: "50px" }}>
                    <span
                        style={{
                            display: "inline-block",
                            padding: "6px 16px",
                            background: "rgba(197, 155, 39, 0.12)",
                            color: "var(--primary-color)",
                            borderRadius: "20px",
                            fontSize: "0.85rem",
                            fontWeight: "700",
                            marginBottom: "16px",
                            letterSpacing: "1px",
                        }}
                    >
                        GET IN TOUCH
                    </span>
                    <h1 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--secondary-color)", fontWeight: "800", marginBottom: "16px" }}>
                        Connect With Our <span style={{ color: "var(--primary-color)" }}>Pune Real Estate Advisors</span>
                    </h1>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
                        Have questions about newly launched projects, pricing, or property investment in Pune? Reach out today for personalized recommendations and site visit scheduling.
                    </p>
                </section>

                <section className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "40px" }}>
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
                            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "var(--secondary-color)", marginBottom: "8px" }}>
                                Send Us a Message
                            </h2>
                            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "28px" }}>
                                Fill out your details below and we will connect with you right away on WhatsApp or by call.
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                <div>
                                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "var(--text-primary)", marginBottom: "6px" }} htmlFor="contact-name">
                                        Full Name *
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="e.g. Rahul Sharma"
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "0.95rem" }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "var(--text-primary)", marginBottom: "6px" }} htmlFor="contact-phone">
                                        Mobile Number *
                                    </label>
                                    <input
                                        id="contact-phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        placeholder="e.g. +91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "0.95rem" }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "var(--text-primary)", marginBottom: "6px" }} htmlFor="contact-email">
                                        Email Address (Optional)
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        placeholder="e.g. rahul@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "0.95rem" }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "var(--text-primary)", marginBottom: "6px" }} htmlFor="contact-locality">
                                        Locality of Interest
                                    </label>
                                    <select
                                        id="contact-locality"
                                        name="locality"
                                        value={formData.locality}
                                        onChange={handleChange}
                                        style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "0.95rem", background: "#ffffff" }}
                                    >
                                        <option value="Kharadi">Kharadi</option>
                                        <option value="Baner">Baner</option>
                                        <option value="Wakad">Wakad</option>
                                        <option value="Hinjewadi">Hinjewadi</option>
                                        <option value="Wagholi">Wagholi</option>
                                        <option value="Hadapsar">Hadapsar</option>
                                        <option value="Dhanori">Dhanori</option>
                                        <option value="Koregaon Park">Koregaon Park</option>
                                        <option value="Other">Other / Multiple Localities</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "var(--text-primary)", marginBottom: "6px" }} htmlFor="contact-message">
                                        Requirement / Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={3}
                                        placeholder="Looking for 2 BHK in Kharadi under ₹85 Lakhs..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "0.95rem" }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="primary-button"
                                    style={{ width: "100%", padding: "14px", fontSize: "1rem", marginTop: "10px", cursor: "pointer" }}
                                >
                                    <Send size={18} />
                                    Send Enquiry via WhatsApp
                                </button>

                                {submitted && (
                                    <p style={{ color: "#059669", fontSize: "0.9rem", fontWeight: "600", textAlign: "center" }}>
                                        WhatsApp has been opened with your inquiry!
                                    </p>
                                )}

                                <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", color: "var(--text-light)", fontSize: "0.85rem", marginTop: "6px" }}>
                                    <ShieldCheck size={16} /> We respect your privacy. No spam guaranteed.
                                </p>
                            </form>
                        </div>

                        {/* Contact Information & Map Info */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            <div style={{ background: "#ffffff", padding: "36px 30px", borderRadius: "20px", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}>
                                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--secondary-color)", marginBottom: "20px" }}>
                                    Office Headquarters
                                </h3>

                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                    <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                        <div style={{ padding: "10px", background: "rgba(197, 155, 39, 0.12)", color: "var(--primary-color)", borderRadius: "10px" }}>
                                            <MapPin size={22} />
                                        </div>
                                        <div>
                                            <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "1rem" }}>Address</strong>
                                            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5, marginTop: "4px" }}>
                                                3rd Floor (Suite 904), Gera Imperium Alpha, Grant Road, Vitthal Nagar, Kharadi, Pune, Maharashtra 411014, India
                                            </p>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                        <div style={{ padding: "10px", background: "rgba(197, 155, 39, 0.12)", color: "var(--primary-color)", borderRadius: "10px" }}>
                                            <Phone size={22} />
                                        </div>
                                        <div>
                                            <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "1rem" }}>Call or WhatsApp</strong>
                                            <a href={`tel:${PHONE_NUMBER}`} style={{ color: "var(--primary-dark)", fontWeight: "600", fontSize: "0.95rem", display: "inline-block", marginTop: "4px" }}>
                                                +91 73981 74444
                                            </a>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                        <div style={{ padding: "10px", background: "rgba(197, 155, 39, 0.12)", color: "var(--primary-color)", borderRadius: "10px" }}>
                                            <Mail size={22} />
                                        </div>
                                        <div>
                                            <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "1rem" }}>Email Us</strong>
                                            <a href="mailto:info@punepropertyinvestor.com" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", display: "inline-block", marginTop: "4px" }}>
                                                info@punepropertyinvestor.com
                                            </a>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                        <div style={{ padding: "10px", background: "rgba(197, 155, 39, 0.12)", color: "var(--primary-color)", borderRadius: "10px" }}>
                                            <Clock size={22} />
                                        </div>
                                        <div>
                                            <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "1rem" }}>Business Hours</strong>
                                            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "4px" }}>
                                                Monday to Sunday: 9:30 AM – 7:30 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Instant WhatsApp Card */}
                            <div
                                style={{
                                    background: "linear-gradient(135deg, #128C7E 0%, #075E54 100%)",
                                    color: "#ffffff",
                                    padding: "30px",
                                    borderRadius: "20px",
                                    boxShadow: "var(--shadow-md)",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                                    <MessageCircle size={30} />
                                    <h4 style={{ fontSize: "1.3rem", fontWeight: "700" }}>Instant WhatsApp Consultation</h4>
                                </div>
                                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, opacity: 0.95, marginBottom: "20px" }}>
                                    Need instant brochures, floor plans, and pricing for Pune properties? Chat directly with our senior property consultant.
                                </p>
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Pune Property Investor, I want to consult about buying a property in Pune.")}`}
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
                </section>
            </main>

            <Footer />
        </div>
    );
}
