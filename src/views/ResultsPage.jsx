import React, { useContext } from 'react';
import { ArchiveContext } from '../context/ArchiveContext';

function ResultsPage() {
  const { result } = useContext(ArchiveContext);

  return (
    <div className="container" style={{height: "100vh", width:"100vw"}}>
      <h1 className='result'>Results</h1>
      {result?.archived_snapshots?.closest ? (
        <div className='result-box'>
          <p>Snapshot found!</p>
          <p>Status: {result.archived_snapshots.closest.status}</p>
          <p>Timestamp: {result.archived_snapshots.closest.timestamp}</p>
          <a href={result.archived_snapshots.closest.url} target="_blank" rel="noopener noreferrer">View Archive</a>
        </div>
      ) : (
        <p>No archive snapshot available for the URL.</p>
      )}
      <div className="search-tips">
  <h2>Didn't find what you were looking for?</h2>
  <p>Try adjusting your search with these strategies:</p>
  <ul>
    <li>Modify the timestamp slightly by a few months or a year to find the closest available archive to your initial date.</li>
    <li>Explore different years or key dates that might have significance for the webpage you're researching.</li>
    <li>Use the Wayback Machine's website directly for a manual search, where you can browse through all the snapshots by year and date for a broader historical perspective.</li>
  </ul>
</div>
    </div>
  );
}

export default ResultsPage;
