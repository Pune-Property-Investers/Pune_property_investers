
import { useEffect, useRef, useState } from "react";
import {
    Users,
    UserRoundCheck,
    CarFront,
    Building2,
    CirclePercent,
} from "lucide-react";

import "./TrustStats.css";

const stats = [
    { target: 200, suffix: " +", label: "Team Size", icon: Users },
    { target: 20000, suffix: " +", label: "Happy Clients", icon: UserRoundCheck },
    { target: 10000, suffix: " +", label: "Site Visits", icon: CarFront },
    { target: 900000, suffix: " +", label: "Sq. Ft Sold Till Date", icon: Building2 },
    { target: 0, suffix: " %", label: "Brokerage", icon: CirclePercent },
];

function AnimatedNumber({ target, suffix, started }) {
    const [count, setCount] = useState(
        target === 0 ? 5 : Math.max(0, target - (target >= 1000 ? 150 : 50))
    );

    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!started || hasAnimated.current) return;

        hasAnimated.current = true;

        const initialValue =
            target === 0
                ? 5
                : Math.max(0, target - (target >= 1000 ? 150 : 50));

        const duration = 2700;
        let frameId;
        let startTime;

        setCount(initialValue);

        const animate = (timestamp) => {
            if (startTime === undefined) startTime = timestamp;

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            );

            // Fast counting with a smooth finish.
            const eased = 1 - Math.pow(1 - progress, 2.5);
            const value = Math.round(
                initialValue + (target - initialValue) * eased
            );

            setCount(value);

            if (progress < 1) {
                frameId = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        frameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameId);
    }, [started, target]);

    return (
        <>
            {count.toLocaleString("en-IN")}
            {suffix}
        </>
    );
}

export default function TrustStats() {
    const sectionRef = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section || started) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, [started]);

    return (
        <section
            ref={sectionRef}
            className={`trust-stats ${started ? "trust-stats--visible" : ""}`}
            aria-label="Our achievements"
        >
            <div className="trust-stats__inner">
                <div className="trust-stats__heading-wrap">
                    <span className="trust-stats__eyebrow">
                        OUR ACHIEVEMENTS
                    </span>

                    <h2 className="trust-stats__heading">
                        Trusted by Professionals Across Pune
                    </h2>

                    <span className="trust-stats__heading-line" />
                </div>

                <div className="trust-stats__grid">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <article
                                className="trust-stats__card"
                                key={stat.label}
                                style={{ "--stat-index": index }}
                            >
                                <div className="trust-stats__icon-ring">
                                    <div className="trust-stats__icon">
                                        <Icon
                                            size={35}
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <span className="trust-stats__number-badge">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3 className="trust-stats__value">
                                    <AnimatedNumber
                                        target={stat.target}
                                        suffix={stat.suffix}
                                        started={started}
                                    />
                                </h3>

                                <p className="trust-stats__label">
                                    {stat.label}
                                </p>

                                <span className="trust-stats__accent" />
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
