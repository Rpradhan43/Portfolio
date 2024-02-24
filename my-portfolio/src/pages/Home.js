import React from 'react';
import '../App.css';
import yourImage from '../textimage.png'; // Replace with the path to your image file
import backgroundImage from '../starsbackground.jpg'; // Replace with the path to your background image file

function Home() {
  // Inline style for the background image of the first section
  const firstSectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="snap-container">
      {/* First Section: Hero Image */}
      <section className="snap-section" style={firstSectionStyle}>
        <div className="container home">
          <div className="image-container">
            <img src={yourImage} alt="Raja Pradhan" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div className="text-container">
            <div className="name-container">
              <h1>Raja</h1>
              <h1>Pradhan</h1>
            </div>
            <p>Software Developer & Full-Stack Engineer</p>
          </div>
        </div>
      </section>

      {/* Second Section: About Me */}
      <section className="snap-section">
        <div className="container about-me">
          <h2>About Me</h2>
          <p>I'm Raja Pradhan, a dedicated and detail-oriented Software Developer with a passion for writing clean, efficient, and accessible code. Specializing in full-stack development, I have a track record of building responsive and user-friendly web applications. With a keen interest in continuous learning, I stay on top of industry trends and best practices to ensure my skills are up-to-date and able to meet the challenges of the evolving tech landscape.</p>
          {/* Add more paragraphs or elements as needed */}
        </div>
      </section>

      {/* Additional Sections if any */}
      {/* ... */}
    </div>
  );
}

export default Home;