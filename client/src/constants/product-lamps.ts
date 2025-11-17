import abajurImage from "../assets/lamps/abajur.png";
import bureauImage from "../assets/lamps/bureau.png";
import crystalImage from "../assets/lamps/crystal.png";
import frenchImage from "../assets/lamps/french.png";
import landshadeImage from "../assets/lamps/landshade.png";
import pendantImage from "../assets/lamps/pendant.png";
import { type Product } from "../types";

export const productsLamps: Product[] = [
  {
    id: "l1",
    category: "Lamps",
    name: "Ajur Lamp",
    price: 1299,
    rating: 5,
    image: abajurImage,
  },
  {
    id: "l2",
    category: "Lamps",
    name: "Bureau Lamp",
    price: 1299,
    rating: 5,
    image: bureauImage,
  },
  {
    id: "l3",
    category: "Lamps",
    name: "Crystal Lamp",
    price: 1299,
    rating: 5,
    image: crystalImage,
  },
  {
    id: "l4",
    category: "Lamps",
    name: "French Lamp",
    price: 1299,
    rating: 5,
    image: frenchImage,
  },
  {
    id: "l5",
    category: "Lamps",
    name: "Landshade Lamp",
    price: 1299,
    rating: 5,
    image: landshadeImage,
  },
  {
    id: "l6",
    category: "Lamps",
    name: "Pendant Lamp",
    price: 1299,
    rating: 5,
    image: pendantImage,
  }
];
