import {
    CheckCircle2,
    CarFront,
    Dumbbell,
    Waves,
    ShieldCheck,
    Trees,
    Zap,
    Building2,
    Baby,
    Wifi,
} from "lucide-react";
import "./PropertyAmenities.css";

const amenityIcons = {
    parking: CarFront,
    gym: Dumbbell,
    swimming: Waves,
    pool: Waves,
    security: ShieldCheck,
    garden: Trees,
    power: Zap,
    lift: Building2,
    children: Baby,
    wifi: Wifi,
};

function getAmenityIcon(amenity) {
    const text = String(amenity).toLowerCase();
    const match = Object.keys(amenityIcons).find((key) => text.includes(key));
    return match ? amenityIcons[match] : CheckCircle2;
}

function PropertyAmenities({ amenities = [] }) {
    const items = Array.isArray(amenities) ? amenities.filter(Boolean) : [];

    return (
        <section className="property-amenities">
            <div className="property-amenities__heading">
                <span className="property-amenities__eyebrow">Property Features</span>
                <h2>Amenities & Facilities</h2>
                <p>Explore the facilities listed for this property.</p>
            </div>

            {items.length > 0 ? (
                <div className="property-amenities__grid">
                    {items.map((amenity, index) => {
                        const Icon = getAmenityIcon(amenity);

                        return (
                            <div
                                className="property-amenities__item"
                                key={`${amenity}-${index}`}
                            >
                <span className="property-amenities__icon">
                  <Icon size={20} />
                </span>
                                <span>{amenity}</span>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="property-amenities__empty">
                    Contact us to learn more about the available amenities.
                </p>
            )}
        </section>
    );
}

export default PropertyAmenities;