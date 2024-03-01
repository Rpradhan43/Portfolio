import React from 'react';
import '../App.css';
import yourImage from '../raja.jpg';
import backgroundImage from '../starsbackground.jpg'; 
import linkedInLogo from '../LinkedIn.png';
import githubLogo from '../Github.png';

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
      {/* LinkedIn and GitHub icons */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/rajapradhan43/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInLogo} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/Rpradhan43" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="social-icon" />
        </a>
      </div>

      {/* First Section: Image */}
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
        <div className="scroll-arrow">↓</div> {/* Scroll down indicator */}
      </section>

      {/* Second Section: About Me */}
      <section className="snap-section">
        <div className="container about-me">
          <div className="about-me-columns">
            <div className="about-me-content">
              <h2>Welcome!</h2>
              <p>Welcome to my personal portfolio website, a digital tapestry woven with the threads of my expertise and creativity in the dynamic world of software development. Here, you’ll encounter a vibrant showcase of my technical prowess, ranging from intricate web applications like the 'Planetary Visualizer' and my time as an IT Consultant for KSP Consulting, which brings the cosmos to your fingertips, to innovative solutions that address real-world problems. Each project is a testament to my commitment to excellence and my passion for pushing the boundaries of what’s possible with code. Designed for seamless exploration, my site invites you to journey through my professional narrative and diverse project repertoire, all laid out in an intuitive and engaging interface. Dive into my world and discover how my skills can elevate your vision to new heights.</p>
              {/* Additional content can be added here */}
            </div>
            <div className="about-me-content">
              <h2>About Me</h2>
              <p>I'm Raja Pradhan, a dedicated and detail-oriented Software Developer with a passion for writing clean, efficient, and accessible code. Specializing in full-stack development, I have a track record of building responsive and user-friendly web applications. With a keen interest in continuous learning, I stay on top of industry trends and best practices to ensure my skills are up-to-date and able to meet the challenges of the evolving tech landscape.</p>
              {/* Additional content can be added here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;