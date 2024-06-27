import spiralArrow from "../assets/icons/arrow-sync.svg";
import checkmark from "../assets/icons/checkmark.svg";
import heart from "../assets/icons/heart-outline.svg";
import truck from "../assets/icons/truck-light.svg";
import mainPromo from "../assets/products/promo-main.png";
import secondaryPromo from "../assets/products/promo-secondary.png";
import amex from "../assets/paymentMethods/amex.svg";
import applePay from "../assets/paymentMethods/apple-pay.svg";
import gpay from "../assets/paymentMethods/gpay.svg";
import mastercard from "../assets/paymentMethods/mastercard.svg";
import paypal from "../assets/paymentMethods/paypal.svg";
import shopPay from "../assets/paymentMethods/shop-pay.svg";
import visa from "../assets/paymentMethods/visa.svg";

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
  name: "Clarifion air ionizer",
  rating: 5,
  oldPrice: 180,
  price: 84,
  stock: 12,
  description: "Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.",
  perks: [
    "Negative Ion Technology may <b>help with allergens</b>",
    "Designed for <b>air rejuvenation</b>",
    `<b>Perfect for every</b> room in all types of places.`,
  ],
};

export const paymentMethods = [amex, applePay, gpay, mastercard, paypal, shopPay, visa];

export function parseStepText(text: string) {
  return text.split(": ")[1];
}

export function styleText(text: string) {
  return <span style={{ color: "#2C7EF8" }}>{text}</span>;
}
