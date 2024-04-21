import { AccessibleContext } from "@/pages/_app";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function FromLeftEntryDiv({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { accessibilityPreference } = useContext(AccessibleContext);

  let initial = { opacity: 0, x: -50 };
  let animate = { opacity: 1, x: 0 };

  if (accessibilityPreference) {
    initial = { opacity: 0, x: 0 };
    animate = { opacity: 1, x: 0 };
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
