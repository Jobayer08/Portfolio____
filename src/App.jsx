import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import './App.css';

import profilePhoto from './assets/my-photo.jpg';
import project1 from './assets/project1.jpg';
import project2 from './assets/project2.jpg';
import project3 from './assets/project3.jpg';
import project4 from './assets/project4.jpg';
import project5 from './assets/project5.jpg';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
  technologies: [
    "Machine Learning (Scikit-learn, Random Forest)",
    "FastAPI (REST API Development)",
    "JWT Authentication (Login & Register System)",
    "React.js Frontend Development",
    "Data Preprocessing & Feature Engineering",
    "Deployment (Vercel + Render)",
    "PostgreSQL Database Integration"
  ],
  githubUrl: "https://github.com/Jobayer08/fastapi-ml-project"
},
    {
      id: 2,
      title: "Alcohol-Detector",
      description: "This Arduino-based project aims to prevent road accidents by detecting alcohol consumption in bike riders before starting the vehicle. ",
      image: project1,
      technologies: ["Embedded Systems Programming", "IoT (Internet of Things)", "Sensor Integration", "LCD Display Communication (I2C protocol)", "Motor Control using Relay", "Power Management"],
      githubUrl: "https://github.com/Jobayer08/Alcohol-Detector"
    },
    {
      id: 3,
      title: "PSTU Alumni Network",
      description: "PSTU Alumni Network is a web-based platform designed to connect former students of Patuakhali Science and Technology Univerity with each other and with current students.",
      image: project2,
      technologies: ["HTML5", "CSS3", "JavaScript (basic)","PHP","MySQL","FPDF Library"],
      liveUrl: "https://alumninetworkpstu.free.nf",
      githubUrl: "https://github.com/Jobayer08/Alumni-Network-PSTU"
    },
    {
      id: 4,
      title: "Paint Industry Order Processing and Management System ",
      description: "This project is a web-based application developed using ASP.NET MVC (C#) and SQL Server, designed to manage a paint manufacturing company's daily operations. ",
      image: project3,
      technologies: ["HTML, CSS, Bootstrap", "ASP.NET MVC (C#)", "SQL Server","Entity Framework (Database First Approach)","Crystal Reports"],
      githubUrl: "https://github.com/Jobayer08/System-Analysis-Project"
    },
    {
      id: 5,
      title: "HelpMate",
      description: " Find Blood Donors & Medicine: A simple, efficient way to request blood or search for medicines nearby ",
      image: project4,
      technologies: ["Flutter (Dart)", "Firebase", "Cloud Firestore (NoSQL Database)","Python,Pandas,NumPy,Scikit-learn,Jupyter Notebook","FastAPI (Python)"],
      githubUrl: "https://github.com/Jobayer08/Help_Mate"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">
              {personalInfo.name}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === item ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent capitalize ${
                    activeSection === item ? 'text-primary bg-accent' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  Hi, I'm <span className="text-primary">{personalInfo.name}</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground">
                  {personalInfo.title}
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  With a strong interest in data science, I have completed foundational courses in Python and NumPy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="text-lg px-8 py-3"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="text-lg px-8 py-3"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <img 
                    src={profilePhoto} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-2xl">👋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about my journey and experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am continuously building my skills and knowledge to become a successful data scientist in the future.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I work with various technologies and I'm always eager to learn new things. The foundation of my work is understanding user needs and providing solutions accordingly.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Continuous Learning</Badge>
                <Badge variant="secondary">4 Projects Completed</Badge>
                <Badge variant="secondary">Thinking Client Satisfaction</Badge>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{personalInfo.email}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{personalInfo.phone}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <p className="font-medium text-foreground">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Some examples of my recent work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
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
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Want to work together? I'm always open to discussing new opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  <div className="space-y-8">
    <div className="flex flex-col gap-4">
      {/* Email Section */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <Mail className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <p className="font-medium text-foreground">Email</p>
          <p className="text-muted-foreground">{personalInfo.email}</p>
        </div>
      </div>

      {/* Phone Section */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <Phone className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <p className="font-medium text-foreground">Phone</p>
          <p className="text-muted-foreground">{personalInfo.phone}</p>
        </div>
      </div>

      {/* LinkedIn Button */}
      <div>
        <Button size="sm" asChild>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  </div>


            <Card>
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
                <CardDescription>Tell me about your project</CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  className="space-y-4" 
                  action="https://formspree.io/f/movwyjon" 
                  method="POST"
                >
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input name="name" type="text" required className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input name="email" type="email" required className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background" placeholder="Your email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <input name="subject" type="text" className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background" placeholder="Message subject" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea name="message" rows={4} required className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background" placeholder="Write your message..."></textarea>
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

