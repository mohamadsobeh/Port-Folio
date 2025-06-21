import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

type FadeInProps = MotionProps & HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

const FadeIn = ({ children, delay = 0.1, ...props }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
