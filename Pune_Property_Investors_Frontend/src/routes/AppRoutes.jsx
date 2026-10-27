import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import BuyProperties from "../pages/BuyProperties";
import PropertyDetails from "../pages/PropertyDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import InnerPage from "../components/common/InnerPage";

function AppRoutes() {
    return (
        <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Properties for Sale / Search */}
            <Route path="/buy" element={<BuyProperties />} />
            <Route path="/properties" element={<BuyProperties />} />
            <Route path="/search" element={<BuyProperties />} />

            {/* Property Details */}
            <Route path="/property/:id" element={<PropertyDetails />} />

            {/* About Us & Contact */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Navigation Tabs & Dropdowns */}
            <Route
                path="/projects"
                element={
                    <InnerPage
                        title="New Projects in Pune"
                        eyebrow="Upcoming Developments"
                        description="Explore premier new residential & commercial launch projects from leading builders across Pune."
                    />
                }
            />
            <Route
                path="/commercial"
                element={
                    <InnerPage
                        title="Commercial Properties in Pune"
                        eyebrow="Office & Retail Spaces"
                        description="High-yield commercial spaces, retail shops, and grade-A office spaces across Pune's top IT and business hubs."
                    />
                }
            />
            <Route
                path="/plots"
                element={
                    <InnerPage
                        title="Plots & Land for Sale in Pune"
                        eyebrow="Investment Land"
                        description="NA plots, gated community layouts, and prime land parcels across emerging Pune corridors."
                    />
                }
            />
            <Route
                path="/investment"
                element={
                    <InnerPage
                        title="Property Investment in Pune"
                        eyebrow="High ROI Opportunities"
                        description="Strategic investment opportunities with strong rental yields and capital appreciation potential."
                    />
                }
            />
            <Route
                path="/blog"
                element={
                    <InnerPage
                        title="Pune Real Estate Blog & Tips"
                        eyebrow="Insights & Advice"
                        description="Expert guides, market trends, and practical tips for homebuyers and investors in Pune."
                    />
                }
            />
            <Route
                path="/blog/buying-guide"
                element={
                    <InnerPage
                        title="Pune Home Buying Guide"
                        eyebrow="Buyer's Playbook"
                        description="Step-by-step guidance on paperwork, legal checks, home loans, and registration in Maharashtra."
                    />
                }
            />
            <Route
                path="/blog/investment"
                element={
                    <InnerPage
                        title="Real Estate Investment Insights"
                        eyebrow="Market Analysis"
                        description="Deep-dive analysis on price movements, infrastructure projects, and Pune growth corridors."
                    />
                }
            />
            <Route
                path="/news"
                element={
                    <InnerPage
                        title="Pune Property News"
                        eyebrow="Latest Real Estate News"
                        description="Recent developments, metro line extensions, policy updates, and civic infra news affecting Pune real estate."
                    />
                }
            />
            <Route
                path="/news/market-updates"
                element={
                    <InnerPage
                        title="Pune Market Updates"
                        eyebrow="Quarterly Intelligence"
                        description="Quarterly updates on inventory, absorption rates, and price indices across West and East Pune."
                    />
                }
            />
            <Route
                path="/career"
                element={
                    <InnerPage
                        title="Careers at Pune Property Investor"
                        eyebrow="Join Our Team"
                        description="Explore rewarding career opportunities in Pune real estate advisory, sales, marketing, and client relations."
                    />
                }
            />
            <Route
                path="/privacy-policy"
                element={
                    <InnerPage
                        title="Privacy Policy"
                        eyebrow="Legal"
                        description="Learn how Pune Property Investor collects, protects, and handles your information."
                    />
                }
            />
            <Route
                path="/terms-and-conditions"
                element={
                    <InnerPage
                        title="Terms & Conditions"
                        eyebrow="Legal"
                        description="Terms of service and usage guidelines for Pune Property Investor website and consultation services."
                    />
                }
            />

            {/* Redirect unknown URLs to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default AppRoutes;