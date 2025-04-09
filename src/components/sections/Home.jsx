import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Home = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 64; // Height of the navbar (h-16 = 64px)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" 
        className="min-h-screen flex flex-col justify-center items-center relative"
        >
            <div className="mb-8 mt-24 md:mt-12">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#CBB4A7] shadow-lg">
                    <img 
                        src="profile.jpg" 
                        alt="Phlobater Habshy" 
                        className="w-full h-full object-cover scale-105 object-[center_40%]"
                    />
                </div>
                {/* New Social Icons Section */}
                <div className="flex justify-center space-x-4 mt-6">
                    <a 
                        href="https://github.com/PhlioHabshy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#CBB4A7] hover:text-white transition-colors duration-300"
                    >
                        <FaGithub className="w-8 h-8" />
                    </a>
                    <a 
                        href="https://linkedin.com/in/phlobater-habshy-371087312" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#CBB4A7] hover:text-white transition-colors duration-300"
                    >
                        <FaLinkedin className="w-8 h-8" />
                    </a>
                </div>
            </div>
            <div className="text-center z-10 px-4 max-w-4xl mx-auto">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                        Hello, I'm
                        Phlobater Habshy
                    </h1>
                    <p className="text-lg text-gray-300 max-w-5xl lg:max-w-6xl xl:max-w-7xl">
                        Hi! I am a third-year Computer Science student at Virginia Tech, concentrating in AI and Machine Learning, with a strong passion for software engineering. With experience in Python, C, Java, and front-end and back-end development using Next.js, Node.js, and C++, I have worked on projects ranging from robotic motor controller tuning to data structure optimizations. My goal is to leverage my technical expertise to build innovative AI-driven solutions that enhance user experiences and drive technological advancements.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
                    <button 
                        onClick={() => scrollToSection('projects')} 
                        className="w-full md:w-auto bg-[#CBB4A7] text-black px-6 py-3 rounded-full hover:bg-[#CBB4A7]/80 transition-all duration-300 hover:scale-105"
                    >
                        View Projects
                    </button>
                    <button 
                        onClick={() => scrollToSection('experiences')} 
                        className="w-full md:w-auto border-2 border-[#CBB4A7] text-[#CBB4A7] px-6 py-3 rounded-full hover:bg-[#CBB4A7]/10 transition-all duration-300 hover:scale-105"
                    >
                        Experiences
                    </button>
                </div>
            </div>
        </section>
    )
}