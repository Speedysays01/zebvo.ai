"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-80 h-80 rounded-full blur-3xl z-0"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.5), rgba(37,99,235,0.25))",
      }}
      animate={{
        x: mousePos.x - 160,
        y: mousePos.y - 160,
        rotate: [0, 360],
      }}
      transition={{
        x: { type: "spring", stiffness: 60, damping: 20 },
        y: { type: "spring", stiffness: 60, damping: 20 },
        rotate: { repeat: Infinity, duration: 20, ease: "linear" },
      }}
    />
  );
};

export default MouseFollower;
