import checkmark from "../assets/icons/checkmark.svg";
import truck from "../assets/icons/truck-light.svg";
import heart from "../assets/icons/heart-outline.svg";
import spiralArrow from "../assets/icons/arrow-sync.svg";
import mainPromo from "../assets/products/promo-main.png";
import secondaryPromo from "../assets/products/promo-secondary.png";

export const usps = [
  { logo: checkmark, text: "30-Day Satisfaction Guarantee" },
  { logo: truck, text: "Free delivery on orders over $40.00" },
  { logo: heart, text: "50.000+ Happy Customers" },
  { logo: spiralArrow, text: "100% Money Back Guarantee" },
];

export const steps = ["Step 1 : Cart Review", "Step 2 : Checkout", "Step 3 : Special Offer", "Step 4 : Confirmation"];

export const specialPromo = {
  "main-image": mainPromo,
  "secondary-image": secondaryPromo,
  title: "ONE TIME ONLY special price for 6 extra Clarifion for only $14 each ($84.00 total!)",
  name: "Clarifion air ionizer",
  rating: 5,
  oldPrice: 180,
  price: 84,
  stock: 12,
  description: "Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.",
  perks: ["Negative Ion Technology may help with allergens", "Designed for air rejuvenation", "Perfect for every room in all types of places."],
  discount: "Save 53% and get 6 extra Clarifision for only $14 Each.",
};

export function parseStepText(text: string) {
  return text.split(": ")[1];
}
