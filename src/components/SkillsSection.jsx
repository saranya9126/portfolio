import { useState } from "react";
import { cn } from "@/lib/utils";

const category = ["All","Frontend","Backend","Tools"];
const skills = [
    // Frontend
    { name: "HTML/CSS", level: 90,category: "Frontend" },
    { name: "JavaScript", level: 85,category: "Frontend" },
    { name: "React", level: 85,category: "Frontend" },
    { name: "Tailwind CSS", level: 85,category: "Frontend" },
    { name: "TypeScript", level: 60,category: "Frontend" },
    { name: "Redux", level: 60,category: "Frontend" },
// Backend
    { name: "Node.js", level: 80,category: "Backend" },
    { name: "Express.js", level: 85,category: "Backend" },
    { name: "PostgreSQL", level: 60,category: "Backend" },
    { name: "MongoDB", level: 80,category: "Backend" },
    { name: "Firebase", level: 80,category: "Backend" },

// Tools
    { name: "Git & GitHub", level: 90,category: "Tools" },
    { name: "VS Code", level: 90,category: "Tools" },
    { name: "Postman", level: 80,category: "Tools" },
    { name: "Vercel", level: 75,category: "Tools" },
    { name: "Render", level: 70,category: "Tools" },
    
]

export const SkillsSection = () => {
    const[activeCategory,setActiveCategory]=useState("All");
const filteredSkills = activeCategory === "All" ? skills : skills.filter(skill => skill.category === activeCategory);

  return (
     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="mb-12 flex justify-center gap-4 flex-wrap">
            {category.map((cat,idx)=>(<button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={cn("px-4 py-2 rounded-full text-sm border transition-colors duration-300", 
                activeCategory === cat ? 'bg-primary text-white border-primary' : 'bg-secondary/50 text-muted-foreground hover:bg-secondary/70 border-transparent'
                )}
              >
                {cat}
              </button>
            ))}
            </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-sm">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-1 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-1 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
