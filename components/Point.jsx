'use client'
import React, { useRef }  from 'react';
import { motion } from "framer-motion";
import {useFollowPointer} from "@/helpers/use-follow-pointer";

const Point = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="w-12 h-12 rounded-full bg-black dark:bg-white"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 5,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
};

export default Point;
