import { useEffect, useRef } from "react";
import { Route, Routes, useLocation, useNavigationType, type NavigationType } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import FloorCoatingsPage from "./pages/FloorCoatingsPage";
import MetalFlakePage from "./pages/MetalFlakePage";
import MultiSpecColorsPage from "./pages/MultiSpecColorsPage";
import MultiSpecExamplesPage from "./pages/MultiSpecExamplesPage";
import MultiSpecInstructionsPage from "./pages/MultiSpecInstructionsPage";
import RefinishingPage from "./pages/RefinishingPage";
import RefinishingSurfacePage from "./pages/RefinishingSurfacePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SkipLink from "./components/SkipLink";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import WarrantyPage from "./pages/WarrantyPage";

// Whether a page change should start the new page at the top, like a normal
// website does on a full page load.
// - navigationType is "POP" for the browser's Back and Forward buttons,
//   "PUSH" for clicked links, and "REPLACE" for redirects.
// - hash is the "#order" part of the address, or "" when there isn't one.
function shouldStartAtTop(navigationType: NavigationType, hash: string): boolean {
  if (navigationType === "POP") {
    return false;
  }

  if (hash) {
    return false;
  }

  return true;
}

export default function App() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const mainRef = useRef<HTMLElement>(null);
  // Remembers the last page we were on, so we can tell a real page change
  // from the very first render.
  const previousPathname = useRef(location.pathname);

  // When the visitor moves to a different page, start at the top (unless
  // shouldStartAtTop says not to), and move keyboard focus to the new content
  // so keyboard and screen reader users know the page changed.
  useEffect(() => {
    if (previousPathname.current === location.pathname) return;

    previousPathname.current = location.pathname;
    if (shouldStartAtTop(navigationType, location.hash)) {
      window.scrollTo(0, 0);
    }
    // preventScroll: focus shouldn't move the page; the line above decides that.
    mainRef.current?.focus({ preventScroll: true });
  }, [location.pathname, location.hash, navigationType]);

  return (
    <div className="app">
      <SkipLink targetId="main-content" />
      <Header />
      <main className="app__main" id="main-content" tabIndex={-1} ref={mainRef}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* Exact paths win over /products/:slug, so these categories get
              their own custom pages. */}
          <Route path="/products/floor-coatings" element={<FloorCoatingsPage />} />
          <Route path="/products/metal-flake-primer-colors" element={<MetalFlakePage />} />
          <Route path="/products/multi-spec-colors" element={<MultiSpecColorsPage />} />
          <Route path="/products/:slug" element={<CategoryPage />} />
          <Route path="/refinishing" element={<RefinishingPage />} />
          {/* React Router ranks a fixed address above :slug, so this page wins
              wherever it's listed; it sits here to keep the refinishing routes
              together. */}
          <Route path="/refinishing/multi-spec-instructions" element={<MultiSpecInstructionsPage />} />
          <Route
            path="/refinishing/countertops/multi-spec-examples"
            element={<MultiSpecExamplesPage />}
          />
          <Route path="/refinishing/:slug" element={<RefinishingSurfacePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/warranty" element={<WarrantyPage />} />
          <Route path="/about/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
