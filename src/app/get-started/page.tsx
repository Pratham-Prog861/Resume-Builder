"use client"
import React, { useState, useRef } from 'react';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import { FaDownload } from 'react-icons/fa';
import { ResumeData } from '@/lib/types';
import { usePrintResume } from '@/lib/pdfUtils';

const GetStartedPage = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);
  const handlePrint = usePrintResume();
  
  const [resumeData, setResumeData] = useState<ResumeData>({
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
    dob: "May 1, 2004",
    address: "",
    personalInterests: ""
  });

  const handleDataChange = (data: ResumeData) => {
    setResumeData(data);
  };

  const handleSubmit = () => {
    setShowPreview(true);
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      // Configure the print function to use our resume ref
      const printWithRef = () => resumeRef.current;
      handlePrint(printWithRef);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
            Resume Builder
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Create your professional resume in minutes
          </p>
        </div>

        {/* Resume Form */}
        <div className="max-w-7xl mx-auto">
          <ResumeForm onDataChange={handleDataChange} onSubmit={handleSubmit} />
        </div>

        {/* Resume Preview */}
        {showPreview && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
                Your Resume Preview
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Review your resume below. You can go back to edit if needed.
              </p>
            </div>
            
            <div ref={resumeRef}>
              <ResumePreview data={resumeData} />
            </div>
            
            {/* Download Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={handleDownloadPDF}
                disabled={isGeneratingPDF}
                className={`flex items-center gap-2 px-8 py-4 font-bold rounded-xl shadow-lg transition-all hover:shadow-xl transform hover:scale-105 ${
                  isGeneratingPDF 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                <FaDownload className={isGeneratingPDF ? 'animate-spin' : ''} />
                {isGeneratingPDF ? 'Generating PDF...' : 'Download as PDF'}
              </button>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!showPreview && (
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
                💡 Tips for creating a great resume:
              </h3>
              <ul className="text-blue-700 dark:text-blue-300 space-y-2 text-sm">
                <li>• Fill in all required fields marked with *</li>
                <li>• Use clear, professional language</li>
                <li>• Include specific achievements and metrics</li>
                <li>• Keep descriptions concise but impactful</li>
                <li>• Add relevant skills and technologies</li>
                <li>• Include links to your projects and profiles</li>
                <li>• Upload a professional photo for better presentation</li>
                <li>• Review your resume in preview before downloading</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetStartedPage;