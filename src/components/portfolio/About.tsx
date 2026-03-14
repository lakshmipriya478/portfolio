import { Code, Database, LineChart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import gs1Image from "@/assets/gs1.jpeg";

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building web applications with Django and Python",
    gradient: "from-primary to-accent",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "SQL, SQLite, and data modeling expertise",
    gradient: "from-secondary to-primary",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Transforming data into actionable insights",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Sparkles,
    title: "Machine Learning",
    description: "Building predictive models with Scikit-learn",
    gradient: "from-success to-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh-bg opacity-50" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            Get To Know
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-32 h-1.5 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative max-w-lg mx-auto">
              {/* Background Decorations */}
              <div className="absolute -inset-4 gradient-bg rounded-3xl opacity-20 blur-2xl" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/30 rounded-full blur-2xl" />
              
              {/* Main Card */}
              <motion.div 
                className="relative glass-card rounded-3xl p-8 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Image */}
                <div className="relative mb-8">
                  <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-primary/30 glow">
                    <img 
                      src={profilePhoto} 
                      alt="GS Lakshmi Priya" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Status Badge */}
                  <motion.div 
                    className="absolute bottom-2 right-1/4 px-4 py-2 rounded-full gradient-bg text-primary-foreground text-sm font-medium shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨ Open to Work
                  </motion.div>
                </div>
                
                {/* Info */}
                <div className="text-center">
                  <h3 className="text-3xl font-bold gradient-text mb-2">GS Lakshmi Priya</h3>
                  <p className="text-lg text-muted-foreground mb-4">B.Tech CS & AI</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">8.4</p>
                      <p className="text-xs text-muted-foreground">CGPA</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-secondary">2+</p>
                      <p className="text-xs text-muted-foreground">Internships</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">10+</p>
                      <p className="text-xs text-muted-foreground">Certifications</p>
                    </div>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 shimmer pointer-events-none" />
              </motion.div>

              {/* Floating Icons */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-xl"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Code className="h-8 w-8 text-primary-foreground" />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shadow-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Database className="h-7 w-7 text-secondary-foreground" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              Aspiring Software Engineer with hands-on experience in Python, Java, Django, SQL, and Data Analytics, 
              with internship experience building full-stack web applications and data dashboards, seeking to contribute to 
              scalable software solutions in a growth-oriented organization.
            </motion.p>

            {/* Highlight Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              variants={containerVariants}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="glass-card hover:border-primary/50 transition-all group h-full overflow-hidden">
                    <CardContent className="p-5 relative">
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}