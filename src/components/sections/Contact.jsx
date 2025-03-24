import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setIsSuccess(true);
                setFormData({ from_name: '', email: '', message: '' });
                setTimeout(() => {
                    setIsSuccess(false);
                    setIsSubmitting(false);
                }, 2000);
            })
            .catch((error) => {
                alert('Something went wrong! Please try again.');
                console.error('Error:', error);
                setIsSubmitting(false);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1729] via-[#1E293B] to-[#334155]"></div>
            
            {/* Content */}
            <div className="relative max-w-7xl mx-auto py-16 px-4">
                <div className="text-center space-y-8">
                    <h2 className="text-6xl font-bold gradient-text">Get in Touch</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12 space-y-6">
                        <div className="space-y-2">
                            <input
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 bg-[#1E293B]/50 border border-[#CBB4A7]/20 rounded-lg focus:outline-none focus:border-[#CBB4A7] text-white placeholder-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 bg-[#1E293B]/50 border border-[#CBB4A7]/20 rounded-lg focus:outline-none focus:border-[#CBB4A7] text-white placeholder-gray-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                rows="5"
                                className="w-full px-4 py-3 bg-[#1E293B]/50 border border-[#CBB4A7]/20 rounded-lg focus:outline-none focus:border-[#CBB4A7] text-white placeholder-gray-400 resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`relative px-8 py-3 bg-[#CBB4A7] text-[#0F1729] rounded-lg font-semibold hover:bg-white transition-all duration-300 min-w-[160px] h-[48px] ${
                                isSubmitting ? 'cursor-not-allowed' : ''
                            } ${isSubmitting ? 'rounded-full w-[48px] mx-auto' : ''}`}
                        >
                            <span className={`transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                Send Message
                            </span>
                            {isSubmitting && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {isSuccess ? (
                                        <div className="w-6 h-6 flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-[#0F1729]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="w-6 h-6 border-2 border-[#0F1729] border-t-transparent rounded-full animate-spin"></div>
                                    )}
                                </div>
                            )}
                        </button>
                    </form>
                    
                    {/* Contact Links */}
                    <div className="flex justify-center space-x-8 mt-12">
                        <a 
                            href="https://github.com/PhlioHabshy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#CBB4A7] hover:text-white transition-colors"
                        >
                            <FaGithub className="text-3xl" />
                        </a>
                        <a 
                            href="https://linkedin.com/in/phlobater-habshy-371087312" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#CBB4A7] hover:text-white transition-colors"
                        >
                            <FaLinkedin className="text-3xl" />
                        </a>
                        <a 
                            href="mailto:philohabshy2005@gmail.com"
                            className="text-[#CBB4A7] hover:text-white transition-colors"
                        >
                            <FaEnvelope className="text-3xl" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="mt-16 pt-8 border-t border-[#CBB4A7]/20">
                        <p className="text-[#CBB4A7]">
                            © {new Date().getFullYear()} Phlobater Habshy. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};