import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Python Django Developer Intern",
    company: "Infosys Springboard",
    period: "Feb 2025 – Mar 2025",
    location: "Remote",
    achievements: [
      "Designed and deployed a Django-based Budget Tracker web application supporting income, expense, and savings tracking for 100+ simulated users.",
      "Implemented user authentication and dashboard modules, improving data accuracy and usability by 25%.",
    ],
    skills: ["Python", "Django", "SQLite", "HTML/CSS", "Authentication"],
    color: "from-primary to-accent",
  },
  {
    title: "Data Analyst Intern",
    company: "Rooman Technologies",
    period: "May 2025 – Jul 2025",
    location: "Bengaluru (Offline)",
    achievements: [
      "Collected, cleaned, and analyzed datasets of 10,000+ records using Python, SQL, and Excel to support business decision-making.",
      "Built Power BI dashboards and automated weekly reports, reducing manual reporting time by 30%.",
    ],
    skills: ["Python", "SQL", "Power BI", "Excel", "Data Analysis"],
    color: "from-secondary to-primary",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
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
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium mb-4">
            What I've Done
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-32 h-1.5 gradient-bg mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className={`relative flex items-start gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <motion.div 
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full gradient-bg ring-4 ring-background z-10 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
              />

              {/* Content Card */}
              <motion.div
                className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card hover:shadow-2xl transition-all group overflow-hidden">
                  {/* Gradient Top Border */}
                  <div className={`h-1.5 bg-gradient-to-r ${exp.color}`} />
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
                        <Calendar className="h-4 w-4 text-primary" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted">
                        <MapPin className="h-4 w-4 text-accent" />
                        {exp.location}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-0 hover:bg-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}