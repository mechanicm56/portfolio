import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Full Stack Engineer",
    organisation: {
      name: "Intellizon Systems, Hyderabad",
      href: "",
    },
    date: "Nov, 2021 - Nov, 2022",
    location: "Remote",
    description: [
      "Contributed to the development and maintenance of a <b>core internal SaaS platform</b> supporting <b>company-wide operational workflows</b>, used daily by cross-functional teams.",
      "Modernized legacy frontend by migrating UI components to <b>Material UI</b>, improving <b>usability consistency</b> and reducing UI-related bugs by an estimated <b>25–30%.</b>",
      "Improved accuracy and reliability of <b>business logic and operational algorithms</b>, leading to more consistent system outputs and reduced manual corrections.",
      "Designed and integrated <b>RESTful APIs</b> to support frontend features and internal tools, improving data flow between services.",
      "Managed <b>server deployments and environment configurations</b>, contributing to smoother releases and reduced downtime during updates.",
      "Actively reviewed code and mentored junior team members, helping improve <b>code readability, maintainability, and adherence to best practices.</b>",
    ],
  },
  {
    title: "Big Data Professional, Traineeship.",
    organisation: {
      name: "MedTourEasy, Gurugram",
      href: "",
    },
    date: "Dec, 2022 - Dec, 2022",
    location: "Remote",
    description: [
      "Completed hands-on traineeship in Big Data technologies",
      "Gained practical exposure to data processing and analysis",
      "Worked with tools such as Hadoop, Spark, SQL.",
      "Learned fundamentals of data pipelines and large-scale datasets",
      "Performed data cleaning, transformation, and visualization",
    ],
    certificate: "/certificates/Pranav_BigDataTranieeship.pdf",
  },
  {
    title: "Full Stack Engineer",
    organisation: {
      name: "Freelance / Independent Projects",
      href: "",
    },
    date: "Jan, 2023 - Sep, 2025",
    location: "Remote",
    description: [
      "Completed client-based and personal projects in Web, App, & Design.",
      "Applied practical skills in real-world scenarios",
      "Delivered solutions based on client requirements",
    ],
  },
  {
    title: "AI / ML Data Science, Intern",
    organisation: {
      name: "Labmentix, Bengaluru",
      href: "https://labmentix.in/",
    },
    date: "Oct, 2025 - March, 2026",
    location: "Remote (Unpaid)",
    description: [
      "Work with Data extraction from csv, json, sql database.",
      "Visualize Data using seaborn library Computer Vision, Augmentation, YOLOv8",
      "ML models from sklearn with MLflow integration",
      "Dashboard & Reports deploy with Streamlit App",
    ],
  },
].reverse();
