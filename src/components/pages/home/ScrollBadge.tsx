import clsx from "clsx";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type Props = {
  className?: string;
};

export default function ScrollBadge({ className = "" }: Props) {
  const { scrollYProgress } = useScroll();
  const rotateRange = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate = useSpring(rotateRange, { stiffness: 400, damping: 90 });

  return (
    <div
      className={clsx(
        "relative flex h-48 w-48 items-center justify-center",
        className
      )}
      aria-hidden="true"
    >
      <motion.img
        style={{ rotate }}
        src="/svgs/rotating-badge-text.svg"
        alt="Fermented Handcrafted badge"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full origin-center"
        aria-hidden="true"
      />
      <div className="relative z-30 flex items-end justify-center">
        <span className="block h-20 w-1 origin-top rounded-full bg-primary" />
        <span className="block h-6 w-1 origin-bottom translate-x-[-5px] translate-y-0.5 rotate-45 rounded-full bg-primary" />
        <span className="block h-6 w-1 origin-bottom translate-x-[-7px] translate-y-0.5 -rotate-45 rounded-full bg-primary" />
      </div>
    </div>
  );
}
