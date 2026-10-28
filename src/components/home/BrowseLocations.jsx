import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import locationsData from "../../data/locationsData";

function BrowseLocations() {
    return (
        <section className="browse-locations">
            <div className="browse-locations__container">
                {/* Section Heading */}
                <div className="browse-locations__heading">
                    <div>
                        <span className="browse-locations__eyebrow">
                            FIND YOUR NEIGHBOURHOOD
                        </span>

                        <h2>Explore Properties by Location</h2>

                        <p>
                            Discover homes and investment opportunities
                            across Pune's popular neighbourhoods.
                        </p>
                    </div>

                    <Link
                        href="/buy"
                        className="browse-locations__view-all"
                    >
                        View All Locations
                        <ArrowRight size={17} />
                    </Link>
                </div>

                {/* Location Cards */}
                <div className="browse-locations__grid">
                    {locationsData.map((location) => (
                        <Link
                            href={`/buy?location=${encodeURIComponent(
                                location.searchLocation
                            )}`}
                            className="location-card"
                            key={location.id}
                        >
                            <img
                                className="location-card__image"
                                src={location.image}
                                alt={`Properties in ${location.name}, Pune`}
                                loading="lazy"
                            />

                            <div className="location-card__overlay" />

                            <div className="location-card__content">
                                <span className="location-card__label">
                                    <MapPin size={14} />
                                    Pune, Maharashtra
                                </span>

                                <h3>{location.name}</h3>

                                <p>{location.description}</p>

                                <span className="location-card__link">
                                    Explore Properties
                                    <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BrowseLocations;
