import {useState, useEffect } from "react"; 
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Temp";
import { Experiences } from "./components/sections/Experiences";
import { Contact } from "./components/sections/Contact";
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return(
    <> 
    {!isLoaded && <LoadingScreen onComplete = {() => setIsLoaded(true)} />}{" "}
    <div 
    className={`min-h-screen transition-opacity duration-1000 overflow-y-auto ${
      isLoaded ? "opacity-100" : "opacity-0"
    } bg-gradient-to-br from-[#0F1729] via-[#1E293B] to-[#334155] text-gray-100`}
    >
      <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <MobileMenu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </div>
    </>
  );
}

export default App;
