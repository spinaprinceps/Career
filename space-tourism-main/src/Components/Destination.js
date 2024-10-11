// Import Statements
import React from "react"
import Subheading from "./Subheading";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
//import background from "./background";
import people from "../assets/destination/freepik-export-20240828011726mcl6.png"
import "../style/destination.css";
import drip from "../assets/destination/New Project (4).png"
import b1 from"../assets/destination/1.jpg"
import b2 from"../assets/destination/2.jpg"
import b3 from"../assets/destination/life_style_working_02.jpg"
import b4 from"../assets/destination/4.jpg"
import b5 from"../assets/destination/d.jpg"
import two from "../assets/destination/decision-making-abstract-concept-illustration-problem-solving-skill-leadership-decision-making-framework-tree-analysis-rational-approach-business-management.png"



// Data
const data = require("../data.json");

// Crew Component
export default function Destination(){
const navigate = useNavigate();
       
    return(
<section>
<div className="hero">
    <img src={drip} className="drip"/>
    <div className="text-container">
        <h1 className="Subheading">
            Discover your ideal career path! <br/>
            Don’t Know Which One for You? <br/>
            Take the Personality Test now!
        </h1>
       
        <a href="https://www.16personalities.com/free-personality-test" className="test">Take the Test</a>
    </div>
    <img src={two} className="pt"/>
</div>

<div className="full-screen-container">
    <img src={people} className="people" />
    <button onClick={() => navigate("/Car")} className="explore-btn">
                Explore the Professions
            </button>
    
</div>

<div class="what-we-offer">
  <h2 class="section-heading">What We Offer</h2>
  <div class="block-sequence">
    <div class="block">
      <div class="block-content">
        <div class="block-number">1</div>
        <h3>Advanced Assessment & Best-Fit Matches</h3>
        <p>Learn about your strengths and interests with our 4-dimensional assessment and 25-page stream report.</p>
      </div>
      <img src={b1} alt="Assessment Icon" class="block-image"/>
    </div>
    
    <div class="block">
      <div class="block-content">
        <div class="block-number">2</div>
        <h3>Interactive Career & Stream Activities</h3>
        <p>Evaluate your academics, work style, aptitude, and subject compatibility to identify your perfect stream.</p>
      </div>
      <img src={b2} alt="Interactive Icon" class="block-image"/>
    </div>

    <div class="block">
      <div class="block-content">
        <div class="block-number">3</div>
        <h3>Simulated Virtual Career Internships</h3>
        <p>Explore multiple career options through role play, simulations, and experiential videos with our Virtual Internship Program.</p>
      </div>
      <img src={b3} alt="Internship Icon" class="block-image"/>
    </div>

    <div class="block">
      <div class="block-content">
        <div class="block-number">4</div>
        <h3>Personalised Guidance from Experts</h3>
        <p>Finalise your stream and subjects and build a customised career plan with help from our career experts.</p>
      </div>
      <img src={b4} alt="Guidance Icon" class="block-image"/>
    </div>

    <div class="block">
      <div class="block-content">
        <div class="block-number">5</div>
        <h3>Extensive Support & Resources</h3>
        <p>Explore career options for your chosen stream with our well-researched expert-written resources.</p>
      </div>
      <img src={b5} alt="Resources Icon" class="block-image"/>
    </div>
  </div>
  
</div>

<div class="center-container">
    <a href="#" class="small-button">JOIN NOW</a>
</div>



</section>
        
    );
}
