import { type Product } from "../types";
import bedspreadImage from "../assets/beds/bedspread.png";
import fauxImage from "../assets/beds/faux.png";
import footImage from "../assets/beds/foot.png";
import mattressImage from "../assets/beds/mattress.png";
import nightstandImage from "../assets/beds/nightstand.png";
import platformImage from "../assets/beds/platform.png";

export const productsBeds: Product[] = [
  {
    id: "b1",
    category: "Beds",
    name: "Bedspread Bed",
    price: 699,
    rating: 5,
    image: bedspreadImage,
  },
  {
    id: "b2",
    category: "Beds",
    name: "Faux Leather Bed",
    price: 829,
    rating: 4,
    image: fauxImage,
  },
  {
    id: "b3",
    category: "Beds",
    name: "Foot Board Bed",
    price: 915,
    rating: 5,
    image: footImage,
  },
  {
    id: "b4",
    category: "Beds",
    name: "Mattress Bed",
    price: 545,
    rating: 4,
    image: mattressImage,
  },
  {
    id: "b5",
    category: "Beds",
    name: "Nightstand Combo",
    price: 499,
    rating: 4,
    image: nightstandImage,
  },
  {
    id: "b6",
    category: "Beds",
    name: "Platform Bed",
    price: 780,
    rating: 5,
    image: platformImage,
  },
];

