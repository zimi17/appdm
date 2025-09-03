"use client";

import { useState, useEffect } from "react";

interface StickyOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useSetSticky(options: StickyOptions = {}) {
  const { threshold = 10 } = options;
  const [isSticky, setIsSticky] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      const scrolled = window.scrollY > threshold;
      setIsSticky(scrolled);
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted, threshold]);

  return {
    isSticky,
    mounted
  };
}
