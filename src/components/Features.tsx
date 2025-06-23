"use client"
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Modular Sections",
    desc: "Add, remove, and reorder resume blocks easily.",
    icon: "📑",
    color: "bg-blue-100 dark:bg-yellow-900"
  },
  { 
    title: "Live Preview", 
    desc: "See changes in real-time as you edit.",
    icon: "👁️",
    color: "bg-purple-100 dark:bg-pink-900"
  },
  { 
    title: "PDF Export", 
    desc: "Download your resume with one click.",
    icon: "📄",
    color: "bg-green-100 dark:bg-green-900"
  },
  {
    title: "Multiple Versions",
    desc: "Save and manage different resume styles.",
    icon: "🗂️",
    color: "bg-yellow-100 dark:bg-blue-900"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-yellow-400 dark:to-pink-400 drop-shadow-lg">
          Powerful Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 flex items-start gap-6 hover:-translate-y-1"
            >
              <span className={`flex items-center justify-center w-14 h-14 rounded-xl text-3xl shadow-md ${feature.color} group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </span>
              <div>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
