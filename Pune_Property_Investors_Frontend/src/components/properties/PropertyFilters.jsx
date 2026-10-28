import {
    SlidersHorizontal,
    RotateCcw,
    MapPin,
    BedDouble,
    IndianRupee,
    Building2,
    ArrowDownUp,
} from "lucide-react";

import "./PropertyFilters.css";

const locations = [
    "Kharadi",
    "Baner",
    "Wakad",
    "Hinjewadi",
    "Wagholi",
];

const bhkOptions = [
    { label: "Any BHK", value: "all" },
    { label: "1 BHK", value: "1" },
    { label: "2 BHK", value: "2" },
    { label: "3 BHK", value: "3" },
    { label: "4+ BHK", value: "4+" },
];

const propertyTypes = [
    { label: "All Types", value: "all" },
    { label: "Apartment", value: "Apartment" },
    { label: "Plot / Land", value: "Plot" },
];

function PropertyFilters({
                             filters,
                             onFilterChange,
                             onReset,
                             resultCount,
                         }) {
    const handleChange = (key, value) => {
        onFilterChange(key, value);
    };

    return (
        <aside className="property-filters">
            {/* Filter heading */}
            <div className="property-filters__header">
                <div className="property-filters__heading">
                    <SlidersHorizontal size={20} />

                    <div>
                        <h2>Filters</h2>
                        <p>Find your perfect property</p>
                    </div>
                </div>

                <button
                    type="button"
                    className="property-filters__reset"
                    onClick={onReset}
                    aria-label="Reset all filters"
                >
                    <RotateCcw size={15} />
                    Reset
                </button>
            </div>

            {/* Results count */}
            {typeof resultCount === "number" && (
                <div className="property-filters__results">
                    <span className="property-filters__results-dot" />
                    <span>
                        {resultCount} {resultCount === 1 ? "property" : "properties"} found
                    </span>
                </div>
            )}

            {/* Location */}
            <div className="property-filters__group">
                <label
                    htmlFor="filter-location"
                    className="property-filters__label"
                >
                    <MapPin size={17} />
                    Location
                </label>

                <select
                    id="filter-location"
                    className="property-filters__select"
                    value={filters.location}
                    onChange={(event) =>
                        handleChange("location", event.target.value)
                    }
                >
                    <option value="all">All Locations</option>

                    {locations.map((location) => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>

            {/* BHK */}
            <div className="property-filters__group">
                <label
                    htmlFor="filter-bhk"
                    className="property-filters__label"
                >
                    <BedDouble size={17} />
                    Bedrooms
                </label>

                <select
                    id="filter-bhk"
                    className="property-filters__select"
                    value={filters.bhk}
                    onChange={(event) =>
                        handleChange("bhk", event.target.value)
                    }
                >
                    {bhkOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Budget */}
            <div className="property-filters__group">
                <label className="property-filters__label">
                    <IndianRupee size={17} />
                    Budget
                </label>

                <div className="property-filters__budget">
                    <div className="property-filters__budget-field">
                        <label htmlFor="filter-min-price">Minimum</label>

                        <input
                            id="filter-min-price"
                            type="number"
                            min="0"
                            placeholder="₹ Min"
                            value={filters.minPrice}
                            onChange={(event) =>
                                handleChange("minPrice", event.target.value)
                            }
                        />
                    </div>

                    <span className="property-filters__budget-separator">
                        —
                    </span>

                    <div className="property-filters__budget-field">
                        <label htmlFor="filter-max-price">Maximum</label>

                        <input
                            id="filter-max-price"
                            type="number"
                            min="0"
                            placeholder="₹ Max"
                            value={filters.maxPrice}
                            onChange={(event) =>
                                handleChange("maxPrice", event.target.value)
                            }
                        />
                    </div>
                </div>

                <p className="property-filters__hint">
                    Enter your budget in rupees.
                </p>
            </div>

            {/* Property type */}
            <div className="property-filters__group">
                <label
                    htmlFor="filter-property-type"
                    className="property-filters__label"
                >
                    <Building2 size={17} />
                    Property Type
                </label>

                <select
                    id="filter-property-type"
                    className="property-filters__select"
                    value={filters.propertyType}
                    onChange={(event) =>
                        handleChange("propertyType", event.target.value)
                    }
                >
                    {propertyTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                            {type.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Sorting */}
            <div className="property-filters__group">
                <label
                    htmlFor="filter-sort"
                    className="property-filters__label"
                >
                    <ArrowDownUp size={17} />
                    Sort Properties
                </label>

                <select
                    id="filter-sort"
                    className="property-filters__select"
                    value={filters.sortBy}
                    onChange={(event) =>
                        handleChange("sortBy", event.target.value)
                    }
                >
                    <option value="recommended">Recommended</option>
                    <option value="price-low-high">
                        Price: Low to High
                    </option>
                    <option value="price-high-low">
                        Price: High to Low
                    </option>
                </select>
            </div>

            {/* Bottom note */}
            <div className="property-filters__note">
                <div className="property-filters__note-icon">
                    <Building2 size={19} />
                </div>

                <div>
                    <h3>Find the right property</h3>
                    <p>
                        Adjust your filters to discover properties that match
                        your needs and budget.
                    </p>
                </div>
            </div>
        </aside>
    );
}

export default PropertyFilters;