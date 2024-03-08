import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function HideawayDiv({
  children,
  isOpen = false,
  ...props
}: {
  children: ReactNode;
  isOpen?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: 50 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
