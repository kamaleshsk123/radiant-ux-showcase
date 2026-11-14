import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "UX/UI Design",
    description:
      "User flows, wireframes and polished Figma designs for web and mobile apps, with a reusable design system.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Figma to Angular",
    description:
      "Responsive, pixel-accurate Angular frontends built from your designs (or mine), with clean, maintainable components.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: RefreshCw,
    title: "App Redesign",
    description:
      "Modernise an outdated or confusing app with a UX review, redesign and rebuild, so users find what they need faster.",
    gradient: "from-orange-500 to-red-500",
  },
];

const steps = [
  {
    title: "Discover",
    description: "We talk through your goals, users and timeline.",
  },
  {
    title: "Design",
    description:
      "I create flows and Figma designs you can review and comment on.",
  },
  {
    title: "Build",
    description: "I turn the approved designs into a clean Angular app.",
  },
  {
    title: "Launch",
    description:
      "We test, deploy and polish, and I stay around for fixes.",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact');
  };

  return (
    <section id="services" className="relative py-16 scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            My Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Design and development for web apps that need to be clear and easy
            to use
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group">
              <Card className="h-full relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm border border-border/50">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="text-center relative z-10">
                  <div
                    className={`inline-flex self-center p-4 rounded-full bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center relative z-10">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.8 }}
          className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">How I Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}>
                <Card className="h-full p-6 text-center bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Tell me about your product, and I'll suggest the simplest way to
              design and build it.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetInTouch}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get In Touch
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
