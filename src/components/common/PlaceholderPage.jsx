import Link from "next/link";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function PlaceholderPage({ title, description }) {
    return (
        <>
            <Header />
            <main
                className="container section"
                style={{
                    minHeight: "75vh",
                    paddingTop: "140px",
                    paddingBottom: "80px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        maxWidth: "680px",
                        width: "100%",
                        margin: "0 auto",
                        padding: "40px 30px",
                        background: "#ffffff",
                        borderRadius: "16px",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                        border: "1px solid #e2e8f0",
                    }}
                >
                    <span
                        style={{
                            display: "inline-block",
                            padding: "6px 14px",
                            background: "rgba(180, 139, 62, 0.12)",
                            color: "#b48b3e",
                            borderRadius: "20px",
                            fontSize: "0.85rem",
                            fontWeight: "700",
                            marginBottom: "16px",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Pune Property Investor
                    </span>
                    <h1
                        style={{
                            fontSize: "2rem",
                            color: "#1a2b49",
                            marginBottom: "14px",
                            fontWeight: "700",
                        }}
                    >
                        {title}
                    </h1>
                    <p
                        style={{
                            color: "#64748b",
                            fontSize: "1.05rem",
                            lineHeight: "1.65",
                            marginBottom: "28px",
                        }}
                    >
                        {description ||
                            "This page is currently being updated with fresh listings and verified Pune real estate information. Please check back soon or browse our available properties."}
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: "14px",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <Link
                            href="/buy"
                            style={{
                                display: "inline-block",
                                padding: "12px 24px",
                                background: "#b48b3e",
                                color: "#ffffff",
                                borderRadius: "8px",
                                textDecoration: "none",
                                fontWeight: "600",
                                transition: "all 0.2s ease",
                            }}
                        >
                            Explore Properties
                        </Link>
                        <Link
                            href="/"
                            style={{
                                display: "inline-block",
                                padding: "12px 24px",
                                background: "#1a2b49",
                                color: "#ffffff",
                                borderRadius: "8px",
                                textDecoration: "none",
                                fontWeight: "600",
                                transition: "all 0.2s ease",
                            }}
                        >
                            Return to Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

