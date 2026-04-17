import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Code2, Award, Rocket, Users, Sparkles, ArrowRight, Star, Briefcase, GraduationCap, Heart, Terminal, Cpu, Database, Globe, Server, Shield, Zap, Coffee, Moon, Sun } from 'lucide-react';
import './App.css';

import profilePhoto from './assets/my-photo.jpg';
import project1 from './assets/project1.jpg';
import project2 from './assets/project2.jpg';
import project3 from './assets/project3.jpg';
import project4 from './assets/project4.jpg';
import project5 from './assets/project5.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [isDark, setIsDark] = useState(true);
  const fullText = "Computer Science & Engineering Student | Aspiring Data Scientist | Tech Enthusiast";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const personalInfo = {
    name: "Abdul Jobayer",
    title: "I am an undergraduate student currently pursuing a degree in Computer Science and Engineering.",
    email: "mdabduljobayer570@gmail.com",
    phone: "01581344210",
    location: "Chittagong ,Bangladesh",
    github: "https://github.com/Jobayer08",
    linkedin: "https://www.linkedin.com/in/abdul-jobayer-50262b29a/"
  };

  const skills = ["HTML/CSS", "C", "C++", "Java", "Python", "Numpy", "Pandas", "Php", "C#","Flutter","FastApi"];

  const projects = [
    {
      id:1,
      title: "Student Group Prediction System",
      description: "A full-stack machine learning web application that predicts a student's academic group (Science, Commerce, Arts) using real-world educational data. The system includes user authentication, a smart input form, and real-time prediction powered by a trained ML model.",
      image: project5,
      icon: <Brain className="w-6 h-6" />,
      technologies: [
        "Machine Learning (Scikit-learn, Random Forest)",
        "FastAPI (REST API Development)",
        "JWT Authentication (Login & Register System)",
        "React.js Frontend Development",
        "Data Preprocessing & Feature Engineering",
        "Deployment (Vercel + Render)",
        "PostgreSQL Database Integration"
      ],
      liveUrl: "https://student-group-prediction.vercel.app/",
      githubUrl: "https://github.com/Jobayer08/fastapi-ml-project"
    },
    {
      id: 2,
      title: "Alcohol-Detector",
      description: "This Arduino-based project aims to prevent road accidents by detecting alcohol consumption in bike riders before starting the vehicle.",
      image: project1,
      icon: <Shield className="w-6 h-6" />,
      technologies: ["Embedded Systems Programming", "IoT (Internet of Things)", "Sensor Integration", "LCD Display Communication (I2C protocol)", "Motor Control using Relay", "Power Management"],
      liveUrl: null,
      githubUrl: "https://github.com/Jobayer08/Alcohol-Detector"
    },
    {
      id: 3,
      title: "PSTU Alumni Network",
      description: "PSTU Alumni Network is a web-based platform designed to connect former students of Patuakhali Science and Technology University with each other and with current students.",
      image: project2,
      icon: <Users className="w-6 h-6" />,
      technologies: ["HTML5", "CSS3", "JavaScript (basic)","PHP","MySQL","FPDF Library"],
      liveUrl: "https://alumninetworkpstu.free.nf",
      githubUrl: "https://github.com/Jobayer08/Alumni-Network-PSTU"
    },
    {
      id: 4,
      title: "Paint Industry Order Processing and Management System",
      description: "This project is a web-based application developed using ASP.NET MVC (C#) and SQL Server, designed to manage a paint manufacturing company's daily operations.",
      image: project3,
      icon: <Database className="w-6 h-6" />,
      technologies: ["HTML, CSS, Bootstrap", "ASP.NET MVC (C#)", "SQL Server","Entity Framework (Database First Approach)","Crystal Reports"],
      liveUrl: null,
      githubUrl: "https://github.com/Jobayer08/System-Analysis-Project"
    },
    {
      id: 5,
      title: "HelpMate",
      description: "Find Blood Donors & Medicine: A simple, efficient way to request blood or search for medicines nearby",
      image: project4,
      icon: <Heart className="w-6 h-6" />,
      technologies: ["Flutter (Dart)", "Firebase", "Cloud Firestore (NoSQL Database)","Python,Pandas,NumPy,Scikit-learn,Jupyter Notebook","FastAPI (Python)"],
      liveUrl: null,
      githubUrl: "https://github.com/Jobayer08/Help_Mate"
    }
  ];

  const stats = [
    { icon: <Code2 className="w-6 h-6" />, value: "10+", label: "Technologies" },
    { icon: <Rocket className="w-6 h-6" />, value: "5+", label: "Projects Completed" },
    { icon: <Coffee className="w-6 h-6" />, value: "500+", label: "Hours of Coding" },
    { icon: <Users className="w-6 h-6" />, value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="app-container">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="gradient-sphere sphere-4"></div>
      </div>

      {/* Navigation */}
      <nav className="glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="logo-wrapper">
              <div className="logo-glow"></div>
              <span className="logo-text">{personalInfo.name}</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link capitalize ${activeSection === item ? 'active' : ''}`}
                >
                  <span className="nav-link-text">{item}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="theme-toggle"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="menu-button"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-inner">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`mobile-nav-link ${activeSection === item ? 'active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <Sparkles className="w-4 h-4" />
                <span>Welcome to my portfolio</span>
              </div>
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <div className="hero-typing">
                <p className="typing-text">{typedText}</p>
                <span className="cursor-blink">|</span>
              </div>
              <p className="hero-description">
                {personalInfo.title}
              </p>
              <div className="hero-buttons">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="btn-primary"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="btn-secondary"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-container">
                <div className="image-glow"></div>
                <img 
                  src={profilePhoto} 
                  alt="Profile" 
                  className="hero-image"
                />
                <div className="floating-badge badge-1">
                  <Code2 className="w-4 h-4" />
                  <span>Full Stack Dev</span>
                </div>
                <div className="floating-badge badge-2">
                  <Brain className="w-4 h-4" />
                  <span>ML Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-gradient">About Me</span>
            </h2>
            <p className="section-subtitle">Learn more about my journey and experience</p>
          </div>
          
          <div className="about-grid">
            <div className="about-content">
              <div className="about-text">
                <p>
                  I am continuously building my skills and knowledge to become a successful data scientist in the future.
                </p>
                <p>
                  I work with various technologies and I'm always eager to learn new things. The foundation of my work is understanding user needs and providing solutions accordingly.
                </p>
              </div>
              <div className="about-badges">
                <Badge variant="secondary" className="about-badge">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Continuous Learning
                </Badge>
                <Badge variant="secondary" className="about-badge">
                  <Briefcase className="w-4 h-4 mr-1" />
                  5+ Projects Completed
                </Badge>
                <Badge variant="secondary" className="about-badge">
                  <Heart className="w-4 h-4 mr-1" />
                  Client Satisfaction
                </Badge>
              </div>
            </div>
            <div className="about-cards">
              <Card className="info-card">
                <CardHeader>
                  <CardTitle className="info-card-title">
                    <Mail className="w-5 h-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="info-card-text">{personalInfo.email}</p>
                </CardContent>
              </Card>
              <Card className="info-card">
                <CardHeader>
                  <CardTitle className="info-card-title">
                    <Phone className="w-5 h-5 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="info-card-text">{personalInfo.phone}</p>
                </CardContent>
              </Card>
              <Card className="info-card">
                <CardHeader>
                  <CardTitle className="info-card-title">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="info-card-text">{personalInfo.location}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-gradient">My Skills</span>
            </h2>
            <p className="section-subtitle">Technologies and tools I work with</p>
          </div>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <Card key={index} className="skill-card">
                <CardContent className="skill-card-content">
                  <div className="skill-icon">
                    {index % 2 === 0 ? <Code2 className="w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                  </div>
                  <p className="skill-name">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-gradient">My Projects</span>
            </h2>
            <p className="section-subtitle">Some examples of my recent work</p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="project-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-icon">{project.icon}</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="project-title">{project.title}</CardTitle>
                  <CardDescription className="project-description">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="project-techs">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <Badge key={index} variant="outline" className="tech-badge">{tech}</Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="tech-badge">+{project.technologies.length - 4}</Badge>
                    )}
                  </div>
                  <div className="project-links">
                    {project.liveUrl && (
                      <Button size="sm" asChild className="project-link-btn">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button size="sm" variant="outline" asChild className="project-link-btn">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-gradient">Get In Touch</span>
            </h2>
            <p className="section-subtitle">Want to work together? I'm always open to discussing new opportunities.</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">{personalInfo.email}</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">{personalInfo.phone}</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-value">{personalInfo.location}</p>
                </div>
              </div>
              <div className="contact-social">
                <Button asChild className="social-btn">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild className="social-btn">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle className="form-title">Send Message</CardTitle>
                <CardDescription className="form-description">Tell me about your project</CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  className="contact-form" 
                  action="https://formspree.io/f/movwyjon" 
                  method="POST"
                >
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input 
                      name="name" 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="Your name" 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input 
                      name="email" 
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="Your email" 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input 
                      name="subject" 
                      type="text" 
                      className="form-input" 
                      placeholder="Message subject" 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea 
                      name="message" 
                      rows={4} 
                      required 
                      className="form-textarea" 
                      placeholder="Write your message..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="submit-btn">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="footer-content">
            <p className="footer-text">
              © 2025 {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

// Missing Brain component import
const Brain = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4a4 4 0 0 1 3.5 2.2 4 4 0 0 1 3 1.8 4 4 0 0 1 0 6 4 4 0 0 1-3 1.8 4 4 0 0 1-3.5 2.2 4 4 0 0 1-3.5-2.2 4 4 0 0 1-3-1.8 4 4 0 0 1 0-6 4 4 0 0 1 3-1.8A4 4 0 0 1 12 4z"/>
    <path d="M12 8v8"/>
    <path d="M8 12h8"/>
  </svg>
);