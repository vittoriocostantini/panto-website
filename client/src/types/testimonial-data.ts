import review1Image from "../assets/reviews/review-1.png";
import review2Image from "../assets/reviews/review-2.png";
import review3Image from "../assets/reviews/review-3.png";
import review4Image from "../assets/reviews/review-4.jpeg";
import review5Image from "../assets/reviews/review-5.jpeg";
import review6Image from "../assets/reviews/review-6.jpeg";
import profile1Image from "../assets/reviews/avatars/avatar-1.png";
import profile2Image from "../assets/reviews/avatars/avatar-2.png";
import profile3Image from "../assets/reviews/avatars/avatar-3.png";
import profile4Image from "../assets/reviews/avatars/avatar-4.png";
import profile5Image from "../assets/reviews/avatars/avatar-5.png";
import profile6Image from "../assets/reviews/avatars/avatar-6.png";


export interface Testimonial {
  backgroundImage: string;
  profileImage: string;
  name: string;
  title: string;
  testimonial: string;
  rating: number;
}


export const testimonialsData: Testimonial[] = [
  {
    backgroundImage: review1Image,
    profileImage: profile1Image,
    name: "Mia Lestari",
    title: "Architect and Interior Designer",
    testimonial:
      "Thank you for the best service, I'm very satisfied with the product and the service",
    rating: 4,
  },
  {
    backgroundImage: review2Image,
    profileImage: profile2Image,
    name: "John Doe",
    title: "Homemaker",
    testimonial:
      "Thanks Panto, my living room became very homey and my family loves it",
    rating: 5,
  },
  {
    backgroundImage: review3Image,
    profileImage: profile3Image,
    name: "Maria Ruiz",
    title: "Independent Worker",
    testimonial:
      "I ran out of money when buying furniture, luckily Panto offers installments",
    rating: 5,
  },
  {
    backgroundImage: review4Image,
    profileImage: profile4Image,
    name: "Steven Duran",
    title: "Furniture Designer",
    testimonial:
      "I was short on cash when buying furniture, fortunately Panto has payment plans",
    rating: 5,
  },
  {
    backgroundImage: review5Image,
    profileImage: profile5Image,
    name: "Jane Orellana",
    title: "Interior Designer",
    testimonial:
      "I didn't have enough money for furniture, but Panto's installment option saved me",
    rating: 5,
  },
  {
    backgroundImage: review6Image,
    profileImage: profile6Image,
    name: "Jesica Lorena",
    title: "Private Employee",
    testimonial:
      "I was running low on funds for furniture, thank goodness Panto allows installments",
    rating: 5,
  },
];
