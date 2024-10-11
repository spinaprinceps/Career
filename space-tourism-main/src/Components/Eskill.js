import React from "react"
import { useNavigate } from "react-router-dom";
import "../style/eskills.css"

export default function Eskill(){
    const navigate = useNavigate();
    return(
        <section>
    <div class="wrapper">
  <div class="holder">
    <div class="subdiv">
      <h1 class="tech">Technology and Innovation</h1>
      <h3 class="AI" onClick={() => navigate("/fskill")}>Artificial Intelligence</h3>
      <h3 class="program">Programming</h3>
      <h3 class="robo">Robotics</h3>
      <h3 class="game">Game Development</h3>
    </div>
  </div>
</div>

 
        </section>
    );

}


