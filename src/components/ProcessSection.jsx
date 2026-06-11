import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Discover", desc: "We align with your vision and define technical requirements." },
  { number: "02", title: "Design", desc: "Crafting intuitive UX and stunning premium interfaces." },
  { number: "03", title: "Develop", desc: "Engineering scalable architecture with modern tech stacks." },
  { number: "04", title: "Deploy", desc: "Rigorous testing and seamless production rollout." },
  { number: "05", title: "Scale", desc: "Continuous monitoring, optimization, and growth scaling." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <span className="text-accent text-sm font-mono tracking-wider uppercase mb-4 block">
            03 — Our Workflow
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4"
          >
            How We <span className="text-gradient">Build</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl text-lg font-sans mx-auto"
          >
            A streamlined, transparent process designed to turn complex challenges into elegant solutions.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col md:items-center text-left md:text-center group"
              >
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-xl font-bold font-heading mb-6 relative group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:border-accent/50">
                  <span className="text-gradient">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
