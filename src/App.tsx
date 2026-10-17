import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SkipLink from "./components/SkipLink";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <div className="app">
      <SkipLink targetId="main-content" />
      <Header />
      <main className="app__main" id="main-content" tabIndex={-1}>
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
