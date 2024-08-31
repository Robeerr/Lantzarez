import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { products } from "../../data/productsData.ts";
import Button from "../../components/ui/Button.tsx";

const ProductCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 px-4">
      <Slider {...settings}>
        {products.slice(0, 5).map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full justify-between">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-stone-400 mb-4 font-merriweather flex-grow overflow-hidden line-clamp-3">
                  {product.description.slice(0, 100)}...
                </p>
                <Link to={`/products/${product.id}`}>
                  <Button className="mt-4 inline-block rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg font-raleway">
                    Ver Detalles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "linear-gradient(to right, #ffb703, #fb8500)",
        borderRadius: "50%",
        right: "-30px",
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 2,
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "linear-gradient(to right, #ffb703, #fb8500)",
        borderRadius: "50%",
        left: "-30px",
        width: "40px",
        height: "40px",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 2,
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
};

export default ProductCarousel;
