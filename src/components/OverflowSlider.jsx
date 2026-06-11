import { motion } from 'framer-motion';

const works = [
  "Premium UI/UX Design",
  "Full-Stack Web Development",
  "AI & Machine Learning",
  "Enterprise Software",
  "Scalable Architecture",
  "Mobile App Development",
  "Premium UI/UX Design",
  "Full-Stack Web Development",
  "AI & Machine Learning",
  "Enterprise Software",
  "Scalable Architecture",
  "Mobile App Development"
];

export default function OverflowSlider() {
  return (
    <section className="w-full py-4 overflow-hidden bg-black border-y border-white/10 relative z-10 flex">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
      
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        className="flex gap-8 items-center whitespace-nowrap pl-8"
      >
        {works.map((work, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-base md:text-xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity cursor-default">
              {work}
            </span>
            <span className="text-accent text-lg">✦</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
