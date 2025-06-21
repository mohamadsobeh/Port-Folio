// src/pages/Home.tsx
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
