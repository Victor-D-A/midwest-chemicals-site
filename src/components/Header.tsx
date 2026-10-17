import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { navigationItems } from "../data/navigation";

// NavLink calls this function and passes in whether its page is the current one.
function navLinkClassName({ isActive }: { isActive: boolean }): string {
  return (isActive ? "site-header__nav-link site-header__nav-link--active" : "site-header__nav-link");
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const previousPathname = useRef(location.pathname);

  // Close the menu whenever the page changes, including when the visitor uses
  // the browser's Back or Forward buttons (the link onClick below only covers
  // clicks on the menu's own links).
  useEffect(() => {
    if (previousPathname.current === location.pathname) return;
    previousPathname.current = location.pathname;
    setIsMenuOpen(false);
  }, [location.pathname]);

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
                <NavLink
                  className={navLinkClassName}
                  to={item.href}
                  end={item.href === "/"}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
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
