import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  delay?: number;
  noVertical?: boolean;
  hasTriggerMargin?: boolean;
  children: React.ReactNode;
  className?: string;
};

export default function Reveal({
  delay,
  noVertical = false,
  hasTriggerMargin = true,
  children,
  className,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: prefersReducedMotion ? 1 : 0,
        y: noVertical ? 0 : prefersReducedMotion ? 0 : 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, margin: hasTriggerMargin ? "-128px" : "0px" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 1,
        delay: delay || 0,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
