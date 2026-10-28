import type { Metadata } from "next";
import PlaceholderPage from "../../components/common/PlaceholderPage";

export const metadata: Metadata = {
    title: "Pune Property News | Infrastructure & Market Updates",
    description:
        "Stay updated on Pune infrastructure developments, Metro Line expansions, and local real estate policy updates.",
    alternates: {
        canonical: "/news",
    },
};

export default function NewsPage() {
    return (
        <PlaceholderPage
            title="Pune Property News"
            description="Stay updated on Pune infrastructure developments, Metro Line expansions, and local real estate policy updates."
        />
    );
}

