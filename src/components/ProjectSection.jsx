import { ArrowRight, Github } from 'lucide-react';
import React from 'react'
const projects = [
  {
    id: 1,
    title: "Forever – E-commerce Platform",
    description:
      "A full-stack e-commerce web application with user authentication, product management, cart, and Stripe payment integration.",
    image: "https://ik.imagekit.io/1augh61ke9/New%20Folder/New%20Folder%201/Screenshot%20(98).png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    ProjectUrl: "https://forever-rigw.onrender.com",
    githubUrl: "https://github.com/saranya9126/FOREVER.git",
  },
  {
    id: 2,
    title: "Prescripto – Doctor Appointment System",
    description:
      "An online doctor appointment booking system with user login, doctor profiles, appointment scheduling, and admin dashboard.",
    image: "https://ik.imagekit.io/1augh61ke9/New%20Folder/New%20Folder%201/Screenshot%20(97).png",
    tags: ["React", "Node.js", "Express", "MongoDB","Stripe", "Tailwind CSS"],
    ProjectUrl: "https://prescripto-frontend-5rik.onrender.com/",
    githubUrl: "https://github.com/saranya9126/prescripto.git",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            My <span className="text-primary">Projects</span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Here are some of the projects I've worked on recently. Each project showcases my skills in full-stack development, from frontend design to backend functionality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-secondary/50 px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.ProjectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      View Project
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      <Github size={20}/>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className='text-center mt-12'>
                <a href="https://github.com/saranya9126" className="cosmic-button w-fit flex items-center mx-auto gap-2 text-sm">Check my Github <ArrowRight size={16}/></a>
            </div>
            </div>
        </section>
  )
}
