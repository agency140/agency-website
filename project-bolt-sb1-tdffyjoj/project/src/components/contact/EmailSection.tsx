import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { CopyButton } from '../ui/CopyButton';
import { contactInfo } from '../../config/contact';

export function EmailSection() {
  return (
    <div className="p-8 sm:p-10">
      {/* Icon Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-4 transform transition-transform hover:scale-110">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Email Us
          </h3>
          <p className="mt-1 text-gray-600 dark:text-gray-300">
            We'll get back to you within 24 hours
          </p>
        </div>
      </div>

      {/* Email Display Section */}
      <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <span className="text-gray-900 dark:text-white font-medium select-all">
          {contactInfo.email}
        </span>
        <CopyButton text={contactInfo.email} />
      </div>

      {/* Send Email Button */}
      <Button
        variant="gradient"
        className="w-full mt-6 group transform transition-all hover:scale-[1.02]"
        onClick={() => window.location.href = `mailto:${contactInfo.email}`}
      >
        Send Email
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}
