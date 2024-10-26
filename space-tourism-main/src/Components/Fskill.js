import React from "react"

import "../style/fskill.css"

export default function Fskill(){
    return(
        <section>
    <div className="wp">
   <div className="sk-wp">
  <div className="sk-hd">
    <h1>Enhance your AI expertise with key skills and tools.</h1>
   
  </div>
  {/* Skills Section */}
  <div className="sk-sec">
    <div className="sk-gr">
      <div className="sk-crd">
        <h3>Machine Learning</h3>
        <p>Build models that learn from data.</p>
      </div>
      <div className="sk-crd">
        <h3>Data Science</h3>
        <p>Analyze and interpret complex data.</p>
      </div>
      <div className="sk-crd">
        <h3>Deep Learning</h3>
        <p>Leverage neural networks for complex tasks.</p>
      </div>
      <div className="sk-crd">
        <h3>Natural Language Processing</h3>
        <p>Understand and generate human language.</p>
      </div>
    </div>
  </div>
  {/* Tools Section */}
  <div className="tl-sec">
    <h2>Essential Tools</h2>
    <div className="tl-crsl">
      <div className="tl-itm">TensorFlow</div>
      <div className="tl-itm">PyTorch</div>
      <div className="tl-itm">Jupyter</div>
      <div className="tl-itm">Scikit-learn</div>
    </div>
  </div>
  {/* Practical Experience Section */}
  <div className="px-sec">
    <h2>Practical Experience</h2>
    <div className="px-crd">
      <h3>AI Projects</h3>
      <p>Apply your skills in real-world projects.</p>
    </div>
    <div className="px-crd">
      <h3>Hackathons</h3>
      <p>Challenge your knowledge in competitive settings.</p>
    </div>
  </div>
  {/* Soft Skills Section */}
  <div className="ss-sec">
    <h2>Soft Skills</h2>
    <div className="ss-gr">
      <div className="ss-crd">
        <h3>Problem Solving</h3>
        <p>Develop critical thinking and analytical skills.</p>
      </div>
      <div className="ss-crd">
        <h3>Collaboration</h3>
        <p>Work effectively in team settings.</p>
      </div>
    </div>
  </div>
  {/* Resources Section */}
  <div className="rs-sec">
    <h2>Resources</h2>
    <div className="rs-crd">
      <h3>Books &amp; Courses</h3>
      <p>Expand your knowledge with curated content.</p>
    </div>
    <div className="rs-crd">
      <h3>Online Communities</h3>
      <p>Join AI forums and networks.</p>
    </div>
  </div>
  {/* Future Trends Section */}
  <div className="ft-sec">
    <h2>Future Trends</h2>
    <div className="ft-crd">
      <h3>AI Ethics</h3>
      <p>Understand the impact of AI on society.</p>
    </div>
    <div className="ft-crd">
      <h3>Edge AI</h3>
      <p>Explore AI on mobile and embedded devices.</p>
    </div>
  </div>
</div>
</div>
        </section>
    );

}
