import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import heroImage from "@/assets/image/Mohamad.jpg";
import cv from "@/assets/image/Mohamad-Sobeh.pdf";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 md:px-10 py-16 md:py-24 bg-background text-foreground"
    >
      {/* Left - Text */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          <span className="block text-rose-700 dark:text-yellow-400 mb-2">
            Hi, I'm
          </span>
          <span className="block bg-gradient-to-r from-rose-700 to-yellow-400 bg-clip-text text-transparent">
            Mohamad Sobeh
          </span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          A passionate Front-End Developer crafting elegant and performant web
          experiences using modern tools like React, Tailwind, and TypeScript.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href={cv} download>
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-rose-600 to-yellow-400 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowDownToLine className="w-5 h-5" />
              Download CV
            </Button>
          </a>

          <a href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-2 border-rose-500 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a
            href="https://www.linkedin.com/in/mohamad-sobeh-59b486277/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-all text-white shadow-md"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://vercel.com/mohamadsobehs-projects"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vercel"
            className="p-3 rounded-full bg-neutral-800 hover:bg-black transition-all text-white shadow-md"
          >
            <SiVercel className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Right - Image */}
      <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-rose-700 dark:ring-yellow-400">
        <img
          src={heroImage}
          alt="Mohamad Sobeh"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
