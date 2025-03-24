import { useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';

export const Projects = () => {
    const projectRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        projectRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            title: "Bat-Bot Motor Controller Tuning GUI",
            description: "Developed a GUI application to streamline motor controller tuning, allowing the team to adjust PID parameters and visualize motor responses in real-time.",
            image: "batbot.png",
            skills: ["Python", "Tkinter", "PID Control", "Embedded Systems"],
            githubLink: "https://github.com/yourusername/batbot-gui"
        },
        {
            title: "MARS Medical Simulation",
            description: "Engineered a custom dynamic array structure to handle queue operations efficiently and designed a testing and treatment system using generics and interfaces to prioritize patients.",
            image: "MarsSimGui.png",
            skills: ["Java", "Data Structures", "Algorithms","CS 310-DSA"],
            githubLink: "https://github.com/yourusername/mars-medical"
        },
        {
            title: "Credit Reporting System",
            description: "Created a system to process and generate reports from raw credit data files across multiple banks using Linked Lists, Stacks, Queues, and Hash Tables.",
            image: "crs.png",
            skills: ["Java", "Data Structures", "File Processing", "Algorithms","CS 310-DSA"],
            githubLink: "https://github.com/yourusername/credit-reporting"
        },
        {
            title: "Tree Data Structures and Scientific Application Development",
            description: "Designed and implemented a scientific tree application for traversal, storage, and merging operations while developing algorithms for converting between tree representations.",
            image: "tree.png",
            skills: ["Java", "Tree Structures", "Algorithms", "Data Manipulation","CS 310-DSA"],
            githubLink: "https://github.com/yourusername/tree-scientific-app"
        },
        {
            title: "Academic Advising System",
            description: "Designed and implemented a priority-based topological sorting system for directed acyclic graphs (DAGs) using custom data structures like min-heaps and priority queues.",
            image: "AcedmicAdvising.png",
            skills: ["Java", "Graphs", "DAG", "Topological Sorting", "CS 310-DSA"],
            githubLink: "https://github.com/yourusername/academic-advising"
        },
        {
            title: "Personal Portfolio",
            description: "A modern, animated portfolio website showcasing my projects, experiences, and skills. Built with React, Tailwind CSS, and custom animations.",
            image: null,
            skills: ["React", "Tailwind CSS", "JavaScript", "CSS Animations"],
            githubLink: "https://github.com/yourusername/portfolio"
        },
        {
            title: "Freshly Website",
            description: "A full-stack e-commerce platform for Freshly, featuring user authentication, product management, and a seamless shopping experience. Coming soon!",
            image: "FreshlyLogoNOBG.png",
            skills: ["Next.js", "Node.js", "MongoDB", "Stripe"],
            githubLink: "#",
            comingSoon: true
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-20 px-4">
            <h2 className="text-6xl font-bold mb-12 gradient-text text-center">Projects</h2>
            <div className="max-w-7xl mx-auto space-y-24">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        ref={el => projectRefs.current[index] = el}
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
                                            <div className="text-8xl font-bold gradient-text">PAH</div>
                                        </div>
                                    )}
                                    {project.comingSoon && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <span className="text-white text-2xl font-bold">Coming Soon</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
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

                                {/* GitHub Link */}
                                {!project.comingSoon && (
                                    <a 
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#CBB4A7] hover:text-white transition-colors"
                                    >
                                        <FaGithub className="text-xl" />
                                        <span>View on GitHub</span>
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
