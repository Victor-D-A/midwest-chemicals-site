import { Route, Routes } from "react-router-dom";
import CategoryPage from "../outputs/CategoryPage";
import Footer from "../outputs/Footer";
import Header from "../outputs/Header";
import HomePage from "../outputs/HomePage";
import NotFoundPage from "../outputs/NotFoundPage";
import ProductsPage from "../outputs/ProductsPage";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
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
