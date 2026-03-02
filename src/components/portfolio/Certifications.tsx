import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "Python Foundation",
    issuer: "Infosys Springboard",
    category: "Programming",
    gradient: "from-primary to-accent",
  },
  {
    name: "Software Engineering",
    issuer: "NPTEL",
    category: "Computer Science",
    gradient: "from-secondary to-primary",
  },
  {
    name: "Introduction to IoT",
    issuer: "NPTEL",
    category: "IoT",
    gradient: "from-accent to-secondary",
  },
  {
    name: "Oracle Cloud Infrastructure",
    issuer: "Oracle",
    category: "Cloud",
    gradient: "from-success to-secondary",
  },
  {
    name: "Data Analyst 101",
    issuer: "Simplilearn SkillUp",
    category: "Data Analytics",
    gradient: "from-primary to-success",
  },
  {
    name: "Introduction to Cyber Security",
    issuer: "Simplilearn SkillUp",
    category: "Security",
    gradient: "from-accent to-primary",
  },
  {
    name: "Google AI Essentials",
    issuer: "Coursera",
    category: "AI/ML",
    gradient: "from-secondary to-accent",
  },
  {
    name: "AI – Data Quality Analyst",
    issuer: "Rooman Technologies",
    category: "AI/ML",
    gradient: "from-primary to-secondary",
  },
  {
    name: "Python 101 for Data Science",
    issuer: "Cognitive Class.ai",
    category: "Data Science",
    gradient: "from-success to-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
};

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 gradient-mesh-bg opacity-30" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium mb-4">
            My Credentials
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-32 h-1.5 gradient-bg mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-3d"
            >
              <Card className="glass-card group h-full overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Gradient Top Border */}
                <div className={`h-1.5 bg-gradient-to-r ${cert.gradient}`} />
                
                <CardContent className="p-6 relative">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${cert.gradient} flex-shrink-0 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {cert.issuer}
                      </p>
                      <Badge 
                        variant="outline" 
                        className={`text-xs bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent border-primary/30`}
                      >
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Hint */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <span className="text-3xl font-bold gradient-text">{certifications.length}+</span>
            <span className="text-muted-foreground font-medium">certifications from industry leaders</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}