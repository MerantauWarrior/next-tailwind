'use client'
import React from 'react';
import { motion } from "framer-motion";
import Product from "./Product";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.35
    }
  }
};

const Grid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >

      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>

    </motion.div>
  );
};

export default Grid;
