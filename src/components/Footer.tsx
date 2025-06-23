import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-16 pb-12 px-4 md:px-12 border-t bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">About</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              ModularResume is a free tool to create professional resumes in
              minutes. No sign-up required. Build your career story with
              confidence.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/templates"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block font-medium"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block font-medium"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block font-medium"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-5">
              <Link
                href="https://www.linkedin.com/in/pratham-darji-b704092a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/Pratham-Prog861"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300 font-medium tracking-wide">
            © {new Date().getFullYear()} {" "}
            <span className="text-blue-600 dark:text-yellow-400 hover:text-blue-700 dark:hover:text-yellow-300 transition-colors cursor-pointer font-bold">
              ModularResume
            </span>
            . Built with {" "}
            <span className="text-red-500 animate-pulse inline-block hover:scale-110 transition-transform">
              ❤️
            </span> {" "}
            by {" "}
            <a
              href="https://github.com/pratham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-yellow-400 hover:text-blue-700 dark:hover:text-yellow-300 transition-all duration-300 hover:underline font-bold"
            >
              Pratham
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
