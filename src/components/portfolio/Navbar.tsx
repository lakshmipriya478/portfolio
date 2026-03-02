import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleDownloadResume = () => {
    // Create a text file with resume content for download
    const resumeContent = `GS LAKSHMI PRIYA
Python Developer & Data Analyst

📞 +91 9381540533
📧 gslakshmipriya288@gmail.com
🔗 LinkedIn: linkedin.com/in/gslakshmipriya
🐱 GitHub: github.com/gslakshmipriya

CAREER OBJECTIVE
Software Engineer skilled in Python, Django, SQL, and Data Analytics, with internship experience building full-stack web applications and data dashboards.

EXPERIENCE
Python Django Developer Intern | Infosys Springboard | Feb 2025 – Mar 2025
• Designed and deployed a Django-based Budget Tracker web application
• Implemented user authentication and dashboard modules

Data Analyst Intern | Rooman Technologies | May 2025 – Jul 2025
• Analyzed datasets of 10,000+ records using Python, SQL, and Excel
• Built Power BI dashboards and automated weekly reports

PROJECTS
• Budget Tracker App - Django, Python, HTML, CSS
• Invisibility Cloak - Python, OpenCV, NumPy, Computer Vision
• Drug Prediction System - Python, ML, Pandas, Scikit-learn
• Task Manager - Python, Django, HTML, CSS, SQLite

SKILLS
Programming: Python, SQL, HTML, CSS
Frameworks: Django, Pandas, NumPy, Scikit-learn
Tools: Git, GitHub, VS Code, Jupyter, Power BI, MS Excel

EDUCATION
B.Tech in CS & AI | Vemu Institute of Technology | CGPA: 8.4 | 2022-2026

CERTIFICATIONS
• Infosys Springboard – Python Foundation
• NPTEL – Software Engineering, IoT
• Oracle Cloud Infrastructure
• Google AI Essentials
• Rooman Technologies – AI Data Quality Analyst`;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "GS_Lakshmi_Priya_Resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold gradient-text">
            LP
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              onClick={handleDownloadResume}
              className="hidden md:flex gradient-bg text-primary-foreground hover:opacity-90"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button
                    onClick={() => {
                      handleDownloadResume();
                      setIsOpen(false);
                    }}
                    className="gradient-bg text-primary-foreground mt-4"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
