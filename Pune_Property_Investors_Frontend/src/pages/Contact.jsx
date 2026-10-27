import { useState } from "react";
import { MapPin, Phone, Mail, MessageSquare, Send, Clock, CheckCircle } from "lucide-react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        locality: "",
        propertyType: "Buy",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const whatsappNumber = "917398174444";
    const whatsappMessage = encodeURIComponent(
        `Hello Pune Property Investor, I am looking for property assistance in Pune.`
    );

    return (
        <div className="contact-page">
            <Header />

            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero__background" />
                <div className="contact-hero__content">
                    <span className="contact-hero__eyebrow">
                        <MessageSquare size={16} />
                        CONTACT US
                    </span>
                    <h1 className="contact-hero__title">
                        Get In Touch With Our Pune Property Experts
                    </h1>
                    <p className="contact-hero__subtitle">
                        Have questions about a property, locality, or investment opportunity in Pune? Our advisory team is here to assist you.
                    </p>
                </div>
            </section>

            {/* Contact Body */}
            <main className="contact-main container section">
                <div className="contact-grid">
                    {/* Left: Contact Info */}
                    <div className="contact-info-panel">
                        <h2>Talk to Our Property Specialists</h2>
                        <p className="contact-info-intro">
                            Reach out to schedule a site visit, get personalized property recommendations, or discuss your budget and requirements.
                        </p>

                        <div className="contact-methods">
                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <h4>Call Us Directly</h4>
                                    <p>Mon - Sun from 9am to 8pm</p>
                                    <a href="tel:+917398174444" className="contact-link">
                                        +91 73981 74444
                                    </a>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <MessageSquare size={22} />
                                </div>
                                <div>
                                    <h4>Chat on WhatsApp</h4>
                                    <p>Instant answers & project brochures</p>
                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="contact-link whatsapp-link"
                                    >
                                        Chat Now on WhatsApp
                                    </a>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>Send your queries anytime</p>
                                    <a href="mailto:info@punepropertyinvestor.com" className="contact-link">
                                        info@punepropertyinvestor.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <h4>Pune Office Address</h4>
                                    <p>
                                        3rd Floor (Suite 904), Gera Imperium Alpha, Grant Road, Vitthal Nagar, Kharadi, Pune, Maharashtra 411014, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Enquiry Form */}
                    <div className="contact-form-panel">
                        {submitted ? (
                            <div className="contact-success-state">
                                <CheckCircle size={48} className="success-icon" />
                                <h3>Thank You for Contacting Us!</h3>
                                <p>
                                    We have received your request. One of our property consultants will connect with you shortly.
                                </p>
                                <button
                                    type="button"
                                    className="contact-submit-btn"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h3>Send Us an Enquiry</h3>
                                <p className="form-sub">Fill out the form below and we'll be in touch within 24 hours.</p>

                                <div className="form-group">
                                    <label htmlFor="c-name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="c-name"
                                        name="name"
                                        required
                                        placeholder="e.g. Rahul Sharma"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="c-phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="c-phone"
                                            name="phone"
                                            required
                                            placeholder="+91 98765 43210"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="c-email">Email Address</label>
                                        <input
                                            type="email"
                                            id="c-email"
                                            name="email"
                                            placeholder="rahul@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="c-loc">Preferred Locality</label>
                                        <input
                                            type="text"
                                            id="c-loc"
                                            name="locality"
                                            placeholder="e.g. Kharadi, Baner, Wakad"
                                            value={formData.locality}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="c-type">Requirement</label>
                                        <select
                                            id="c-type"
                                            name="propertyType"
                                            value={formData.propertyType}
                                            onChange={handleChange}
                                        >
                                            <option value="Buy">Buy Residential Flat/Apartment</option>
                                            <option value="New Project">New Launch Project</option>
                                            <option value="Commercial">Commercial Office / Shop</option>
                                            <option value="Plot">Plot / Land</option>
                                            <option value="Investment">Investment Advisory</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="c-msg">Message / Requirements</label>
                                    <textarea
                                        id="c-msg"
                                        name="message"
                                        rows="4"
                                        placeholder="Describe your budget, preferred configuration, timeline..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button type="submit" className="contact-submit-btn">
                                    <Send size={18} />
                                    Submit Request
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Contact;
