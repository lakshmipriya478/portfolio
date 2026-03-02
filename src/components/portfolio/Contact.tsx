import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gslakshmipriya288@gmail.com",
    href: "mailto:gslakshmipriya288@gmail.com",
    gradient: "from-primary to-accent",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9381540533",
    href: "tel:+919381540533",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gslakshmipriya",
    href: "https://linkedin.com/in/gslakshmipriya",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/gslakshmipriya",
    href: "https://github.com/gslakshmipriya",
    gradient: "from-success to-primary",
  },
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Using FormSubmit service with proper configuration
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _captcha: 'false',
        _template: 'table'
      };

      const response = await fetch('https://formsubmit.co/ajax/gslakshmipriya288@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        toast({
          title: "Message Sent! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error Sending Message",
        description: "There was an issue sending your message. Please try emailing me directly at gslakshmipriya288@gmail.com or call +91 9381540533",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-32 h-1.5 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">Let's Connect!</h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              I'm always excited to connect with fellow developers, potential
              employers, or anyone interested in tech. Feel free to reach out
              through any of the channels below or use the contact form.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-5 rounded-2xl glass-card hover:shadow-xl transition-all group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="mt-10 p-6 rounded-2xl glass-card border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg gradient-bg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-lg">Location</span>
              </div>
              <p className="text-muted-foreground">
                India • <span className="text-primary font-medium">Open to Remote Opportunities</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card overflow-hidden">
              {/* Gradient Top Border */}
              <div className="h-1.5 gradient-bg" />
              
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Send me a message</span>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-bg text-primary-foreground hover:opacity-90 py-6 text-lg rounded-xl glow"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}