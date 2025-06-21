// src/components/ui/MotionForm.tsx
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { FormHTMLAttributes } from "react";

type MotionFormProps = MotionProps & FormHTMLAttributes<HTMLFormElement>;

const MotionForm = (props: MotionFormProps) => {
  return <motion.form {...props} />;
};

export default MotionForm;
