import formalPic from '../assets/images/formal-pic.jpg';
import ghostlyGamersImg from '../assets/images/ghostly-gamers.png';
import autoAiderImg from '../assets/images/auto-aider.png';
import ustpGPACalculatorImg from '../assets/images/ustp-gpa-calculator.png';
import luminaImg from '../assets/images/lumina.png';

export const personalInfo = {
  name: "Glenson Montellano Ansin",
  photo: {formalPic},
  university: "University of Science and Technology of Southern Philippines",
  location: "Cagayan de Oro, Philippines",
  about: {
    paragraph1: "I am Software Developer specializing in building scalable web and mobile applications. For me, coding is more than just writing code, it's about turning abstract ideas into tangible, user-friendly realities. I also do automation with Python to streamline complex workflows like sales reporting and web scraping. I am constantly refining my coding practices, ensuring that the applications I build are robust, maintainable, and up to modern industry standards.",
    paragraph2: "When I'm not debugging or architecting systems, you can find me immersing myself in video games, exploring new movies, or curating music playlists. I believe that maintaining a creative balance outside of coding keeps my problem-solving skills sharp.",
  },
  technicalSkills: {
    languages: [
      {
        name: "Javascript",
        icon: "javascript",
      },
      {
        name: "Typescript",
        icon: "typescript",
      },
      {
        name: "Python",
        icon: "python",
      },
      {
        name: "PHP",
        icon: "php",
      },
      {
        name: "C++",
        icon: "cplusplus",
      },
      {
        name: "Java",
        icon: "java",
      },
    ],
    frontend: [
      {
        name: "React",
        icon: "react",
      },
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "Vite",
        icon: "vitejs",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwindcss",
      },
      {
        name: "HTML5",
        icon: "html5",
      },
      {
        name: "CSS",
        icon: "css3",
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: "nodejs",
      },
      {
        name: "Express.js",
        icon: "express",
      },
      {
        name: "Laravel",
        icon: "laravel",
      },
    ],
    mobile: [
      {
        name: "React Native",
        icon: "react",
      },
    ],
    database: [
      {
        name: "PostgreSQL",
        icon: "postgresql",
      },
      {
        name: "MySQL",
        icon: "mysql",
      },
      {
        name: "MongoDB",
        icon: "mongodb",
      },
      {
        name: "SQLite",
        icon: "sqlite",
      },
    ],
    tools: [
      {
        name: "Git",
        icon: "git",
      },
      {
        name: "Figma",
        icon: "figma",
      },
      {
        name: "Postman",
        icon: "postman",
      },
      {
        name: "Github Actions",
        icon: "githubactions",
      },
      {
        name: "Docker",
        icon: "docker",
      },
      {
        name: "Google Cloud Platform",
        icon: "googlecloud",
      },
      {
        name: "Firebase",
        icon: "firebase",
      },
    ],
  },
  projects: [
    {
      projectName: "Ghostly Gamers",
      description: "A website to find games to play in various platforms.",
      link: "https://ghostlygamers.vercel.app/",
      img: {ghostlyGamersImg},
    },
    {
      projectName: "Auto AIDER",
      description: "A smart car diagnostic app using OBD-II with auto repair shop locator.",
      link: "https://github.com/GlensonAnsin/auto-aider-app/releases/tag/v1.0.0-beta.1",
      img: {autoAiderImg},
    },
    {
      projectName: "USTP GPA Calculator",
      description: "A website to calculate the GPA of the students of the USTP.",
      link: "https://ustpgpacalculator.vercel.app/",
      img: {ustpGPACalculatorImg},
    },
    {
      projectName: "Lumina",
      description: "A production-grade Express.js starter kit crafted with TypeScript.",
      link: "https://github.com/GlensonAnsin/lumina",
      img: {luminaImg},
    }
  ],
}