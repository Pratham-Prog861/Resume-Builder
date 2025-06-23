"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title }) => {
  return (
    <motion.div
      className="bg-white/90 dark:bg-gray-900/90 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 gap-2"
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <p className="text-lg italic text-gray-700 dark:text-gray-200 mb-4">{quote}</p>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
      <p className="text-md text-gray-500 dark:text-gray-400">{title}</p>
    </motion.div>
  );
};

const testimonialsData = [
  {
    quote: "This resume builder is incredibly intuitive and helped me land my dream job! The modern design made my resume stand out.",
    name: "Jane Doe",
    title: "Senior Software Engineer",
  },
  {
    quote: "I've tried many resume builders, but this one is by far the best. The minimalistic approach is exactly what I needed.",
    name: "John Smith",
    title: "Product Manager",
  },
  {
    quote: "A fantastic tool that simplifies the resume creation process. Highly recommend it to anyone looking for a professional and clean design.",
    name: "Emily White",
    title: "UX Designer",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;