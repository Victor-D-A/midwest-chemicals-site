import "./Footer.css";
import { navigationItems } from "./navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">Midwest Chemicals</p>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <ul className="site-footer__nav-list">
            {navigationItems.map((item) => <li key={item.href}>
              <a className="site-footer__nav-link" href=
                {item.href}>{item.label}</a></li>)}
          </ul>
        </nav>

        <p className="site-footer__legal">&copy; {currentYear} Midwest Chemicals</p>
      </div>
    </footer>
  );
}
