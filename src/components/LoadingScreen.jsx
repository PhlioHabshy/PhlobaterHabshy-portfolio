import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("");
    const [shouldFade, setShouldFade] = useState(false);
    const initialText = "Hello, World!";
    const keepText = "Hello, ";
    const finalText = "Hello, Phlo's World!";
    
    useEffect(() => {
        let currentPhase = "typing";
        let index = 0;
        let pauseCounter = 0;
        const pauseDuration = 10; // How long to pause before backspacing
        
        const interval = setInterval(() => {
            // Phase 1: Type the initial text
            if (currentPhase === "typing") {
                setText(initialText.substring(0, index));
                index++;
                
                if (index > initialText.length) {
                    currentPhase = "pausing";
                    index = initialText.length;
                }
            }
            // Phase 2: Pause briefly before backspacing
            else if (currentPhase === "pausing") {
                pauseCounter++;
                if (pauseCounter >= pauseDuration) {
                    currentPhase = "deleting";
                    index = initialText.length;
                }
            }
            // Phase 3: Delete only the "World!" part, keeping "Hello, "
            else if (currentPhase === "deleting") {
                setText(initialText.substring(0, index));
                index--;
                
                // Stop deleting when we reach "Hello, "
                if (index <= keepText.length) {
                    currentPhase = "typing-final";
                    index = keepText.length; // Start typing after "Hello, "
                }
            }
            // Phase 4: Type the final text starting after "Hello, "
            else if (currentPhase === "typing-final") {
                setText(finalText.substring(0, index));
                index++;
                
                if (index > finalText.length) {
                    currentPhase = "completed";
                    clearInterval(interval);
                    
                    // Start the fade out animation
                    setShouldFade(true);
                    
                    // Call onComplete after the fade animation
                    setTimeout(() => {
                        onComplete();
                    }, 1500); // Match this with the animation duration
                }
            }
        }, 70);
        
        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-50 bg-gradient-to-br from-[#0A0F1F] via-[#0F172A] to-[#1E293B] text-black-100 flex flex-col items-center justify-center transition-opacity duration-1000 ${shouldFade ? 'opacity-0' : 'opacity-100'}`}>
            <div className="mb-4 text-2xl md:text-4xl font-mono font-bold px-4 text-center">
                <span className="gradient-text">{text}</span> <span className="animate-blink ml-1 gradient-text"> | </span>
            </div>
            <div className="w-[200px] h-[2px] bg-[#CBB4A7]/20 rounded relative overflow-hidden"> 
                <div className="w-[40%] h-full bg-[#CBB4A7] shadow-[0_0_15px_rgba(203,180,167,0.5)] animate-loading-bar"></div>
            </div>
        </div>
    );
};