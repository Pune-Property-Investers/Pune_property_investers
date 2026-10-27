import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import logo from "../../assets/images/logo.jpg";

import "./Header.css";

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
                <a
                    href="/"
                    className="header-brand"
                    aria-label="Pune Property Investor home"
                    onClick={closeMenu}
                >
                    <img
                        src={logo}
                        alt="Pune Property Investor logo"
                        className="header-brand__image"
                    />

                    <span className="header-brand__text">
                        <span className="header-brand__name">
                            PUNE PROPERTY
                        </span>

                        <span className="header-brand__subtitle">
                            INVESTOR
                        </span>
                    </span>
                </a>

                {/* Desktop and Mobile Navigation */}
                <nav
                    className={`header-navigation ${menuOpen ? "header-navigation--open" : ""
                        }`}
                    aria-label="Main navigation"
                >
                    {navigationItems.map((item) => (
                        <div
                            key={item.label}
                            className={`header-nav-item ${openDropdown === item.label
                                    ? "header-nav-item--open"
                                    : ""
                                }`}
                        >
                            <div className="header-nav-item__main">
                                <a
                                    href={item.href}
                                    className={`header-nav-link ${item.label === "Home"
                                            ? "header-nav-link--home"
                                            : ""
                                        }`}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </a>

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
                                        <a
                                            key={subItem.label}
                                            href={subItem.href}
                                            className="header-dropdown__link"
                                            onClick={closeMenu}
                                        >
                                            {subItem.label}
                                        </a>
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
