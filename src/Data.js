import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaDribbble,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript, SiAdobephotoshop } from "react-icons/si";
import { BsMedium, BsFacebook } from "react-icons/bs";
import portfolio from "./assets/logo.jpeg";
import work1 from "./assets/work1.jpg";
import work2 from "./assets/work2.jpg";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsFacebook />,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Dang Tung",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+9882335**",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "tungwaved@gmail.com",
  },
];

export const icons = [
  <FaHtml5 />,
  <FaCss3 />,
  <DiJavascript />,
  <SiTypescript />,
  <FaReact />,
  // <FaNodeJs />,
  <FaSass />,
  <FaFigma />,
  <SiAdobephotoshop />,
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Senior Web Developer",
    company: "shop.com.mm",
  },
  {
    di: 2,
    year: "2021",
    position: "Junior Web Developer",
    company: "shop.com.mm",
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Dveloper",
    company: "shop.com.mm",
  },
];
export const finishes = [
  {
    id: 1,
    number: "6+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "150+",
    itemName: "Satisfied Customers",
  },
  {
    id: 3,
    number: "669+",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "117+",
    itemName: "Clients Served",
  },
];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    link: " https://waved-admin.vercel.app/ ",
    git: "https://github.com/WaveD2/admin",
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    link: " https://waved-education.vercel.app/",
    git: "https://github.com/WaveD2/WaveD-education",
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    link: " https://wave-demonetflix.vercel.app/",
    git: " https://github.com/WaveD2/demoNetflix",
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "web",
    git: "",
    link: "https://waved-zingmp3.vercel.app/",
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    link: "https://waved2.github.io/myTour/",
    git: "https://github.com/WaveD2/myTour",
    category: "app",
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Ha Dong - Ha Noi",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "tungwaved@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+988233528",
  },
];
