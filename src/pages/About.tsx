import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const skillGroups = [
  {
    name: "Design",
    skills: [
      "Figma",
      "User flows",
      "Wireframing & prototyping",
      "Design systems",
    ],
  },
  {
    name: "Development",
    skills: [
      "Angular",
      "TypeScript",
      "HTML & CSS",
      "Tailwind CSS",
      "Angular Material",
    ],
  },
  {
    name: "Also",
    skills: ["Node.js", "MongoDB", "Python", "n8n"],
  },
];

const timeline = [
  {
    type: "experience",
    title: "UX Designer / UI Developer",
    company: "Hash8",
    period: "2023 - Present",
    description:
      "Leading development of modern web applications using Figma, Angular, Node.js, and cloud technologies.",
  },
  {
    type: "experience",
    title: "Java Developer",
    company: "QSpiders",
    period: "2022 - 2023",
    description:
      "Completed training in Java programming, covering core concepts, object-oriented programming, and real-time project practice.",
  },
  {
    type: "education",
    title: "Electronics and Communication Degree",
    company: "University College of Engineering, Kanchipuram",
    period: "2019 - 2023",
    description:
      "Bachelor’s in Electronics and Communication Engineering with focus on communication systems, digital electronics, and embedded technologies.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="absolute inset-0 opacity-20">
        <ParticlesBackground />
      </div>
      {/* <ParticlesBackground /> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3 years designing and building web apps
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/About_Me.png"
                  alt="Profile"
                  className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-6">Hello, I'm Kamalesh</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a UX/UI designer who also writes the code. For the last 3
              years at Hash8, I've designed interfaces in Figma and
              built them in Angular, so I understand both what users need and
              what developers can ship.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I focus on dashboards, SaaS products and apps where clarity
              matters. When you work with me, one person takes your product
              from first sketch to final build: no handoff gaps, no lost
              details.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <h3 className="text-2xl font-bold text-primary">12+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </Card>
              <Card className="p-4 text-center">
                <h3 className="text-2xl font-bold text-primary">3</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </Card>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold mb-4">{group.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Experience & Education
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => {
              let badgeText = "";
              let badgeVariant = "secondary";
              switch (item.company) {
                case "Hash8":
                  badgeText = "Work";
                  badgeVariant = "default";
                  break;
                case "QSpiders":
                  badgeText = "Intern";
                  badgeVariant = "default";
                  break;
                case "University College of Engineering, Kanchipuram":
                  badgeText = "Education";
                  badgeVariant = "secondary";
                  break;
                default:
                  if (item.type === "experience") {
                    badgeText = "Work";
                    badgeVariant = "default";
                  } else {
                    badgeText = "Education";
                    badgeVariant = "secondary";
                  }
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                  className="relative flex items-center mb-8"
                >
                  <div className="flex-1">
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={badgeVariant}>{badgeText}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {item.company}
                      </p>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
