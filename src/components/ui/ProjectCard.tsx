import MotionDiv from "@/components/ui/MotionDiv";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  project: {
    title: string;
    shortDescription: string;
    images: string[];
    live?: string;
  };
  onClick: () => void;
};

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-background text-foreground rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-border cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-60">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <div>
            <h3 className="text-xl font-semibold text-white drop-shadow">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-200 mt-1 line-clamp-2">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between items-center">
        <span className="text-sm text-primary font-medium hover:underline">
          View Details
        </span>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-md bg-muted hover:bg-muted/80 transition"
            aria-label="Live Demo"
            title="Live Demo"
          >
            <FaExternalLinkAlt className="text-foreground text-sm" />
          </a>
        )}
      </div>
    </MotionDiv>
  );
};

export default ProjectCard;
