import MotionDiv from "@/components/ui/MotionDiv";
import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

type Project = {
  title: string;
  longDescription: string;
  images: string[];
  features: string[];
  challenges: string[];
  Solutions: string[];
  live: string;
  category: string;
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () =>
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  const prevImage = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <MotionDiv
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        className="bg-background text-foreground rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl border border-border relative"
      >
        <div className="relative w-full">
          <div className="relative h-60 sm:h-72 md:h-80 lg:h-[400px] overflow-hidden rounded-t-2xl">
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Project image ${i}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  i === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
              />
            ))}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background shadow flex items-center justify-center"
                  aria-label="Previous"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background shadow flex items-center justify-center"
                  aria-label="Next"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-background/90 hover:bg-background rounded-full shadow flex items-center justify-center text-foreground transition"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {project.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {project.longDescription}
              </p>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-start text-sm text-muted-foreground"
                    >
                      <span className="mt-1 text-primary">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Challenges & Solutions
                </h3>
                <ul className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-foreground font-medium">
                        Challenge: {c}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Solution: {project.Solutions[i]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            
            <div className="space-y-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow hover:opacity-90 transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <h4 className="font-semibold text-foreground text-sm">
                  Project Details
                </h4>
                <div className="text-sm text-muted-foreground flex justify-between">
                  <span>Category:</span>
                  <span className="text-foreground font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground flex justify-between">
                  <span>Status:</span>
                  <span className="text-primary font-medium">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default ProjectModal;
