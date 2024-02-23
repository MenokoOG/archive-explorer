import React from 'react';

function AboutPage() {
  return (
    <div className="about-hold" style={{height: "100vh", width:"100vw"}}>
      <h1>About Archive Explorer</h1>
      <div className='about-para'><p className='dm-serif.display-regular'>This application allows users to check if a webpage has been archived by the Wayback Machine. Simply enter the URL of the webpage you wish to check, and Archive Explorer will tell you if an archived snapshot is available.</p>
      <p className='dm-serif.display-regular'>Archive Explorer uses the Wayback Availability JSON API to check for archived snapshots. If an archived version is available, you can directly access it through the provided link.</p></div>
      
    </div>
  );
}

export default AboutPage;
