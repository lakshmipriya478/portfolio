import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    gradient: "from-primary to-accent",
    skills: [
      { name: "Python", level: 90, icon: "🐍" },
      { name: "SQL", level: 85, icon: "🗄️" },
      { name: "HTML", level: 80, icon: "📄" },
      { name: "CSS", level: 75, icon: "🎨" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    gradient: "from-secondary to-primary",
    skills: [
      { name: "Django", level: 85, icon: "🎯" },
      { name: "Pandas", level: 80, icon: "🐼" },
      { name: "NumPy", level: 80, icon: "🔢" },
      { name: "Scikit-learn", level: 75, icon: "🤖" },
    ],
  },
  {
    title: "Tools & Technologies",
    gradient: "from-accent to-secondary",
    skills: [
      { name: "Git & GitHub", level: 85, icon: "🔀" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Power BI", level: 80, icon: "📊" },
      { name: "Jupyter Notebook", level: 85, icon: "📓" },
    ],
  },
];

const softSkills = [
  { name: "Communication", icon: "💬", color: "from-primary to-accent" },
  { name: "Leadership", icon: "👑", color: "from-secondary to-primary" },
  { name: "Time Management", icon: "⏰", color: "from-accent to-secondary" },
  { name: "Problem-Solving", icon: "🧩", color: "from-success to-primary" },
  { name: "Active Listening", icon: "👂", color: "from-primary to-secondary" },
  { name: "Teamwork", icon: "🤝", color: "from-accent to-success" },
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
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
          <span className="inline-block px-4 py-2 rounded-full bg-success/10 text-success font-medium mb-4">
            What I Know
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-32 h-1.5 gradient-bg mx-auto rounded-full" />
        </motion.div>

        {/* Technical Skills */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card h-full hover:shadow-2xl transition-all overflow-hidden">
                {/* Gradient Top Border */}
                <div className={`h-1.5 bg-gradient-to-r ${category.gradient}`} />
                
                <CardContent className="p-6">
                  <h3 className={`text-lg font-bold mb-6 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <div className="space-y-5">
                    {category.skills.map((skill, index) => (
                      <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="flex items-center gap-2 font-medium">
                            <span className="text-xl">{skill.icon}</span>
                            {skill.name}
                          </span>
                          <span className="text-sm font-semibold text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative h-2.5 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            <span className="gradient-text">Soft Skills</span>
          </h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl glass-card cursor-default group`}
              >
                <span className="text-2xl group-hover:scale-125 transition-transform">
                  {skill.icon}
                </span>
                <span className="font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}