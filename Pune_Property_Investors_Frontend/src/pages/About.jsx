import { Link } from "react-router-dom";
import { CheckCircle2, Award, Users, Building, ShieldCheck, MapPin } from "lucide-react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import "./About.css";

function About() {
    return (
        <div className="about-page">
            <Header />

            {/* Hero Header */}
            <section className="about-hero">
                <div className="about-hero__background" />
                <div className="about-hero__content">
                    <span className="about-hero__eyebrow">
                        <Building size={16} />
                        ABOUT US
                    </span>
                    <h1 className="about-hero__title">
                        Your Trusted Real Estate Partner in Pune
                    </h1>
                    <p className="about-hero__subtitle">
                        Guiding homebuyers and property investors with transparent insights, locality expertise, and hand-picked residential & commercial options.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <main className="about-main container section">
                <div className="about-grid">
                    <div className="about-text">
                        <span className="about-tag">WHO WE ARE</span>
                        <h2>Dedicated to Finding the Right Property for You</h2>
                        <p>
                            Pune Property Investor was founded to bring clarity, transparency, and trust to Pune's fast-growing property market. We assist families, first-time homebuyers, and strategic investors in navigating property acquisitions across all prime and emerging localities in Pune.
                        </p>
                        <p>
                            Whether you are seeking a modern 2 BHK apartment in Kharadi, a luxury villa in Baner, or high-yield commercial spaces in Hinjewadi, our team provides honest market intelligence and end-to-end guidance.
                        </p>

                        <div className="about-highlights">
                            <div className="about-highlight-item">
                                <CheckCircle2 size={20} className="about-icon" />
                                <span>Verified Builder Ties & RERA-Compliant Projects</span>
                            </div>
                            <div className="about-highlight-item">
                                <CheckCircle2 size={20} className="about-icon" />
                                <span>Zero Hidden Charges & Transparent Deals</span>
                            </div>
                            <div className="about-highlight-item">
                                <CheckCircle2 size={20} className="about-icon" />
                                <span>In-depth Locality, Infrastructure & Price Appreciation Research</span>
                            </div>
                            <div className="about-highlight-item">
                                <CheckCircle2 size={20} className="about-icon" />
                                <span>End-to-End Assistance from Site Visit to Home Loan & Registry</span>
                            </div>
                        </div>

                        <div className="about-actions">
                            <Link to="/buy" className="about-btn-primary">
                                Explore Properties
                            </Link>
                            <Link to="/contact" className="about-btn-secondary">
                                Contact Our Team
                            </Link>
                        </div>
                    </div>

                    <div className="about-stats-card">
                        <div className="stat-box">
                            <Users size={32} />
                            <h3>1,500+</h3>
                            <p>Happy Families & Investors</p>
                        </div>
                        <div className="stat-box">
                            <Building size={32} />
                            <h3>250+</h3>
                            <p>Curated Pune Projects</p>
                        </div>
                        <div className="stat-box">
                            <Award size={32} />
                            <h3>10+</h3>
                            <p>Years Locality Expertise</p>
                        </div>
                        <div className="stat-box">
                            <ShieldCheck size={32} />
                            <h3>100%</h3>
                            <p>RERA Verified Portfolios</p>
                        </div>
                    </div>
                </div>

                {/* Office Location Callout */}
                <div className="about-office-section">
                    <div className="about-office-card">
                        <MapPin size={24} className="office-icon" />
                        <div>
                            <h4>Visit Our Pune Office</h4>
                            <p>
                                3rd Floor, Gera Imperium Alpha, Grant Road, Vitthal Nagar, Kharadi, Pune, Maharashtra 411014, India
                            </p>
                        </div>
                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=Pune+Maharashtra" 
                            target="_blank" 
                            rel="noreferrer"
                            className="about-map-btn"
                        >
                            Open Maps
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default About;
