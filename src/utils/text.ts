export function shouldDecreaseTextSize(
  text?: string,
  totalLengthBreakpoint = 45,
  wordLengthBreakpoint = 12,
) {
  if (!text) return false;
  return (
    text.length >= totalLengthBreakpoint ||
    text.split(" ").some((word) => word.length >= wordLengthBreakpoint)
  );
}
