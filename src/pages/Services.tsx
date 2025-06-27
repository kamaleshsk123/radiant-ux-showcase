
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Smartphone, Globe, Database, Settings } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Node.js, and TypeScript.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interfaces designed with user experience at the forefront.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Responsive mobile applications that work seamlessly across all devices and platforms.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'API Development',
    description: 'Robust RESTful APIs and GraphQL endpoints for seamless data integration.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient database architecture and optimization for scalable applications.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Settings,
    title: 'DevOps & Deployment',
    description: 'Cloud deployment, CI/CD pipelines, and infrastructure management.',
    gradient: 'from-teal-500 to-blue-500',
  },
];

const Services = () => {
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
            My Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group"
            >
              <Card className="h-full relative overflow-hidden hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm border border-border/50">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="text-center relative z-10">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
