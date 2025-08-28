import project1 from "../assets/projects/machine.png";
import project2 from "../assets/projects/hospital.png";
import project3 from "../assets/projects/coaching.png";


export const HERO_CONTENT = `
I’m an aspiring AI/ML Engineer with a background in web development. I love exploring how intelligent systems can be built using data, machine learning, and modern technologies. My goal is to keep learning, experimenting, and building projects that combine creativity with AI.`;

export const ABOUT_TEXT = `My journey in tech started with front-end development, where I built responsive and interactive web applications using HTML, CSS, JavaScript, and React. 

Later, I developed a strong interest in Artificial Intelligence and Machine Learning. I explored topics like supervised and unsupervised learning, NLP, and recommendation systems. 

Currently, I’m focusing on becoming an AI/ML Engineer by combining my software development foundation with machine learning, natural language processing, and deep learning. I enjoy solving problems, building intelligent applications, and continuously improving my skills.`;

export const EXPERIENCES = [
  {
    year: "MAR/2024 - APR/2024",
    role: "Internee As a NextJs Developer",
    company: "Qavi Tech.",
    description: `During my internship, I worked as a junior Next.js developer, where I gained valuable experience and learned a lot. This role allowed me to deepen my understanding of building scalable and efficient web applications, and I had the opportunity to work on real-world projects that enhanced my skills and knowledge.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "SEP/2023 - NOV/2023",
    role: "Internee As a Frontend Developer ",
    company: "Crescentic Digital",
    description: `During my internship, I worked as a front-end developer, where I learned to create web pages from PSD and Figma designs using HTML, CSS, and JavaScript. This experience helped me develop a keen eye for detail and improved my ability to turn design concepts into functional web pages.`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
  },

];

export const PROJECTS = [
  {
    title: "E-Commerce Website for Machine",
    image: project1,
    description:
      "I created the front end of an e-commerce website for a client. I designed it based on a reference website and used all the data from the reference website as dummy data.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap",],
    link: "https://machine-selling.vercel.app/index.html"
  },
  {
    title: "Hospital Website",
    image: project2,
    description:
      "I've created the frontend of this website using html css javascript for my practice. This website is use for online registration for patient ",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap",],
    link: "https://babarhospital.vercel.app/"
  },
  {
    title: "Institute Website",
    image: project3,
    description:
      "This is the landing page of a foreign language learning institute, which I created using Next.js",
    technologies: ["Next Js", "Tailwind CSS"],
    link: "https://teaching-web.vercel.app/"

  }
];

export const CONTACT = {
  address: "Karachi, Pakistan ",
  phoneNo: "+92 332-1138116 ",
  email: "babarrj854@gmail.com",
};
