import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const Header: React.FC = () => {
  const location = useLocation();
  const [headerVisible, setHeaderVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Nuevo estado para controlar el menú móvil

  useEffect(() => {
    const isHomePage = location.pathname === "/";

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isHomePage) {
        if (currentScrollY >= window.innerHeight * 0.7) {
          setHeaderVisible(true);
        } else {
          setHeaderVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const headerStyle = {
    opacity: headerVisible ? 1 : 0,
    transform: headerVisible ? "translateY(0)" : "translateY(-100%)",
    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
  };

  const headerClass =
    location.pathname === "/"
      ? "bg-stone-900 text-stone-100 py-4 fixed top-0 left-0 w-full z-50"
      : "bg-stone-900 text-stone-100 py-4 fixed top-0 left-0 w-full z-50 opacity-100";

  const getLinkClass = (path: string) =>
    location.pathname === path ? "text-amber-600" : "hover:text-amber-600";

  return (
    <header
      className={headerClass}
      style={location.pathname === "/" ? headerStyle : {}}
    >
      <div className="max-w-[95%] lg:max-w-[80%] mx-auto flex justify-between items-center font-montserrat">
        <img
          src={Logo}
          alt="Lantzarez Logo"
          width={350}
          height={440}
          className="h-12 w-auto"
        />
        {/* Botón de hamburguesa para móviles */}
        <button
          className="text-stone-100 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Icono de hamburguesa */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navegación: visible en pantallas medianas y grandes */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className={getLinkClass("/")}>
            Inicio
          </Link>
          <Link to="/about" className={getLinkClass("/about")}>
            Nosotros
          </Link>
          <Link to="/products" className={getLinkClass("/products")}>
            Productos
          </Link>
          <Link to="/recipes" className={getLinkClass("/recipes")}>
            Recetas
          </Link>
          <Link to="/contact" className={getLinkClass("/contact")}>
            Contacto
          </Link>
        </nav>

        {/* Menú desplegable móvil */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-stone-900 text-stone-100 md:hidden flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className={getLinkClass("/")}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className={getLinkClass("/about")}
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              to="/products"
              className={getLinkClass("/products")}
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              to="/recipes"
              className={getLinkClass("/recipes")}
              onClick={() => setIsMenuOpen(false)}
            >
              Recetas
            </Link>
            <Link
              to="/contact"
              className={getLinkClass("/contact")}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
