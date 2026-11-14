import { useEffect, useState } from "react";

export const sections = [
  { id: "home", name: "Home", path: "/" },
  { id: "about", name: "About", path: "/about" },
  { id: "services", name: "Services", path: "/services" },
  { id: "projects", name: "Projects", path: "/projects" },
  { id: "contact", name: "Contact", path: "/contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

// Height of the fixed navbar (h-16). Sections use scroll-mt-16 to match.
export const NAV_HEIGHT = 64;

/** Section id for a URL: "/projects" or "/#projects" -> "projects". */
export const sectionFromLocation = (
  pathname: string,
  hash: string
): SectionId => {
  const fromHash = hash.replace(/^#/, "");
  const fromPath = pathname.replace(/^\/+|\/+$/g, "");
  const match = sections.find(
    (s) => s.id === fromHash || (fromHash === "" && s.id === fromPath)
  );
  return match ? match.id : "home";
};

export const scrollToSection = (
  id: SectionId,
  behavior: ScrollBehavior = "smooth"
) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  // scrollIntoView honours each section's scroll-margin-top (the navbar offset).
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
};

/** Scroll-spy: the section currently under the navbar. */
export const useActiveSection = (): SectionId => {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const update = () => {
      // At the very bottom, the last section is active even if it is short.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }
      const line = NAV_HEIGHT + window.innerHeight * 0.25;
      let current: SectionId = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return active;
};
