import propertyListingsData from "../data/propertyListingsData.js";
import trendingProjects from "../data/trendingProjectsData.js";

export interface PropertyItem {
    id: string | number;
    title?: string;
    name?: string;
    projectName?: string;
    developer?: string;
    location?: string;
    locality?: string;
    city?: string;
    propertyType?: string;
    purpose?: string;
    bhk?: number | string;
    bedrooms?: number;
    bathrooms?: number;
    area?: number | string;
    areaUnit?: string;
    price?: number | string;
    priceLabel?: string;
    pricePerSqFt?: number | string;
    possession?: string;
    furnishing?: string;
    featured?: boolean;
    verified?: boolean;
    image?: string;
    images?: string[];
    imageAlt?: string;
    amenities?: string[];
    description?: string;
    badge?: string;
    slug?: string;
    [key: string]: any;
}

export function normalizeTrendingProject(item: any): PropertyItem {
    return {
        id: item.id,
        title: item.name,
        name: item.name,
        projectName: item.name,
        developer: item.developer,
        location: item.location,
        locality: item.location ? item.location.split(",")[0].trim() : "Pune",
        city: "Pune",
        propertyType: "Residential",
        configuration: item.configuration,
        price: item.price,
        priceLabel: item.price,
        image: item.image,
        images: [item.image],
        badge: item.status,
        featured: true,
        verified: true,
        possession: "Under Construction",
        amenities: [
            "Clubhouse",
            "Gymnasium",
            "Swimming Pool",
            "Landscaped Gardens",
            "Children Play Area",
            "24/7 Security",
            "Power Backup",
            "Car Parking",
        ],
        description: `${item.name} is a premier residential development by ${item.developer} in ${item.location}. Offering luxurious ${item.configuration} with state-of-the-art amenities and prime connectivity across Pune.`,
    };
}

export function findProperty(identifier: string | number | undefined | null): PropertyItem | null {
    if (!identifier) return null;
    const cleanId = String(identifier).trim().toLowerCase();

    // 1. Direct match on propertyListingsData id or title slug
    const fromListings = (propertyListingsData as any[]).find(
        (item: any) =>
            String(item.id) === cleanId ||
            (item.slug && item.slug.toLowerCase() === cleanId) ||
            item.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") === cleanId
    );
    if (fromListings) return fromListings as PropertyItem;

    // 2. Direct match on trendingProjects id or slug
    const fromTrending = (trendingProjects as any[]).find(
        (item: any) =>
            String(item.id) === cleanId ||
            (item.slug && item.slug.toLowerCase() === cleanId)
    );
    if (fromTrending) return normalizeTrendingProject(fromTrending);

    return null;
}
