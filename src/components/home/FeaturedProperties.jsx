import Link from "next/link";
import { ArrowRight } from "lucide-react";

import properties from "../../data/properties";
import PropertyCard from "../properties/PropertyCard";

function FeaturedProperties({ filters = null }) {
    const featuredProperties = properties
        .filter((property) => {
            if (!filters) return true;

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

            // Show only newly launched projects when requested.
            if (
                filters.projectType === "new-launches" &&
                property.isNewLaunch !== true
            ) {
                return false;
            }

            return true;
        })
        .slice(0, filters ? undefined : 4);

    return (
        <section
            className="featured-properties section"
            id="featured-properties"
        >
            <div className="container">
                <div className="featured-properties__heading">
                    <div className="section-heading">
                        <span className="featured-properties__eyebrow">
                            {filters?.projectType === "new-launches"
                                ? "LATEST PROPERTY LAUNCHES"
                                : filters
                                  ? "PROJECTS MATCHING YOUR SEARCH"
                                  : "HANDPICKED FOR YOU"}
                        </span>

                        <h2>
                            {filters?.projectType === "new-launches"
                                ? "New Launches in Pune"
                                : filters
                                  ? "Projects in Pune"
                                  : "Featured Properties in Pune"}
                        </h2>

                        <p>
                            {filters
                                ? "Explore projects based on your selected location, property type, BHK, and budget."
                                : "Explore selected homes across some of Pune's popular residential localities."}
                        </p>
                    </div>

                    <Link
                        href="/buy"
                        className="featured-properties__view-all"
                    >
                        View All Properties
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

                        <Link href="/buy" className="primary-button">
                            Explore All Properties
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                )}

                <div className="featured-properties__mobile-action">
                    <Link href="/buy" className="primary-button">
                        Explore All Properties
                        <ArrowRight size={17} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProperties;
