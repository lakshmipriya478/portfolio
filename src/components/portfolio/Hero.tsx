import { ArrowDown, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 gradient-mesh-bg" />
      
      {/* Animated Blobs */}
      <motion.div 
        className="hero-blob w-[500px] h-[500px] bg-primary -top-20 -left-40"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "60% 40% 30% 70%"]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="hero-blob w-[400px] h-[400px] bg-accent bottom-0 -right-20"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          borderRadius: ["30% 60% 70% 40%", "60% 40% 30% 70%", "30% 60% 70% 40%"]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="hero-blob w-[300px] h-[300px] bg-secondary top-1/3 right-1/4"
        animate={{ 
          scale: [1, 1.3, 1],
          y: [0, -30, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for Opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="gradient-text text-glow">GS Lakshmi</span>
              <br />
              <span className="gradient-text text-glow">Priya</span>
            </motion.h1>

            {/* Title */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-1 w-12 gradient-bg rounded-full" />
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Python Developer & Data Analyst
              </p>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Software Engineer skilled in{" "}
              <span className="text-primary font-semibold">Python</span>,{" "}
              <span className="text-secondary font-semibold">Django</span>,{" "}
              <span className="text-accent font-semibold">SQL</span>, and{" "}
              <span className="text-success font-semibold">Data Analytics</span>. 
              Building scalable solutions with passion and precision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                asChild
                size="lg"
                className="gradient-bg text-primary-foreground hover:opacity-90 px-8 py-6 text-lg rounded-full glow"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-full border-2 border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/gslakshmipriya", color: "hover:text-secondary" },
                { icon: Github, href: "https://github.com/gslakshmipriya", color: "hover:text-foreground" },
                { icon: Mail, href: "mailto:gslakshmipriya288@gmail.com", color: "hover:text-accent" },
                { icon: Phone, href: "tel:+919381540533", color: "hover:text-success" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.icon === Linkedin || social.icon === Github ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl bg-card/50 backdrop-blur border border-border/50 text-muted-foreground ${social.color} transition-all hover:scale-110 hover:border-primary/50 hover:shadow-lg`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Decorative Ring */}
            <motion.div 
              className="absolute -inset-4 rounded-full gradient-bg opacity-20 blur-xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute -inset-8 rounded-full border-2 border-dashed border-primary/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Profile Image Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow">
              <img 
                src={profilePhoto} 
                alt="GS Lakshmi Priya" 
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-sm font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}