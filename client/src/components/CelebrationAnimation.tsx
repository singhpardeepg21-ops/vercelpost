import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CelebrationAnimation() {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);

  useEffect(() => {
    const colors = ['#f59e0b', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6'];
    const newConfetti = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setConfetti(newConfetti);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Main celebration text */}
      <motion.div
        className="text-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', duration: 0.8 }}
      >
        <div className="text-6xl mb-4">🎉</div>
        <div className="text-2xl font-bold text-primary bg-background/90 px-6 py-3 rounded-lg shadow-lg">
          Correct!
        </div>
      </motion.div>

      {/* Confetti particles */}
      {confetti.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 rounded"
          style={{
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          initial={{ 
            scale: 0, 
            y: 0, 
            rotate: 0,
            opacity: 1 
          }}
          animate={{ 
            scale: [0, 1, 0], 
            y: [0, -100, 200], 
            rotate: [0, 180, 360],
            opacity: [1, 1, 0]
          }}
          transition={{ 
            duration: 2, 
            ease: "easeOut",
            delay: Math.random() * 0.5
          }}
        />
      ))}

      {/* Balloons */}
      <motion.div
        className="absolute left-10 top-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: -50, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="text-4xl">🎈</div>
      </motion.div>
      
      <motion.div
        className="absolute right-10 top-32"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: -30, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
      >
        <div className="text-4xl">🎈</div>
      </motion.div>

      {/* Clapping hands */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.8, times: [0, 0.6, 1] }}
      >
        <div className="text-3xl">👏</div>
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-1/4"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.8, delay: 0.2, times: [0, 0.6, 1] }}
      >
        <div className="text-3xl">👏</div>
      </motion.div>
    </motion.div>
  );
}