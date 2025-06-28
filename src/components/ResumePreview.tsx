"use client"
import React, { forwardRef } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaProjectDiagram, FaCertificate, FaUser, FaPhoneAlt } from "react-icons/fa";
import { ResumeData } from '@/lib/types';

const ResumePreview = forwardRef<HTMLDivElement, { data: ResumeData }>(({ data }, ref) => (
  <div ref={ref} className="flex mb-10 flex-col md:flex-row max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 relative animate-fade-in">
    {/* Soft background pattern */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08)_0,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.08)_0,transparent_60%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.10)_0,transparent_60%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.10)_0,transparent_60%)]" />
    </div>
    {/* Sidebar */}
    <aside className="md:w-1/3 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 text-white flex flex-col items-center py-10 px-6 gap-7 z-10 md:sticky md:top-8">
      <div className="relative flex flex-col items-center">
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 dark:from-yellow-300 dark:via-yellow-400 dark:to-pink-400 blur-sm opacity-40" />
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white ring-4 ring-blue-200 dark:ring-yellow-200 shadow-2xl mb-2 relative z-10 bg-white">
          {data.photo ? (
            <Image
              src={data.photo}
              alt={data.fullName || "User Photo"}
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          ) : (
            <Image
              src="/user-photo.png"
              alt={data.fullName || "User Photo"}
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          )}
        </div>
      </div>
      <div className="text-center w-full">
        <h2 className="text-3xl font-extrabold tracking-tight font-serif drop-shadow bg-gradient-to-r from-white/90 to-blue-100 dark:from-yellow-100 dark:to-pink-100 bg-clip-text text-transparent">
          {data.fullName || "YOUR NAME"}
        </h2>
        <div className="w-16 h-1 mx-auto my-3 rounded-full bg-gradient-to-r from-blue-200 to-purple-300 dark:from-yellow-200 dark:to-pink-200 opacity-70" />
        <p className="text-lg font-medium opacity-90">{data.title || "Your Title"}</p>
        <p className="text-sm opacity-80">{data.institution || "Your Institution"}</p>
      </div>
      <div className="flex flex-col gap-2 text-sm w-full mt-2">
        <div className="flex items-center gap-2"><FaPhoneAlt className="opacity-80" /> <span className="truncate">{data.phone || "Your Phone"}</span></div>
        <div className="flex items-center gap-2"><FaEnvelope className="opacity-80" /> <span className="truncate">{data.email || "your.email@example.com"}</span></div>
        <div className="flex items-center gap-2"><FaMapMarkerAlt className="opacity-80" /> {data.location || "Your Location"}</div>
        {data.linkedin && (
          <div className="flex items-center gap-2"><FaLinkedin className="opacity-80" /> <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200 dark:hover:text-yellow-200 transition">LinkedIn</a></div>
        )}
        {data.github && (
          <div className="flex items-center gap-2"><FaGithub className="opacity-80" /> <a href={data.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200 dark:hover:text-yellow-200 transition">GitHub</a></div>
        )}
      </div>
      {data.skills.length > 0 && (
        <div className="w-full">
          <h3 className="font-semibold mt-4 mb-2 tracking-wide text-white/90">Key Skills</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {data.skills.map(skill => (
              <span key={skill} className="bg-white/30 text-white font-semibold px-2 py-1 rounded-full text-xs shadow hover:bg-white/50 hover:text-blue-700 dark:hover:text-yellow-700 transition cursor-default border border-white/20">{skill}</span>
            ))}
          </div>
        </div>
      )}
      {data.languages.length > 0 && (
        <div className="w-full">
          <h3 className="font-semibold mt-4 mb-2 tracking-wide text-white/90">Languages</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {data.languages.map(lang => (
              <span key={lang} className="bg-white/30 text-white font-semibold px-2 py-1 rounded-full text-xs shadow hover:bg-white/50 hover:text-blue-700 dark:hover:text-yellow-700 transition cursor-default border border-white/20">{lang}</span>
            ))}
          </div>
        </div>
      )}
    </aside>
    {/* Main Content */}
    <section className="md:w-2/3 p-8 flex flex-col gap-8 z-10">
      {/* Summary */}
      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
        <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaUser /> Brief Summary</h3>
        <p className="text-gray-700 dark:text-gray-200 text-base">
          {data.degree || "Your Degree"} | {data.title || "Your Title"} | {data.personalInterests || "Your Interests"}
        </p>
      </div>
      
      {/* Education */}
      {data.education.length > 0 && (
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaGraduationCap /> Education</h3>
          {data.education.map((edu, index) => (
            <div key={index} className={index < data.education.length - 1 ? "mb-2" : ""}>
              <span className="font-semibold">{edu.institution}</span> <span className="text-xs text-gray-500 dark:text-gray-400">{edu.duration}</span><br />
              <span className="text-sm">{edu.degree} | <span className="font-bold">{edu.score}</span></span>
            </div>
          ))}
        </div>
      )}
      
      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaProjectDiagram /> Projects</h3>
          {data.projects.map((project, index) => (
            <div key={index} className={index < data.projects.length - 1 ? "mb-2" : ""}>
              <span className="font-semibold">{project.title}</span> <span className="text-xs bg-blue-100 text-blue-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-0.5 rounded-full ml-2">{project.technology}</span>
              <br />
              {project.url && (
                <a href={project.url} className="underline text-blue-600 dark:text-yellow-400 hover:text-purple-600 dark:hover:text-pink-400 transition font-medium" target="_blank" rel="noopener noreferrer">{project.url}</a>
              )}
              <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaCertificate /> Certifications</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm space-y-1">
            {data.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Personal Interests */}
      {data.personalInterests && (
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaUser /> Personal Interests</h3>
          <p className="text-gray-700 dark:text-gray-200 text-base">{data.personalInterests}</p>
        </div>
      )}
      
      {/* Personal Details */}
      {(data.gender || data.maritalStatus || data.dob || data.address) && (
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-2"><FaUser /> Personal Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 text-sm text-gray-700 dark:text-gray-200">
            <div>
              {data.gender && <div><span className="font-semibold">Gender:</span> {data.gender}</div>}
              {data.maritalStatus && <div><span className="font-semibold">Marital Status:</span> {data.maritalStatus}</div>}
              {data.dob && <div><span className="font-semibold">DOB:</span> {data.dob}</div>}
              {data.languages.length > 0 && <div><span className="font-semibold">Languages:</span> {data.languages.join(', ')}</div>}
            </div>
            <div>
              {data.address && <div><span className="font-semibold">Address:</span> {data.address}</div>}
              {data.phone && <div><span className="font-semibold">Phone:</span> {data.phone}</div>}
              {data.email && <div><span className="font-semibold">Email:</span> {data.email}</div>}
            </div>
          </div>
        </div>
      )}
    </section>
  </div>
));

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;