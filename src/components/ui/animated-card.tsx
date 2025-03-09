"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface AnimatedCardProps {
  onClick?: () => void;
  layoutId?: string;
  children: React.ReactNode;
}

export function AnimatedCard({ onClick, layoutId, children }: AnimatedCardProps) {
  return (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className="cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Card className="relative overflow-hidden border border-blue-500/20 bg-black/40 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
        <div className="relative p-6 space-y-4">
          {children}
        </div>
      </Card>
    </motion.div>
  );
} 