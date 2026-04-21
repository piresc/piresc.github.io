export const motionEase = [0.22, 1, 0.36, 1] as const;

type MotionOptions = {
  delay?: number;
  margin?: string;
};

export function getRevealMotion(
  shouldReduceMotion: boolean,
  options: MotionOptions = {}
) {
  const { delay = 0, margin } = options;

  return {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: margin ? { once: true, margin } : { once: true },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.5, delay, ease: motionEase },
  };
}

export function getScaleInMotion(
  shouldReduceMotion: boolean,
  options: MotionOptions = {}
) {
  const { delay = 0, margin = '-100px' } = options;

  return {
    initial: shouldReduceMotion ? false : { scale: 0.95, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true, margin },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.5, delay, ease: motionEase },
  };
}
