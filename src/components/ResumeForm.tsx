"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaUser, FaGraduationCap, FaProjectDiagram, FaCertificate, FaPlus, FaTrash, FaUpload } from "react-icons/fa";
import { ResumeData } from '@/lib/types';

const ResumeForm = ({ onDataChange, onSubmit }: { onDataChange: (data: ResumeData) => void, onSubmit: () => void }) => {
  const [formData, setFormData] = useState<ResumeData>({
    fullName: "",
    title: "",
    degree: "",
    institution: "",
    phone: "",
    email: "",
    location: "",
    linkedin: "",
    github: "",
    photo: "",
    education: [{ institution: "", degree: "", duration: "", score: "" }],
    projects: [{ title: "", url: "", technology: "", description: "" }],
    skills: [],
    languages: [],
    certifications: [],
    gender: "",
    maritalStatus: "",
    dob: "",
    address: "",
    personalInterests: ""
  });

  const [newSkill, setNewSkill] = useState("");
  const [newLanguage, setNewLanguage] = useState("");

  const updateFormData = (field: keyof ResumeData, value: ResumeData[keyof ResumeData]) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onDataChange(newData);
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    updateFormData('education', newEducation);
  };

  const updateProject = (index: number, field: string, value: string) => {
    const newProjects = [...formData.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    updateFormData('projects', newProjects);
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      updateFormData('skills', [...formData.skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    updateFormData('skills', formData.skills.filter(skill => skill !== skillToRemove));
  };

  const addLanguage = () => {
    if (newLanguage.trim() && !formData.languages.includes(newLanguage.trim())) {
      updateFormData('languages', [...formData.languages, newLanguage.trim()]);
      setNewLanguage("");
    }
  };

  const removeLanguage = (languageToRemove: string) => {
    updateFormData('languages', formData.languages.filter(lang => lang !== languageToRemove));
  };

  const updateCertifications = (certifications: string[]) => {
    updateFormData('certifications', certifications);
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        updateFormData('photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent">
        Resume Builder Form
      </h2>
      
      <div className="space-y-8">
        {/* Personal Information */}
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent">
            <FaUser /> Personal Information
          </h3>
          
          {/* Photo Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Profile Photo</label>
            <div className="flex items-center gap-4">
              {formData.photo && (
                <Image 
                  src={formData.photo} 
                  alt="Profile" 
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                />
              )}
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label 
                  htmlFor="photo-upload"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer transition"
                >
                  <FaUpload />
                  {formData.photo ? 'Change Photo' : 'Upload Photo'}
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => updateFormData('fullName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => updateFormData('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., B.Sc. - Information Technology"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Degree *</label>
              <input
                type="text"
                value={formData.degree}
                onChange={(e) => updateFormData('degree', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., B.Sc. - Information Technology (PICA)"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Institution *</label>
              <input
                type="text"
                value={formData.institution}
                onChange={(e) => updateFormData('institution', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., PICA, Parul University"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone *</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., +91-8355824195"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location *</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => updateFormData('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., Vadodara, Gujarat, India"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">LinkedIn</label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => updateFormData('linkedin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your LinkedIn profile URL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">GitHub</label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) => updateFormData('github', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your GitHub profile URL"
              />
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent">
            <FaGraduationCap /> Education
          </h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Institution</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Duration</label>
                  <input
                    type="text"
                    value={edu.duration}
                    onChange={(e) => updateEducation(index, 'duration', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Degree</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Score</label>
                  <input
                    type="text"
                    value={edu.score}
                    onChange={(e) => updateEducation(index, 'score', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent">
            <FaProjectDiagram /> Projects
          </h3>
          {formData.projects.map((project, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project Title</label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => updateProject(index, 'title', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Technology</label>
                  <input
                    type="text"
                    value={project.technology}
                    onChange={(e) => updateProject(index, 'technology', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">URL</label>
                  <input
                    type="url"
                    value={project.url}
                    onChange={(e) => updateProject(index, 'url', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                  <textarea
                    value={project.description}
                    onChange={(e) => updateProject(index, 'description', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent">
            Skills
          </h3>
          <div className="mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                placeholder="Add a skill..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button
                onClick={addSkill}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map(skill => (
              <span key={skill} className="flex items-center gap-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash size={12} />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent">
            Languages
          </h3>
          <div className="mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
                placeholder="Add a language..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button
                onClick={addLanguage}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.languages.map(lang => (
              <span key={lang} className="flex items-center gap-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                {lang}
                <button
                  onClick={() => removeLanguage(lang)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash size={12} />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent">
            <FaCertificate /> Certifications
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Certifications (one per line)</label>
            <textarea
              value={formData.certifications.join('\n')}
              onChange={(e) => updateCertifications(e.target.value.split('\n').filter(cert => cert.trim()))}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Responsive Web Design (HTML, CSS)&#10;Computer Networks and Internet Protocols (IIT Kharagpur)&#10;GenAI Intensive (Python, AI)"
            />
          </div>
        </div>

        {/* Personal Details */}
        <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <h3 className="flex items-center gap-2 text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent">
            <FaUser /> Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => updateFormData('gender', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Marital Status</label>
              <select
                value={formData.maritalStatus}
                onChange={(e) => updateFormData('maritalStatus', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date of Birth</label>
              <input
                type="date"
                value={(() => {
                  if (!formData.dob) return '';
                  // If it's already in YYYY-MM-DD format, return as is
                  if (/^\d{4}-\d{2}-\d{2}$/.test(formData.dob)) {
                    return formData.dob;
                  }
                  // Try to parse the date and convert to YYYY-MM-DD format
                  try {
                    const date = new Date(formData.dob);
                    if (!isNaN(date.getTime())) {
                      // Use local date to avoid timezone issues
                      const year = date.getFullYear();
                      const month = String(date.getMonth() + 1).padStart(2, '0');
                      const day = String(date.getDate()).padStart(2, '0');
                      return `${year}-${month}-${day}`;
                    }
                  } catch (e) {
                    console.error('Error parsing date:', e);
                  }
                  return '';
                })()}
                onChange={(e) => {
                  if (e.target.value) {
                    const date = new Date(e.target.value);
                    if (!isNaN(date.getTime())) {
                      // Format as "May 1, 2004" for display
                      const formattedDate = date.toLocaleDateString('en-US', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      });
                      updateFormData('dob', formattedDate);
                    }
                  } else {
                    updateFormData('dob', '');
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Personal Interests</label>
              <input
                type="text"
                value={formData.personalInterests}
                onChange={(e) => updateFormData('personalInterests', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
              <textarea
                value={formData.address}
                onChange={(e) => updateFormData('address', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg transition-all hover:shadow-xl transform hover:scale-105"
          >
            Generate Resume Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm; 