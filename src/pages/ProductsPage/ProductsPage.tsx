import React, { useState } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Header from "../../components/ui/Header.tsx";
import Footer from "../../components/ui/Footer.tsx";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton.tsx";
import { Search, ChevronDown } from "lucide-react";
import { products as productData } from "../../data/productsData.ts";

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState(productData.slice(0, 8));
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleBrandFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrandFilter(e.target.value);
    setTypeFilter("");
  };

  const handleTypeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilter(e.target.value);
    setBrandFilter("");
  };

  const handleLoadMore = () => {
    setProducts((prevProducts) => [
      ...prevProducts,
      ...productData.slice(prevProducts.length, prevProducts.length + 4),
    ]);
  };

  const availableBrands = [
    ...new Set(
      productData
        .filter((product) => typeFilter === "" || product.type === typeFilter)
        .map((product) => product.brand)
    ),
  ];

  const availableTypes = [
    ...new Set(
      productData
        .filter(
          (product) => brandFilter === "" || product.brand === brandFilter
        )
        .map((product) => product.type)
    ),
  ];

  const filteredProducts = productData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (brandFilter === "" || product.brand === brandFilter) &&
      (typeFilter === "" || product.type === typeFilter)
  );

  const displayedProducts = filteredProducts.slice(0, products.length);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <div className="flex flex-col md:flex-row justify-between mb-8 mt-8 items-center gap-4">
          <div className="relative flex-1 max-w-xs w-full">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full rounded-full border border-gray-300 pl-10 pr-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 font-raleway"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="relative w-full md:w-auto">
            <select
              className="appearance-none w-full md:w-auto rounded-full border border-gray-300 bg-white pl-4 pr-10 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
              value={brandFilter}
              onChange={handleBrandFilter}
            >
              <option value="" className="font-raleway">
                Todas las marcas
              </option>
              {availableBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />
          </div>

          <div className="relative w-full md:w-auto">
            <select
              className="appearance-none w-full md:w-auto rounded-full border border-gray-300 bg-white pl-4 pr-10 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
              value={typeFilter}
              onChange={handleTypeFilter}
            >
              <option value="" className="font-raleway">
                Todos los tipos
              </option>
              {availableTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={20}
            />
          </div>
        </div>

        {displayedProducts.length === 0 ? (
          <div className="text-center text-gray-600 mt-8">
            No se encontraron productos. Por favor, ajusta los filtros.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl flex flex-col"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-800 font-playfair">
                      {product.name}
                    </h2>
                    <img
                      src={product.logo}
                      alt={product.brand}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <p className="mb-4 text-sm text-stone-400 flex-grow font-merriweather">
                    {product.description}
                  </p>
                  <Link to={`/products/${product.id}`}>
                    <button className="mt-auto inline-block rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg font-raleway">
                      Ver más detalle
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProducts.length > displayedProducts.length && (
          <div className="mt-8 text-center">
            <button
              onClick={handleLoadMore}
              className="rounded-full bg-amber-500 px-6 py-2 font-semibold text-white transition-colors duration-300 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 font-raleway"
            >
              Cargar más
            </button>
          </div>
        )}
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default ProductsPage;
