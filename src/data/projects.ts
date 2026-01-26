import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/kanban/light.jpg",
      DARK: "/images/projects/kanban/dark.jpg",
    },
  },
  {
    index: 1,
    title: "Shopper",
    href: "/projects",
    tags: ["ReactJs", "Tailwindcss", "MongoDB", "ExpressJs", "Vercel"],
    image: {
      LIGHT: "/images/projects/shopper/light.jpg",
      DARK: "/images/projects/shopper/light.jpg",
    },
  },
  {
    index: 2,
    title: "GamePlay",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/gameplay/light.jpg",
      DARK: "/images/projects/gameplay/dark.jpg",
    },
  },
  {
    index: 3,
    title: "Dashboard",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Vercel"],
    image: {
      LIGHT: "/images/projects/aura/light.jpg",
      DARK: "/images/projects/aura/dark.jpg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Shopper Spectrum: Customer Segmentation and Product Recommendations in E-Commerce",
    favicon: "",
    imageUrl: ["/images/projects/shopperSpectrum/dark.jpg"],
    featured: true,
    description:
      "Shopper Spectrum is an end-to-end E-Commerce Analytics project that focuses on: Customer segmentation using RFM analysis and KMeans clustering, Product recommendation using Item-based Collaborative Filtering",
    sourceCodeHref: "https://github.com/mechanicm56/shopper-spectrum",
    liveWebsiteHref: "https://shopper-spectrum-ecom.streamlit.app/",
    tag: ["Python", "JupyterNotebook", "Streamlit", "StreamlitCloud"],
  },
  {
    name: "Aerial Object Detection – Bird vs Drone",
    favicon: "",
    imageUrl: ["/images/projects/aerialObjectDetection/dark.jpg"],
    featured: true,
    description:
      "This project focuses on building a Deep Learning–based system capable of classifying aerial images into two categories: Bird & Drone",
    sourceCodeHref:
      "https://github.com/mechanicm56/Aerial-Object-Detection-Bird-vs-Drone",
    liveWebsiteHref: "https://bird-vs-drone.streamlit.app/",
    tag: [
      "Python",
      "JupyterNotebook",
      "CNN",
      "PyTorch",
      "Tensoflow:keras",
      "Streamlit",
      "StreamlitCloud",
      "Yolo11",
    ],
  },
  {
    name: "EMI Predict AI",
    favicon: "",
    imageUrl: ["/images/projects/emipredict/dark.jpg"],
    featured: true,
    description:
      "Financial Risk Assessment & EMI Prediction Platform. This project builds a financial risk assessment platform that integrates machine learning models with MLflow experiment tracking to create an interactive Streamlit web application for EMI prediction.",
    sourceCodeHref: "https://github.com/mechanicm56/emipredict_ai",
    liveWebsiteHref: "",
  },
  {
    name: "PhonePe Visualization",
    favicon: "",
    imageUrl: ["/images/projects/phonepe/dark.jpg"],
    featured: true,
    description:
      "The Phonepe Transaction and User Data Visualization project is a Python-based solution that extracts data from the Phonepe Pulse Github repository, transforms and stores it in a MySQL database, and displays it through an interactive dashboard using Streamlit.",
    sourceCodeHref: "https://github.com/mechanicm56/phonpe-pulse-visualization",
    liveWebsiteHref: "https://pulse-phonepe.streamlit.app/",
  },
  {
    name: "Kanban app",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/kanban/light.jpg",
      "/images/projects/kanban/dark.jpg",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: "https://github.com/mechanicm56/kanban",
    liveWebsiteHref: "https://shopper-ni69.vercel.app/",
  },
  {
    name: "Shopper",
    favicon: "/images/projects/logos/shopper.ico",
    imageUrl: [
      "/images/projects/shopper/light.jpg",
      "/images/projects/shopper/dark.jpg",
    ],
    description:
      "Shopper is a modern e-commerce app for browsing, purchasing, and managing products with seamless checkout, user profiles. This app is made using Reactjs, Typescrip, MongoDB, ExpressJs and Tailwindcss library.",
    sourceCodeHref: "https://github.com/mechanicm56/shopper",
    liveWebsiteHref: "https://shopper-omega-five.vercel.app/dezigner",
  },
  {
    name: "Memeverse",
    favicon: "/images/projects/logos/memeverse.png",
    imageUrl: [
      "/images/projects/memeverse/light.jpg",
      "/images/projects/memeverse/dark.jpg",
    ],
    description:
      "the ultimate platform for all meme enthusiasts! Whether you're here to browse the funniest, trending memes or showcase your own hilarious creations, we've got you covered. This app is made using Reactjs, Typescrip, MongoDB, ExpressJs and Tailwindcss library.",
    sourceCodeHref: "https://github.com/mechanicm56/memeverse",
    liveWebsiteHref: "https://memeverse-psi.vercel.app/",
  },
  {
    name: "Game Play",
    favicon: "/images/projects/logos/gameplay.ico",
    imageUrl: [
      "/images/projects/gameplay/dark.jpg",
      "/images/projects/gameplay/light.jpg",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/mechanicm56/GamePlay",
    liveWebsiteHref: "https://gameplay-ashy.vercel.app/",
  },
  {
    name: "Dashboard",
    favicon: "/images/projects/logos/dashboard.ico",
    imageUrl: [
      "/images/projects/aura/light.jpg",
      "/images/projects/aura/dark.jpg",
    ],
    description:
      "A dashboard template provides a pre-built interface for displaying key metrics, data visualizations, and controls in a unified layout.",
    sourceCodeHref: "https://github.com/mechanicm56/aura",
    liveWebsiteHref: "https://aura-one-mu.vercel.app/",
  },
];
