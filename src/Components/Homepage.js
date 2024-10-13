import React from "react"
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/home/home.png"
import about from "../assets/home/about.png"
import tech from "../assets/hf/ai.png"
import art from "../assets/hf/art (1).png"
import business from"../assets/hf/team.png"
import maths from"../assets/hf/calculating.png"
import music from"../assets/hf/music-note (1).png"
import science from"../assets/hf/microscope.png"
import ball from"../assets/hf/sports.png"
import hand from"../assets/hf/signature.png"
import a1 from "../assets/home/a1.png"
import a2 from "../assets/home/a2.jpg"
import a3 from "../assets/home/a3.jpg"
import "../style/homepage.css";
import left from "../assets/home/arr1.png"
import right from "../assets/home/arr2.png"
import fb from "../assets/home/facebook-svgrepo-com.svg"
import OnlineCourses from "./OnlineCourses";
import insta from "../assets/home/instagram-2-1-logo-svgrepo-com.svg"
import twitter from "../assets/home/twitter-svgrepo-com.svg"
import linkedin from "../assets/home/linkedin-icon-2-logo-svgrepo-com.svg"

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <section className="container">
      {/* Hero Section */}
      <div className="hero-section">
        {/* Homepage Image */}
        <img src={bgImage} alt="Background" className="hero-image" />

        {/* Homepage Text */}
        <div className="home-text">
          <span id="heading">Ready to find a career you</span>
          <h3>love?</h3>
          
        </div>
      </div>
      <div>
  <div className="head">
    
    <h1>DELVE INTO WHAT EXCITES YOU !</h1>
  </div>
  <div className="image-row">
    <div className="image-item">
      <img src={tech} onClick={() => navigate("/eskill")} alt="circular img" className="circle-img1" />
      <div className="tech-image" onClick={() => navigate("/eskill")}>
        <a href="#Technology & Innovation" className="tech-image"> Technology & Innovation</a>
      </div>
    </div>
    <div className="image-item">
      <img src={art} alt="arts" className="circle-img" />
      <p className="img-text">Visual Arts & Design</p>
    </div>
    <div className="image-item">
      <img src={music} alt="dance" className="circle-img" />
      <p className="img-text">Music & Performing Arts</p>
    </div>
    <div className="image-item">
      <img src={science} alt="science" className="circle-img" />
      <p className="img-text">Science & Research</p>
    </div>
    <div className="image-item">
      <img src={ball} alt="sports" className="circle-img" />
      <p className="img-text">Sports & Fitness</p>
    </div>
    <div className="image-item">
      <img src={business} alt="business" className="circle-img" />
      <p className="img-text">Business & Entrepreneurship</p>
    </div>
    <div className="image-item">
      <img src={maths} alt="math" className="circle-img" />
      <p className="img-text">Mathematics & Analytics</p>
    </div>
    <div className="image-item">
      <img src={hand} alt="lit" className="circle-img" />
      <p className="img-text">Literature & Writing</p>
    </div>
  </div>
</div>
 <div classname="about">
  <h1 className="abt-text">ABOUT US</h1>
  
  <p className="abt-textpara"> 
  At Career Quest, we empower you to find a career<br /> that aligns with your passions and goals.<br /> Whether you're starting out, seeking a change,<br /> or aiming to advance, our mission is to provide<br /> personalized guidance and resources.<br /> We believe in making career discovery accessible<br /> to everyone and are here to support you<br /> every step of the way toward a fulfilling future.<br/>

    
  </p>
  <img src={about} alt="work" className="work-img" />

 </div>
 <div className="endose-page">
  <p className="e-head">ENDORSEMENT</p>
  <div className="endorsement-container">
  <img src={left} alt="lit" className="arrow-1" />
    <div className="endorsement-box box1">
      <img src={a2} alt="Description 1" className="endorsement-image" />
      <p className="endorsement-text">Ananya Sharma</p>
      <p className="endorsement-description">
      Joining this platform transformed my networking <br />
  experience, providing invaluable connections <br />
  that helped me grow professionally.
      </p>
    </div>
    <div className="endorsement-box box2">
      <img src={a1} alt="Description 2" className="endorsement-image" />
      <p className="endorsement-text">Akash Rao</p>
      <p className="endorsement-description">
      My confidence has soared thanks to peer feedback.<br />
  I feel more assured in my career, knowing <br />
  I have a supportive community.
      </p>
    </div>
    <div className="endorsement-box box3">
      <img src={a3} alt="Description 3" className="endorsement-image" />
      <p className="endorsement-text">Ajay Gupta</p>
      <p className="endorsement-description">
      This platform has enriched my learning, <br />
  offering insights and advice that drive <br />
  my continuous growth.
      </p>
      &nbsp;&nbsp;&nbsp;</div>
  </div>
  <img src={right} alt="lit" className="arrow-2" />
</div>

<div className="contact-page">
  <h1 className="contact-heading">Contact Us</h1>
  <div className="social-media-links">
    <a href="https://www.facebook.com" className="social-link" target="_blank">
      <img src={fb} alt="Facebook" className="social-icon " />
    </a>
    <a href="https://www.twitter.com" className="social-link" target="_blank">
      <img src={twitter} alt="Twitter" className="social-icon" />
    </a>
    <a href="https://www.instagram.com" className="social-link" target="_blank">
      <img src={insta} alt="Instagram" className="social-icon" />
    </a>
    <a href="https://www.linkedin.com" className="social-link" target="_blank">
      <img src={linkedin} alt="LinkedIn" className="social-icon " />
    </a>
  </div>
</div>

    </section>
       
        


    
  );
}
