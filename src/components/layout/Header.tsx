import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import clsx from "clsx";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-neutral-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          offset={-80}
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-rose-700 to-yellow-500 bg-clip-text text-transparent cursor-pointer transition-transform hover:scale-105"
        >
          Mohamad Sobeh
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, to }) => (
            <ScrollLink
              key={to}
              to={to}
              smooth
              duration={500}
              offset={-80}
              className="relative text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-rose-700 dark:hover:text-yellow-400 transition group"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-rose-700 to-yellow-400 transition-all duration-300 group-hover:w-full" />
            </ScrollLink>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Controls: Mode Toggle + Burger Menu */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <ModeToggle />
          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl text-neutral-700 dark:text-neutral-200"
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-neutral-900 shadow-xl z-50 flex flex-col">
            <div className="flex justify-between items-center px-5 py-4 border-b border-border">
              <span className="text-lg font-semibold text-rose-700 dark:text-yellow-400">
                Menu
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-neutral-700 dark:text-neutral-200"
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>
            <nav className="flex flex-col items-start px-6 py-8 space-y-6">
              {navItems.map(({ label, to }) => (
                <ScrollLink
                  key={to}
                  to={to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-rose-700 dark:hover:text-yellow-400 transition"
                >
                  {label}
                </ScrollLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
