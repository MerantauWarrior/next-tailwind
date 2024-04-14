'use client'
import React from "react";
import { useEffect, useState } from "react";
import { motion, useAnimation, transform } from "framer-motion";

const maxLength = 12;
const mapRemainingToColor = transform([2, 6], ["#ff008c", "#ccc"]);
const mapRemainingToSpringVelocity = transform([0, 5], [50, 0]);

const Input = () => {
  const [value, setValue] = useState("");
  const charactersRemaining = maxLength - value.length;
  const controls = useAnimation();

  useEffect(() => {
    if (charactersRemaining > 6) return;

    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: mapRemainingToSpringVelocity(charactersRemaining),
        stiffness: 700,
        damping: 80
      }
    });
  }, [value.length]);

  return (
    <div className="relative inline-flex">
      <input value={value} onChange={e => setValue(e.target.value)} className="border-2 border-cyan-300 w-full py-4 pl-4 pr-10" />
      <div className="absolute top-[2px] right-[2px] bottom-[2px] flex flex-col justify-center bg-white">
        <motion.span
          animate={controls}
          className={"block p-2 text-xl"}
          style={{ color: mapRemainingToColor(charactersRemaining) }}
        >
          {charactersRemaining}
        </motion.span>
      </div>
    </div>
  );
};

export default Input
