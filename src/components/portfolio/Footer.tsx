import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-bg opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-4 rounded-full glass-card hover:shadow-lg transition-all group"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
          </motion.button>

          {/* Logo */}
          <motion.span 
            className="text-4xl font-bold gradient-text"
            whileHover={{ scale: 1.1 }}
          >
            LP
          </motion.span>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/gslakshmipriya", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/gslakshmipriya", label: "GitHub" },
              { icon: Mail, href: "mailto:gslakshmipriya288@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.icon === Mail ? undefined : "_blank"}
                rel={social.icon === Mail ? undefined : "noopener noreferrer"}
                className="p-3 rounded-xl glass-card hover:border-primary/50 hover:shadow-lg transition-all group"
                whileHover={{ y: -3, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Personal Message */}
          <motion.p
            className="text-muted-foreground flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Crafted with passion by
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-5 w-5 text-accent fill-accent" />
            </motion.span>
            GS Lakshmi Priya
          </motion.p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} <span className="font-semibold">GS Lakshmi Priya</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}