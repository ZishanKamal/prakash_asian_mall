"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger index — multiplies the entrance delay. */
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
