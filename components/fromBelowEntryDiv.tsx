import { AccessibleContext } from "@/pages/_app";
import { motion, useAnimation } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function FromBelowEntryDiv({
  isVisibleInitially = false,
  className,
  children,
}: {
  isVisibleInitially?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const { accessibilityPreference } = useContext(AccessibleContext);

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  let variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  if (accessibilityPreference) {
    variants = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 0 },
    };
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={isVisibleInitially ? "visible" : "hidden"}
      animate={control}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
