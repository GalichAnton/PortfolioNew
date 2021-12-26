import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IService, ISkill, IProject } from "./type";



export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Node API</b>",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>",
  },

]

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "DevTools(React/Redux)",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "50",
  },
];

export const projects: IProject[] = [
  {
    id: 0,
    name: "Cryptoinfo",
    description:
      "SPA for collecting and displaying information about cryptocurrencies",
    image_path: "/img/1.png",
    deployed_url: "https://my-cryptoinfo.herokuapp.com/",
    github_url: "https://github.com/GalichAnton/Crypto",
    category: ["react"],
    key_techs: ['React', 'Redux', 'Ant Design','Rapid API'],
  },
  {
    id: 8,
    name: "Table of users",
    description:
      "Test task on React and TypeScript (loaded data from back, pagination, filtrating, add user )",
    image_path: "/img/6.png",
    deployed_url: "",
    github_url: "https://github.com/GalichAnton/TestTaskExample",
    category: ["react"],
    key_techs: ['React', 'TypeScript', 'Bootstrap'],
  },
  {
    id: 7,
    name: "Countries",
    image_path: "/img/2.png",
    deployed_url: "https://my-countries--spa.herokuapp.com/",
    github_url: "https://github.com/GalichAnton/Countries",
    category: ["react"],
    description:
      "SPA for collecting and displaying information about countries",
    key_techs: ['React', 'React Router', 'Styled Components'],
  },

  {
    id: 1,
    name: "Restoraunt website",
    image_path: "/img/3.png",
    deployed_url: "https://demo.everland.site/demo/service/13",
    github_url: "https://demo.everland.site/demo/service/13",
    category: ["WordPress"],
    description:
      "Restaurant website with goods, cart and delivery function",
    key_techs: [
      'Wordpress', 'Elementor'
    ],
  },

  {
    id: 2,
    name: "Mesto",
    image_path: "/img/4.png",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://galichanton.github.io/mesto/index.html",
    category: ["vanilla"],
    description:
      "Educational project  Layout of an adaptive single-page website, using the BEM methodology",
    key_techs: ['CSS(Flex/Grid)', 'Native JS'],
  },

  {
    id: 3,
    name: "Knitting",
    image_path: "/img/5.png",
    deployed_url: "https://knitting-nu.vercel.app/",
    github_url: "https://github.com/GalichAnton/Knitting",
    category: ["react","node"],
    description:
      "Website for the sale of handmade knitted products",
    key_techs: ["React", "React Router", "Styled Components"],
  },
  
];