import project1 from "../assets/projects/machine.png";
import project2 from "../assets/projects/hospital.png";
import project3 from "../assets/projects/coaching.png";


export const HERO_CONTENT = `
I am a passionate front-end developer with a talent for creating responsive and interactive web applications. With one year of hands-on experience, I have honed my skills in front-end technologies such as HTML, CSS, and JavaScript. Additionally, I have experience using frameworks and libraries like Bootstrap, Tailwind CSS, React.js, and Next.js.

My goal is to use my skills to build innovative web solutions that provide excellent user experiences and help businesses grow. Explore my portfolio to see examples of my work, and feel free to reach out if you'd like to collaborate on a project!`;

export const ABOUT_TEXT = `I'm a frontend developer with one year  of experience, passionate about crafting user experiences that feel effortless. I started with the core skills – HTML, CSS, and JavaScript – and solidified my foundation by replicating PSD designs and participating in internships. Now, I'm expanding my horizons by diving into React.js and exploring frameworks like Bootstrap and Tailwind CSS for added responsiveness. But my journey doesn't stop there! My love for problem-solving extends to the backend, so I'm currently sharpening my Python skills with Data Structures and Algorithms, and considering venturing into Python backend development. This blend of technical expertise, design understanding, and a thirst for knowledge allows me to approach projects from a well-rounded perspective. Let's collaborate and turn your vision into a stunning and functional reality!`;

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
