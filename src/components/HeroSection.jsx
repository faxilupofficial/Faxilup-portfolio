import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSoundHint, setShowSoundHint] = useState(false);

  // Auto-hide sound hint tooltip after 4 seconds
  useEffect(() => {
    if (showSoundHint) {
      const timer = setTimeout(() => {
        setShowSoundHint(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showSoundHint]);

  // Handle video completion
  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  // Toggle audio
  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    setShowSoundHint(false);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms based on the reference:
  // The character stays relatively sticky or moves down slightly
  const yCenter = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // The text scrolls up faster
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Robot specific motion
  const robotScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Toggle video playback
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(e => console.log("Play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <section
      ref={containerRef}
      style={{ position: 'relative' }}
      className="relative min-h-[100svh] flex items-end justify-between overflow-hidden pb-20 px-6 md:px-12 bg-[#0a0a0a]"
    >
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27%2F%3E%3C%2Fsvg%3E')] opacity-20 mix-blend-overlay" />
      </div>

      {/* FULLSCREEN CINEMATIC BACKGROUND VIDEO */}
      <motion.div
        style={{ y: yCenter, scale: robotScale, opacity }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <video
          ref={videoRef}
          src="/robot.mp4"
          muted={isMuted}
          playsInline
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover pointer-events-auto cursor-pointer relative z-0"
          onClick={togglePlay}
        />
      </motion.div>

      {/* Premium Glassmorphic Controls Panel */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30 pointer-events-auto px-4 py-2 rounded-full glass-panel border border-white/5 backdrop-blur-md bg-black/10 shadow-md opacity-15 hover:opacity-95 transition-opacity duration-300">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/15 text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-4 h-4 text-accent" /> : <Play className="w-4 h-4 text-white fill-white" />}
        </button>

        {/* Mute/Unmute Button with Tooltip */}
        <div className="relative">
          <button
            onClick={toggleMute}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/15 text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-accent animate-pulse" />}
          </button>

          {/* Sound hint tooltip */}
          <AnimatePresence>
            {showSoundHint && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-14 left-1/2 -translate-x-1/2 px-3 py-1.5 glass-panel rounded-lg text-xs font-mono text-cyan-200 whitespace-nowrap border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
              >
                Click to unmute sound
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>



      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-20 w-full md:w-1/3 flex flex-col items-start md:items-end text-left md:text-right pointer-events-auto opacity-25 hover:opacity-90 transition-opacity duration-300 ml-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base text-gray-400 font-mono leading-relaxed mb-6 max-w-sm"
        >
          We help visionary teams transform complex requirements into intuitive, scalable, and premium digital platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex gap-4"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white text-white/50 hover:text-black border border-white/10 hover:border-white/40 font-semibold text-sm hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Start Project
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator at bottom center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => {
            const nextSec = document.getElementById('next-section');
            if (nextSec) {
              nextSec.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="group flex flex-col items-center focus:outline-none cursor-pointer"
          aria-label="Scroll to next section"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gray-500 group-hover:text-white transition-colors duration-300 mb-1">
            Explore
          </span>
          <div className="w-[26px] h-[44px] border border-white/20 rounded-full flex justify-center p-1 group-hover:border-white/50 transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 20, 0],
                height: ["12px", "3px", "12px"],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[2px] bg-accent rounded-full shadow-[0_0_8px_#8b5cf6]"
            />
          </div>
        </button>
      </div>

      {/* Cinematic Enter Experience Overlay */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
          >
            {/* Holographic background glow */}
            <div className="absolute w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative z-10 flex flex-col items-center gap-6 text-center px-4"
            >
              <h2 className="text-2xl md:text-3xl font-mono font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 uppercase">
                FAXIL UP
              </h2>

              <button
                onClick={() => {
                  setHasEntered(true);
                  if (videoRef.current) {
                    videoRef.current.muted = false;
                    setIsMuted(false);
                    videoRef.current.play()
                      .then(() => setIsPlaying(true))
                      .catch(err => {
                        console.log("Play failed:", err);
                        if (videoRef.current) {
                          videoRef.current.muted = true;
                          setIsMuted(true);
                          setShowSoundHint(true); // Show tooltip if browser blocked it
                          videoRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log(e));
                        }
                      });
                  }
                }}
                className="px-8 py-4 rounded-full bg-accent text-white font-mono font-semibold tracking-wider hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(139,92,246,0.4)] active:scale-95 cursor-pointer"
              >
                ENTER EXPERIENCE
              </button>

              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest animate-pulse">
                [ Click to enable audio ]
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
