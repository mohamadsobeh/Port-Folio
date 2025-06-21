import MotionDiv from "@/components/ui/MotionDiv";
import { FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: SiVercel,
      href: "https://vercel.com/mohamadsobehs-projects",
      label: "Vercel",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mohamad-sobeh-59b486277/",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    { title: "Home", to: "hero" },
    { title: "About", to: "about" },
    { title: "Skills", to: "skills" },
    { title: "Projects", to: "projects" },
    { title: "Contact", to: "contact" },
  ];

  return (
    <footer className="relative bg-white/80 dark:bg-neutral-900/90 backdrop-blur-md border-t border-border text-foreground py-20 px-6 overflow-hidden shadow-md">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Brand Info */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-rose-700 to-yellow-400 bg-clip-text text-transparent">
              Mohamad Sobeh
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Frontend Developer specializing in React and modern web
              experiences.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                const isLinkedIn = social.label === "LinkedIn";
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`
                      p-3 rounded-full shadow-md transition-all
                      ${
                        isLinkedIn
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "bg-neutral-800 hover:bg-black text-white"
                      }
                    `}
                  >
                    <Icon className="text-xl" />
                  </a>
                );
              })}
            </div>
          </MotionDiv>

          {/* Quick Links */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-rose-700 dark:text-yellow-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.to}`}
                    className="text-sm text-muted-foreground hover:text-rose-700 dark:hover:text-yellow-400 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Contact Info */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-rose-700 dark:text-yellow-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex justify-center md:justify-start items-start">
                <HiOutlineMail className="text-rose-700 dark:text-yellow-400 mt-1 mr-3" />
                <a
                  href="mailto:mohammadsobh1999@gmail.com"
                  className="hover:text-rose-700 dark:hover:text-yellow-400 transition"
                >
                  mohammadsobh1999@gmail.com
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-start">
                <HiOutlinePhone className="text-rose-700 dark:text-yellow-400 mt-1 mr-3" />
                <span>+963 959837527</span>
              </li>
            </ul>
          </MotionDiv>
        </div>

        {/* Copyright */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-border text-center text-xs text-muted-foreground"
        >
          &copy; {currentYear} Mohamad Sobeh. All rights reserved.
        </MotionDiv>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-rose-700 text-white hover:bg-rose-800 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300 shadow-lg transition"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
