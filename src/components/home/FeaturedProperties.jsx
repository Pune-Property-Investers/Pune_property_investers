import Link from "next/link";
import { ArrowRight } from "lucide-react";

import properties from "../../data/properties";
import PropertyCard from "../properties/PropertyCard";

const TAB_META = {
    "projects": {
        eyebrow: "POPULAR PROJECTS",
        heading: "Projects in Pune",
        description: "Explore trending and popular residential projects across Pune.",
        viewAllText: "View All Projects",
        viewAllHref: "/projects",
    },
    "new-launches": {
        eyebrow: "LATEST PROPERTY LAUNCHES",
        heading: "New Launches in Pune",
        description: "Discover the latest newly launched residential projects across Pune.",
        viewAllText: "View All New Launches",
        viewAllHref: "/buy?projectType=new-launches",
    },
    "residential": {
        eyebrow: "FIND YOUR HOME",
        heading: "Residential Properties in Pune",
        description: "Browse apartments, flats, and homes in Pune's top localities.",
        viewAllText: "View All Residential",
        viewAllHref: "/buy?type=Residential",
    },
    "commercial": {
        eyebrow: "BUSINESS SPACES",
        heading: "Commercial Properties in Pune",
        description: "Explore office spaces, retail showrooms, and IT park developments.",
        viewAllText: "View All Commercial",
        viewAllHref: "/commercial",
    },
    "plot-land": {
        eyebrow: "BUILD YOUR DREAM",
        heading: "Plots & Land in Pune",
        description: "Find clear-title NA residential plots and gated community layouts.",
        viewAllText: "View All Plots & Land",
        viewAllHref: "/plots",
    },
    "upcoming": {
        eyebrow: "COMING SOON",
        heading: "Upcoming Projects in Pune",
        description: "Pre-launch and pre-booking opportunities in exciting upcoming developments.",
        viewAllText: "View All Upcoming",
        viewAllHref: "/buy?projectType=upcoming",
    },
};

function FeaturedProperties({ filters = null }) {
    const featuredProperties = properties
        .filter((property) => {
            if (!filters) return true;

            // Filter by active tab category
            if (filters.projectType) {
                const tab = filters.projectType;

                if (tab === "projects" && property.category !== "projects") {
                    return false;
                }
                if (tab === "new-launches" && property.category !== "new-launches") {
                    return false;
                }
                if (tab === "residential" && property.category !== "residential") {
                    return false;
                }
                if (tab === "commercial" && property.category !== "commercial") {
                    return false;
                }
                if (tab === "plot-land" && property.category !== "plot-land") {
                    return false;
                }
                if (tab === "upcoming" && property.category !== "upcoming") {
                    return false;
                }
            }

            // Filter by location
            if (
                filters.location &&
                filters.location !== "All Locations" &&
                !property.location
                    ?.toLowerCase()
                    .includes(filters.location.toLowerCase())
            ) {
                return false;
            }

            // Filter by property type
            if (
                filters.type &&
                filters.type !== "Residential" &&
                property.propertyType?.toLowerCase() !==
                    filters.type.toLowerCase()
            ) {
                return false;
            }

            // Filter by BHK
            if (filters.bhk && filters.bhk !== "Any") {
                const bedrooms = Number(property.bedrooms);

                if (filters.bhk === "5+") {
                    if (bedrooms < 5) return false;
                } else if (bedrooms !== Number(filters.bhk)) {
                    return false;
                }
            }

            // Filter by budget
            if (
                filters.budget &&
                filters.budget !== "Any Budget" &&
                Number.isFinite(Number(property.priceValue))
            ) {
                const price = Number(property.priceValue);

                if (filters.budget === "Under 30 Lakhs" && price >= 3000000) {
                    return false;
                }

                if (
                    filters.budget === "30-50 Lakhs" &&
                    (price < 3000000 || price > 5000000)
                ) {
                    return false;
                }

                if (
                    filters.budget === "50-80 Lakhs" &&
                    (price < 5000000 || price > 8000000)
                ) {
                    return false;
                }

                if (
                    filters.budget === "80 Lakhs-1.5 Crore" &&
                    (price < 8000000 || price > 15000000)
                ) {
                    return false;
                }

                if (
                    filters.budget === "Above 1.5 Crore" &&
                    price <= 15000000
                ) {
                    return false;
                }
            }

            return true;
        })
        .slice(0, filters ? undefined : 4);

    const tabKey = filters?.projectType || null;
    const meta = tabKey && TAB_META[tabKey] ? TAB_META[tabKey] : null;

    return (
        <section
            className="featured-properties section"
            id="featured-properties"
        >
            <div className="container">
                <div className="featured-properties__heading">
                    <div className="section-heading">
                        <span className="featured-properties__eyebrow">
                            {meta
                                ? meta.eyebrow
                                : filters
                                  ? "PROJECTS MATCHING YOUR SEARCH"
                                  : "HANDPICKED FOR YOU"}
                        </span>

                        <h2>
                            {meta
                                ? meta.heading
                                : filters
                                  ? "Projects in Pune"
                                  : "Featured Properties in Pune"}
                        </h2>

                        <p>
                            {meta
                                ? meta.description
                                : filters
                                  ? "Explore projects based on your selected location, property type, BHK, and budget."
                                  : "Explore selected homes across some of Pune's popular residential localities."}
                        </p>
                    </div>

                    <Link
                        href={meta?.viewAllHref || "/buy"}
                        className="featured-properties__view-all"
                    >
                        {meta?.viewAllText || "View All Properties"}
                        <ArrowRight size={17} />
                    </Link>
                </div>

                {featuredProperties.length > 0 ? (
                    <div className="featured-properties__grid">
                        {featuredProperties.map((property) => (
                            <PropertyCard
                                key={property.id}
                                property={property}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="featured-properties__empty">
                        <h3>No matching properties found</h3>
                        <p>
                            Try changing your location, BHK, property type, or
                            budget to see more projects.
                        </p>

                        <Link
                            href={meta?.viewAllHref || "/buy"}
                            className="primary-button"
                        >
                            {meta?.viewAllText || "Explore All Properties"}
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                )}

                <div className="featured-properties__mobile-action">
                    <Link
                        href={meta?.viewAllHref || "/buy"}
                        className="primary-button"
                    >
                        {meta?.viewAllText || "Explore All Properties"}
                        <ArrowRight size={17} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProperties;
