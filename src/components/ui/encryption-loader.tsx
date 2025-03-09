import { motion } from "framer-motion";
import { Shield, Lock, Wifi } from "lucide-react";

export function EncryptionLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="space-y-8 text-center">
        <div className="space-y-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Shield className="w-16 h-16 text-blue-400" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl font-mono font-bold text-blue-400"
          >
            ESTABLISHING SECURE CONNECTION
          </motion.div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Wifi className="w-6 h-6 text-blue-400" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1,
                delay: 0.3,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Lock className="w-6 h-6 text-blue-400" />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1,
                delay: 0.6,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Shield className="w-6 h-6 text-blue-400" />
            </motion.div>
          </div>

          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ width: "8px", opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="h-2 bg-blue-400 rounded-full"
              />
            ))}
          </div>

          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
            className="h-1 bg-blue-400/50 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
} 