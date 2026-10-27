import { useState } from "react";
import {
    Heart,
    MapPin,
    BedDouble,
    Bath,
    Ruler,
    ArrowUpRight,
} from "lucide-react";

import "./PropertyCard.css";

function PropertyCard({ property }) {
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        setIsSaved((previous) => !previous);
    };

    return (
        <article className="property-card">
            {/* Property Image */}
            <div className="property-card__image">
                <img
                    src={property.image}
                    alt={property.name}
                    loading="lazy"
                />

                {property.badge && (
                    <span className="property-card__badge">
                        {property.badge}
                    </span>
                )}

                <button
                    type="button"
                    className={`property-card__save ${isSaved ? "property-card__save--active" : ""
                        }`}
                    onClick={handleSave}
                    aria-label={
                        isSaved ? "Remove from saved properties" : "Save property"
                    }
                    aria-pressed={isSaved}
                >
                    <Heart
                        size={19}
                        fill={isSaved ? "currentColor" : "none"}
                    />
                </button>
            </div>

            {/* Property Information */}
            <div className="property-card__content">
                <div className="property-card__price-row">
                    <h3 className="property-card__price">
                        {property.price}
                    </h3>

                    <span className="property-card__type">
                        {property.propertyType}
                    </span>
                </div>

                <h4 className="property-card__name">
                    {property.name}
                </h4>

                <p className="property-card__location">
                    <MapPin size={15} />
                    <span>{property.location}</span>
                </p>

                {/* Property Specifications */}
                <div className="property-card__specifications">
                    <div className="property-card__spec">
                        <BedDouble size={17} />
                        <span>{property.bedrooms} BHK</span>
                    </div>

                    <div className="property-card__spec">
                        <Bath size={16} />
                        <span>{property.bathrooms} Bath</span>
                    </div>

                    <div className="property-card__spec">
                        <Ruler size={16} />
                        <span>{property.area}</span>
                    </div>
                </div>

                {/* Card Footer */}
                <div className="property-card__footer">
                    <span className="property-card__availability">
                        For Sale
                    </span>

                    <a
                        href={`/property/${property.id}`}
                        className="property-card__details"
                    >
                        View Details
                        <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </article>
    );
}

export default PropertyCard;