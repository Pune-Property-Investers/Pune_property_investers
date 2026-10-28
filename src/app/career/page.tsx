import type { Metadata } from "next";
import PlaceholderPage from "../../components/common/PlaceholderPage";

export const metadata: Metadata = {
    title: "Careers | Pune Property Investors",
    description:
        "Explore exciting career opportunities in real estate consulting, client relations, and digital property marketing at Pune Property Investor.",
    alternates: {
        canonical: "/career",
    },
};

export default function CareerPage() {
    return (
        <PlaceholderPage
            title="Join Our Team"
            description="Explore exciting career opportunities in real estate consulting, client relations, and digital property marketing at Pune Property Investor."
        />
    );
}

