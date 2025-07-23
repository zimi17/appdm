import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText'; // Assuming SplitText is available

gsap.registerPlugin(SplitText);

interface HeroTextAnimationProps {
  text: string;
}

const HeroTextAnimation: React.FC<HeroTextAnimationProps> = ({ text }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const splitText = new SplitText(textRef.current, { type: "chars" });
      gsap.fromTo(splitText.chars,
        { opacity: 0, y: 100, rotationZ: 5, color: "#002147" }, // Oxford Blue
        { opacity: 1, y: 0, rotationZ: 0, color: "#1E1E1E", duration: 0.8, stagger: 0.03, ease: "power3.out" }
      );
    }
  }, [text]);

  return (
    <h1 ref={textRef} className="text-display">
      {text}
    </h1>
  );
};

export default HeroTextAnimation;
