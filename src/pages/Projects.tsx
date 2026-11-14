import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";

const caseStudies = [
  {
    title: "Kin: Family Medicine Care App",
    description:
      "A concept app that helps families know their parent took her medicines, and act fast when she hasn't. 8 interviews, 26 screens, 5 usability tests.",
    image: "/case-studies/kin-cover.jpg",
    tags: ["UX Research", "UI Design", "Accessibility", "Figma"],
    behanceUrl:
      "https://www.behance.net/gallery/256944789/Kin-Family-Medicine-Care-App-UXUI-Case-Study",
  },
  {
    title: "Ledgerly: Credit Tracker for Shops",
    description:
      "A desktop web app that replaces the udhaar (credit) notebook for Indian shops that have a counter PC. Tested with 3 shops in Chennai.",
    image: "/case-studies/ledgerly-cover.png",
    tags: ["Dashboard", "Usability Testing", "Fintech", "UI Design"],
    behanceUrl: "https://www.behance.net/gallery/258466709/Ledgerly",
  },
];

const projects = [
  {
    id: 4,
    title: "Proto - Spec Management Tool",
    description:
      "An Angular tool for creating and managing Protobuf specification sheets, with a full-stack backend.",
    image: "/projects/Protohash.png",
    technologies: [
      "Angular",
      "Protobuf",
      "Protobuf JS",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/kamaleshsk123/spec-sheet-manager.git",
    category: "Web App",
  },
  {
    id: 1,
    title: "LifeLine.AI",
    description:
      "A full-stack emotional support companion using React, Firebase and AI chat via OpenRouter",
    image: "/projects/Lifeline.ai.png",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Cloud Functions",
      "OpenRouter API",
      "Gemini API",
    ],
    liveUrl: "https://lifelineai.netlify.app/",
    githubUrl: "https://github.com/kamaleshsk123/Lifeline-Ai.git",
    category: "Web App",
  },
  {
    id: 2,
    title: "Offline Chatting Application",
    description:
      "A React + Firebase chat app (PWA) that keeps working offline — messages are cached locally, queued while disconnected and auto-synced on reconnect.",
    image: "/projects/Hash8-Chatter.png",
    technologies: ["React", "TypeScript", "Firebase", "Vite", "PWA"],
    liveUrl: "https://seclockofflinechat.netlify.app/login",
    githubUrl: "https://github.com/kamaleshsk123/hash8-chatter.git",
    category: "Web App",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "A weather dashboard showing current conditions, hourly and 7-day forecasts from the OpenWeather API, with interactive charts.",
    image: "/projects/Weather_Dashboard.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Recharts",
      "Leaflet",
      "OpenWeather API",
      "Framer Motion",
    ],
    liveUrl: "https://seclockweatherreportdashboard.netlify.app/",
    githubUrl: "https://github.com/kamaleshsk123/Weather-Dashboard.git",
    category: "Web App",
  },
  {
    id: 3,
    title: "Discord Clone Website",
    description:
      "A Discord-style chat platform with servers, channels and real-time messaging.",
    image: "/projects/Discord_clone.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "Socket.io",
      "Clerk",
      "LiveKit",
      "Tailwind CSS",
    ],
    liveUrl: "https://seclockteamchat.netlify.app/",
    githubUrl: "https://github.com/kamaleshsk123/Discord-CloneApp.git",
    category: "Web App",
  },
  {
    id: 6,
    title: "stratX CLI",
    description:
      "Command-line interface (CLI) for managing devices, along with a complementary web interface.",
    image: "/projects/stratX.png",
    technologies: ["Rust", "Node.js", "HTML", "Shell Script"],
    liveUrl: "https://www.npmjs.com/package/stratx650?activeTab=code",
    githubUrl: "https://github.com/kamaleshsk123/Command-Line-Interface.git",
    category: "CLI Tool",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="relative py-16 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Selected work in design and frontend development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Design Case Studies
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.a
                key={study.title}
                href={study.behanceUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ delay: 0.1 * index, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group block"
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="pb-3">
                    <Badge className="w-fit mb-3">UX/UI Case Study</Badge>
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {study.title}
                    </h3>
                  </CardHeader>

                  <CardContent>
                    {study.description && (
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {study.description}
                      </p>
                    )}

                    {study.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <span className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View case study on Behance
                    </span>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <h2 className="text-3xl font-bold text-center mb-12">
          Development Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ delay: 0.1 * (index % 3), duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="mb-2">{project.category}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-card rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedProject.title}
                    </h2>
                    <Badge className="mb-4">{selectedProject.category}</Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  </div>

                  <div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        asChild
                        className={`flex-1 ${
                          selectedProject.id === 4
                            ? "bg-gray-400 hover:bg-gray-400"
                            : ""
                        }`}
                        disabled={selectedProject.id === 4}
                      >
                        <a
                          href={
                            selectedProject.id === 4
                              ? undefined
                              : selectedProject.liveUrl
                          }
                          target={
                            selectedProject.id === 4 ? undefined : "_blank"
                          }
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
