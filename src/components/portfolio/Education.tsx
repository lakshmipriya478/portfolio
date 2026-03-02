import { GraduationCap, Award, Calendar, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech – Computer Science & Artificial Intelligence",
    institution: "Vemu Institute of Technology",
    period: "2022 – 2026",
    grade: "CGPA: 8.4",
    icon: GraduationCap,
    color: "from-primary to-accent",
    current: true,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Vani Junior College",
    period: "2020 – 2022",
    grade: "CGPA: 6.8",
    icon: Award,
    color: "from-secondary to-primary",
    current: false,
  },
  {
    degree: "SSC (10th)",
    institution: "Sathya Vani English Medium High School",
    period: "2020",
    grade: "CGPA: 10",
    icon: Star,
    color: "from-accent to-success",
    current: false,
    highlight: true,
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
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
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            My Academic Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-32 h-1.5 gradient-bg mx-auto rounded-full" />
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full -translate-x-1/2" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className={`relative flex gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-xl ${
                      edu.current ? "ring-4 ring-primary/30 glow" : ""
                    } ${edu.highlight ? "glow-accent" : ""}`}
                  >
                    <edu.icon className="h-8 w-8 text-white" />
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`glass-card hover:shadow-2xl transition-all group overflow-hidden ${
                      edu.highlight ? "ring-2 ring-accent/50" : ""
                    }`}
                  >
                    {/* Gradient Top Border */}
                    <div className={`h-1.5 bg-gradient-to-r ${edu.color}`} />
                    
                    <CardContent className="p-6">
                      {edu.current && (
                        <motion.span 
                          className="inline-block px-4 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          🎓 Currently Pursuing
                        </motion.span>
                      )}
                      {edu.highlight && (
                        <motion.span 
                          className="inline-block px-4 py-1.5 text-xs font-semibold bg-accent/10 text-accent rounded-full mb-3"
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ⭐ Perfect Score!
                        </motion.span>
                      )}
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground mb-4">{edu.institution}</p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground px-3 py-1 rounded-full bg-muted">
                          <Calendar className="h-4 w-4 text-primary" />
                          {edu.period}
                        </span>
                        <span
                          className={`font-bold text-lg ${
                            edu.highlight ? "text-accent" : "text-primary"
                          }`}
                        >
                          {edu.grade}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}