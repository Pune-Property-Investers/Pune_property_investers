import Header from "../components/layouts/Header";
import HeroSection from "../components/home/HeroSection";
import FeaturedProperties from "../components/home/FeaturedProperties";
import Footer from "../components/layouts/Footer";
import BrowseLocations from "../components/home/BrowseLocations";
import NewLaunchProjects from "../components/home/NewLaunchProjects";
import TrendingProjects from "../components/home/TrendingProjects";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AdvertisementSidebar from "../components/common/AdvertisementSidebar.jsx";

import "./Home.css";

function Home() {
    return (
        <>
            <Header />

            <main className="home-page">
                {/* Full-width hero */}
                <HeroSection />

                {/* Main content and right advertisement sidebar */}
                <div className="home-page__content-layout">
                    <div className="home-page__main-content">
                        <FeaturedProperties />
                        <BrowseLocations />
                        <NewLaunchProjects />
                        <TrendingProjects />

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

                {/* Full-width Why Choose Us section */}
                <WhyChooseUs />
            </main>

            <Footer />
        </>
    );
}

export default Home;
