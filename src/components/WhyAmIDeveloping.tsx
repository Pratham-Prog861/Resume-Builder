"use client"
import React from "react";
import { motion } from "framer-motion";

const WhyAmIDeveloping = () => {
  return (
    <section id="why" className="py-24 px-4 md:px-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] -z-10" />
      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 px-8 py-12 md:py-16 flex flex-col items-center text-center gap-6 backdrop-blur-lg"
        >
          <motion.h3 
            className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 dark:from-yellow-300 pt-5 dark:via-yellow-400 dark:to-pink-300 drop-shadow-lg mb-4 dark:text-shadow-strong"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Why I&apos;m Building This
          </motion.h3>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 dark:from-yellow-400 dark:to-pink-400 mx-auto mb-4" />
          <motion.p 
            className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            As a developer, I&apos;ve often struggled with rigid resume templates that
            don&apos;t reflect my unique skills or projects. This builder empowers users
            to craft resumes that are{" "}
            <motion.span 
              className="font-medium text-blue-600 dark:text-yellow-400 inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              flexible
            </motion.span>
            ,{" "}
            <motion.span 
              className="font-medium text-indigo-600 dark:text-pink-400 inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              modular
            </motion.span>
            , and{" "}
            <motion.span 
              className="font-medium text-purple-600 dark:text-yellow-400 inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              tailored
            </motion.span>{" "}
            to their goals—whether they&apos;re applying for a dev job, freelancing, or showcasing
            creative work.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAmIDeveloping;
