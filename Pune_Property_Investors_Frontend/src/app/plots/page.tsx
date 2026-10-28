import type { Metadata } from "next";
import PlaceholderPage from "../../components/common/PlaceholderPage";

export const metadata: Metadata = {
    title: "Plots & Land in Pune | NA Residential Plots & Gated Communities",
    description:
        "Explore clear-title residential plots, gated community layouts, and NA land opportunities in growing Pune corridors.",
    alternates: {
        canonical: "/plots",
    },
};

export default function PlotsPage() {
    return (
        <PlaceholderPage
            title="Plots & Land in Pune"
            description="Explore clear-title residential plots, gated community layouts, and NA land opportunities in growing Pune corridors."
        />
    );
}

