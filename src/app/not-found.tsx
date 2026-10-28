import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default function NotFound() {
    return (
        <div style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />
            <main
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
                        maxWidth: "600px",
                        margin: "0 auto",
                        padding: "50px 30px",
                        background: "#ffffff",
                        borderRadius: "16px",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                        border: "1px solid #e2e8f0",
                    }}
                >
                    <div
                        style={{
                            width: "72px",
                            height: "72px",
                            borderRadius: "50%",
                            background: "rgba(197, 155, 39, 0.12)",
                            color: "var(--primary-color)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 20px",
                        }}
                    >
                        <Home size={36} />
                    </div>
                    <span
                        style={{
                            display: "inline-block",
                            padding: "6px 14px",
                            background: "rgba(197, 155, 39, 0.12)",
                            color: "var(--primary-color)",
                            borderRadius: "20px",
                            fontSize: "0.85rem",
                            fontWeight: "700",
                            marginBottom: "12px",
                        }}
                    >
                        404 ERROR
                    </span>
                    <h1
                        style={{
                            fontSize: "2.2rem",
                            color: "var(--secondary-color)",
                            marginBottom: "14px",
                            fontWeight: "800",
                        }}
                    >
                        Page Not Found
                    </h1>
                    <p
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: "1.05rem",
                            lineHeight: "1.6",
                            marginBottom: "28px",
                        }}
                    >
                        The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
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
                            className="primary-button"
                            style={{ textDecoration: "none" }}
                        >
                            <ArrowLeft size={16} />
                            Explore Properties
                        </Link>
                        <Link
                            href="/"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "12px 22px",
                                background: "var(--secondary-color)",
                                color: "#ffffff",
                                borderRadius: "var(--border-radius)",
                                fontWeight: "600",
                                textDecoration: "none",
                            }}
                        >
                            Return to Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

