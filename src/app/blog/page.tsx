import type { Metadata } from "next";
import PlaceholderPage from "../../components/common/PlaceholderPage";

export const metadata: Metadata = {
    title: "Pune Real Estate Blog | Insights, Guides & Trends",
    description:
        "Market insights, neighborhood guides, and home buying tips from Pune real estate experts.",
    alternates: {
        canonical: "/blog",
    },
};

export default function BlogPage() {
    return (
        <PlaceholderPage
            title="Pune Real Estate Blog"
            description="Market insights, neighborhood guides, and home buying tips from Pune real estate experts."
        />
    );
}

