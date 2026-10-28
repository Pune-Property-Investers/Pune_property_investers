const propertyListingsData = [
    {
        id: 1,
        title: "Premium 2 BHK Apartment in Kharadi",
        projectName: "Sample Residential Project",
        location: "Kharadi, Pune",
        locality: "Kharadi",
        city: "Pune",
        propertyType: "Apartment",
        purpose: "Buy",
        bhk: 2,
        bedrooms: 2,
        bathrooms: 2,
        area: 850,
        areaUnit: "sq.ft.",
        price: 8000000,
        priceLabel: "₹80 Lakh",
        pricePerSqFt: 9412,
        possession: "Ready to Move",
        furnishing: "Unfurnished",
        featured: true,
        verified: true,

        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
        ],
        imageAlt: "Modern apartment living room with large windows",

        amenities: [
            "Parking",
            "Lift",
            "Security",
            "Gym",
        ],

        description:
            "A sample 2 BHK listing in Kharadi for demonstrating property search and filtering.",
    },

    {
        id: 2,
        title: "Spacious 3 BHK Home near EON IT Park",
        projectName: "Sample Urban Homes",
        location: "Kharadi, Pune",
        locality: "Kharadi",
        city: "Pune",
        propertyType: "Apartment",
        purpose: "Buy",
        bhk: 3,
        bedrooms: 3,
        bathrooms: 3,
        area: 1250,
        areaUnit: "sq.ft.",
        price: 12000000,
        priceLabel: "₹1.2 Crore",
        pricePerSqFt: 9600,
        possession: "Under Construction",
        furnishing: "Unfurnished",
        featured: true,
        verified: false,

        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
        images: [
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
        ],
        imageAlt: "Contemporary apartment interior",

        amenities: [
            "Clubhouse",
            "Parking",
            "Security",
            "Children's Play Area",
        ],

        description:
            "A sample 3 BHK listing for users looking for a home around Kharadi and EON IT Park.",
    },

    {
        id: 3,
        title: "Modern 2 BHK Apartment in Baner",
        projectName: "Sample Green Residency",
        location: "Baner, Pune",
        locality: "Baner",
        city: "Pune",
        propertyType: "Apartment",
        purpose: "Buy",
        bhk: 2,
        bedrooms: 2,
        bathrooms: 2,
        area: 920,
        areaUnit: "sq.ft.",
        price: 9500000,
        priceLabel: "₹95 Lakh",
        pricePerSqFt: 10326,
        possession: "Ready to Move",
        furnishing: "Semi-Furnished",
        featured: false,
        verified: true,

        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        images: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
        ],
        imageAlt: "Bright modern apartment with neutral finishes",

        amenities: [
            "Gym",
            "Lift",
            "Power Backup",
            "Parking",
        ],

        description:
            "A sample Baner apartment listing for testing locality and budget filters.",
    },

    {
        id: 4,
        title: "Family 3 BHK Apartment in Wakad",
        projectName: "Sample Parkside Homes",
        location: "Wakad, Pune",
        locality: "Wakad",
        city: "Pune",
        propertyType: "Apartment",
        purpose: "Buy",
        bhk: 3,
        bedrooms: 3,
        bathrooms: 3,
        area: 1180,
        areaUnit: "sq.ft.",
        price: 10500000,
        priceLabel: "₹1.05 Crore",
        pricePerSqFt: 8898,
        possession: "Ready to Move",
        furnishing: "Unfurnished",
        featured: false,
        verified: true,

        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
        ],
        imageAlt: "Comfortable modern residential interior",

        amenities: [
            "Garden",
            "Parking",
            "Security",
            "Clubhouse",
        ],

        description:
            "A sample 3 BHK home in Wakad for testing property listing layouts.",
    },

    {
        id: 5,
        title: "Affordable 1 BHK Apartment in Hinjewadi",
        projectName: "Sample Tech Park Homes",
        location: "Hinjewadi, Pune",
        locality: "Hinjewadi",
        city: "Pune",
        propertyType: "Apartment",
        purpose: "Buy",
        bhk: 1,
        bedrooms: 1,
        bathrooms: 1,
        area: 620,
        areaUnit: "sq.ft.",
        price: 4800000,
        priceLabel: "₹48 Lakh",
        pricePerSqFt: 7742,
        possession: "Under Construction",
        furnishing: "Unfurnished",
        featured: false,
        verified: false,

        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
        images: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        ],
        imageAlt: "Compact modern apartment interior",

        amenities: [
            "Lift",
            "Security",
            "Parking",
        ],

        description:
            "A sample 1 BHK listing for buyers searching around Hinjewadi's employment hubs.",
    },

    {
        id: 6,
        title: "Residential Plot in Wagholi",
        projectName: "Sample Green Acres",
        location: "Wagholi, Pune",
        locality: "Wagholi",
        city: "Pune",
        propertyType: "Plot",
        purpose: "Buy",
        bhk: 0,
        bedrooms: 0,
        bathrooms: 0,
        area: 1500,
        areaUnit: "sq.ft.",
        price: 5500000,
        priceLabel: "₹55 Lakh",
        pricePerSqFt: 3667,
        possession: "Ready to Register",
        furnishing: "Not Applicable",
        featured: false,
        verified: false,

        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
        images: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
        ],
        imageAlt: "Open green land under a clear sky",

        amenities: [
            "Road Access",
            "Residential Zone",
        ],

        description:
            "A sample residential plot listing for testing non-apartment property types.",
    },
];

export default propertyListingsData;