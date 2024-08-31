import React, { useState } from "react";
import emailjs from "emailjs-com";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Header from "../../components/ui/Header.tsx";
import Footer from "../../components/ui/Footer.tsx";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton.tsx";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_p1uf9pp",
        "template_69n332q",
        formData,
        "2Uql9M7zeuydWs_1a"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <div className="bg-stone-100 text-stone-800 font-serif flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto py-32 px-4">
        <h1 className="text-4xl font-bold text-center mb-12 font-playfair">
          Contacto
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            {isSubmitted ? (
              <p className="text-green-600">
                ¡Gracias por tu mensaje! Te responderemos pronto.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-lg font-semibold mb-2 font-playfair">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded font-merriweather"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2 font-playfair">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded font-merriweather"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2 font-playfair">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded font-merriweather"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2 font-playfair">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded font-merriweather"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-auto inline-block rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:from-amber-600 hover:to-amber-700 hover:shadow-lg font-raleway"
                >
                  Enviar
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 font-playfair">
              Nuestra Ubicación
            </h2>
            <div className="w-full h-96">
              <APIProvider apiKey="AIzaSyD2e0Xuk98bKJknVoRNftgLfvp6rhUeMXA">
                <Map
                  style={{ width: "100%", height: "100%" }}
                  defaultCenter={{
                    lat: 43.2378874069092,
                    lng: -2.7984436026919632,
                  }}
                  defaultZoom={16}
                  gestureHandling={"greedy"}
                  disableDefaultUI={false}
                >
                  <Marker
                    position={{
                      lat: 43.23769,
                      lng: -2.7984436026919632,
                    }}
                    icon={{
                      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    }}
                  />
                </Map>
              </APIProvider>
            </div>
          </div>
        </div>
      </main>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default ContactPage;
