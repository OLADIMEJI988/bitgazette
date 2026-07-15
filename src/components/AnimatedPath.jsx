import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function AnimatedPath({
  duration = 1.2,
  delay = 0,
  pauseBeforeReverse = 2000, // milliseconds
  ...props
}) {
  const controls = useAnimationControls();

  useEffect(() => {
    let mounted = true;

    const animate = async () => {
      if (delay) await sleep(delay * 1000);

      while (mounted) {
        // Draw
        await controls.start({
          pathLength: 1,
          transition: {
            duration,
            ease: "easeInOut",
          },
        });

        // Pause ONLY after drawing
        await sleep(pauseBeforeReverse);

        // Erase
        await controls.start({
          pathLength: 0,
          transition: {
            duration,
            ease: "easeInOut",
          },
        });

        // Immediately start drawing again
      }
    };

    animate();

    return () => {
      mounted = false;
    };
  }, [controls, duration, delay, pauseBeforeReverse]);

  return (
    <motion.path
      initial={{ pathLength: 0 }}
      animate={controls}
      {...props}
    />
  );
}