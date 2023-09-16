/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
import {
  linkedin,
  instagram,
  twitter,
  github,
  linkedin1,
  instagram1,
  twitter1,
  github1,
  guesstheword,
  tictactoe,
  guesstheword1,
  guesstheword2,
  guesstheword3,
  tictactoe1,
  tictactoe2,
  tictactoe3,
  sudoku,
  sudoku1,
  sudoku2,
  sudoku3,
  quizzer,
  quizzer1,
  quizzer2,
  quizzer3,
  quizzer4,
  quizzer5,
  quizzer6,
  erp,
  erp1,
  erp2,
  erp3,
  medium,
  medium1,
} from "../assets";

const social = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gajendra-sahu-b24a51227/",
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/g_a_j.j_u",
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://x.com/Gajendr23089031",
    icon: twitter,
    icon1: twitter1,
  },
  {
    id: 4,
    name: "Github",
    url: "https://github.com/gajmain2020",
    icon: github,
    icon1: github1,
  },
  {
    id: 5,
    name: "Medium",
    url: "https://medium.com/@gajmain2020",
    icon: medium,
    icon1: medium1,
  },
];

const technologies = [
  {
    stack: ["languages", "all"],
    name: "HTML 5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "CSS 3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    stack: ["languages", "all"],
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },

  {
    stack: ["frameworks", "all"],
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    stack: ["frameworks", "all"],
    name: "Redux Toolkit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    stack: ["frameworks", "all"],
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    stack: ["tools", "all"],
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    stack: ["tools", "all"],
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    stack: ["tools", "all"],
    name: "Figma",
    icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  },
  {
    stack: ["tools", "all"],
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    stack: ["languages", "all"],
    name: "NodeJS",
    icon: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
  },
  {
    stack: ["frameworks", "all"],
    name: "ExpressJS",
    icon: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
  },
  {
    stack: ["databases", "all"],
    name: "MongoDB",
    icon: "https://w7.pngwing.com/pngs/63/19/png-transparent-mongodb-database-nosql-postgresql-mongo-text-logo-business.png",
  },
  {
    stack: ["languages", "all"],
    name: "C++",
    icon: "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png",
  },
  {
    stack: ["languages", "all"],
    name: "C",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  },
  {
    stack: ["languages", "all"],
    name: "JAVA",
    icon: "https://cdn-icons-png.flaticon.com/512/152/152760.png",
  },
  {
    stack: ["languages", "all"],
    name: "Python",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
  },
  {
    stack: ["databases", "all"],
    name: "MySQL",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7e-ggW79vLvZl_S2ZPYjSpUUDN6uGPx9EeutxAqM&s",
  },
  {
    stack: ["tools", "all"],
    name: "Thunder Client",
    icon: "https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/2.12.0/1694428190244/Microsoft.VisualStudio.Services.Icons.Default",
  },
];

const projects = [
  {
    id: 0,
    name: "College ERP",
    desc: "College-ERP full stack project built on top of MERN Techstack. This project is still under development. College-ERP is a project for college students of Bhilai Institute of Technology, Durg. This provides a bridge between students and faculty members of the College and can be used for infomation sharing and report tracking. This project is not yet deployed",
    tech: ["ReactJS", "CSS3", "MongoDB", "NodeJS", "MUI"],
    img: erp,
    carousel: [erp1, erp2, erp3],
    source_link: "https://github.com/gajmain2020/collegeERP",
    live_link: "",
  },
  {
    id: 1,
    name: "Quizzer",
    desc: "Quizzer full stack project. Quizzer an online platform for taking tests for educational institutions. Created using MERN Techstack. Fully functional not yet deployed. This project ease out assesment taking for teachers as well as for students.",
    tech: ["ReactJS", "CSS3", "MongoDB", "NodeJS", "MUI"],
    img: quizzer,
    carousel: [quizzer1, quizzer2, quizzer3, quizzer4, quizzer5, quizzer6],
    source_link: "https://github.com/gajmain2020/QUIZZER",
    live_link: "",
  },
  {
    id: 1,
    name: "Tic Tac Toe",
    desc: "Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using “X” and the other using “O”. Mainly built with JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: tictactoe,
    carousel: [tictactoe1, tictactoe2, tictactoe3],
    source_link: "https://github.com/gajmain2020/tic-tac-toe",
    live_link: "https://beamish-brioche-8c5a53.netlify.app/",
  },
  {
    id: 2,
    name: "Guess the word",
    desc: "Guess The Word is a fun letter puzzle game where the player have to guess the hidden word using the clues that the game gives. The game ends if the player guesses the correct word or if he chooses the wrong letter 8 times. Mainly built with Javascript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    img: guesstheword,
    carousel: [guesstheword1, guesstheword2, guesstheword3],
    source_link: "https://github.com/gajmain2020/Guess-the-word",
    live_link: "https://gajmain2020.github.io/guess-the-word/",
  },
  {
    id: 3,
    name: "Sudoku Project",
    desc: "Sudoku is a simple and classic game that is played on a 9x9 grid. The game is typically played with one player, and have to fill from 1 to 9 in ever row, each column and each 3x3 sub-grid and the constraint here is there should be no repetation of digits in the same row, column and 3x3 sub-grid of sudoku.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    img: sudoku,
    carousel: [sudoku1, sudoku2, sudoku3],
    source_link: "https://github.com/gajmain2020/sudoku-project",
    live_link: "https://gentle-dodol-8db568.netlify.app/",
  },
];

const education = [
  {
    id: 1,
    header: "Bachelor of Technology",
    stream: "Computer Science And Engineering",
    school: "Bhilai Institute Of Technology, Durg",
    addr: "Durg, Chhattisgarh",
    pincode: "491001",
    cpi: "8.95 Aggregate",
  },
  {
    id: 2,
    header: "Senior Secondary Education",
    stream: "Maths, Physics, Chemistry",
    school: "St. Michael's English Medium School",
    addr: "Raigarh, Chhattisgarh",
    pincode: "496001",
    cpi: "91.18% PCM",
  },
];

const navLinks = [
  {
    id: 1,
    name: "About",
    url: "/#about",
  },
  {
    id: 2,
    name: "Education",
    url: "/#education",
  },
  {
    id: 3,
    name: "Work",
    url: "/#work",
  },
  {
    id: 4,
    name: "Contact",
    url: "/#contact",
  },
];

export { technologies, projects, education, social, navLinks };
