interface StyleTransitionDelayArgs {
  index: number;
  isVisible?: boolean;
  delay?: number;
}

export function styleTransitionDelay({
  index,
  isVisible,
  delay = 0.03,
}: StyleTransitionDelayArgs) {
  return {
    transitionDelay: `${index * delay}s`,
    transform: isVisible ? "translateY(0)" : "translateY(100%)",
  };
}