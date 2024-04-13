'use client'
import React from 'react';
import Link from 'next/link'
import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Product = () => {
  return (
    <motion.div variants={item} whileHover={{ scale: 1.05 }} className="group flex flex-col bg-white rounded-lg overflow-hidden shadow hover:shadow-lg dark:bg-gray-800 dark:hover:shadow-orange-900">

      <div className="overflow-hidden">
        <img src="/img/1.jpg" alt="text" className="h-48 w-full object-cover object-center transition duration-300 group-hover:grayscale group-hover:blur-sm group-hover:scale-125 group-hover:rotate-6"/>
      </div>

      <div className="flex flex-col gap-4 p-4 rounded-br-lg rounded-bl-lg border-l border-r border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <h5 className="text-xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-2">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link href={"/category"} className="self-start inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-slate-900 dark:bg-blue-600 dark:hover:bg-blue-700">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </Link>
      </div>

    </motion.div>
  );
};

export default Product;
