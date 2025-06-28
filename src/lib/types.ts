export interface ResumeData {
  // Personal Information
  fullName: string;
  title: string;
  degree: string;
  institution: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  photo: string; // Base64 or URL for photo
  
  // Education
  education: Array<{
    institution: string;
    degree: string;
    duration: string;
    score: string;
  }>;
  
  // Projects
  projects: Array<{
    title: string;
    url: string;
    technology: string;
    description: string;
  }>;
  
  // Skills
  skills: string[];
  
  // Languages
  languages: string[];
  
  // Certifications
  certifications: string[];
  
  // Personal Details
  gender: string;
  maritalStatus: string;
  dob: string;
  address: string;
  personalInterests: string;
} 