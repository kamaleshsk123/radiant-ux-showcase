import { useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { TypedText } from "@/components/TypedText";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleDownloadCV = () => {
    const pdfUrl =
      "https://drive.google.com/uc?export=download&id=119PfjBlUqMjfzVJ_-K1LfA-GSAOQwxnY";
    saveAs(pdfUrl, "ShanmugaKamalesh.pdf");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-2 w-60 h-60 mx-auto rounded-full overflow-hidden "
          >
            <img
              src="/Home.png"
              alt="Hero"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Shanmuga Kamalesh M
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8"
          >
            <TypedText
              strings={[
                "Frontend Developer",
                "UI/UX Designer",
                "Problem Solver",
                "Creative Thinker",
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Passionate about creating beautiful, functional, and user-friendly
            digital experiences. Let's build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/kamaleshsk123"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              {/* <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button> */}
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
