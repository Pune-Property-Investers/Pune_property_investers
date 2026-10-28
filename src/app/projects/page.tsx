import type { Metadata } from "next";
import PlaceholderPage from "../../components/common/PlaceholderPage";

export const metadata: Metadata = {
    title: "New Projects in Pune | Residential Townships & Towers",
    description:
        "Discover newly launched residential projects, luxury towers, and township developments across prime Pune localities.",
    alternates: {
        canonical: "/projects",
    },
};

export default function ProjectsPage() {
    return (
        <PlaceholderPage
            title="New Projects in Pune"
            description="Discover newly launched residential projects, luxury towers, and township developments across prime Pune localities."
        />
    );
}

