import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FadeIn from "@/components/effects/FadeIn";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/modals/ProjectModal";
import { projects } from "@/data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-12 bg-background text-foreground overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-rose-100 opacity-20 blur-3xl dark:bg-yellow-300" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-yellow-100 opacity-30 blur-2xl dark:bg-rose-400" />

      <div className="max-w-6xl mx-auto text-center space-y-20 relative z-10">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-700 to-yellow-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            A collection of my favorite work — crafted with modern tools and a
            passion for clean code.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={0.1 + index * 0.1}
              className="rounded-xl border border-border bg-gradient-to-br from-yellow-50 to-rose-50 dark:from-card dark:to-neutral-900 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
