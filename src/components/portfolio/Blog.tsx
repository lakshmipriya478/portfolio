import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Building a Budget Tracker with Django",
    excerpt:
      "Learn how I built a full-stack budget tracking application using Django, implementing user authentication, real-time dashboards, and expense categorization.",
    date: "March 2025",
    readTime: "5 min read",
    category: "Web Development",
    gradient: "from-primary to-accent",
    emoji: "💰",
  },
  {
    title: "Creating an Invisibility Cloak with OpenCV",
    excerpt:
      "A deep dive into computer vision techniques using OpenCV and HSV masking to create real-time invisibility effects via webcam input.",
    date: "February 2025",
    readTime: "7 min read",
    category: "Computer Vision",
    gradient: "from-secondary to-primary",
    emoji: "👻",
  },
  {
    title: "My Journey into Machine Learning",
    excerpt:
      "From understanding data preprocessing to building predictive models - here's my experience working on a drug prediction system using Scikit-learn.",
    date: "January 2025",
    readTime: "6 min read",
    category: "Machine Learning",
    gradient: "from-accent to-secondary",
    emoji: "🤖",
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

export function Blog() {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
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
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium mb-4">
            My Thoughts
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Latest <span className="gradient-text">Blog</span> Posts
          </h2>
          <div className="w-32 h-1.5 gradient-bg mx-auto rounded-full" />
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card-3d"
            >
              <Card className="glass-card group h-full overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
                {/* Gradient Top */}
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                
                {/* Emoji Header */}
                <div className="p-6 pb-0">
                  <motion.div 
                    className="text-5xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {post.emoji}
                  </motion.div>
                </div>
                
                <CardHeader className="pb-2 pt-0">
                  <Badge 
                    variant="outline" 
                    className={`w-fit text-xs mb-3 bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent border-primary/30`}
                  >
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-5 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                      <Calendar className="h-4 w-4 text-primary" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                      <Clock className="h-4 w-4 text-accent" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <motion.div 
                    className="flex items-center gap-2 mt-5 text-primary font-semibold group-hover:gap-4 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Note */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">More articles coming soon! Stay tuned for updates.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}