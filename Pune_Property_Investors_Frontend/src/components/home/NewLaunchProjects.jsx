
import { ArrowRight, MapPin, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import newLaunchProjects from "../../data/newLaunchProjectsData";
import "./NewLaunchProjects.css";

function NewLaunchProjects() {
    return (
        <section className="new-launch" id="new-launch-projects">
            <div className="new-launch__container">
                <div className="new-launch__heading">
                    <div className="new-launch__intro">
            <span className="new-launch__eyebrow">
              <span className="new-launch__eyebrow-line" />
              DISCOVER WHAT'S NEXT
            </span>

                        <h2>
                            New launches.
                            <br />
                            <span>New possibilities.</span>
                        </h2>

                        <p>
                            Explore exciting residential opportunities across Pune.
                            Find a home that fits your lifestyle and your future plans.
                        </p>
                    </div>

                    <Link
                        to="/properties"
                        className="new-launch__view-all"
                    >
                        Explore all properties
                        <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="new-launch__grid">
                    {newLaunchProjects.map((project, index) => (
                        <article
                            className={`launch-card ${
                                project.featured ? "launch-card--featured" : ""
                            }`}
                            key={project.id}
                        >
                            <Link
                                to={`/properties?project=${encodeURIComponent(
                                    project.name
                                )}`}
                                className="launch-card__image-link"
                                aria-label={`Explore ${project.name}`}
                            >
                                <div className="launch-card__image">
                                    <img
                                        src={project.image}
                                        alt={`${project.name} property inspiration`}
                                        loading="lazy"
                                    />

                                    <span className="launch-card__status">
                    <span className="launch-card__status-dot" />
                                        {project.status}
                  </span>

                                    <span className="launch-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                                    <span className="launch-card__image-arrow">
                    <MoveUpRight size={20} />
                  </span>
                                </div>
                            </Link>

                            <div className="launch-card__content">
                                <div className="launch-card__topline">
                                    <span>{project.type}</span>
                                    <span className="launch-card__divider" />
                                    <span>{project.configuration}</span>
                                </div>

                                <h3>{project.name}</h3>

                                <p className="launch-card__developer">
                                    {project.developer}
                                </p>

                                <div className="launch-card__location">
                                    <MapPin size={16} strokeWidth={1.8} />
                                    <span>{project.location}</span>
                                </div>

                                <div className="launch-card__footer">
                                    <div className="launch-card__price">
                                        <span>Starting price</span>
                                        <strong>{project.price}</strong>
                                    </div>

                                    <Link
                                        to={`/properties?project=${encodeURIComponent(
                                            project.name
                                        )}`}
                                        className="launch-card__details"
                                        aria-label={`Enquire about ${project.name}`}
                                    >
                                        <ArrowRight size={19} />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="new-launch__bottom">
                    <p>
                        Looking for the right investment opportunity?
                        <span> Let’s find the right fit for you.</span>
                    </p>

                    <Link to="/properties" className="new-launch__bottom-link">
                        Find your property
                        <ArrowRight size={17} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NewLaunchProjects;
