'use client';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {

  return (
    <motion.main
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.main>
  );
}
