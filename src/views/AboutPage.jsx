import React from 'react';

function AboutPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Archive Explorer</h1>
      <div className="text-center max-w-2xl px-4">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          This application allows users to check if a webpage has been archived by the Wayback Machine. Simply enter the URL of the webpage you wish to check, and Archive Explorer will tell you if an archived snapshot is available.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Archive Explorer uses the Wayback Availability JSON API to check for archived snapshots. If an archived version is available, you can directly access it through the provided link.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
