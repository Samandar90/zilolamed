"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export function Counter({
  to,
  suffix = "",
  prefix = "",
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    if (reduce) {
      if (ref.current) ref.current.textContent = `${prefix}${to}${suffix}`;
      return;
    }
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(v).toLocaleString("en-US")}${suffix}`;
      }
    });
  }, [spring, suffix, prefix, reduce, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
