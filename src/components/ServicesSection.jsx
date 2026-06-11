import { motion } from 'framer-motion';
import { Code2, Palette, BrainCircuit, ServerCog } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-accent" strokeWidth={1.5} />,
    title: "Web Development",
    description: "Robust, scalable web applications built with modern frameworks and performant architectures.",
    tags: ["React", "Next.js", "Node.js"]
  },
  {
    icon: <Palette className="w-8 h-8 text-white" strokeWidth={1.5} />,
    title: "UI/UX Design",
    description: "Premium, user-centric interfaces that blend aesthetics with seamless functionality.",
    tags: ["Figma", "Framer", "Prototyping"]
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-white" strokeWidth={1.5} />,
    title: "AI Solutions",
    description: "Intelligent automation, machine learning integration, and custom AI implementations.",
    tags: ["OpenAI", "Python", "LLMs"]
  },
  {
    icon: <ServerCog className="w-8 h-8 text-white" strokeWidth={1.5} />,
    title: "Maintenance & Scaling",
    description: "Continuous optimization, cloud infrastructure management, and performance tuning.",
    tags: ["AWS", "Docker", "CI/CD"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <span className="text-accent text-sm font-mono tracking-wider uppercase mb-4 block">
            01 — Core Offerings
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4 text-white"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl text-lg font-sans mx-auto"
          >
            We deliver end-to-end digital excellence. From concept to deployment, our expertise drives your growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 md:p-10 rounded-[2rem] border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              {/* Subtle accent line on hover */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500 ease-out" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-3xl font-heading font-medium mb-4 text-white tracking-tight relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed relative z-10 font-sans text-lg mb-8 flex-grow">
                {service.description}
              </p>

              {/* Tags similar to Work page */}
              <div className="flex gap-3 relative z-10 flex-wrap">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 font-sans text-sm border border-white/10 text-gray-300 group-hover:border-white/20 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
