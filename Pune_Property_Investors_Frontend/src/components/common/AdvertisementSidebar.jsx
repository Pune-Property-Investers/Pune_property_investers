import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowUpRight,
    MapPin,
    MessageCircle,
    Play,
    Volume2,
    VolumeX,
    ExternalLink,
    Phone,
} from "lucide-react";

import advertisementData from "../../data/advertisementData.js";
import "./AdvertisementSidebar.css";

const WHATSAPP_NUMBER = "917398174444";

function getYouTubeVideoId(ad) {
    if (ad.videoId) {
        return ad.videoId;
    }

    if (!ad.videoUrl) {
        return "";
    }

    try {
        const url = new URL(ad.videoUrl);

        if (url.hostname.includes("youtu.be")) {
            return url.pathname.replace("/", "");
        }

        if (url.hostname.includes("youtube.com")) {
            if (url.pathname === "/watch") {
                return url.searchParams.get("v") || "";
            }

            const match = url.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/);

            return match?.[1] || "";
        }
    } catch {
        return "";
    }

    return "";
}

function AdvertisementVideo({ ad, videoId }) {
    const [isMuted, setIsMuted] = useState(true);
    const [hasStarted, setHasStarted] = useState(true);

    const videoTitle = ad.title || "Pune Property Investor Advertisement";

    const videoSrc = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
        videoId
    )}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1&playsinline=1&loop=1&playlist=${encodeURIComponent(
        videoId
    )}&rel=0&enablejsapi=1`;

    const toggleMute = () => {
        setIsMuted((current) => !current);
    };

    return (
        <div className="advertisement-video">
            {hasStarted ? (
                <>
                    <iframe
                        key={`${videoId}-${isMuted ? "muted" : "unmuted"}`}
                        className="advertisement-video__player"
                        src={videoSrc}
                        title={videoTitle}
                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                        referrerPolicy="strict-origin-when-cross-origin"
                        loading="eager"
                        allowFullScreen
                    />

                    <button
                        type="button"
                        className="advertisement-video__mute"
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute advertisement video" : "Mute advertisement video"}
                        title={isMuted ? "Unmute video" : "Mute video"}
                    >
                        {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
                        <span>{isMuted ? "Unmute" : "Mute"}</span>
                    </button>
                </>
            ) : (
                <button
                    type="button"
                    className="advertisement-video__play"
                    onClick={() => setHasStarted(true)}
                    aria-label={`Play ${videoTitle}`}
                >
          <span className="advertisement-video__play-icon">
            <Play size={25} fill="currentColor" />
          </span>
                    <span>Play Advertisement</span>
                </button>
            )}
        </div>
    );
}

function ImageAdvertisement({ ad }) {
    return (
        <article className="advertisement-card advertisement-card--image">
            <div className="advertisement-card__image">
                {ad.image ? (
                    <img
                        src={ad.image}
                        alt={ad.imageAlt || ad.title || "Property advertisement"}
                        loading="lazy"
                    />
                ) : (
                    <div className="advertisement-card__image-placeholder">
                        <MapPin size={30} />
                        <span>Explore Properties in Pune</span>
                    </div>
                )}

                {ad.eyebrow && (
                    <span className="advertisement-card__eyebrow">{ad.eyebrow}</span>
                )}
            </div>

            <div className="advertisement-card__content">
                {ad.eyebrow && (
                    <span className="advertisement-card__content-eyebrow">
            {ad.eyebrow}
          </span>
                )}

                <h3>{ad.title || "Discover Your Next Property"}</h3>

                {ad.description && <p>{ad.description}</p>}

                {ad.link && (
                    <Link to={ad.link} className="advertisement-card__button">
                        {ad.buttonText || "Explore Property"}
                        <ArrowUpRight size={17} />
                    </Link>
                )}

                {!ad.link && ad.externalUrl && (
                    <a
                        href={ad.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="advertisement-card__button"
                    >
                        {ad.buttonText || "Learn More"}
                        <ExternalLink size={16} />
                    </a>
                )}
            </div>
        </article>
    );
}

function VideoAdvertisement({ ad }) {
    const videoId = getYouTubeVideoId(ad);

    if (!videoId) {
        return <ImageAdvertisement ad={ad} />;
    }

    return (
        <article className="advertisement-card advertisement-card--video">
            <div className="advertisement-card__video-heading">
        <span className="advertisement-card__video-label">
          <Play size={12} fill="currentColor" />
          VIDEO ADVERTISEMENT
        </span>
            </div>

            <AdvertisementVideo ad={ad} videoId={videoId} />

            <div className="advertisement-card__content">
                <h3>{ad.title || "Discover Properties in Pune"}</h3>

                {ad.description && <p>{ad.description}</p>}
            </div>

            <div className="advertisement-card__video-footer">
                <span>Advertisement</span>

                <a
                    href={`https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Watch on YouTube
                    <ExternalLink size={13} />
                </a>
            </div>
        </article>
    );
}

function ContactAdvertisement() {
    const whatsappMessage = encodeURIComponent(
        "Hello Pune Property Investor, I would like to know more about your property listings and services in Pune."
    );

    return (
        <section className="advertisement-contact">
            <div className="advertisement-contact__icon">
                <MessageCircle size={24} />
            </div>

            <p className="advertisement-contact__eyebrow">
                YOUR PROPERTY PARTNER
            </p>

            <h3>Looking for the Right Property in Pune?</h3>

            <p className="advertisement-contact__description">
                Let our team help you explore property options that match your needs
                and budget.
            </p>

            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="advertisement-contact__button"
            >
                <span>Chat with Our Team</span>
                <ArrowUpRight size={18} />
            </a>

            <Link to="/contact" className="advertisement-contact__secondary">
                <Phone size={15} />
                Contact Us
            </Link>

            <div className="advertisement-contact__footer">
                <MapPin size={14} />
                <span>Helping you find properties across Pune</span>
            </div>
        </section>
    );
}

export default function AdvertisementSidebar() {
    const visibleAds = advertisementData.filter(
        (ad) => ad.type !== "sell"
    );

    return (
        <aside className="advertisement-sidebar">
            <div className="advertisement-sidebar__heading">
        <span className="advertisement-sidebar__eyebrow">
          DISCOVER MORE
        </span>
                <h2>Featured Properties</h2>
                <p>Explore property opportunities in Pune.</p>
            </div>

            <div className="advertisement-sidebar__cards">
                {visibleAds.map((ad, index) => {
                    const key = ad.id ?? `${ad.type || "ad"}-${index}`;

                    if (ad.type === "video") {
                        return <VideoAdvertisement key={key} ad={ad} />;
                    }

                    return <ImageAdvertisement key={key} ad={ad} />;
                })}
            </div>

            <ContactAdvertisement />
        </aside>
    );
}