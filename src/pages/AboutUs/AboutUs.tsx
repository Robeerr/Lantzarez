import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MotionNumber from "motion-number";
import { FaHandshake, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../../components/ui/Header.tsx";
import Footer from "../../components/ui/Footer.tsx";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton.tsx";

import GenerationsImage from "../../assets/images/conocenos_cabecera.jpg";
import EmbutidoImage from "../../assets/images/embutido_conocenos.jpg";

const AboutUs: React.FC = () => {
  const [years, setYears] = useState(0);
  const [points, setPoints] = useState(0);
  const [consumers, setConsumers] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener("scroll", handleScroll);

    const incrementNumbers = (
      setState: React.Dispatch<React.SetStateAction<number>>,
      finalValue: number,
      duration: number
    ) => {
      const increment = finalValue / (duration / 100);
      let currentValue = 0;

      const interval = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(interval);
        }
        setState(Math.round(currentValue));
      }, 100);
    };

    incrementNumbers(setYears, 14, 5000);
    incrementNumbers(setPoints, 635, 5000);
    incrementNumbers(setConsumers, 4, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-stone-100 text-stone-800 font-serif flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <section
          className="relative text-center py-64 bg-cover bg-center bg-no-repeat bg-fixed px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage: `url(${GenerationsImage})`,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundBlendMode: "overlay",
          }}
          data-aos="fade-up"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-amber-600 font-playfair">
              Tres Generaciones Comprometidas con la Calidad
            </h2>
            <p className="text-2xl text-stone-100 max-w-4xl mx-auto mb-8 font-playfair">
              Una marca que surge de nuestra empresa, Lantzarez, creada tras una
              larga tradición de 3 generaciones dedicadas al sector de la
              alimentación.
            </p>
          </div>
        </section>

        <section className="container mx-auto text-left py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div data-aos="fade-right">
            <img
              src={EmbutidoImage}
              alt="Distribución de productos"
              className="rounded-lg shadow-lg mb-8"
            />
          </div>
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold mb-4 font-playfair text-amber-600">
              LANTZAREZ
            </h3>
            <p className="text-lg mb-4 font-merriweather">
              En Lantzarez somos distribuidores de la mejor selección de carnes,
              fiambres, embutidos y jamones. Productos únicos entre los que
              disponemos de embutido ibérico de primerísima calidad, quesos y
              vinos.
            </p>
            <p className="text-lg mb-4 font-merriweather">
              Somos la tercera generación dedicada a la venta de productos de
              alimentación. En nuestras familias, nos distinguimos por el trato
              cercano, servicio exclusivo y garantía de calidad.
            </p>
            <p className="text-lg mb-4 font-merriweather">
              Lantzarez también cuenta con marca propia, para la que
              seleccionamos minuciosamente cada producto, conociendo muy de
              cerca los detalles, con materia prima de la mejor calidad para los
              paladares más exigentes.
            </p>
            <p className="text-lg mb-4 font-merriweather">
              Creemos firmemente en nuestros valores de marca, donde apostamos
              por el comercio de proximidad, la fórmula perfecta para que la
              calidad de nuestros productos llegue al consumidor final a través
              del mejor servicio.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div
            className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center"
            data-aos="fade-up"
          >
            <div className="flex flex-col items-center">
              <FaHandshake className="text-amber-600 text-4xl mb-4 mx-auto" />
              <h4 className="text-2xl font-bold font-playfair">Compromiso</h4>
              <p className="text-lg mt-2 font-merriweather text-stone-400">
                Con cada cliente y cada producto, mantenemos un alto nivel de
                compromiso.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-amber-600 text-4xl mb-4 mx-auto" />
              <h4 className="text-2xl font-bold font-playfair">Calidad</h4>
              <p className="text-lg mt-2 font-merriweather text-stone-400">
                Seleccionamos los mejores productos para asegurar la máxima
                calidad.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-amber-600 text-4xl mb-4 mx-auto" />
              <h4 className="text-2xl font-bold font-playfair">Proximidad</h4>
              <p className="text-lg mt-2 font-merriweather text-stone-400">
                Apostamos por el comercio local para acercar los mejores sabores
                a nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        <section
          className="container mx-auto py-16 px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <div className="bg-stone-200 p-8 rounded-lg flex flex-col justify-center items-center shadow-lg">
            <div className="text-center mb-8">
              <h4 className="text-4xl font-bold text-amber-600">
                <MotionNumber
                  value={years}
                  format={{ notation: "compact" }}
                  locales="es-ES"
                />
              </h4>
              <p className="text-lg font-merriweather">
                AÑOS OFRECIENDO MATERIA PRIMA DE LA MEJOR CALIDAD
              </p>
            </div>
            <div className="text-center mb-8">
              <h4 className="text-4xl font-bold text-amber-600">
                <MotionNumber
                  value={points}
                  format={{ notation: "compact" }}
                  locales="es-ES"
                />
              </h4>
              <p className="text-lg font-merriweather">
                PUNTOS DE VENTA TRADICIONAL
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-amber-600">
                <MotionNumber
                  value={consumers}
                  format={{ notation: "compact" }}
                  locales="es-ES"
                />
              </h4>
              <p className="text-lg font-merriweather">
                CONSUMIDORES DE NUESTROS PRODUCTOS
              </p>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default AboutUs;
