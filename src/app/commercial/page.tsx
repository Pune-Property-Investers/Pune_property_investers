import type { Metadata } from "next";
import PlaceholderPage from "../../components/common/PlaceholderPage";

export const metadata: Metadata = {
    title: "Commercial Properties in Pune | Office Spaces & Showrooms",
    description:
        "Explore Grade-A commercial office spaces, retail showrooms, and IT park developments in Kharadi, Hinjewadi, and Baner.",
    alternates: {
        canonical: "/commercial",
    },
};

export default function CommercialPage() {
    return (
        <PlaceholderPage
            title="Commercial Properties in Pune"
            description="Explore Grade-A commercial office spaces, retail showrooms, and IT park developments in Kharadi, Hinjewadi, and Baner."
        />
    );
}

