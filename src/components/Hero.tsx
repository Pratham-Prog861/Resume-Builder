"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pl-4 py-16 md:py-24 bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-200 dark:bg-yellow-900 opacity-20 blur-3xl z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 lg:w-1/2 text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 dark:from-yellow-400 dark:via-yellow-500 dark:to-yellow-600 drop-shadow-lg">
              Build Resumes That <span className="underline decoration-blue-400 dark:decoration-yellow-400">Stand Out</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 font-medium max-w-xl">
              Drag, drop, customize, and export. Your resume, your way. Create professional resumes that catch employers&apos; attention.
            </p>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center text-gray-700 dark:text-gray-200 text-base md:text-lg">
                <svg className="w-5 h-5 mr-3 text-blue-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Modern, professional templates
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-200 text-base md:text-lg">
                <svg className="w-5 h-5 mr-3 text-blue-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Easy customization tools
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-200 text-base md:text-lg">
                <svg className="w-5 h-5 mr-3 text-blue-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                ATS-friendly formats
              </li>
            </ul>
            <motion.a
              href="/get-started"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 dark:from-yellow-500 dark:to-yellow-600 text-white px-7 py-3 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-transparent hover:border-blue-700 dark:hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-400 animate-pulse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Building Now
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 lg:w-1/2 flex justify-center"
          >
            <div className="relative shadow-2xl rounded-3xl overflow-hidden border-4 border-blue-100 dark:border-yellow-900 bg-white dark:bg-gray-900">
              <Image
                src="https://media.istockphoto.com/id/1359108560/photo/resumes-on-laptop-with-glasses-resume-review-job-interview.jpg?s=612x612&w=0&k=20&c=if4zqnVhIDnMHXnpxG5WSWDMXihPADhTO209AW20ORE="
                alt="Sample Resume"
                width={500}
                height={500}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
