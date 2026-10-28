"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Search, Building2 } from "lucide-react";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

import PropertyFilters from "../properties/PropertyFilters";
import PropertyListingCard from "../properties/PropertyListingCard";
import AdvertisementSidebar from "../common/AdvertisementSidebar";

import propertyListingsData from "../../data/propertyListingsData.js";

const DEFAULT_FILTERS = {
    location: "all",
    bhk: "all",
    minPrice: "",
    maxPrice: "",
    propertyType: "all",
    sortBy: "recommended",
};

function BuyPropertiesContent() {
    const searchParams = useSearchParams();
    const initialLocation = searchParams?.get("location") || "all";
    const initialBhk = searchParams?.get("bhk") || "all";
    const initialType = searchParams?.get("type") || "all";
    const initialProject = searchParams?.get("project") || "";

    const [filters, setFilters] = useState({
        ...DEFAULT_FILTERS,
        location: initialLocation,
        bhk: initialBhk,
        propertyType: initialType,
    });
    const [searchQuery, setSearchQuery] = useState(initialProject);

    // Sync if URL search params change
    useEffect(() => {
        const loc = searchParams?.get("location");
        const proj = searchParams?.get("project");
        const bhkParam = searchParams?.get("bhk");
        const typeParam = searchParams?.get("type");

        if (loc) {
            setFilters((prev) => ({ ...prev, location: loc }));
        }
        if (proj) {
            setSearchQuery(proj);
        }
        if (bhkParam) {
            setFilters((prev) => ({ ...prev, bhk: bhkParam }));
        }
        if (typeParam) {
            setFilters((prev) => ({ ...prev, propertyType: typeParam }));
        }
    }, [searchParams]);

    // Update an individual filter.
    const handleFilterChange = (key, value) => {
        setFilters((previousFilters) => ({
            ...previousFilters,
            [key]: value,
        }));
    };

    // Reset every filter and the search field.
    const handleResetFilters = () => {
        setFilters({ ...DEFAULT_FILTERS });
        setSearchQuery("");
    };

    // Filter and sort the property listings.
    const filteredProperties = useMemo(() => {
        let properties = [...propertyListingsData];

        // Location filter.
        if (filters.location && filters.location !== "all") {
            properties = properties.filter((property) => {
                const locality = String(
                    property.locality || property.location || ""
                ).toLowerCase();

                return locality.includes(filters.location.toLowerCase());
            });
        }

        // BHK filter.
        if (filters.bhk && filters.bhk !== "all") {
            properties = properties.filter((property) => {
                const bedrooms = Number(
                    property.bedrooms ?? property.bhk ?? 0
                );

                if (filters.bhk === "4+") {
                    return bedrooms >= 4;
                }

                return bedrooms === Number(filters.bhk);
            });
        }

        // Minimum budget. Budget inputs are in rupees.
        if (filters.minPrice !== "") {
            const minimumPrice = Number(filters.minPrice);

            properties = properties.filter(
                (property) => Number(property.price) >= minimumPrice
            );
        }

        // Maximum budget. Budget inputs are in rupees.
        if (filters.maxPrice !== "") {
            const maximumPrice = Number(filters.maxPrice);

            properties = properties.filter(
                (property) => Number(property.price) <= maximumPrice
            );
        }

        // Property type filter.
        if (filters.propertyType && filters.propertyType !== "all") {
            properties = properties.filter((property) => {
                const type = String(
                    property.propertyType || ""
                ).toLowerCase();

                if (filters.propertyType === "Plot") {
                    return (
                        type.includes("plot") ||
                        type.includes("land")
                    );
                }

                return (
                    type.includes("apartment") ||
                    type.includes("flat")
                );
            });
        }

        // Search by property, project, or locality.
        const query = searchQuery.trim().toLowerCase();

        if (query) {
            properties = properties.filter((property) => {
                const searchableText = [
                    property.title,
                    property.name,
                    property.projectName,
                    property.location,
                    property.locality,
                    property.city,
                    property.propertyType,
                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();

                return searchableText.includes(query);
            });
        }

        // Sorting.
        if (filters.sortBy === "price-low-high") {
            properties.sort(
                (a, b) => Number(a.price) - Number(b.price)
            );
        } else if (filters.sortBy === "price-high-low") {
            properties.sort(
                (a, b) => Number(b.price) - Number(a.price)
            );
        } else {
            properties.sort(
                (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
            );
        }

        return properties;
    }, [filters, searchQuery]);

    return (
        <div className="buy-properties-page">
            <Header />

            <main>
                {/* Page banner */}
                <section className="buy-properties-hero">
                    <div className="buy-properties-hero__background" />

                    <div className="buy-properties-hero__content">
                        <div className="buy-properties-hero__eyebrow">
                            <Building2 size={16} />
                            PUNE PROPERTY INVESTOR
                        </div>

                        <h1>
                            Find a Property
                            <span> That Feels Like Home.</span>
                        </h1>

                        <p>
                            Explore properties for sale across Pune and find
                            the right home or investment for your future.
                        </p>

                        <div className="buy-properties-hero__breadcrumb">
                            <Link href="/">Home</Link>
                            <span>/</span>
                            <span>Buy Properties</span>
                        </div>
                    </div>
                </section>

                {/* Main listings area */}
                <section className="buy-properties-content">
                    <div className="buy-properties-container">
                        {/* Intro and search */}
                        <div className="buy-properties-intro">
                            <div className="buy-properties-intro__text">
                                <span className="buy-properties-section-label">
                                    EXPLORE PROPERTIES
                                </span>

                                <h2>
                                    Properties for Sale in Pune
                                </h2>

                                <p>
                                    Discover homes, apartments, and plots
                                    across Pune's popular neighbourhoods.
                                </p>
                            </div>

                            <form
                                className="buy-properties-search"
                                onSubmit={(event) => event.preventDefault()}
                                role="search"
                            >
                                <Search size={19} />

                                <input
                                    type="search"
                                    placeholder="Search location or project..."
                                    value={searchQuery}
                                    onChange={(event) =>
                                        setSearchQuery(event.target.value)
                                    }
                                    aria-label="Search properties by location or project"
                                />

                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery("")}
                                        aria-label="Clear search"
                                    >
                                        ×
                                    </button>
                                )}
                            </form>
                        </div>

                        {/* Three-column layout */}
                        <div className="buy-properties-layout">
                            {/* Left: filters */}
                            <div className="buy-properties-filter-column">
                                <PropertyFilters
                                    filters={filters}
                                    onFilterChange={handleFilterChange}
                                    onReset={handleResetFilters}
                                    resultCount={filteredProperties.length}
                                />
                            </div>

                            {/* Centre: listings */}
                            <div className="buy-properties-results">
                                <div className="buy-properties-results__header">
                                    <div>
                                        <h2>Available Properties</h2>

                                        <p>
                                            Showing{" "}
                                            <strong>
                                                {filteredProperties.length}
                                            </strong>{" "}
                                            {filteredProperties.length === 1
                                                ? "property"
                                                : "properties"}
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="buy-properties-clear-button"
                                        onClick={handleResetFilters}
                                    >
                                        Clear filters
                                    </button>
                                </div>

                                {filteredProperties.length > 0 ? (
                                    <div className="buy-properties-grid">
                                        {filteredProperties.map((property) => (
                                            <PropertyListingCard
                                                key={property.id}
                                                property={property}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="buy-properties-empty">
                                        <div className="buy-properties-empty__icon">
                                            <Search size={30} />
                                        </div>

                                        <h3>No properties found</h3>

                                        <p>
                                            Try changing your location, budget,
                                            or other filters to discover more
                                            properties.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={handleResetFilters}
                                        >
                                            Reset All Filters
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                )}

                                {/* Enquiry call to action */}
                                <div className="buy-properties-enquiry">
                                    <div>
                                        <span>NEED HELP FINDING A HOME?</span>

                                        <h3>
                                            Let our property experts help you.
                                        </h3>

                                        <p>
                                            Tell us what you're looking for
                                            and we'll help you explore suitable
                                            options in Pune.
                                        </p>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="buy-properties-enquiry__button"
                                    >
                                        Talk to an Expert
                                        <ArrowRight size={17} />
                                    </Link>
                                </div>
                            </div>

                            {/* Right: advertisements */}
                            <aside className="buy-properties-ad-column">
                                <AdvertisementSidebar />
                            </aside>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default function BuyProperties() {
    return <BuyPropertiesContent />;
}
