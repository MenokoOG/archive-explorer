import React, { useContext } from 'react';
import { ArchiveContext } from '../context/ArchiveContext';

function ResultsPage() {
  const { result } = useContext(ArchiveContext);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Results</h1>
      {result?.archived_snapshots?.closest ? (
        <div className="text-center bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-lg">
          <p className="text-lg text-gray-900 dark:text-white">Snapshot found!</p>
          <p className="text-gray-700 dark:text-gray-300">Status: {result.archived_snapshots.closest.status}</p>
          <p className="text-gray-700 dark:text-gray-300">Timestamp: {result.archived_snapshots.closest.timestamp}</p>
          <a href={result.archived_snapshots.closest.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-400">
            View Archive
          </a>
        </div>
      ) : (
        <p className="text-lg text-gray-900 dark:text-white">No archive snapshot available for the URL.</p>
      )}
      <div className="search-tips mt-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md max-w-lg">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Didn't find what you were looking for?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">Try adjusting your search with these strategies:</p>
        <ul className="list-disc list-inside">
          <li className="mb-2 dark:text-gray-300">Modify the timestamp slightly by a few months or a year to find the closest available archive to your initial date.</li>
          <li className="mb-2 dark:text-gray-300">Explore different years or key dates that might have significance for the webpage you're researching.</li>
          <li className="dark:text-gray-300">Use the Wayback Machine's website directly for a manual search, where you can browse through all the snapshots by year and date for a broader historical perspective.</li>
        </ul>
      </div>
    </div>
  );
}

export default ResultsPage;
