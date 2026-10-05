import "./Header.css";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Refinishing", href: "/refinishing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/" aria-label="Midwest Chemicals home">
          <span className="site-header__brand-mark" aria-hidden="true">MC</span>
          <span className="site-header__brand-name">Midwest Chemicals</span>
        </a>

        <nav className="site-header__nav" aria-label="Primary navigation">
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
          aria-label="Mobile menu, coming soon"
          disabled
        >
          <span className="site-header__menu-line" aria-hidden="true" />
          <span className="site-header__menu-line" aria-hidden="true" />
          <span className="site-header__menu-line" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
