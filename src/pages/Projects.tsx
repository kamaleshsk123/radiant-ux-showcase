
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'React Native mobile application for digital banking services',
    image: '/placeholder.svg',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Mobile Development',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with 3D animations and particle effects',
    image: '/placeholder.svg',
    technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Web Development',
  },
  {
    id: 4,
    title: 'Task Management SaaS',
    description: 'Collaborative task management platform with real-time updates',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Web Development',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with data visualization',
    image: '/placeholder.svg',
    technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'Vuetify'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Web Development',
  },
  {
    id: 6,
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts and fitness goals',
    image: '/placeholder.svg',
    technologies: ['React Native', 'Firebase', 'HealthKit', 'Charts'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: 'Mobile Development',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
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
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
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
                      <Button asChild className="flex-1">
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default Projects;
