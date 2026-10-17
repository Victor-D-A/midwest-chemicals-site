import { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SkipLink from "./components/SkipLink";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  // Remembers the last page we were on, so we can tell a real page change
  // from the very first render.
  const previousPathname = useRef(location.pathname);

  // When the visitor moves to a different page, move keyboard focus to the
  // new content, so keyboard and screen reader users know the page changed.
  useEffect(() => {
    if (previousPathname.current === location.pathname) return;

    previousPathname.current = location.pathname;
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <div className="app">
      <SkipLink targetId="main-content" />
      <Header />
      <main className="app__main" id="main-content" tabIndex={-1} ref={mainRef}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
