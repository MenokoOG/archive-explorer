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
    <div style={{height: "100vh", width:"100vw"}}>
      <div className='intro'><h1>Menoko OG Website Archive Explorer</h1>
      <h2>Check Archive Status</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          required
        />
        <input
          type="date"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          placeholder="Timestamp (YYYYMMDD)"
          min="1900-01-01" // You can adjust this minimum date as needed
          max={currentDate} // Set max date to current date
        />
        <button type="submit">Check</button>
      </form>
      <div className="instructions">
        <h2>How to Use Archive Explorer</h2>
        <p>Enter the URL of the web page you wish to find in the archive. If you're looking for a specific version of the page, you can also enter a date. Here are some tips for effective searching:</p>
        <ul>
          <li><strong>Timestamp Format:</strong> Enter the date in the format mm/dd/yyyy. For example, to find a page from January 15, 2020, enter 01/15/2000  <strong>OR</strong> you can use the calendar picker.</li>
          <li>If you're unsure of the exact date, start with a broad search by entering a year, and then narrow down by adding a month and day based on the results you find.</li>
          <li>Remember, the closer your timestamp is to an actual archived version, the more likely you are to find a match.</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
