"use client";

import { useState } from "react";
import Header from "../layouts/Header";
import HeroSection from "../home/HeroSection";
import FeaturedProperties from "../home/FeaturedProperties";
import Footer from "../layouts/Footer";
import BrowseLocations from "../home/BrowseLocations";
import NewLaunchProjects from "../home/NewLaunchProjects";
import TrendingProjects from "../home/TrendingProjects";
import WhyChooseUs from "../home/WhyChooseUs";
import AdvertisementSidebar from "../common/AdvertisementSidebar";
import PuneRealEstateContent from "../home/PuneRealEstateContent";
import Testimonials from "../home/Testimonials";
import TrustStats from "../home/TrustStats";

function Home() {
    const [activeTab, setActiveTab] = useState("projects");

    return (
        <>
            <Header />

            <main className="home-page">
                {/* Full-width hero */}
                <HeroSection
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                {/* Main content and right advertisement sidebar */}
                <div className="home-page__content-layout">
                    <div className="home-page__main-content">
                        <FeaturedProperties
                            filters={{ projectType: activeTab }}
                        />
                        <BrowseLocations />
                        <NewLaunchProjects />
                        <TrendingProjects />
                        <PuneRealEstateContent />

                        <section className="home-intro section">
                            <div className="container">
                                <div className="section-heading">
                                    <h2>Find the Right Property in Pune</h2>

                                    <p>
                                        Discover residential properties, new
                                        projects, and investment opportunities
                                        across Pune.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="home-page__sidebar">
                        <AdvertisementSidebar />
                    </aside>
                </div>
                <TrustStats />
                <Testimonials />
                {/* Full-width Why Choose Us section */}
                <WhyChooseUs />
            </main>

            <Footer />
        </>
    );
}

export default Home;
