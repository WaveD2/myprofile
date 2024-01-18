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
import work4 from "./assets/work4.jpg";
import work5 from "./assets/work5.jpg";
import work6 from "./assets/work6.jpg";
import work7 from "./assets/work7.png";
import work8 from "./assets/work8.jpg";
import work9 from "./assets/work9.jpg";
import work10 from "./assets/work10.jpg";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [<FaInstagram />, <FaLinkedin />, <BsFacebook />];

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

export const workImages = [
  {
    id: 1,
    img: work8,
    name: "project 1",
    category: "react",
    link: "https://shop-huongmy.vercel.app",
    git: "https://github.com/WaveD2/shop-huongmy",
  },
  {
    id: 2,
    img: work1,
    name: "project 2",
    category: "react",
    link: " https://waved-admin.vercel.app/ ",
    git: "https://github.com/WaveD2/admin",
  },
  {
    id: 3,
    img: work2,
    name: "project 3",
    category: "react",
    link: " https://waved-education.vercel.app/",
    git: "https://github.com/WaveD2/WaveD-education",
  },
  {
    id: 4,
    img: work3,
    name: "project 4",
    category: "react",
    link: " https://wave-demonetflix.vercel.app/",
    git: " https://github.com/WaveD2/demoNetflix",
  },
  {
    id: 5,
    img: work4,
    name: "project 5",
    category: "react",
    git: "https://github.com/WaveD2/WaveDpodcast",
    link: "https://wave-podcast.vercel.app/",
  },
  {
    id: 6,
    img: work5,
    name: "project 6",
    link: "https://github.com/WaveD2/WaveD-Travel",
    git: "https://waved2.github.io/WaveD-Travel/",
    category: "html/css/js",
  },
  {
    id: 7,
    img: work6,
    name: "project 7",
    link: "https://waved-zingmp3.vercel.app",
    git: "https://github.com/WaveD2/zingmp3",
    category: "react",
  },
  {
    id: 8,
    img: work7,
    name: "project 8",
    link: "https://waved2.github.io/myCaro/",
    git: "https://github.com/WaveD2/myCaro",
    category: "html/css/js",
  },
  {
    id: 9,
    img: work9,
    name: "project 9",
    link: "https://shophuongmy.vercel.app",
    git: "https://github.com/WaveD2/shophuongmy-ecommer",
    category: "Fullstack",
  },
  {
    id: 10,
    img: work10,
    name: "project 10",
    link: "https://shopcar-waved.vercel.app/",
    git: "https://github.com/WaveD2/shop-car",
    category: "NextJs",
  },
];

export const workNavs = ["All", "React", "HTML/CSS/JS", "Fullstack", "NextJs"];

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
