"use client";

import Link from "next/link";
import {
    MapPin,
    ShieldCheck,
    BedDouble,
    Ruler,
    CalendarDays,
    Building2,
    MessageCircle,
    Phone,
    ArrowDown,
    Sparkles,
} from "lucide-react";

const DEFAULT_PROPERTY_BG =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85";

function getCategoryRoute(propertyType) {
    if (!propertyType) return "/buy";
    const lower = propertyType.toLowerCase();
    if (lower.includes("commercial")) return "/commercial";
    if (lower.includes("plot") || lower.includes("land")) return "/plots";
    if (lower.includes("launch")) return "/projects";
    return "/buy";
}

export default function PropertyHeroHead({
    property = {},
    title,
    price,
    location,
    configuration,
    area,
    whatsappMessage,
    whatsappNumber = "917398174444",
    advisorPhone = "+917398174444",
    backgroundImage,
}) {
    const bg =
        backgroundImage ||
        property.image ||
        (Array.isArray(property.images) && property.images[0]) ||
        DEFAULT_PROPERTY_BG;

    const propertyType = property.propertyType || "Residential";
    const categoryRoute = getCategoryRoute(propertyType);

    const handleScrollToEnquiry = (e) => {
        e.preventDefault();
        const el = document.getElementById("property-enquiry");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="property-hero-head" aria-label="Property header">
            {/* Background Image & Cinematic Overlay */}
            <div
                className="property-hero-head__bg"
                style={{ backgroundImage: `url(${bg})` }}
            />
            <div className="property-hero-head__overlay" />

            <div className="property-hero-head__container">
                {/* Breadcrumbs */}
                <nav
                    className="property-hero-head__breadcrumb"
                    aria-label="Breadcrumbs"
                >
                    <Link href="/">Home</Link>
                    <span className="property-hero-head__crumb-sep">/</span>
                    <Link href="/buy">Properties</Link>
                    <span className="property-hero-head__crumb-sep">/</span>
                    <Link href={categoryRoute}>{propertyType}</Link>
                    <span className="property-hero-head__crumb-sep">/</span>
                    <span className="property-hero-head__crumb-current" title={title}>
                        {title}
                    </span>
                </nav>

                <div className="property-hero-head__content-grid">
                    {/* Left: Property Information */}
                    <div className="property-hero-head__info">
                        {/* Status Badges & Eyebrow */}
                        <div className="property-hero-head__badges">
                            <span className="property-hero-head__badge property-hero-head__badge--eyebrow">
                                <Sparkles size={13} />
                                EXCLUSIVE LISTING
                            </span>

                            {property.verified && (
                                <span className="property-hero-head__badge property-hero-head__badge--verified">
                                    <ShieldCheck size={14} />
                                    Verified Listing
                                </span>
                            )}

                            {property.featured && (
                                <span className="property-hero-head__badge property-hero-head__badge--featured">
                                    Featured Property
                                </span>
                            )}

                            <span className="property-hero-head__badge property-hero-head__badge--type">
                                {propertyType}
                            </span>
                        </div>

                        {/* Property Title */}
                        <h1 className="property-hero-head__title">{title}</h1>

                        {/* Location & Project Sub-details */}
                        <div className="property-hero-head__meta">
                            <p className="property-hero-head__location">
                                <MapPin size={17} />
                                <span>{location || "Pune, Maharashtra"}</span>
                            </p>

                            {property.projectName &&
                                property.projectName !== title && (
                                    <span className="property-hero-head__project-name">
                                        • Project: {property.projectName}
                                    </span>
                                )}

                            {property.developer && (
                                <span className="property-hero-head__developer">
                                    • Developer: {property.developer}
                                </span>
                            )}
                        </div>

                        {/* Quick Feature Highlights */}
                        <div className="property-hero-head__highlights">
                            {configuration && (
                                <div className="property-hero-head__pill">
                                    <BedDouble size={16} />
                                    <span>{configuration}</span>
                                </div>
                            )}

                            {area && area !== "On request" && (
                                <div className="property-hero-head__pill">
                                    <Ruler size={16} />
                                    <span>{area}</span>
                                </div>
                            )}

                            {property.possession && (
                                <div className="property-hero-head__pill">
                                    <CalendarDays size={16} />
                                    <span>{property.possession}</span>
                                </div>
                            )}

                            <div className="property-hero-head__pill">
                                <Building2 size={16} />
                                <span>{propertyType}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Price & Quick Action Card */}
                    <div className="property-hero-head__action-card">
                        <div className="property-hero-head__price-wrap">
                            <span className="property-hero-head__price-label">
                                Indicative Price
                            </span>
                            <div className="property-hero-head__price-value">
                                {price}
                            </div>
                            {property.pricePerSqFt && (
                                <span className="property-hero-head__price-rate">
                                    ₹{property.pricePerSqFt}/sq.ft.
                                </span>
                            )}
                        </div>

                        <div className="property-hero-head__cta-buttons">
                            <a
                                href="#property-enquiry"
                                onClick={handleScrollToEnquiry}
                                className="property-hero-head__btn property-hero-head__btn--primary"
                            >
                                <ArrowDown size={16} />
                                <span>Enquire Now</span>
                            </a>

                            <div className="property-hero-head__contact-row">
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="property-hero-head__btn property-hero-head__btn--whatsapp"
                                    aria-label="WhatsApp Advisor"
                                >
                                    <MessageCircle size={16} />
                                    <span>WhatsApp</span>
                                </a>

                                <a
                                    href={`tel:${advisorPhone}`}
                                    className="property-hero-head__btn property-hero-head__btn--call"
                                    aria-label="Call Property Advisor"
                                >
                                    <Phone size={15} />
                                    <span>Call</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

