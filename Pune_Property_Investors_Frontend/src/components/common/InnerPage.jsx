import { Link } from "react-router-dom";
import { ArrowRight, Building, PhoneCall, CheckCircle } from "lucide-react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import "./InnerPage.css";

function InnerPage({
    title,
    eyebrow = "Pune Property Investor",
    description = "Discover the latest updates, opportunities, and information across Pune's premier real estate developments.",
}) {
    return (
        <div className="inner-page">
            <Header />

            <section className="inner-page-hero">
                <div className="inner-page-hero__bg" />
                <div className="inner-page-hero__content">
                    <span className="inner-page-eyebrow">
                        <Building size={15} />
                        {eyebrow}
                    </span>
                    <h1 className="inner-page-title">{title}</h1>
                    <p className="inner-page-description">{description}</p>
                </div>
            </section>

            <main className="inner-page-body container section">
                <div className="inner-page-card">
                    <h2>{title}</h2>
                    <p className="inner-page-lead">
                        We are actively updating and curating listings, guides, and data for this section to provide you with the most up-to-date and verified information in Pune.
                    </p>

                    <div className="inner-page-feature-list">
                        <div className="feature-item">
                            <CheckCircle size={18} className="feature-icon" />
                            <span>100% RERA verified property collections</span>
                        </div>
                        <div className="feature-item">
                            <CheckCircle size={18} className="feature-icon" />
                            <span>Locality-wise price trends and infrastructure insights</span>
                        </div>
                        <div className="feature-item">
                            <CheckCircle size={18} className="feature-icon" />
                            <span>Expert advisory without broker fees or pressure</span>
                        </div>
                    </div>

                    <div className="inner-page-actions">
                        <Link to="/buy" className="inner-btn-primary">
                            Browse Available Properties
                            <ArrowRight size={17} />
                        </Link>
                        <Link to="/contact" className="inner-btn-secondary">
                            <PhoneCall size={17} />
                            Consult Our Property Advisor
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default InnerPage;
