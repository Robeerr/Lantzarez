import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronRight, ZoomIn } from "lucide-react";
import { products } from "../../data/productsData.ts";
import Header from "../../components/ui/Header.tsx";
import Footer from "../../components/ui/Footer.tsx";
import Button from "../../components/ui/Button.tsx";

import {
  userNames,
  goodComments,
  badComments,
  neutralComments,
} from "../../data/userReviewsData.ts";

const getRandomElement = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomRatingAndComment = () => {
  const randomNumber = Math.random();
  let rating = 5;
  let comment = "";

  if (randomNumber < 0.7) {
    rating = Math.floor(Math.random() * 2) + 4;
    comment = getRandomElement(goodComments);
  } else if (randomNumber < 0.9) {
    rating = 3;
    comment = getRandomElement(neutralComments);
  } else {
    rating = Math.floor(Math.random() * 2) + 1;
    comment = getRandomElement(badComments);
  }

  return { rating, comment };
};

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((product) => product.id === Number(id));

  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const relatedProducts = products.filter(
    (p) => p.type === product.type && p.id !== product.id
  );

  return (
    <div className="min-h-screen bg-neutral-50 font-sans mt-20">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <nav className="mb-8 flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-amber-600"
              >
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 text-gray-400" />
                <a
                  href="/products"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-amber-600 md:ml-2"
                >
                  Products
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="h-5 w-5 text-gray-400" />
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                  {product.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <div
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={product.image}
                alt={product.name}
                className={`transition-transform duration-300 ease-in-out ${
                  isZoomed ? "scale-110" : "scale-100"
                }`}
              />
              {isZoomed && (
                <div className="absolute bottom-4 right-4 rounded-full bg-white p-2 shadow-md">
                  <ZoomIn className="h-6 w-6 text-gray-600" />
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-3">
            <h1 className="mb-4 font-serif text-4xl font-bold text-gray-800">
              {product.name}
            </h1>
            <img src={product.logo} alt={product.brand} className="w-24 mb-4" />
            <p className="mb-6 text-lg text-gray-600">{product.description}</p>

            <h2 className="mb-4 font-serif text-2xl font-semibold text-gray-800">
              Detalles del Producto
            </h2>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="mr-2 font-semibold">Marca:</span>{" "}
                {product.brand}
              </li>
              <li className="flex items-center">
                <span className="mr-2 font-semibold">Tipo de Venta:</span>{" "}
                {product.saleType}
              </li>
              <li className="flex items-center">
                <span className="mr-2 font-semibold">Peso:</span>{" "}
                {product.weight}
              </li>
              <li className="flex items-center">
                <span className="mr-2 font-semibold">Tipo:</span> {product.type}
              </li>
            </ul>

            <div className="mb-8">
              <Link to="/contact">
                <Button className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg">
                  Contacta con Nosotros
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <section className="mt-16">
          <h2 className="mb-6 font-serif text-2xl font-semibold text-gray-800">
            Productos Relacionados
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 aspect-square overflow-hidden rounded-md">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mb-2 font-semibold text-gray-800">
                  {relatedProduct.name}
                </h3>
                <Link to={`/products/${relatedProduct.id}`}>
                  <Button className="mt-auto inline-block rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg font-raleway">
                    Ver Detalles
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/products" className="text-amber-600 hover:underline">
              <Button
                variant="outline"
                className="border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-stone-100 font-raleway"
              >
                Ver Todos los Productos
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 font-serif text-2xl font-semibold text-gray-800">
            Reseñas de Usuarios
          </h2>
          <div className="space-y-6">
            {[1, 2, 3].map((review) => {
              const randomName = getRandomElement(userNames);
              const { rating, comment } = getRandomRatingAndComment();
              return (
                <div key={review} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-2 flex items-center">
                    <div className="mr-4 flex">
                      {[...Array(rating)].map((_, star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                      {randomName}
                    </span>
                  </div>
                  <p className="text-gray-600">{comment}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
