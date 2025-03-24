import { useEffect, useRef } from 'react';

export const Experiences = () => {
    const experienceRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const imageElement = entry.target.querySelector('.experience-image');
                        const contentElement = entry.target.querySelector('.experience-content');
                        
                        // Reset and add animation to image first
                        imageElement.style.transform = 'translateX(100%)';
                        imageElement.style.opacity = '0';
                        setTimeout(() => {
                            imageElement.classList.add('slide-in-right');
                        }, 100);
                        
                        // Add animation to content after a delay
                        setTimeout(() => {
                            contentElement.classList.add('fade-in-up');
                        }, 500);
                    }
                });
            },
            { threshold: 0.1 }
        );

        experienceRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const experiences = [
        {
            title: "Software Engineer Intern",
            company: "Freshly",
            period: "February 2025 - Present",
            description: "As a Software Engineering Intern, I contribute to the development of the company’s frontend website using Next.js, Node.js, JavaScript, and CSS to enhance its online presence and advertising. This project is actively in development, focusing on creating a responsive and visually engaging user experience.",
            image: "FreshlyLogoNOBG.png",
            skills: ["Cascading Style Sheets (CSS)", "JavaScript", "Node.js", "Next.js", "React.js"]
        },
        {
            title: "BIST Research | Software Team Member",
            company: "Virginia Tech",
            period: "January 2025 - Present",
            description: "As a member of the BIST Research team, I develop and work on Python and C++ code for robotics applications, focusing on motor control and system efficiency. This role has strengthened my expertise in robotics, control systems, and software development, while collaborating with a team to advance robotic technologies.",
            image: "VTeng.png",
            skills: ["C++", "Python (Programming Language)", "Teamwork", "Research Skills", "C (Programming Language)"]
        },
        {
            title: "Customer Service Representative",
            company: "Wegmans Food Markets",
            period: "September 2023 - Present",
            description: "In this role, I engage directly with customers, ensuring they receive the highest quality products and services. I have learned various food safety regulations and laws, guaranteeing compliance and safety. Additionally, I have worked on my culinary skills, mastering knife techniques and diverse cooking methods to improve food preparation and presentation.",
            image: "Wegmans-Logo-Icon-color-thumb-Photoroom.png",
            skills: ["Customer Service", "Customer Interaction"]
        }
    ];

    return (
        <section id="experiences" className="min-h-screen py-20 px-4">
            <h2 className="text-6xl font-bold mb-12 gradient-text text-center">Experiences</h2>
            <div className="max-w-7xl mx-auto space-y-24">
                {experiences.map((experience, index) => (
                    <div 
                        key={index}
                        ref={el => experienceRefs.current[index] = el}
                        className="opacity-100"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Company Logo */}
                            <div className="w-full md:w-1/4 experience-image transition-transform duration-800">
                                <div className="relative overflow-hidden rounded-xl p-2">
                                    <img 
                                        src={experience.image} 
                                        alt={experience.company}
                                        className="w-full h-full object-contain scale-105"
                                    />
                                </div>
                            </div>

                            {/* Experience Content */}
                            <div className="w-full md:w-3/4 space-y-6 experience-content opacity-0">
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-bold text-white">{experience.title}</h3>
                                    <p className="text-xl text-[#CBB4A7]">{experience.company}</p>
                                    <p className="text-gray-300">{experience.period}</p>
                                </div>
                                <p className="text-gray-300 text-lg">{experience.description}</p>
                                
                                {/* Skills */}
                                <div className="flex flex-wrap gap-3">
                                    {experience.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className="px-4 py-2 rounded-full bg-[#1E293B] text-[#CBB4A7] text-sm transition-all duration-300 hover:bg-[#CBB4A7] hover:text-[#1E293B] hover:shadow-[0_0_15px_rgba(203,180,167,0.5)] hover:scale-105"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};