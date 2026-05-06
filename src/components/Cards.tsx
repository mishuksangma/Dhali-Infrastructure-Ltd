import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    name: string;
    location: string;
    category: string;
    status: string;
    image: string;
    description: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-sm overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative h-72 overflow-hidden border-b border-slate-100">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 bg-primary px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-accent">
          {project.category}
        </div>
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
          <button className="bg-white text-primary px-6 py-3 text-[10px] font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Project
          </button>
        </div>
      </div>
      <div className="p-8">
        <div className="flex flex-col gap-1 mb-4">
          <span className="text-[10px] font-bold text-accent-dark uppercase tracking-widest">{project.status}</span>
          <h3 className="font-display font-bold text-2xl text-primary leading-tight">
            {project.name}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          {project.location}
        </div>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 italic font-medium">
          "{project.description}"
        </p>
      </div>
    </motion.div>
  );
}

export function ServiceCard({ service, index }: { service: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-10 rounded-sm bg-white border border-slate-200 shadow-sm hover:border-accent transition-all group"
    >
      <div className="w-12 h-12 bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-primary group-hover:border-primary transition-all">
        <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
      </div>
      <h3 className="font-display font-bold text-xl mb-4 text-primary">{service.title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed font-medium uppercase tracking-wide">
        {service.description}
      </p>
    </motion.div>
  );
}
