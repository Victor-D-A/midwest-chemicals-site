import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { navigationItems } from "./navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function toggleMenu() {
    setIsMenuOpen(previousIsMenuOpen => !previousIsMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  // While the menu is open, listen for key presses anywhere on the page.
  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/" aria-label="Midwest Chemicals home">
          <span className="site-header__brand-mark" aria-hidden="true">MC</span>
          <span className="site-header__brand-name">Midwest Chemicals</span>
        </Link>

        <nav
          id="primary-navigation"
          className={`site-header__nav ${isMenuOpen ? "site-header__nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul className="site-header__nav-list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="site-header__nav-link"
                  to={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
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
