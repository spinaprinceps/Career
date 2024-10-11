import React from "react";
import { useNavigate } from 'react-router-dom';
import Career from "./Career"
import "../style/Car.css";
import Crew from "./Crew";
import blockchain from "../assets/cam/blockchain.jpg"
import ai from "../assets/cam/ai.jpg"
import security from "../assets/cam/s1.jpg"
import soft from "../assets/cam/soft.jpg"
import test from "../assets/cam/software testing.avif"
import m from "../assets/cam/m.jpg"
import gamer from "../assets/cam/gamer_set_4.jpg"
import mob from "../assets/cam/mobile.jpg"
import electro from "../assets/cam/electro.jpg"
import testing from "../assets/cam/testing.jpg"
import analysis from "../assets/cam/business-data-analysis_53876-95296.jpg"
import drip from "../assets/destination/New Project (4).png";

export default function Car() {
  const navigate = useNavigate();
  return (
    <section>
      {/* Crew component, assuming it renders its own HTML */}
      <Crew />

      {/* Main content container */}
      <div className="car-container">
        {/* Filters container */}
       <div className="filters-container">
  {/* Filter for Preferred Working Environment */}
  <div className="filter-container">
    <label htmlFor="working-environment" className="filter-label">
      Preferred Working Environment:
    </label>
    <select id="working-environment" name="working-environment" className="filter-select">
      <option value>Select an option</option>
      <option value="office-based">Office-Based</option>
      <option value="remote-online">Remote/Online</option>
      <option value="outdoor-field">Outdoor/Field Work</option>
      <option value="laboratory-technical">Laboratory/Technical Environment</option>
      <option value="creative-studio">Creative Studio</option>
    </select>
  </div>
  {/* Filter for Field of Study */}
  <div className="filter-container">
    <label htmlFor="field-of-study" className="filter-label">Field of Study:</label>
    <select id="field-of-study" name="field-of-study" className="filter-select">
      <option value>Select an option</option>
      <option value="science">Science</option>
      <option value="humanities">Humanities</option>
      <option value="business">Business</option>
      <option value="engineering">Engineering</option>
      <option value="social-sciences">Social Sciences</option>
      <option value="arts">Arts</option>
    </select>
  </div>
  {/* Filter for Education Level Required */}
  <div className="filter-container">
    <label htmlFor="education-level" className="filter-label">Education Level Required:</label>
    <select id="education-level" name="education-level" className="filter-select">
      <option value>Select an option</option>
      <option value="high-school-diploma">High School Diploma</option>
      <option value="associate-degree">Associate Degree</option>
      <option value="bachelors-degree">Bachelor’s Degree</option>
      <option value="postgraduate-degree">Postgraduate Degree</option>
    </select>
  </div>
</div>


        </div>

        {/* Career library dashboard */}
        <div className="parent">
        <div className="career-library-dashboard">
          <h2>Career Library</h2>
          <ul className="career-list">
            <li><a href="#">All Careers</a></li>
            <li><a href="#">Design &amp; Arts</a></li>
            <li><a href="#">Media and Communication</a></li>
            <li><a href="#">Human Service &amp; Social Science</a></li>
            <li><a href="#">Business Management</a></li>
            <li><a href="#">Marketing &amp; Advertising</a></li>
            <li><a href="#">Hospitality and Tourism</a></li>
            <li><a href="#">Accounts and Finance</a></li>
            <li><a href="#">Information Technology</a></li>
            <li><a href="#">Agriculture &amp; Environment</a></li>
            <li><a href="#">Health Science</a></li>
            <li><a href="#">Science, Maths and Engineering</a></li>
            <li><a href="#">Bio Science and Research</a></li>
            <li><a href="#">Architecture and Construction</a></li>
            <li><a href="#">Education and Training</a></li>
            <li><a href="#">Logistics and Transportation</a></li>
            <li><a href="#">Manufacturing</a></li>
            <li><a href="#">Legal Services</a></li>
            <li><a href="#">Public Safety and Security</a></li>
            <li><a href="#">Sports &amp; Physical Activities</a></li>
            <li><a href="#">Government Services</a></li>
          </ul>
        </div>
        <div className="cards-container">
  {/* Card 1: Programming and Software Development */}
  
  <div className="card" onClick={() => navigate("/Career")} 
      
    >
    
    <img src={ soft } alt="Programming and Software Development" className="card-image" />
    <p className="card-text">Programming and Software Development</p>
  </div>
  
  {/* Card 2: Hardware Networking Electronics and Communication */}
  <div className="card">
    <img src={electro} alt="Hardware Networking Electronics and Communication" className="card-image" />
    <p className="card-text">Hardware Networking Electronics and Communication</p>
  </div>
  {/* Card 3: Project Management IT */}
  <div className="card">
    <img src={test} alt="Project Management IT" className="card-image" />
    <p className="card-text">Project Management IT</p>
  </div>
  {/* Card 4: Business Analyst IT */}
  <div className="card">
    <img src={analysis} alt="Business Analyst IT" className="card-image" />
    <p className="card-text">Business Analyst IT</p>
  </div>
  {/* Card 5: Ethical Hacking */}
  <div className="card">
    <img src={security} alt="Ethical Hacking" className="card-image" />
    <p className="card-text">Ethical Hacking</p>
  </div>
  {/* Card 6: Blockchain Engineer */}
  <div className="card">
    <img src={blockchain} alt="Blockchain Engineer" className="card-image" />
    <p className="card-text">Blockchain Engineer</p>
  </div>
  {/* Card 7: Artificial Intelligence */}
  <div className="card">
    <img src={ai} alt="Artificial Intelligence" className="card-image" />
    <p className="card-text">Artificial Intelligence</p>
  </div>
  {/* Card 8: Software Testing and Quality */}
  <div className="card">
    <img src={testing} alt="Software Testing and Quality" className="card-image" />
    <p className="card-text">Software Testing and Quality</p>
  </div>
  {/* Card 9: Mobile App Development */}
  <div className="card">
    <img src={mob} alt="Mobile App Development" className="card-image" />
    <p className="card-text">Mobile App Development</p>
  </div>
  {/* Card 10: Big Data and Analytics IT */}
  <div className="card">
    <img src={m} alt="Big Data and Analytics IT" className="card-image" />
    <p className="card-text">Big Data and Analytics IT</p>
  </div>
  {/* Card 11: Video Game Designer */}
  <div className="card">
    <img  src={gamer} alt="Video Game Designer" className="card-image" />
    <p className="card-text">Video Game Designer</p>
  </div>
</div>
</div>


    </section>
  );
}
