import Image1 from "../Assets/Images-main/bag.jpg";
import Image2 from "../Assets/Images-main/sandle.jpg";
import Image3 from "../Assets/Images-main/watch.jpg";
import Image4 from "../Assets/Images-main/cap.jpg";
import Image5 from "../Assets/Images-main/boot1.jpg";
import Image6 from "../Assets/Images-main/dove.jpg";
import Image7 from "../Assets/Images-main/headphone.jpg";
import Image8 from "../Assets/Images-main/robot.jpg";
import Image9 from "../Assets/Images-main/wwatch.jpg";
import Image10 from "../Assets/Images-main/shirt.jpg";

import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export const Categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Automotive",
];

export const infoSectionData = [
  {
    icon: <FaShippingFast />,
    title: "Free Shipping",
    description: "Get your orders delivered with no extra const"
  },
  {
    icon: <FaHeadset />,
    title: "Support 24/7",
    description: "We are here to assist you anytime"
  },
  {
    icon: <FaMoneyBill1Wave />,
    title: "100% Money back",
    description: "Get Your Orders delivered with no extra const"
  },
  {
    icon: <FaLock />,
    title: "Payment secure",
    description: "Your payment information is safe with us"
  },
  {
    icon: <FaTag />,
    title: "Discount",
    description: "Enjoy the best prices on our products"
  }
]


export const mockData = [
  {
    id: 1,
    image: Image9,
    name: "Product 1",
    price: 29.99,
  },
  {
    id: 2,
    image: Image8,
    name: "Product 2",
    price: 39.99,
  },
  {
    id: 3,
    image: Image7,
    name: "Product 3",
    price: 19.99,
  },
  {
    id: 4,
    image: Image6,
    name: "Product 4",
    price: 49.99,
  },
  {
    id: 5,
    image: Image10,
    name: "Product 5",
    price: 49.99,
  },
  {
    id: 6,
    image: Image4,
    name: "Product 6",
    price: 49.99,
  },
  {
    id: 7,
    image: Image5,
    name: "Product 7",
    price: 49.99,
  },
  {
    id: 8,
    image: Image3,
    name: "Product 8",
    price: 49.99,
  },
  {
    id: 9,
    image: Image2,
    name: "Product 9",
    price: 49.99,
  },
  {
    id: 10,
    image: Image1,
    name: "Product 10",
    price: 49.99,
  },
];