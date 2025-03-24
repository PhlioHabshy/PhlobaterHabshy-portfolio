import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0F1729] to-[#1E293B] backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="group font-mono text-2xl font-bold transition-all duration-300 transform hover:scale-105 relative">
                            <span className="inline-block">
                                <span className="group-hover:hidden gradient-text">PAH</span>
                                <span className="hidden group-hover:inline-block gradient-text">Phlobater Attef Habshy</span>
                            </span>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="hidden md:flex items-center space-x-6 mx-8">
                        <a 
                            href="https://github.com/PhlioHabshy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#CBB4A7] hover:text-white transition-colors"
                        >
                            <FaGithub className="text-xl" />
                        </a>
                        <a 
                            href="https://linkedin.com/in/phlobater-habshy-371087312" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#CBB4A7] hover:text-white transition-colors"
                        >
                            <FaLinkedin className="text-xl" />
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-[#CBB4A7] hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-[#CBB4A7] hover:text-white transition-colors">About</a>
                        <a href="#projects" className="text-[#CBB4A7] hover:text-white transition-colors">Projects</a>
                        <a href="#experiences" className="text-[#CBB4A7] hover:text-white transition-colors">Experiences</a>
                        <a href="#contact" className="text-[#CBB4A7] hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-[#CBB4A7] hover:text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {menuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};