// components/Counter.jsx
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion ,useAnimation } from "framer-motion";

const Counter = ({ end, duration = 1 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        count: end,
        transition: {
          duration: duration,
          ease: "easeOut",
        },
      });
    }
  }, [controls, inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ count: 0 }}
      onUpdate={(latest) => {
        setDisplayNumber(Math.floor(latest.count));
      }}
      className="text-4xl font-bold text-blue-600"
    >
      {displayNumber}+
    </motion.div>
  );
};

export default Counter;