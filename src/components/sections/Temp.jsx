import { useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const FirstVoiceIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v8l6-4z"/>
  </svg>
);

export const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "FirstVoiceAI",
      description:
        "FirstVoice AI provides scalable support by assessing users' emotional states in real-time and responding with empathy. It generates structured conversation summaries for secure sharing with therapists and offers actionable next steps, including local mental health resources.",
      image: "FirstVoiceAI.png",
      skills: [
        "OpenAI API",
        "Supabase",
        "ElevenLabs",
        "React",
        "Tailwind CSS",
        "JavaScript",
        " * UVA HooHacks 2025 Health Hack Winner",
      ],
      websiteLink: "https://first-voice-ai-chi.vercel.app/",
    },
    {
      title: "Bat-Bot Motor Controller Tuning GUI",
      description:
        "Developed a GUI application to streamline motor controller tuning, allowing the team to adjust PID parameters and visualize motor responses in real-time.",
      image: "batbot.png",
      skills: ["Python", "Tkinter", "PID Control", "Embedded Systems"],
    },
    {
      title: "MARS Medical Simulation",
      description:
        "Engineered a custom dynamic array structure to handle queue operations efficiently and designed a testing and treatment system using generics and interfaces to prioritize patients.",
      image: "MarsSimGui.png",
      skills: ["Java", "Data Structures", "Algorithms", "CS 310-DSA"],
    },
    {
      title: "Credit Reporting System",
      description:
        "Created a system to process and generate reports from raw credit data files across multiple banks using Linked Lists, Stacks, Queues, and Hash Tables.",
      image: "crs.png",
      skills: [
        "Java",
        "Data Structures",
        "File Processing",
        "Algorithms",
        "CS 310-DSA",
      ],
    },
    {
      title: "Tree Data Structures and Scientific Application Development",
      description:
        "Designed and implemented a scientific tree application for traversal, storage, and merging operations while developing algorithms for converting between tree representations.",
      image: "tree.png",
      skills: [
        "Java",
        "Tree Structures",
        "Algorithms",
        "Data Manipulation",
        "CS 310-DSA",
      ],
    },
    {
      title: "Academic Advising System",
      description:
        "Designed and implemented a priority-based topological sorting system for directed acyclic graphs (DAGs) using custom data structures like min-heaps and priority queues.",
      image: "AcedmicAdvising.png",
      skills: ["Java", "Graphs", "DAG", "Topological Sorting", "CS 310-DSA"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <h2 className="text-6xl font-bold mb-12 gradient-text text-center">
        Projects
      </h2>
      <div className="max-w-7xl mx-auto space-y-24">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className="opacity-0 transition-opacity duration-1000"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-xl">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-[300px] bg-[#1E293B] flex items-center justify-center">
                      <div className="text-8xl font-bold gradient-text">
                        PAH
                      </div>
                    </div>
                  )}
                  {project.comingSoon && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg">{project.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 rounded-full bg-[#1E293B] text-[#CBB4A7] text-sm transition-all duration-300 hover:bg-[#CBB4A7] hover:text-[#1E293B] hover:shadow-[0_0_15px_rgba(203,180,167,0.5)] hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Website Link (only for FirstVoiceAI) */}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center  text-[#CBB4A7] hover:text-white transition-colors"
                  >
                    <img 
                      src="LogoFVAIVisitWeb.png" 
                      alt="FirstVoice Icon" 
                      className="w-8 h-8 object-contain filter brightness-0 invert-[0.7] hover:invert-[1] transition-all duration-300"
                    />
                    <span className="text-lg">Visit Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
