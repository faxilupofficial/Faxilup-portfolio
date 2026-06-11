import { motion } from 'framer-motion';

const projects = [
  {
    title: "E-commerce Web Application",
    category: "Web Application",
    tags: ["React", "Node.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2070&auto=format&fit=crop",
    link: "https://shiny-druid-15f5bd.netlify.app/"
  },
  {
    title: "Revox",
    category: "Predictive Claim Intelligence for Revenue Cycle Teams",
    tags: ["Healthcare AI", "Predictive Analytics", "FinTech"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "https://darkmind5873-beep.github.io/REVOX-RCM-engine-/"
  },
  {
    title: "Vertex",
    category: "Investment Tracking App",
    tags: ["UI/UX", "Figma", "Finance"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.figma.com/proto/epYeN4JOQU9m0LgzvTPzEc/project---1?node-id=0-1&t=5vbonOd9CIupT53Y-1"
  },
  {
    title: "E-commerce UI/UX Prototype",
    category: "Figma Prototype",
    tags: ["UI/UX", "Figma", "Design System"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
    link: "https://www.figma.com/design/C4nbU4eFCue13TDOfST5Nn/Carveat?node-id=0-1&t=POO2MWn6WRPtTb9c-1"
  }
];

export default function WorkSection() {
  return (
    <section id="work" className="py-32 relative bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <span className="text-accent text-sm font-mono tracking-wider uppercase mb-4 block">
            02 — Case Studies
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4 text-white"
          >
            Selected <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl text-lg font-sans mx-auto"
          >
            A showcase of our premium digital products, engineered for performance and designed to captivate.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-accent-light text-sm font-sans font-medium tracking-wide mt-6 flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Click on any card to view the project
          </motion.p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link || undefined}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer block"
            >
              <div className="absolute inset-0 bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content reveal */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-accent-light font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-sans">
                  {project.category}
                </p>
                <h3 className="text-3xl font-heading font-medium mb-4">{project.title}</h3>
                
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md font-sans text-sm border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
