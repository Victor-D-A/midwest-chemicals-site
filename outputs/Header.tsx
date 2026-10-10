import { useState } from "react";
import "./Header.css";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Refinishing", href: "/refinishing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(previousIsMenuOpen => !previousIsMenuOpen);// TODO(human): flip isMenuOpen from true to false (or false to true)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/" aria-label="Midwest Chemicals home">
          <span className="site-header__brand-mark" aria-hidden="true">MC</span>
          <span className="site-header__brand-name">Midwest Chemicals</span>
        </a>

        <nav
          id="primary-navigation"
          className={`site-header__nav ${isMenuOpen ? "site-header__nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul className="site-header__nav-list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className="site-header__nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="site-header__menu-line" aria-hidden="true" />
          <span className="site-header__menu-line" aria-hidden="true" />
          <span className="site-header__menu-line" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
