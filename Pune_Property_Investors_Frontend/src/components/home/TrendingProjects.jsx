import Link from "next/link";
import {
    ArrowRight,
    MapPin,
    Building2,
    MoveRight,
} from "lucide-react";

import trendingProjects from "../../data/trendingProjectsData";

function TrendingProjects() {
    return (
        <section
            className="trending-projects"
            aria-labelledby="trending-projects-title"
        >
            <div className="trending-projects__container">
                {/* Section Heading */}
                <div className="trending-projects__header">
                    <div className="trending-projects__heading-content">
                        <p className="trending-projects__eyebrow">
                            <span aria-hidden="true"></span>
                            Pune Real Estate
                        </p>

                        <h2
                            className="trending-projects__title"
                            id="trending-projects-title"
                        >
                            Trending Projects.
                            <span>Worth exploring.</span>
                        </h2>

                        <p className="trending-projects__description">
                            Explore sought-after residential projects across
                            Pune and discover a home that fits your lifestyle
                            and investment goals.
                        </p>
                    </div>

                    <Link
                        href="/buy"
                        className="trending-projects__view-all"
                    >
                        View All Projects
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>

                {/* Project Cards */}
                <div className="trending-projects__grid">
                    {trendingProjects.map((project) => (
                        <article
                            className="trending-card"
                            key={project.id}
                        >
                            <Link
                                href={`/properties/${project.slug}`}
                                className="trending-card__image-link"
                                aria-label={`View ${project.name}`}
                            >
                                <div className="trending-card__image">
                                    <img
                                        src={project.image}
                                        alt={`${project.name} residential property`}
                                        loading="lazy"
                                    />

                                    <span className="trending-card__badge">
                                        {project.status}
                                    </span>

                                    <span
                                        className="trending-card__image-arrow"
                                        aria-hidden="true"
                                    >
                                        <MoveRight size={20} />
                                    </span>
                                </div>
                            </Link>

                            <div className="trending-card__content">
                                <p className="trending-card__developer">
                                    <Building2
                                        size={15}
                                        aria-hidden="true"
                                    />
                                    {project.developer}
                                </p>

                                <h3 className="trending-card__title">
                                    <Link
                                        href={`/properties/${project.slug}`}
                                    >
                                        {project.name}
                                    </Link>
                                </h3>

                                <p className="trending-card__location">
                                    <MapPin
                                        size={16}
                                        aria-hidden="true"
                                    />
                                    {project.location}
                                </p>

                                <div className="trending-card__divider"></div>

                                <p className="trending-card__configuration">
                                    {project.configuration}
                                </p>

                                <div className="trending-card__footer">
                                    <div className="trending-card__price">
                                        <span>Starting from</span>
                                        <strong>{project.price}</strong>
                                    </div>

                                    <Link
                                        href={`/properties/${project.slug}`}
                                        className="trending-card__action"
                                        aria-label={`Explore ${project.name}`}
                                    >
                                        <ArrowRight size={19} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom Link */}
                <div className="trending-projects__bottom">
                    <p>
                        Find your next home in Pune with Pune Property Investor.
                    </p>

                    <Link href="/buy">
                        Explore All Properties
                        <ArrowRight size={17} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default TrendingProjects;
