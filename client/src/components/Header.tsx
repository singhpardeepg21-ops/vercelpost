import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      className="text-center py-8 bg-gradient-to-r from-primary/10 to-primary/5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent mb-2"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        ✨ King $ Studio ✨
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-foreground/80 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Founder: Pardeep Singh
      </motion.p>
      <motion.div 
        className="mt-4 h-1 w-32 bg-gradient-to-r from-primary to-yellow-500 mx-auto rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 128 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
    </motion.header>
  );
}