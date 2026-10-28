import type { Metadata } from "next";
import ContactPage from "../../components/pages/Contact";

export const metadata: Metadata = {
    title: "Contact Us | Pune Property Investors",
    description:
        "Get in touch with our expert Pune real estate consultants for site visits, project brochures, pricing, and personalized property recommendations.",
    alternates: {
        canonical: "/contact",
    },
};

export default function Contact() {
    return <ContactPage />;
}
