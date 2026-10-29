"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navigationItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Properties",
        href: "/buy",
        dropdown: [
            { label: "Buy Properties", href: "/buy" },
            { label: "New Projects", href: "/projects" },
            { label: "Commercial Properties", href: "/commercial" },
            { label: "Plots & Land", href: "/plots" },
        ],
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Blog",
        href: "/blog",
        dropdown: [
            { label: "Real Estate Tips", href: "/blog" },
            { label: "Buying Guide", href: "/blog/buying-guide" },
            { label: "Investment Insights", href: "/blog/investment" },
        ],
    },
    {
        label: "News",
        href: "/news",
        dropdown: [
            { label: "Pune Property News", href: "/news" },
            { label: "Market Updates", href: "/news/market-updates" },
        ],
    },
    {
        label: "Career",
        href: "/career",
        dropdown: [
            { label: "Current Openings", href: "/career" },
            { label: "Join Our Team", href: "/career" },
        ],
    },
    {
        label: "Contact Us",
        href: "/contact",
    },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/Pune_property_investers";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const closeMenu = () => {
        setMenuOpen(false);
        setOpenDropdown(null);
    };

    const toggleDropdown = (label) => {
        setOpenDropdown((current) =>
            current === label ? null : label
        );
    };

    return (
        <header className="site-header">
            <div className="header-container">
                {/* Company Logo and Name */}
                <Link
                    href="/"
                    className="header-brand"
                    aria-label="Pune Property Investor home"
                    onClick={closeMenu}
                >
                    <Image
                        src={`${basePath}/images/logo.jpg`}
                        alt="Pune Property Investor logo"
                        className="header-brand__image"
                        width={52}
                        height={52}
                    />

                    <span className="header-brand__text">
                        <span className="header-brand__name">
                            PUNE PROPERTY
                        </span>

                        <span className="header-brand__subtitle">
                            INVESTOR
                        </span>
                    </span>
                </Link>

                {/* Desktop and Mobile Navigation */}
                <nav
                    className={`header-navigation ${
                        menuOpen ? "header-navigation--open" : ""
                    }`}
                    aria-label="Main navigation"
                >
                    {navigationItems.map((item) => (
                        <div
                            key={item.label}
                            className={`header-nav-item ${
                                openDropdown === item.label
                                    ? "header-nav-item--open"
                                    : ""
                            }`}
                        >
                            <div className="header-nav-item__main">
                                <Link
                                    href={item.href}
                                    className={`header-nav-link ${
                                        item.label === "Home"
                                            ? "header-nav-link--home"
                                            : ""
                                    }`}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>

                                {item.dropdown && (
                                    <button
                                        type="button"
                                        className="header-dropdown-toggle"
                                        aria-label={`Toggle ${item.label} menu`}
                                        aria-expanded={
                                            openDropdown === item.label
                                        }
                                        onClick={() =>
                                            toggleDropdown(item.label)
                                        }
                                    >
                                        <ChevronDown size={17} />
                                    </button>
                                )}
                            </div>

                            {item.dropdown && (
                                <div className="header-dropdown">
                                    {item.dropdown.map((subItem) => (
                                        <Link
                                            key={subItem.label}
                                            href={subItem.href}
                                            className="header-dropdown__link"
                                            onClick={closeMenu}
                                        >
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="header-mobile-toggle"
                    onClick={() =>
                        setMenuOpen((current) => !current)
                    }
                    aria-label={
                        menuOpen ? "Close navigation" : "Open navigation"
                    }
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={27} /> : <Menu size={27} />}
                </button>
            </div>
        </header>
    );
}

export default Header;
