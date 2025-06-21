import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import FadeIn from "@/components/effects/FadeIn";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  {
    name: "GitHub",
    icon: <FaGithub className="text-neutral-800 dark:text-white" />,
  },
];

const CoreSkills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 md:px-12 bg-background text-foreground overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-rose-300 opacity-20 blur-3xl dark:bg-yellow-400" />
      <div className="absolute bottom-16 right-10 w-24 h-24 rounded-full bg-yellow-300 opacity-10 blur-2xl dark:bg-rose-500" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-700 to-yellow-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-12 max-w-xl mx-auto">
            The technologies I use to bring ideas to life and craft delightful
            user experiences.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <div className="flex flex-col items-center justify-center h-40 px-4 py-6 rounded-xl shadow-md border border-border bg-card/70 backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <p className="text-base font-medium text-neutral-800 dark:text-neutral-200">
                  {skill.name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSkills;
