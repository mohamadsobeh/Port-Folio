// src/components/ui/MotionParagraph.tsx
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

type MotionParagraphProps = MotionProps & HTMLAttributes<HTMLParagraphElement>;

const MotionParagraph = (props: MotionParagraphProps) => {
  return <motion.p {...props} />;
};

export default MotionParagraph;
