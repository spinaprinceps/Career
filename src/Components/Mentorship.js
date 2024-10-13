import React from "react";  // Step 1: Import useEffect
import drip from "../assets/destination/New Project (4).png"
import "../style/mentorship.css";
import forum from "../assets/new/ecological-press-conference-member-speaking-stage-before-audience-presenting-graphs-with-earth.png"
import ment from "../assets/new/organic-flat-people-business-training.png";
import left from "../assets/home/arr1.png"
import right from "../assets/home/arr2.png"
import a1 from "../assets/home/a1.png"
import a2 from "../assets/home/a2.jpg"
import f1 from "../assets/new/male-avatar-portrait-of-a-young-man.png"
import f2 from "../assets/new/avatar no bg.png"
import f3 from "../assets/new/girl avatar.avif"
import f4 from "../assets/new/pngtree-avatar-job-student-flat-portrait-of-man-png-image_11606888.png"
import connect from "../assets/new/successful-partnership-negotiation-partners-handshaking.png"
import a3 from "../assets/home/a3.jpg"
import a4 from "../assets/new/169501899_06e6ddb0-1e45-44b8-8143-36f3f6e68550.jpg"
export default function Mentorship() {
  //

    return (
        <section>
          <div className="mentorship-hero">
    <img src={drip} className="mentorship-drip"/>
    <div className="mentorship-text-container">
        <h1 className="mentorship-subheading">
            Empower Your Future Through Guided Mentorship
        </h1>
       
       
    </div>
    <img src={ment} className="mentorship-pt"/>
</div>
<div class="mentorship-program">
  <h1>Join Our Mentorship Program and Navigate Your Path to Success with a Guided 5-Stage Approach</h1>
  <div class="stage-boxes">
    <div class="stage-box">
      
      <h2>1.Rapport Building</h2>
      <p>Establish a Strong Foundation with Your Mentor</p>
    </div>
    <div class="stage-box">
      
      <h2>2.Setting Direction</h2>
      <p>Define Your Goals and Chart Your Career Path</p>
    </div>
    <div class="stage-box">
      
      <h2>3.Progression</h2>
      <p>Work Together to Achieve Your Career Aspirations</p>
    </div>
    <div class="stage-box">
      
      <h2>4.Winding Down</h2>
      <p>Review Your Journey and Plan for the Future</p>
    </div>
    <div class="stage-box">
      
      <h2>5.Moving On</h2>
      <p>End the Formal Relationship but Stay Connected</p>
    </div>
  </div>
</div>
<div className="mentor-page">
  <h1 className="m-head">Our Top Career-Oriented Sessions</h1>
  {/* Left arrow */}
  <div className="arrow-left">
    <img src={left} alt="Left Arrow" />
  </div>
  {/* Container for glass panels */}
  <div className="banana">
    <div className="glass-panel">
      <div className="image-wrapper">
        <img src={a1} alt="Mentor 1" className="circle-image" />
      </div>
      <div className="hap">Emily Davis</div>
      <div className="session"> "Exploring Career Options"</div>
      <div className="description">
        A broad overview of various career paths available to high school students. This session covers different industries, job roles, and how to explore career interests effectively.
      </div>
      <a href="#" className="btn">Register</a>
    </div>
    <div className="glass-panel">
      <div className="image-wrapper">
        <img src={a2} alt="Mentor 2" className="circle-image" />
      </div>
      <div className="hap">Sophia Lee</div>
      <div className="session"> "Preparing for College and Beyond"</div>
      <div className="description">
        Tips and strategies for high school students on how to prepare for college applications, including writing personal statements, choosing the right college, and understanding financial aid options.
      </div>
      <a href="#" className="btn">Register</a>
    </div>
    <div className="glass-panel">
      <div className="image-wrapper">
        <img src={a3} alt="Mentor 3" className="circle-image" />
      </div>
      <div className="hap">John Miller</div>
      <div className="session">"Developing Strong Leadership Skills"</div>
      <div className="description">
        Learn essential leadership skills that are valuable in both academic and professional settings. This session covers effective communication, team collaboration, and decision-making strategies.
      </div>
      <a href="#" className="btn">Register</a>
    </div>
    <div className="glass-panel">
      <div className="image-wrapper">
        <img src={a4} alt="Mentor 4" className="circle-image" />
      </div>
      <div className="hap">Michael Brown</div>
      <div className="session"> "Mastering Time Management"</div>
      <div className="description">
        Strategies and tools for managing time effectively, balancing schoolwork, extracurricular activities, and personal life. Learn how to prioritize tasks and set achievable goals.
      </div>
      <a href="#" className="btn">Register</a>
    </div>
  </div>
  {/* Right arrow */}
  <div className="arrow-right">
    <img src={right} alt="Right Arrow" />
  </div>
</div>
<div className="layout">
  {/* Top Mentors Section */}
  <div className="rose">
    <div className="sunflower">Our Top Mentors</div>

    {/* Mentor Card 1 */}
    <div className="tulip">
      <img src={f1} alt="Arjun Mehta" className="daisy" />
      <div className="jasmine">
        <div className="lily">Arjun Mehta</div>
        <div className="orchid">Senior Software Engineer</div>
        <div className="lotus">10 years of experience in full-stack development</div>
        <button className="button">Connect</button>
      </div>
    </div>

    {/* Mentor Card 2 */}
    <div className="tulip">
      <img src={f2} alt="Priyank Sharma" className="daisy" />
      <div className="jasmine">
        <div className="lily">Priyank Sharma</div>
        <div className="orchid">Data Scientist</div>
        <div className="lotus">8 years of experience in machine learning and AI</div>
        <button className="button">Connect</button>
      </div>
    </div>

    {/* Mentor Card 3 */}
    <div className="tulip">
      <img src={f3} alt="Shreya Gupta" className="daisy" />
      <div className="jasmine">
        <div className="lily">Shreya Gupta</div>
        <div className="orchid">DevOps Specialist</div>
        <div className="lotus">12 years of experience in DevOps and cloud computing</div>
        <button className="button">Connect</button>
      </div>
    </div>

    {/* Mentor Card 4 */}
    <div className="tulip">
      <img src={f4} alt="Anuj Patel" className="daisy" />
      <div className="jasmine">
        <div className="lily">Anuj Patel</div>
        <div className="orchid">UX/UI Designer</div>
        <div className="lotus">7 years of experience in user experience design</div>
        <button className="button">Connect</button>
      </div>
    </div>
  </div>
</div>


<div class="forum-container">
  <div class="image-section">
    <img src={forum} alt="Student Discussion" class="main-image"/>
  </div>
  <div class="table-section">
    <h2 class="forum-heading">Student Discussion Forums</h2>
    <div class="forum-table">
      <div class="forum-item">
        <div class="forum-details">
          <div class="forum-name">Music Band Enthusiasts</div>
          <div class="forum-members">123 Members</div>
          <div class="forum-description">A place for fans of music bands to discuss their favorite bands and artists.</div>
        </div>
        <button class="join-button">Join</button>
      </div>
      <div class="forum-item">
        <div class="forum-details">
          <div class="forum-name">Book Lovers</div>
          <div class="forum-members">456 Members</div>
          <div class="forum-description">A place for readers to discuss books and share reviews.</div>
        </div>
        <button class="join-button">Join</button>
      </div>
      <div class="forum-item">
        <div class="forum-details">
          <div class="forum-name">Tech Innovators</div>
          <div class="forum-members">789 Members</div>
          <div class="forum-description">A forum for discussing the latest in technology and innovations.</div>
        </div>
        <button class="join-button">Join</button>
      </div>
      <div class="forum-item">
        <div class="forum-details">
          <div class="forum-name">Fitness Enthusiasts</div>
          <div class="forum-members">101 Members</div>
          <div class="forum-description">A place to share fitness tips and track progress with others.</div>
        </div>
        <button class="join-button">Join</button>
      </div>
    </div>
  </div>
</div>



        </section>
    );
}
