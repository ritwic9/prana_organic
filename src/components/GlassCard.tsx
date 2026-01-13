import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const GlassCard = ({ children, className, hover = true, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={cn(
        "relative bg-white/70 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl overflow-hidden transition-shadow duration-300",
        hover && "hover:shadow-2xl hover:border-primary/20",
        className
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;