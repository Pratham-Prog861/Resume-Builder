"use client"
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope,FaMapMarkerAlt, FaGraduationCap, FaProjectDiagram, FaCertificate, FaUser, FaPhoneAlt } from "react-icons/fa";

const skills = [
  "HTML", "CSS", "TailwindCSS", "JavaScript", "Java", "Python", "AI/ML", "TypeScript", "ReactJS", "NextJS", "MongoDB", "ExpressJS", "NodeJS"
];
const languages = ["Hindi", "English", "Gujarati"];

const SampleResume = () => (
  <div className="flex mb-10 flex-col md:flex-row max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 relative animate-fade-in">
    {/* Soft background pattern */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08)_0,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.08)_0,transparent_60%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.10)_0,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.10)_0,transparent_60%)]" />
    </div>
    {/* Sidebar */}
    <aside className="md:w-1/3 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 text-white flex flex-col items-center py-10 px-6 gap-7 z-10 md:sticky md:top-8">
      <div className="relative flex flex-col items-center">
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 dark:from-yellow-300 dark:via-yellow-400 dark:to-pink-400 blur-sm opacity-40" />
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white ring-4 ring-blue-200 dark:ring-yellow-200 shadow-2xl mb-2 relative z-10 bg-white">
          <Image
            src="/user-photo.png"
            alt="Pratham Darji"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="text-center w-full">
        <h2 className="text-3xl font-extrabold tracking-tight font-serif drop-shadow bg-gradient-to-r from-white/90 to-blue-100 dark:from-yellow-100 dark:to-pink-100 bg-clip-text text-transparent">PRATHAM HARESH DARJI</h2>
        <div className="w-16 h-1 mx-auto my-3 rounded-full bg-gradient-to-r from-blue-200 to-purple-300 dark:from-yellow-200 dark:to-pink-200 opacity-70" />
        <p className="text-lg font-medium opacity-90">B.Sc. - Information Technology</p>
        <p className="text-sm opacity-80">PICA, Parul University</p>
      </div>
      <div className="flex flex-col gap-2 text-sm w-full mt-2">
        <div className="flex items-center gap-2"><FaPhoneAlt className="opacity-80" /> <span className="truncate">+91-8355824195</span></div>
        <div className="flex items-center gap-2"><FaEnvelope className="opacity-80" /> <span className="truncate">2305101020015@paruluniversity.ac.in</span></div>
        <div className="flex items-center gap-2"><FaMapMarkerAlt className="opacity-80" /> Vadodara, Gujarat, India</div>
        <div className="flex items-center gap-2"><FaLinkedin className="opacity-80" /> <a href="https://www.linkedin.com/in/pratham-darji-b704092a2" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200 dark:hover:text-yellow-200 transition">LinkedIn</a></div>
        <div className="flex items-center gap-2"><FaGithub className="opacity-80" /> <a href="https://github.com/Pratham-Prog861" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200 dark:hover:text-yellow-200 transition">GitHub</a></div>
      </div>
      <div className="w-full">
        <h3 className="font-semibold mt-4 mb-2 tracking-wide text-white/90">Key Skills</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map(skill => (
            <span key={skill} className="bg-white/30 text-white font-semibold px-2 py-1 rounded-full text-xs shadow hover:bg-white/50 hover:text-blue-700 dark:hover:text-yellow-700 transition cursor-default border border-white/20">{skill}</span>
          ))}
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-semibold mt-4 mb-2 tracking-wide text-white/90">Languages</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {languages.map(lang => (
            <span key={lang} className="bg-white/30 text-white font-semibold px-2 py-1 rounded-full text-xs shadow hover:bg-white/50 hover:text-blue-700 dark:hover:text-yellow-700 transition cursor-default border border-white/20">{lang}</span>
          ))}
        </div>
      </div>
    </aside>
    {/* Main Content */}
    <section className="md:w-2/3 p-8 flex flex-col gap-8 z-10">
      {/* Summary */}
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
        <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaUser /> Brief Summary</h3>
        <p className="text-gray-700 dark:text-gray-200 text-base">
          Frontend Developer | React & Next.js Enthusiast | Full-Stack Explorer | Tailwind CSS Stylist | Node.js | MongoDB<br />
          Passionate About Learning & Innovation
        </p>
      </div>
      {/* Education */}
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
        <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaGraduationCap /> Education</h3>
        <div className="mb-2">
          <span className="font-semibold">Parul University</span> <span className="text-xs text-gray-500 dark:text-gray-400">2023-2026</span><br />
          <span className="text-sm">B.Sc. - Information Technology (PICA) | <span className="font-bold">CGPA: 8.05/10</span></span>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Shanker Narayan Junior College, Bhayandar</span> <span className="text-xs text-gray-500 dark:text-gray-400">2022</span><br />
          <span className="text-sm">12<sup>th</sup> MSBSHSE | Percentage: <span className="font-bold">78.83/100</span></span>
        </div>
        <div>
          <span className="font-semibold">J.H Poddar High School, Bhayandar</span> <span className="text-xs text-gray-500 dark:text-gray-400">2020</span><br />
          <span className="text-sm">10<sup>th</sup> MSBSHSE | Percentage: <span className="font-bold">83/100</span></span>
        </div>
      </div>
      {/* Projects */}
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
        <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaProjectDiagram /> Projects</h3>
        <div className="mb-2">
          <span className="font-semibold">Portfolio</span> <span className="text-xs bg-blue-100 text-blue-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-0.5 rounded-full ml-2">NextJs</span>
          <br />
          <a href="https://prathamdarji.netlify.app" className="underline text-blue-600 dark:text-yellow-400 hover:text-purple-600 dark:hover:text-pink-400 transition font-medium" target="_blank" rel="noopener noreferrer">prathamdarji.netlify.app</a>
          <p className="text-sm text-gray-600 dark:text-gray-300">Uses NextJs, Tailwind CSS, TypeScript, Motion, Aceternity UI</p>
        </div>
        <div className="mb-2">
          <span className="font-semibold">Music Player</span> <span className="text-xs bg-blue-100 text-blue-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-0.5 rounded-full ml-2">HTML5</span>
          <br />
          <a href="https://phdmusic.netlify.app" className="underline text-blue-600 dark:text-yellow-400 hover:text-purple-600 dark:hover:text-pink-400 transition font-medium" target="_blank" rel="noopener noreferrer">phdmusic.netlify.app</a>
          <p className="text-sm text-gray-600 dark:text-gray-300">Fetches songs from Deezer API</p>
        </div>
        <div>
          <span className="font-semibold">AI Connect</span> <span className="text-xs bg-blue-100 text-blue-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-0.5 rounded-full ml-2">ReactJS</span>
          <br />
          <a href="https://aiconnectpro.netlify.app" className="underline text-blue-600 dark:text-yellow-400 hover:text-purple-600 dark:hover:text-pink-400 transition font-medium" target="_blank" rel="noopener noreferrer">aiconnectpro.netlify.app</a>
          <p className="text-sm text-gray-600 dark:text-gray-300">Smart chat interface leveraging Gemini AI</p>
        </div>
      </div>
      {/* Certifications */}
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
        <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaCertificate /> Certifications</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm space-y-1">
          <li>Responsive Web Design (HTML, CSS)</li>
          <li>Computer Networks and Internet Protocols (IIT Kharagpur)</li>
          <li>GenAI Intensive (Python, AI)</li>
        </ul>
      </div>
      {/* Personal Interests */}
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
        <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaUser /> Personal Interests</h3>
        <p className="text-gray-700 dark:text-gray-200 text-base">Coding, Learning New Things</p>
      </div>
      {/* Personal Details */}
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
        <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaUser /> Personal Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 text-sm text-gray-700 dark:text-gray-200">
          <div>
            <div><span className="font-semibold">Gender:</span> Male</div>
            <div><span className="font-semibold">Marital Status:</span> Single</div>
            <div><span className="font-semibold">DOB:</span> 01 May, 2004</div>
            <div><span className="font-semibold">Languages:</span> Hindi, English, Gujarati</div>
          </div>
          <div>
            <div><span className="font-semibold">Address:</span> B/132, Chandra Nagar Society, Vadodara, Gujarat, India</div>
            <div><span className="font-semibold">Phone:</span> +91-8355824195</div>
            <div><span className="font-semibold">Emails:</span> 2305101020015@paruluniversity.ac.in, prathamdarji777@gmail.com, pratham8355@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SampleResume; 