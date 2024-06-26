import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

type ParallaxProps = {
  children?: React.ReactNode;
  offset?: number;
  className?: string;
  target?: RefObject<HTMLElement>;

  [x: string]: any;
};

export default function Parallax({
  offset = 50,
  className = "",
  children,
  target,
  ...rest
}: ParallaxProps) {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({ target, layoutEffect: false });

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const yRangeProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [offset, -offset]
  );

  const ySpring = useSpring(yRange, { stiffness: 400, damping: 90 });
  const ySpringProgress = useSpring(yRangeProgress, {
    stiffness: 400,
    damping: 90,
  });

  const y = target ? ySpringProgress : ySpring;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Return only div when user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className} {...rest}>
      {children}
    </motion.div>
  );
}
