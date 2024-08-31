import LunchImage from "../assets/images/tortilla_lunch.jpg";
import ChorizoImage from "../assets/images/cazuela_chorizo.jpg";
import CodilloImage from "../assets/images/codillo_horno.jpg";
import SalchichasImage from "../assets/images/salchichas_parrilla.jpg";
import JamonImage from "../assets/images/ensalada_jamon.jpg";

export const recipes = [
  {
    id: 1,
    name: "Tortilla con Lunch",
    image: LunchImage,
    description: "Deliciosa tortilla rellena de lunch y queso.",
    ingredients: ["Lunch", "Huevos", "Queso", "Sal", "Pimienta"],
    steps: [
      "Batir los huevos y añadir sal y pimienta.",
      "Agregar el lunch en trozos y el queso rallado.",
      "Calentar una sartén con un poco de aceite y verter la mezcla.",
      "Cocinar hasta que esté dorada y darle la vuelta.",
      "Servir caliente.",
    ],
    type: "Lunch",
  },
  {
    id: 2,
    name: "Cazuela de Chorizo",
    image: ChorizoImage,
    description: "Cazuela con chorizo, patatas y pimientos.",
    ingredients: ["Chorizo", "Patatas", "Pimientos", "Cebolla", "Ajo"],
    steps: [
      "Cortar el chorizo en rodajas y dorar en una sartén.",
      "Agregar la cebolla y el ajo picados y cocinar hasta que estén suaves.",
      "Añadir las patatas en cubos y los pimientos cortados.",
      "Cocinar hasta que las patatas estén tiernas.",
      "Servir caliente con un poco de perejil fresco por encima.",
    ],
    type: "Chorizo",
  },
  {
    id: 3,
    name: "Codillo al Horno",
    image: CodilloImage,
    description: "Codillo asado con hierbas y patatas.",
    ingredients: ["Codillo", "Patatas", "Romero", "Ajo", "Aceite de oliva"],
    steps: [
      "Precalentar el horno a 180°C.",
      "Colocar el codillo en una bandeja de horno y añadir sal, romero y ajo.",
      "Rociar con aceite de oliva y añadir las patatas alrededor.",
      "Hornear durante 2 horas o hasta que esté bien dorado.",
      "Servir caliente con las patatas asadas.",
    ],
    type: "Codillo",
  },
  {
    id: 4,
    name: "Salchichas a la Parrilla",
    image: SalchichasImage,
    description: "Salchichas asadas a la parrilla con verduras.",
    ingredients: ["Salchichas", "Pimientos", "Cebolla", "Tomates cherry"],
    steps: [
      "Precalentar la parrilla a fuego medio.",
      "Colocar las salchichas y las verduras en la parrilla.",
      "Asar hasta que las salchichas estén doradas y las verduras suaves.",
      "Servir caliente con mostaza y pan.",
    ],
    type: "Salchichas",
  },
  {
    id: 5,
    name: "Ensalada de Jamón",
    image: JamonImage,
    description: "Ensalada fresca con jamón, queso y nueces.",
    ingredients: ["Jamón", "Queso", "Lechuga", "Tomate", "Nueces"],
    steps: [
      "Lavar y cortar la lechuga y los tomates.",
      "Cortar el jamón y el queso en tiras.",
      "Mezclar todos los ingredientes en un bol grande.",
      "Añadir nueces y aderezo al gusto.",
      "Servir frío.",
    ],
    type: "Jamón",
  },
];
