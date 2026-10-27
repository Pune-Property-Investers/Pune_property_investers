import {
    ShieldCheck,
    MapPin,
    Handshake,
    TrendingUp,
    ArrowUpRight,
} from "lucide-react";

import "./WhyChooseUs.css";

const benefits = [
    {
        id: 1,
        number: "01",
        icon: MapPin,
        title: "Deep Local Expertise",
        description:
            "Explore Pune's property market with guidance from a team that understands localities, connectivity, infrastructure, and emerging investment destinations.",
    },
    {
        id: 2,
        number: "02",
        icon: ShieldCheck,
        title: "Transparent Guidance",
        description:
            "Make informed property decisions with clear communication, practical insights, and guidance throughout your property search.",
    },
    {
        id: 3,
        number: "03",
        icon: TrendingUp,
        title: "Investment-Focused Approach",
        description:
            "Compare locations, property options, and potential long-term value to find opportunities aligned with your investment goals.",
    },
    {
        id: 4,
        number: "04",
        icon: Handshake,
        title: "Support at Every Step",
        description:
            "From shortlisting properties to arranging site visits, our team helps make your property journey simpler and more organised.",
    },
];

function WhyChooseUs() {
    return (
        <section
            className="why-choose-us"
            aria-labelledby="why-choose-us-title"
        >
            <div className="why-choose-us__container">
                {/* Left Content */}
                <div className="why-choose-us__intro">
                    <p className="why-choose-us__eyebrow">
                        <span aria-hidden="true"></span>
                        The PPI Difference
                    </p>

                    <h2
                        className="why-choose-us__title"
                        id="why-choose-us-title"
                    >
                        Your property goals.
                        <span>Our priority.</span>
                    </h2>

                    <p className="why-choose-us__description">
                        Finding the right property takes more than browsing
                        listings. It takes local knowledge, thoughtful
                        guidance, and a team that understands what matters
                        to you.
                    </p>

                    <p className="why-choose-us__description">
                        At Pune Property Investor, we help homebuyers and
                        investors explore opportunities across Pune with
                        greater clarity and confidence.
                    </p>

                    <a
                        href="/contact"
                        className="why-choose-us__cta"
                    >
                        Talk to Our Team
                        <ArrowUpRight size={19} aria-hidden="true" />
                    </a>

                    <div className="why-choose-us__note">
                        <span className="why-choose-us__note-line"></span>
                        <p>
                            Better guidance. More informed decisions.
                        </p>
                    </div>
                </div>

                {/* Right Benefits */}
                <div className="why-choose-us__benefits">
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;

                        return (
                            <article
                                className="why-benefit"
                                key={benefit.id}
                            >
                                <div className="why-benefit__top">
                                    <span className="why-benefit__number">
                                        {benefit.number}
                                    </span>

                                    <div className="why-benefit__icon">
                                        <Icon
                                            size={25}
                                            strokeWidth={1.6}
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>

                                <h3 className="why-benefit__title">
                                    {benefit.title}
                                </h3>

                                <p className="why-benefit__description">
                                    {benefit.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
