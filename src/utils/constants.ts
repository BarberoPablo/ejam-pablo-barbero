import checkmark from "../assets/icons/checkmark.svg";
import truck from "../assets/icons/truck-light.svg";
import heart from "../assets/icons/heart-outline.svg";
import spiralArrow from "../assets/icons/arrow-sync.svg";

export const usps = [
  { logo: checkmark, text: "30-Day Satisfaction Guarantee" },
  { logo: truck, text: "Free delivery on orders over $40.00" },
  { logo: heart, text: "50.000+ Happy Customers" },
  { logo: spiralArrow, text: "100% Money Back Guarantee" },
];

export const steps = ["Step 1 : Cart Review", "Step 2 : Checkout", "Step 3 : Special Offer", "Step 4 : Confirmation"];

export function parseStepText(text: string) {
  return text.split(": ")[1];
}
