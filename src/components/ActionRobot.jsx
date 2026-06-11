import { motion } from 'framer-motion';

export default function ActionRobot() {
  return (
    <div className="relative w-full max-w-[400px] h-[500px] mx-auto flex flex-col items-center justify-center pt-20">
      
      {/* Floating animation wrapper */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative flex flex-col items-center z-10"
      >
        {/* Head */}
        <div className="w-40 h-28 glass-panel rounded-[2.5rem] border border-white/20 shadow-[0_0_40px_rgba(139,92,246,0.15)] relative z-20 flex flex-col items-center justify-center overflow-hidden">
          {/* Glossy top highlight */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
          
          {/* Visor */}
          <div className="w-32 h-12 bg-black/80 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden border border-white/5">
            {/* LED Eye line scanning animation */}
            <motion.div 
              animate={{ width: ["20%", "80%", "20%"], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="h-1.5 bg-accent rounded-full shadow-[0_0_15px_#8b5cf6]" 
            />
          </div>
          
          {/* Ear nodes */}
          <div className="absolute -left-2 top-10 w-4 h-8 bg-gray-800 rounded-l-md border-y border-l border-gray-600" />
          <div className="absolute -right-2 top-10 w-4 h-8 bg-gray-800 rounded-r-md border-y border-r border-gray-600" />
        </div>

        {/* Neck */}
        <div className="w-8 h-6 bg-gradient-to-b from-gray-700 to-gray-900 rounded-sm -mt-2 z-10" />

        {/* Body Area */}
        <div className="relative z-10">
          {/* Left Arm (static) */}
          <div className="absolute -left-10 top-6 w-8 h-28 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full border border-gray-700 origin-top rotate-[20deg] shadow-lg" />

          {/* Right Arm (Waving Action) */}
          {/* Starts pointed down, swings up to wave, then waves back and forth */}
          <motion.div 
            initial={{ rotate: -160 }} 
            animate={{ rotate: [-160, 40, 70, 40, 70, 40] }} 
            transition={{ 
              duration: 3.5, 
              delay: 0.5, 
              ease: "easeInOut",
              times: [0, 0.4, 0.55, 0.7, 0.85, 1] 
            }}
            className="absolute -right-10 top-6 w-8 h-32 bg-gradient-to-b from-gray-800 to-gray-900 rounded-full border border-gray-700 shadow-xl flex items-end justify-center"
            style={{ transformOrigin: "top center" }}
          >
            {/* The Palm / Hand */}
            {/* It starts small (closed), and scales up/expands (opens) as the arm raises */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{ scale: [0.5, 1.5, 1.2, 1.5, 1.2, 1.5], opacity: 1 }}
              transition={{ 
                duration: 3.5, 
                delay: 0.5, 
                ease: "easeInOut",
                times: [0, 0.4, 0.55, 0.7, 0.85, 1] 
              }}
              className="relative w-12 h-12 -mb-6"
            >
              <div className="absolute inset-0 bg-accent rounded-full blur-[8px] animate-pulse" />
              <div className="absolute inset-0 bg-white/80 rounded-full shadow-[0_0_20px_#8b5cf6] border-2 border-accent" />
            </motion.div>
          </motion.div>

          {/* Torso */}
          <div className="w-36 h-40 glass-panel rounded-[2.5rem] border border-white/20 shadow-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden">
             {/* Torso reflection */}
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12" />
             
             {/* Glowing Core */}
             <div className="w-16 h-16 rounded-full border-4 border-accent/20 flex items-center justify-center shadow-inner relative">
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="w-8 h-8 bg-accent rounded-full blur-sm" 
               />
               <div className="absolute inset-0 m-auto w-6 h-6 bg-white rounded-full shadow-[0_0_15px_#8b5cf6]" />
             </div>
          </div>
        </div>
      </motion.div>

      {/* Hover Base Shadow */}
      <motion.div 
        animate={{ scale: [0.8, 1, 0.8], opacity: [0.3, 0.6, 0.3] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="w-32 h-6 bg-accent/30 rounded-[100%] blur-xl mt-12"
      />
    </div>
  );
}
