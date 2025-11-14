/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
  Database,
  Layers,
} from "lucide-react";
import "../app/globals.css";
import Image from "next/image";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (window.scrollY > 150) {
        setActiveSection("home");
      }
      if (window.scrollY > 1000) {
        setActiveSection("about");
      } else if (window.scrollY > 1500) {
        setActiveSection("projects");
      } else if (window.scrollY > 2000) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = ["home", "about", "projects", "contact"];

  const projects = [
    {
      name: "Pandaraama",
      description:
        "Application web de gestion d'albums photos avec authentification et partage. Architecture full-stack moderne.",
      tech: ["React", "Laravel", "MySQL"],
      github: "https://github.com/Dada-nol/raama_front",
      githubBack: "https://github.com/Dada-nol/raama_back",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "TrouveTonArtisan",
      description:
        "Plateforme intelligente de recherche d'artisans avec filtres avancés et interface intuitive.",
      tech: ["React", "CSS3", "JavaScript"],
      github: "https://github.com/Dada-nol/TrouveTonArtisan",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const skills = [
    { name: "React", icon: <Code2 size={24} />, level: 90 },
    { name: "Node.js", icon: <Layers size={24} />, level: 85 },
    { name: "Laravel", icon: <Code2 size={24} />, level: 80 },
    { name: "MySQL", icon: <Database size={24} />, level: 85 },
    { name: "JavaScript", icon: <Code2 size={24} />, level: 90 },
    { name: "HTML/CSS", icon: <Layers size={24} />, level: 95 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated gradient orb following cursor */}
      <div
        className="fixed  z-0 w-96 h-96 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.5) 10%, rgba(147,51,234,0.3) 50%, transparent 30%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Floating nav dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section
                ? "bg-blue-500 scale-150"
                : "bg-gray-600 hover:bg-gray-400"
            }`}
            onClick={() => setActiveSection(section)}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59, 131, 246, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              transform: `perspective(400px) rotateX(70deg) translateY(${
                scrollY * 0.5
              }px)`,
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Glitch effect name */}
          <div className="mb-6 relative inline-block">
            <h1 className="text-7xl md:text-9xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              NARDOL
            </h1>
            <div className="absolute -top-1 left-1 text-7xl md:text-9xl font-black text-blue-500 opacity-30 -z-10">
              NARDOL
            </div>
            <div className="absolute top-1 -left-1 text-7xl md:text-9xl font-black text-purple-500 opacity-30 -z-10">
              NARDOL
            </div>
          </div>

          <div className="font-sans grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            <div className="flex justify-center">
              <Image
                src="/img/dada-AI.png"
                alt="vue de profil d'un jeune homme réalisé par AI"
                width={550}
                height={550}
              ></Image>
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <p className="text-2xl md:text-3xl font-light tracking-wide text-gray-300">
              Full-Stack Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              {["React", "Node.js", "Laravel", "MySQL"].map((tech, i) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Je transforme des idées en applications web performantes et
            élégantes. Disponible pour des missions freelance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Voir mes projets
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Me contacter
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            {[
              {
                icon: <Github size={24} />,
                href: "https://github.com/Dada-nol",
                label: "GitHub",
              },
              {
                icon: <Linkedin size={24} />,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              {
                icon: <Mail size={24} />,
                href: "mailto:contact@example.com",
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Des technologies modernes pour créer des expériences web
            exceptionnelles
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Une sélection de mes réalisations récentes
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                    >
                      <Github size={16} />
                      Frontend
                    </a>
                    {project.githubBack && (
                      <a
                        href={project.githubBack}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full text-sm font-semibold hover:bg-white/10 transition-all"
                      >
                        <Github size={16} />
                        Backend
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Travaillons ensemble
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Un projet en tête ? Discutons-en autour d'un café (virtuel ou réel)
            ☕
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:contact@example.com"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Mail size={24} />
                contact@example.com
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2024 Nardol Darren. Crafted with React & passion.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Dada-nol"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
