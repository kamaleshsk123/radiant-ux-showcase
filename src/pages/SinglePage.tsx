import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { sectionFromLocation, scrollToSection } from "@/lib/sections";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";

const SinglePage = () => {
  const location = useLocation();
  const firstLoad = useRef(true);
  const [pastHero, setPastHero] = useState(false);

  // Old links (/about, /projects, ...) and nav clicks land here: scroll to
  // the matching section. Instant on first load, smooth afterwards.
  useEffect(() => {
    const id = sectionFromLocation(location.pathname, location.hash);
    const isFirst = firstLoad.current;
    firstLoad.current = false;
    if (isFirst && id === "home") return;
    const frame = requestAnimationFrame(() =>
      scrollToSection(id, isFirst ? ("instant" as ScrollBehavior) : "smooth")
    );
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.pathname, location.hash]);

  // Particles show at full strength behind the hero and dimmed (as on the
  // old inner pages) behind the other sections.
  useEffect(() => {
    const update = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${
          pastHero ? "opacity-20" : "opacity-100"
        }`}
      >
        <ParticlesBackground />
      </div>
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default SinglePage;
