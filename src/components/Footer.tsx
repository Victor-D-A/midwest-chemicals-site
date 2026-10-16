import { Link } from "react-router-dom";
import "./Footer.css";
import { navigationItems } from "../data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">Midwest Chemicals</p>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <ul className="site-footer__nav-list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link className="site-footer__nav-link" to={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="site-footer__legal">&copy; {currentYear} Midwest Chemicals</p>
      </div>
    </footer>
  );
}
