import React, { useState } from "react";
import Header from "../../components/ui/Header.tsx";
import Footer from "../../components/ui/Footer.tsx";
import { ChevronDown } from "lucide-react";
import { recipes } from "../../data/recipesData.ts";
import Modal from "react-modal";
import ScrollToTopButton from "../../components/ui/ScrollToTopButton.tsx";

Modal.setAppElement("#root");

const recipeTypes = ["Lunch", "Chorizo", "Codillo", "Salchichas", "Jamón"];

const RecipesPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

  const filteredRecipes = recipes.filter((recipe) => {
    return selectedType ? recipe.type === selectedType : true;
  });

  const openModal = (recipe: any) => {
    setSelectedRecipe(recipe);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="bg-stone-100 text-stone-800 font-serif flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto py-32 px-4">
        <div className="flex justify-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center font-playfair">
              Explora Recetas
            </h2>
            <div className="relative inline-block">
              <select
                className="appearance-none rounded-full border border-gray-300 bg-white pl-4 pr-10 py-2 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                onChange={(e) => setSelectedType(e.target.value)}
                value={selectedType || ""}
              >
                <option value="" className="font-raleway">
                  Todas las Recetas
                </option>
                {recipeTypes.map((type) => (
                  <option key={type} value={type} className="font-raleway">
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col hover:shadow-lg transition-shadow duration-300"
              style={{ minHeight: "350px" }}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-2 font-playfair">
                  {recipe.name}
                </h3>
                <p className="text-sm text-stone-400 mb-2 font-merriweather">
                  {recipe.description}
                </p>
                <h4 className="text-md font-bold mb-1 font-playfair">
                  Ingredientes:
                </h4>
                <ul className="list-disc list-inside text-sm text-stone-400 mb-4 font-merriweather">
                  {recipe.ingredients
                    .slice(0, 2)
                    .map((ingredient: string, index: number) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  {recipe.ingredients.length > 2 && <li>y más...</li>}
                </ul>
              </div>
              <button
                className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded mt-auto font-raleway"
                onClick={() => openModal(recipe)}
              >
                Ver Receta
              </button>
            </div>
          ))}
        </div>
      </main>

      {selectedRecipe && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Detalles de la Receta"
          className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-20"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <h2 className="text-3xl font-bold mb-4 font-playfair">
            {selectedRecipe.name}
          </h2>
          <h3 className="text-xl font-bold mb-2 font-playfair">Ingredientes</h3>
          <ul className="list-disc list-inside mb-4">
            {selectedRecipe.ingredients.map(
              (ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              )
            )}
          </ul>
          <h3 className="text-xl font-bold mb-2 font-playfair">
            Instrucciones
          </h3>
          <ol className="list-decimal list-inside mb-4">
            {selectedRecipe.steps.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <button
            className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded font-raleway"
            onClick={closeModal}
          >
            Cerrar
          </button>
        </Modal>
      )}

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default RecipesPage;
