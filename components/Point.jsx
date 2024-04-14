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
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.75 }}
      className="w-16 h-16 rounded-full bg-black dark:bg-white"
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
