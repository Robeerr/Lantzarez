import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage.tsx";
import AboutUs from "./pages/AboutUs/AboutUs.tsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.tsx";
import ContactPage from "./pages/ContactPage/ContactPage.tsx";
import RecipesPage from "./pages/RecipesPage/RecipesPage.tsx";
import ProductDetailPage from "./pages/ProductsDetailPage/ProductDetailPage.tsx";
import ScrollToTop from "./components/ui/ScrollToTop.tsx";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/recipes" element={<RecipesPage />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
