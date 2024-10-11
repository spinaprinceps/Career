import React from "react"
import { useNavigate } from "react-router-dom";
import tech from "../assets/hf/ai.png"
import art from "../assets/hf/art (1).png"
import business from"../assets/hf/team.png"
import maths from"../assets/hf/calculating.png"
import music from"../assets/hf/music-note (1).png"
import science from"../assets/hf/microscope.png"
import ball from"../assets/hf/sports.png"
import hand from"../assets/hf/signature.png"
import "../style/skills.css"

export default function Skills(){
  const navigate = useNavigate();
    return(
        <section>
<div className="content-wrapper">
  {/* Interest Section */}
  <div className="interest-section">
    <h3 className="heading-interest">What Are You Interested In..??</h3>
    <div className="interest-cards">
      {/* Row 1 */}
      <div className="interest-card">
        <img src={art} className="interest-img" alt="Visual Arts and Design" />
        <p className="interest-text"><strong>Visual Arts and Design</strong></p>
      </div>
      <div className="interest-card"onClick={() => navigate("/eskill")}>
        <img src={tech} className="interest-img" alt="Technology And Innovation" />
        <p className="interest-text"><strong>Technology And Innovation</strong></p>
      </div>
      <div className="interest-card">
        <img src={music}className="interest-img" alt="Music And Performing Arts" />
        <p className="interest-text"><strong>Music And Performing Arts</strong></p>
      </div>
      <div className="interest-card">
        <img src={science} className="interest-img" alt="Science And Research" />
        <p className="interest-text"><strong>Science And Research</strong></p>
      </div>
      {/* Row 2 */}
      <div className="interest-card">
        <img  src={business} className="interest-img" alt="Business And Entrepreneurship" />
        <p className="interest-text"><strong>Business And Entrepreneurship</strong></p>
      </div>
      <div className="interest-card">
        <img src={hand} className="interest-img" alt="Literature And Writing" />
        <p className="interest-text"><strong>Literature And Writing</strong></p>
      </div>
      <div className="interest-card">
        <img src={ball} className="interest-img" alt="Sports And Fitness" />
        <p className="interest-text"><strong>Sports And Fitness</strong></p>
      </div>
      <div className="interest-card">
        <img src={maths} className="interest-img" alt="Mathematics And Analytics" />
        <p className="interest-text"><strong>Mathematics And Analytics</strong></p>
      </div>
    </div>
    <hr className="separator" />
  </div>
 </div>
 <div class="resource-quiz-section">
    <div class="resource-box">
      <h1 class="resource-title">Resources</h1>
    </div>
    <div class="quiz-box">
      <h1 class="quiz-title">Quiz</h1>
    </div>
  </div>


  
        </section>
    );

}
