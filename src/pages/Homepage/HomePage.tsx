import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button.tsx";
import { FaLeaf, FaHandshake, FaRegSmile } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/ui/Header.tsx";
import Footer from "../../components/ui/Footer.tsx";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton.tsx";
import ProductCarousel from "../../components/ui/ProductCarousel.tsx";

import Cabecera from "../../assets/images/home_cabecera.jpg";
import Logo from "../../assets/images/Logo.png";
import MariaGarciaImg from "../../assets/images/maria_garcia.jpeg";
import JuanPerezImg from "../../assets/images/juan_perez.jpeg";
// import LogoELE from "../../assets/images/logo_ELE.png";
// import LogoSalami from "../../assets/images/logo_salami.png";
// import LogoQueseriasBama from "../../assets/images/logo_queserias_bama.png";

const testimonials = [
  {
    name: "María García",
    text: "Los productos de Lantzarez son simplemente excepcionales. El sabor auténtico de España en cada bocado.",
    image: MariaGarciaImg,
  },
  {
    name: "Juan Pérez",
    text: "Increíble calidad y servicio. Sus embutidos son imprescindibles en todas nuestras celebraciones familiares.",
    image: JuanPerezImg,
  },
];

const HomePage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const heroStyle = {
    transform: `translateY(-${scrollY * 0.2}px)`,
    opacity: Math.max(1 - scrollY / 300, 0),
  };

  return (
    <div className="bg-stone-100 text-stone-800 overflow-x-hidden">
      <Header />
      <section
        className="relative h-[70vh] w-full flex flex-col items-center justify-center py-32 overflow-hidden"
        style={heroStyle}
      >
        <img
          src={Cabecera}
          alt="Premium Spanish Charcuterie"
          className="fixed left-0 top-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-stone-100 px-4 sm:px-6">
          <img
            src={Logo}
            alt="Lantzarez Logo"
            className="w-40 sm:w-48 md:w-64 mx-auto mb-4 sm:mb-8"
          />
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4 font-playfair">
            Sabor y Tradición Española
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-8 font-playfair">
            Descubre nuestra selección de embutidos y quesos artesanales
          </p>
          <Link to="/products">
            <Button className="inline-block rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 sm:px-6 sm:py-2 font-semibold text-white shadow-md transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg font-raleway">
              Explorar Productos
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-32 bg-stone-200">
        <div className="container mx-auto text-center" data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-6 font-playfair">
            Bienvenidos a Lantzarez
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 font-merriweather text-stone-400">
            En Lantzarez, nos dedicamos a ofrecer productos de alta calidad,
            respetando la tradición y el medioambiente. Creemos en el compromiso
            con nuestros clientes, asegurando siempre la mejor experiencia.
          </p>
          <Link to="/about" className="text-amber-600 hover:underline">
            <Button
              variant="outline"
              className="border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-stone-100 font-raleway"
            >
              Nuestra Historia
            </Button>
          </Link>
        </div>
        <section className="py-32" data-aos="fade-left">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl">
              <FaLeaf className="text-amber-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 font-playfair">
                Medioambiente
              </h3>
              <p className="text-lg font-merriweather text-stone-400">
                Nos comprometemos a cuidar el entorno en cada paso de nuestra
                producción.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl">
              <FaHandshake className="text-amber-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 font-playfair">
                Compromiso
              </h3>
              <p className="text-lg font-merriweather text-stone-400">
                Nos esforzamos por mantener un compromiso constante con la
                calidad.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl">
              <FaRegSmile className="text-amber-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2 font-playfair">
                Satisfacción
              </h3>
              <p className="text-lg font-merriweather text-stone-400">
                Tu satisfacción es nuestra prioridad en cada producto que
                ofrecemos.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">
            Productos Destacados
          </h2>
          <ProductCarousel />{" "}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-stone-700 p-6 rounded-lg flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 mb-10 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-lg text-stone-100 mb-4 font-merriweather">
                  "{testimonial.text}"
                </p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default HomePage;
