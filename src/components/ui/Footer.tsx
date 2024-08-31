import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "../../assets/images/Logo.png";
import Input from "./Input.tsx";
import Button from "./Button.tsx";

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-100 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        <div>
          <img
            src={Logo}
            alt="Lantzarez Logo"
            width={150}
            height={50}
            className="h-12 w-auto mb-4"
          />
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-amber-200">
                Inicio
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-amber-200">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-amber-200">
                Productos
              </a>
            </li>
            <li>
              <a href="/recipes" className="hover:text-amber-200">
                Recetas
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-amber-200">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Contacto</h4>
          <p>Polígono Erletxes 1-15, K</p>
          <p>48960 Galdakao, Bizkaia</p>
          <p>
            Tel:
            <a href="tel:+34946400659" className="hover:text-amber-200 ml-2">
              +34 946 400 659
            </a>
          </p>
          <p>
            Email:
            <a
              href="mailto:administracion@lantzarez.com"
              className="hover:text-amber-200 ml-2"
            >
              administracion@lantzarez.com
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Suscríbete</h4>
          <p className="mb-4">Recibe nuestras últimas noticias y ofertas</p>
          <form className="flex flex-col space-y-2">
            <Input
              type="email"
              placeholder="Tu email"
              className="bg-stone-800 border-stone-700 text-stone-100 placeholder-stone-400"
            />
            <Button className="bg-amber-600 hover:bg-amber-700 text-stone-100">
              Suscribirse
            </Button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center px-4 md:px-0 space-y-4 md:space-y-0">
        <p className="text-center md:text-left">
          &copy; 2023 Lantzarez. Todos los derechos reservados.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/people/Lantzarez/100037905972080/"
            className="text-stone-100 hover:text-amber-200"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/lantzarez/"
            className="text-stone-100 hover:text-amber-200"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={24} />
          </a>
          <a href="/" className="text-stone-100 hover:text-amber-200">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
