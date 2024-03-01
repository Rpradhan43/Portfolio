import React from 'react';
import resumePath from '../resume.pdf';
import resumeImage from '../resume.jpg';

function Resume() {
  return (
    <div className="resume-container" style={{ padding: "10px" }}>
      <h1>My Resume</h1>
      <img src={resumeImage} alt="Resume" style={{ width: '50%', marginBottom: '10px' }} />
      <div style={{ marginTop: "5px" }}>
        <a href={resumePath} download="My_Resume.pdf">
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Resume;