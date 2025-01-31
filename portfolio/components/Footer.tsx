"use client"
import { Github, Linkedin } from "lucide-react";
import { Manrope } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import { useState, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-manrope",
});

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jdrm3fz", // Replace with your EmailJS Service ID
        "template_w2v0462", // Replace with your EmailJS Template ID
        formData,
        "HOu00Ifvm-Hx0IWa4" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error: Error) => {
          alert("Failed to send email, please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:ml-16 lg:mr-16 ml-8 mr-8 mt-10 gap-10">
      <div className="w-[350px] h-[91px] lg:ml-10 lg:mt-20 flex flex-col justify-between">
        <div>
          <h1
            className={`${bebasNeue.variable} font-sans text-white lg:text-7xl text-5xl`}
          >
            Let&apos;s Connect
          </h1>
          <p className={`${manrope.variable} font-manrope text-[#C7C7C7]`}>Say Hello at <span className="underline decoration-lime-400">vrushabhpatil4801@gmail.com</span></p>
          <p className={`${manrope.variable} font-manrope text-[#C7C7C7]`}>For More info here is my <span className="underline decoration-lime-400">Resume</span></p>
          <div className="flex items-center space-x-4 mt-10">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-neutral-800 rounded-full flex justify-center items-center"
          >
            <Linkedin className="text-lime-400 w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-neutral-800 rounded-full flex justify-center items-center"
          >
            <Github className="text-lime-400 w-5 h-5" />
          </a>
        </div>
        <div className={`${manrope.variable} font-manrope text-[#C7C7C7] lg:mt-[287px] mt-[50px] items-center`}>
        © 2025 Vrushabh Patil
        </div>
        </div>
      </div>
      <div className="lg:mt-20 mt-[150px]">
        <form onSubmit={handleSubmit} className="">
          <div className="">
            <label
              className={`${manrope.variable} font-manrope mb-2 text-[#C7C7C7] text-lg`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=""
              className={`${manrope.variable} font-manrope w-full mt-3 mb-5 bg-[#1A1A1A] text-white p-2 rounded-md focus:outline-none`}
            />
          </div>
          <div>
            <label
              className={`${manrope.variable} font-manrope mb-2 text-[#C7C7C7] text-lg`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
              className={`${manrope.variable} font-manrope w-full mt-3 mb-5 bg-[#1A1A1A] text-white p-2 rounded-md focus:outline-none`}
            />
          </div>
          <div>
            <label
              className={`${manrope.variable} font-manrope mb-2 text-[#C7C7C7] text-lg`}
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder=""
              className="w-full mt-3 mb-5 bg-[#1A1A1A] text-white p-2 rounded-md focus:outline-none"
            />
          </div>
          <div>
            <label
              className={`${manrope.variable} font-manrope mb-2 text-[#C7C7C7] text-lg`}
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=""
              rows={4}
              className="w-full mt-3 mb-5 bg-[#1A1A1A] text-white p-2 rounded-md focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className={`${manrope.variable} font-manrope flex items-center bg-lime-400 px-6 py-3 rounded-full text-black font-bold`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
