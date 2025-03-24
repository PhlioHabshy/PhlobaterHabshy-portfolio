import { useEffect, useRef } from 'react';
import { FaPython, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiNextdotjs, SiJavascript, SiC } from 'react-icons/si';

export const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            },
            {
                threshold: 0.1
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const technologies = [
        { name: 'Python', icon: <FaPython className="w-8 h-8" /> },
        { name: 'C++', icon: <SiCplusplus className="w-8 h-8" /> },
        { name: 'Java', icon: <FaJava className="w-8 h-8" /> },
        { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" /> },
        { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" /> },
        { name: 'React', icon: <FaReact className="w-8 h-8" /> },
        { name: 'C', icon: <SiC className="w-8 h-8" /> }
    ];

    return (
        <section id="about" className="min-h-screen py-20 px-4">
            <div ref={sectionRef} className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out">
                <h2 className="text-6xl font-bold mb-12 gradient-text text-center">About Me</h2>
                <div className="flex justify-center mb-12">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#CBB4A7] shadow-lg">
                        <img 
                            src="profile4.jpg" 
                            alt="Phlobater Habshy" 
                            className="w-full h-full object-cover scale-105 object-[center_40%]"
                        />
                    </div>
                </div>
                <div className="space-y-8 text-gray-300 text-center">
                    <p className="text-lg max-w-3xl mx-auto">
                        I am a passionate Computer Science student at Virginia Tech, 
                        specializing in AI and Machine Learning. 
                        My journey in technology is driven by a deep curiosity about how machines can learn and adapt to solve complex problems.
                    </p>
                    <p className="text-lg max-w-3xl mx-auto">
                        My technical expertise spans across multiple programming languages and frameworks:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {technologies.map((tech, index) => (
                            <div 
                                key={index}
                                className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#1E293B]/50 border border-[#CBB4A7]/20 hover:border-[#CBB4A7]/40 hover:bg-[#1E293B]/70 transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <div className="text-[#CBB4A7] group-hover:text-white transition-colors duration-300">
                                    {tech.icon}
                                </div>
                                <span className="mt-3 text-sm text-[#CBB4A7] group-hover:text-white transition-colors duration-300">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 space-y-12">
                        <h3 className="text-4xl font-bold text-center gradient-text mb-16">Education</h3>
                        
                        {/* VT Entry */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start">
                            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-lg bg-white p-0">
                                <img 
                                    src="image.png" 
                                    alt="Virginia Tech" 
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <h4 className="text-2xl md:text-3xl font-light text-white">Virginia Tech</h4>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
                                    <p className="text-base md:text-lg text-gray-300">College of Engineering</p>
                                    <p className="text-base md:text-lg text-gray-300">January 2025 - Present</p>
                                </div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
                                    <p className="text-base md:text-lg text-gray-300">B.S. , Computer Science</p>
                                    <p className="text-base md:text-lg text-gray-300">GPA: Incoming</p>
                                </div>
                            </div>
                        </div> 

                        {/* GMU Entry */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start">
                            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-lg bg-white p-0">
                                <img 
                                    src="gmu-logo.png" 
                                    alt="George Mason University" 
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <h4 className="text-2xl md:text-3xl font-light text-white">George Mason University</h4>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
                                    <p className="text-base md:text-lg text-gray-300">College of Engineering and Computing</p>
                                    <p className="text-base md:text-lg text-gray-300">August 2022 - December 2024</p>
                                </div>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
                                    <p className="text-base md:text-lg text-gray-300">B.S. , Computer Science</p>
                                    <p className="text-base md:text-lg text-gray-300">GPA: 3.80/4.00</p>
                                </div>
                            </div>
                        </div>

                        {/* Future Education Section */}
                        <div className="mt-16">
                            <h3 className="text-4xl font-bold text-center gradient-text mb-8">Future Education</h3>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start">
                                <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-lg bg-white p-0">
                                    <img 
                                        src="innovation2.jpg" 
                                        alt="Virginia Tech Innovation Campus" 
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex-1 space-y-4 text-center md:text-left">
                                    <h4 className="text-2xl md:text-3xl font-light text-white">Virginia Tech Innovation Campus</h4>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
                                        <p className="text-base md:text-lg text-gray-300">Pre-admitted to MEng Program</p>
                                        <p className="text-base md:text-lg text-gray-300">Fall 2026</p>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
                                        <p className="text-base md:text-lg text-gray-300">MEng. , CSA: AI and Data Analytics</p>
                                        <p className="text-base md:text-lg text-gray-300">Alexandria, VA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}