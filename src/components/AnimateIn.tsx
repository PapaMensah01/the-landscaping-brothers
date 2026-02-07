"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
};

export function AnimateIn({ children, className = "", delay = 0, stagger = 0, as: Tag = "div" }: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setVisible(true), delay + stagger);
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`animate-in-place ${visible ? "animate-in-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

type AnimateInStaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function AnimateInStagger({ children, className = "", stagger = 80 }: AnimateInStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          className={`animate-in-place ${visible ? "animate-in-visible" : ""}`}
          style={visible ? { animationDelay: `${i * stagger}ms` } : undefined}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
