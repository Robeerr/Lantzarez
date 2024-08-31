import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const Header: React.FC = () => {
  const location = useLocation();
  const [headerVisible, setHeaderVisible] = useState(false);

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
      <div className="container mx-auto flex justify-between items-center font-montserrat">
        <img
          src={Logo}
          alt="Lantzarez Logo"
          width={350}
          height={440}
          className="h-12 w-auto"
        />
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
      </div>
    </header>
  );
};

export default Header;
