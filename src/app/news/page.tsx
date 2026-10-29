import type { Metadata } from "next";
import News from "../../components/pages/News";

export const metadata: Metadata = {
    title: "Pune Property News | Infrastructure & Market Updates",
    description:
        "Stay updated on Pune infrastructure developments, Metro Line expansions, and local real estate policy updates.",
    alternates: {
        canonical: "/news",
    },
};

export default function NewsPage() {
    return <News />;
}
