import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import BuyProperties from "../pages/BuyProperties";
import PropertyDetails from "../pages/PropertyDetails";

function AppRoutes() {
    return (
        <Routes>
            {/* Home Page */}
            <Route
                path="/"
                element={<Home />}
            />

            {/* Properties for Sale */}
            <Route
                path="/buy"
                element={<BuyProperties />}
            />

            {/* New Residential Projects */}
            <Route
                path="/projects"
                element={
                    <PlaceholderPage title="New Projects in Pune" />
                }
            />

            {/* Property Details */}
            <Route
                path="/property/:id"
                element={<PropertyDetails />}
            />

            {/* About Us */}
            <Route
                path="/about"
                element={
                    <PlaceholderPage title="About Pune Property Investor" />
                }
            />

            {/* Contact Us */}
            <Route
                path="/contact"
                element={
                    <PlaceholderPage title="Contact Pune Property Investor" />
                }
            />

            {/* Investment Opportunities */}
            <Route
                path="/investment"
                element={
                    <PlaceholderPage title="Property Investment in Pune" />
                }
            />

            {/* Redirect unknown URLs to Home */}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
}

function PlaceholderPage({ title }) {
    return (
        <main className="container section">
            <h1>{title}</h1>
            <p>
                This page will be developed in an upcoming step.
            </p>
        </main>
    );
}

export default AppRoutes;