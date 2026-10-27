import { useEffect, useState } from "react";
import {
    FaSearch,
    FaMapMarkerAlt,
    FaChevronDown,
    FaCheckCircle,
} from "react-icons/fa";

import "./HeroSection.css";

const heroImages = [
    {
        src: "https://scontent.fpnq12-1.fna.fbcdn.net/v/t39.30808-6/655871942_923153574026518_2640021096133598017_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x1024&ctp=s960x960&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=VBAW7QGvD7IQ7kNvwFUiM6x&_nc_oc=Adoc4tQYmh8FIiT6g0m2Go44DDRV6O51-9WrOIpnzC6WlTo0BIp10AmrVuPOs2wbmgc&_nc_zt=23&_nc_ht=scontent.fpnq12-1.fna&_nc_gid=ECR1J7r-5zKJ5Us4k2lNOA&_nc_ss=7b289&oh=00_AQMbnYNLcGYSZ0EezTAIzl6iMVNKJ9ZfE12JAU2d05gbIQ&oe=6AE376D9",
        alt: "Pune property promotional banner",
    },
    {
        src: "https://punepropertyinvestor.com/wp-content/uploads/2026/06/PPI-Group-Photo.jpg-scaled.jpeg",
        alt: "Pune Property Investor team",
    },
];

const locations = [
    "All Locations",
    "Dhanori",
    "Wagholi",
    "Charholi",
    "Kharadi",
    "Mundhwa",
    "NIBM",
    "Keshav Nagar",
    "Hadapsar",
    "Wakad",
    "Baner",
    "Hinjewadi",
    "Viman Nagar",
    "Koregaon Park",
    "Kothrud",
    "Pimple Saudagar",
    "Ravet",
    "Punawale",
    "Tathawade",
    "Undri",
    "Mohammed Wadi",
    "Balewadi",
];

const propertyTypes = [
    { label: "All Residential", value: "Residential" },
    { label: "Apartment / Flat", value: "Apartment" },
    { label: "Villa / Independent House", value: "Villa" },
    { label: "Plot / Land", value: "Plot" },
    { label: "Commercial", value: "Commercial" },
];

const bhkOptions = [
    { label: "Any BHK", value: "Any" },
    { label: "1 BHK", value: "1" },
    { label: "2 BHK", value: "2" },
    { label: "3 BHK", value: "3" },
    { label: "4 BHK", value: "4" },
    { label: "5+ BHK", value: "5+" },
];

const budgetOptions = [
    { label: "Any Budget", value: "Any Budget" },
    { label: "Under ₹30 Lakh", value: "Under 30 Lakhs" },
    { label: "₹30–50 Lakh", value: "30-50 Lakhs" },
    { label: "₹50–80 Lakh", value: "50-80 Lakhs" },
    { label: "₹80 Lakh–₹1.5 Cr", value: "80 Lakhs-1.5 Crore" },
    { label: "Above ₹1.5 Cr", value: "Above 1.5 Crore" },
];

function HeroSection() {
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState("projects");

    const [location, setLocation] = useState("All Locations");
    const [propertyType, setPropertyType] = useState("Residential");
    const [bhk, setBhk] = useState("Any");
    const [budget, setBudget] = useState("Any Budget");

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveImage((current) => (current + 1) % heroImages.length);
        }, 5000);

        return () => window.clearInterval(timer);
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();

        const params = new URLSearchParams({
            projectType: activeTab,
            location,
            type: propertyType,
            bhk,
            budget,
        });

        window.location.href = `/search?${params.toString()}`;
    };

    return (
        <section className="hero-section" id="buy">
            {/* Hero Banner */}
            <div className="hero-banner">
                {heroImages.map((image, index) => (
                    <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className={`hero-banner__image ${activeImage === index
                                ? "hero-banner__image--active"
                                : ""
                            }`}
                        aria-hidden={activeImage !== index}
                    />
                ))}

                <div className="hero-banner__overlay" />

                <div className="hero-banner__content">
                    <span className="hero-eyebrow">
                        YOUR PROPERTY JOURNEY STARTS HERE
                    </span>

                    <h1>
                        Find Your Perfect
                        <span> Property in Pune</span>
                    </h1>

                    <p>
                        Explore properties for sale, discover new residential
                        projects, and make informed real estate decisions with
                        Pune Property Investor.
                    </p>

                    <div className="hero-banner__highlights">
                        <span>
                            <FaCheckCircle />
                            Curated Properties
                        </span>

                        <span>
                            <FaCheckCircle />
                            Pune Locality Insights
                        </span>

                        <span>
                            <FaCheckCircle />
                            Expert Guidance
                        </span>
                    </div>
                </div>
            </div>

            {/* Property Search */}
            <div className="hero-search-wrap">
                <div className="property-search-box">
                    {/* Projects Tabs */}
                    <div
                        className="search-tabs"
                        role="tablist"
                        aria-label="Project category"
                    >
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeTab === "projects"}
                            className={`search-tab ${activeTab === "projects" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("projects")}
                        >
                            Projects
                        </button>

                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeTab === "new-launches"}
                            className={`search-tab ${activeTab === "new-launches" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("new-launches")}
                        >
                            New Launches
                        </button>
                    </div>

                    <form
                        className="property-search-form"
                        onSubmit={handleSearch}
                    >
                        {/* Location */}
                        <div className="search-field location-field">
                            <label htmlFor="property-location">
                                Location
                            </label>

                            <div className="field-control">
                                <FaMapMarkerAlt />

                                <select
                                    id="property-location"
                                    value={location}
                                    onChange={(event) =>
                                        setLocation(event.target.value)
                                    }
                                >
                                    {locations.map((item) => (
                                        <option key={item} value={item}>
                                            {item === "All Locations"
                                                ? item
                                                : `${item} Pune`}
                                        </option>
                                    ))}
                                </select>

                                <FaChevronDown className="field-chevron" />
                            </div>
                        </div>

                        {/* Property Type */}
                        <div className="search-field">
                            <label htmlFor="property-type">
                                Property Type
                            </label>

                            <div className="field-control select-control">
                                <select
                                    id="property-type"
                                    value={propertyType}
                                    onChange={(event) =>
                                        setPropertyType(event.target.value)
                                    }
                                >
                                    {propertyTypes.map((item) => (
                                        <option
                                            key={item.value}
                                            value={item.value}
                                        >
                                            {item.label}
                                        </option>
                                    ))}
                                </select>

                                <FaChevronDown className="field-chevron" />
                            </div>
                        </div>

                        {/* BHK */}
                        <div className="search-field">
                            <label htmlFor="property-bhk">BHK</label>

                            <div className="field-control select-control">
                                <select
                                    id="property-bhk"
                                    value={bhk}
                                    onChange={(event) =>
                                        setBhk(event.target.value)
                                    }
                                >
                                    {bhkOptions.map((item) => (
                                        <option
                                            key={item.value}
                                            value={item.value}
                                        >
                                            {item.label}
                                        </option>
                                    ))}
                                </select>

                                <FaChevronDown className="field-chevron" />
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="search-field">
                            <label htmlFor="property-budget">Budget</label>

                            <div className="field-control select-control">
                                <select
                                    id="property-budget"
                                    value={budget}
                                    onChange={(event) =>
                                        setBudget(event.target.value)
                                    }
                                >
                                    {budgetOptions.map((item) => (
                                        <option
                                            key={item.value}
                                            value={item.value}
                                        >
                                            {item.label}
                                        </option>
                                    ))}
                                </select>

                                <FaChevronDown className="field-chevron" />
                            </div>
                        </div>

                        {/* Search */}
                        <button
                            type="submit"
                            className="search-submit-button"
                        >
                            <FaSearch />
                            <span>Search</span>
                        </button>
                    </form>

                    {/* Popular Locations */}
                    <div className="search-footer">
                        <span>Popular searches:</span>

                        {["Wakad", "Baner", "Hinjewadi", "Kharadi"].map(
                            (locality) => (
                                <button
                                    type="button"
                                    key={locality}
                                    className={
                                        location === locality
                                            ? "popular-location-active"
                                            : ""
                                    }
                                    onClick={() => setLocation(locality)}
                                >
                                    {locality}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
