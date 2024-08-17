import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArchiveContext } from '../context/ArchiveContext';

function HomePage() {
  const [url, setUrl] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const { checkArchive } = useContext(ArchiveContext);
  let navigate = useNavigate();
  
  const currentDate = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formattedTimestamp = timestamp.replace(/-/g, '');
    await checkArchive(url, formattedTimestamp);
    navigate('/results');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Menoko OG Website Archive Explorer</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Check Archive Status</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md w-11/12 max-w-lg">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
        />
        <input
          type="date"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          placeholder="Timestamp (YYYYMMDD)"
          min="1900-01-01"
          max={currentDate}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Check
        </button>
      </form>
      
      <div className="instructions mt-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md w-11/12 max-w-lg">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">How to Use Archive Explorer</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">Enter the URL of the web page you wish to find in the archive. If you're looking for a specific version of the page, you can also enter a date. Here are some tips for effective searching:</p>
        <ul className="list-disc list-inside">
          <li className="mb-2 dark:text-gray-300"><strong>Timestamp Format:</strong> Enter the date in the format mm/dd/yyyy or use the calendar picker.</li>
          <li className="mb-2 dark:text-gray-300">If unsure of the exact date, start with a broad search and narrow down by adding a month and day based on the results you find.</li>
          <li className="dark:text-gray-300">The closer your timestamp is to an actual archived version, the more likely you are to find a match.</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
