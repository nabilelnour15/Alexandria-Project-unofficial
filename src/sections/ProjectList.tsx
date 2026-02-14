
import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import type { Project } from '../data/projectsData';
import { ProjectCard, ProjectDetailModal } from '../components/ProjectCard';

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white relative">
      <div className="alex-container">
        {projectsData.categories.map((category) => {
          const categoryProjects = projectsData.projects.filter(p => p.category === category.id);
          
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category.id} className="mb-32 last:mb-0">
              {/* Category Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 border-l-4 border-blue-600 pl-6"
              >
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 font-['Montserrat'] uppercase tracking-tight">
                  {category.label}
                </h2>
                <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
                  {category.description}
                </p>
              </motion.div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProjects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={() => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }} 
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
