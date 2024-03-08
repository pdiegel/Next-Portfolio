import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function FromBelowEntryDiv({
  isVisibleInitially = false,
  className,
  children,
}: {
  isVisibleInitially?: boolean;
  className: string;
  children?: React.ReactNode;
}) {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      initial={isVisibleInitially ? "visible" : "hidden"}
      animate={control}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
