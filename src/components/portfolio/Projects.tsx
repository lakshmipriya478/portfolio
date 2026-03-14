import { ExternalLink, Github, Wallet, Eye, Brain, CheckSquare } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Budget Tracker App – Django, Python, HTML, CSS",
    description:
      "Developed a full-stack Budget Tracker using Django and SQLite with secure authentication and real-time dashboards. Enabled users to manage monthly budgets and expense history, improving financial tracking efficiency.",
    technologies: ["Django", "Python", "HTML", "CSS"],
    icon: Wallet,
    color: "from-primary to-accent",
    github: "https://github.com/lakshmipriya478/budget-tracker",
    demo: null,
  },
  {
    title: "Task Manager – Python, Django, HTML, CSS, SQLite",
    description:
      "Developed a task management application to create, update, and track tasks, improving productivity through an organized and user-friendly interface.",
    technologies: ["Python", "Django", "HTML", "CSS", "SQLite"],
    icon: CheckSquare,
    color: "from-success to-primary",
    github: "https://github.com/lakshmipriya478/task-manager",
    demo: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-bg opacity-40" />
      
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
            My Recent Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-32 h-1.5 gradient-bg mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card-3d"
            >
              <Card className="glass-card group h-full overflow-hidden hover:shadow-2xl transition-all duration-300 card-3d-inner">
                {/* Gradient Top Border */}
                <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <project.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary bg-primary/5 hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <Github className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
                      View Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-secondary transition-colors group/link"
                      >
                        <ExternalLink className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}