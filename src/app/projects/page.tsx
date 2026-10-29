import type { Metadata } from "next";
import { Suspense } from "react";
import BuyProperties from "../../components/pages/BuyProperties";

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
        <Suspense
            fallback={
                <div
                    style={{
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    Loading projects...
                </div>
            }
        >
            <BuyProperties pageTitle="New Projects in Pune" />
        </Suspense>
    );
}
