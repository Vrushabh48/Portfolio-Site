import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Express } from "@/components/ui/svgs/express";
import { MongoDB } from "@/components/ui/svgs/mongoDB";
import { AWS } from "@/components/ui/svgs/aws";
import { Prisma } from "@/components/ui/svgs/prisma";
import { Auth } from "@/components/ui/svgs/auth";

export const DATA = {
  name: "Vrushabh Patil",
  initials: "VP",
  url: "https://vrushabh.site",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "I build production-ready MVPs for startups, fast and secure.",
  summary:
    "I help startups and founders turn ideas into reliable, production-ready systems—so you can launch faster and scale without rebuilding everything later. I take care of the entire backend foundation: user authentication, APIs, data structure, and system reliability. My work is focused on building MVPs that are secure, scalable, and easy to extend as your product and users grow. If you want to move fast without running into technical roadblocks later, I can help you get there.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Express", icon: Express },
    { name: "Postgres", icon: Postgresql },
    { name: "MongoDB", icon: MongoDB },
    { name: "AWS", icon: AWS },
    { name: "Prisma", icon: Prisma },
    { name: "Auth", icon: Auth },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  services: [
    {name: "MVP Backend Development", description: "I help founders turn ideas into production-ready MVP backends—handling core logic, authentication, APIs, and data design so your product is ready for real users and future growth."},
    {name: "Custom Web Application Development", description: "End-to-end development of custom web applications tailored to your business needs, with a strong focus on performance, security, and scalability."},
    {name: "Backend Systems & APIs", description: "Design and implementation of secure, scalable backend systems, including user authentication, role management, and API development for web apps."},
    {name: "Landing Page & Frontend Development", description: "High-quality, responsive landing pages and frontend interfaces for startups, brands, and creators—built to clearly communicate value and convert users."}
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "vrushabhpatil4801@gmail.com",
    tel: "+91 9309928626",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Vrushabh48",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vrushabhpatil48/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/vrushabhpatil48",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "DNV",
      href: "https://www.dnv.com/",
      badges: [],
      location: "On-Site [Hybrid]",
      title: "Software Devlopment Engineer Intern",
      logoUrl: "/dnv.png",
      start: "Jan 2026",
      end: "Present",
      description:
        "Working with the Maritime Team to develop and scale DNV's Maritime Software for Shiping companies around the world.",
    },
  ],
  // education: [
  //   {
  //     school: "Buildspace",
  //     href: "https://buildspace.so",
  //     degree: "s3, s4, sf1, s5",
  //     logoUrl: "/buildspace.jpg",
  //     start: "2023",
  //     end: "2024",
  //   },
  //   {
  //     school: "University of Waterloo",
  //     href: "https://uwaterloo.ca",
  //     degree: "Bachelor's Degree of Computer Science (BCS)",
  //     logoUrl: "/waterloo.png",
  //     start: "2016",
  //     end: "2021",
  //   },
  //   {
  //     school: "Wilfrid Laurier University",
  //     href: "https://wlu.ca",
  //     degree: "Bachelor's Degree of Business Administration (BBA)",
  //     logoUrl: "/laurier.png",
  //     start: "2016",
  //     end: "2021",
  //   },
  //   {
  //     school: "International Baccalaureate",
  //     href: "https://ibo.org",
  //     degree: "IB Diploma",
  //     logoUrl: "/ib.png",
  //     start: "2012",
  //     end: "2016",
  //   },
  // ],
  projects: [
    {
      title: "Devs Network",
      href: "https://thedevsnetwork.com",
      dates: "Aug 2024 - Dec 2024",
      active: true,
      description:
        "Building a community platform for developers to connect, share knowledge, and collaborate on projects.",
      technologies: [
        "React.js",
        "Typescript",
        "Node.js",
        "Experss",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Dodo Payments",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://thedevsnetwork.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/devs-network.png",
      video:
        "",
    },
    {
      title: "Quizly",
      href: "https://quizly-delta.vercel.app/",
      active: true,
      description:
        "Quizly is a Quiz Application where Admins can Create Quizzes and Users can attempt the quizzes and when they submit the Quiz they get their result displayed on the Dashboard. There is a Leaderboard for each quiz to track the users performance.",
      technologies: [
        "React.js",
        "Typescript",
        "Node.js",
        "Experss",
        "PostgreSQL",
        "TailwindCSS",
        "Hono.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://quizly-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vrushabh48/quizly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quizly.png",
      video: "",
    },
    {
      title: "Quick Commerce App Backend",
      href: "https://github.com/Vrushabh48/quick-commerce-app",
      active: true,
      description:
        "Built a scalable backend for a quick commerce app enabling rapid delivery of groceries and essentials within 15 minutes. Implemented robust APIs, real-time order tracking, and secure Auth to ensure a seamless user experience.",
      technologies: [
        "React.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Vrushabh48/quick-commerce-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/atomic.png",
      video: "",
    },
    {
      title: "AI Youtube Video Summarizer",
      href: "https://github.com/Vrushabh48/ai-youtube-summarizer",
      active: true,
      description:
        "Developed an AI Youtube Video Summarizer that generates concise summaries of YouTube videos using advanced NLP techniques.",
      technologies: [
        "React.js",
        "Typescript",
        "JavaScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/Vrushabh48/ai-youtube-summarizer",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/yt-summarizer.png",
      video:
        "",
    },
    {
      title: "Rentify",
      href: "https://rentify-kohl.vercel.app/landingpage",
      active: true,
      description:
        "Rentify is a Product renting applications where users can list their products out for rent and get paid for it.",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
        "Postgres",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://rentify-kohl.vercel.app/landingpage",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vrushabh48/Rentify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rentify.png",
      video: "",
    },
    {
      title: "Codingal Landing Page",
      href: "https://codingal-landing-page.vercel.app/",
      active: true,
      description:
        "Codingal is a global leader in online coding education for kids and teens, offering live, interactive classes taught by expert Computer Science instructors.",
      technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://codingal-landing-page.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vrushabh48/Codingal-Landing-Page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/codingal.png",
      video: "",
    },
    {
      title: "StayCation - Hotel Booking App",
      href: "https://staycation-three.vercel.app/",
      active: true,
      description:
        "Built a landing page for a Hotel Booking App called StayCation using React.js and TailwindCSS. The landing page features a modern design, responsive layout, and showcases the app's key features to attract potential users.",
      technologies: [
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://staycation-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vrushabh48/staycation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hola.png",
      video: "",
    },
    {
      title: "Swipe - Landing Page",
      href: "https://staycation-three.vercel.app/",
      active: true,
      description:
        "Built a landing page of Swipe a billing and invoicing Software Company.",
      technologies: [
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://staycation-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Vrushabh48/staycation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/swipe.png",
      video: "",
    },
  ],
} as const;
