import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>;

const MotionDiv = (props: MotionDivProps) => {
  return <motion.div {...props} />;
};

export default MotionDiv;