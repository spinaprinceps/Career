// Import Statements
import "../style/nav.css";
import { Link } from "react-router-dom";
import logo from "../assets/hf/logo.webp";

// Navigation Component
export default function Nav(){

    // Function to open navigation menu in mobile
    const open = () => {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      const navItem = document.querySelectorAll(".nav-item");

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");

      navItem.forEach((item) => {
          item.addEventListener("click", function(){
            hamburger.classList.remove("active")
            navMenu.classList.remove("active");
          })
      });

    }
    
    const setActiveLink = e => {
      const links = document.getElementsByTagName("a"); 
      Array.from(links).forEach(el => el.classList.remove("active"));
      e.target.classList.add("active");
    };
    
    return (

        // Navigation Bar
        <nav>
      
          {/* Logo */}
          <a href="#">
            <img src={logo} alt="Space Logo" />
          </a>
          <hr />

          {/* Navigation Menu */}
          <ul className="nav-menu">
            
            <li className="nav-item" onClick={setActiveLink}>
              <Link to="/space-tourism/">
                  <span className="nav-num"></span>
                  Home
              </Link>
            </li>
            <li className="nav-item" onClick={setActiveLink}>
               <Link to="/destination">
                  <span className="nav-num"></span>
                  career guidance
              </Link>
            </li>
            <li className="nav-item" onClick={setActiveLink}>
              <Link to="/mentorship">
                  <span className="nav-num"></span>
                  Mentorship
              </Link>
            </li>
            <li className="nav-item" onClick={setActiveLink}>
              <Link to="/skills">
                  <span className="nav-num"></span>
                  Skill up
              </Link>
            </li>
            
            <li className="nav-item" onClick={setActiveLink}>
              <Link to="/feedback">
                  <span className="nav-num"></span>
                  feedback
              </Link>
  
            </li>
            <li class="nav-item">
            <Link to="/signup" className="sign-up-link">  
        <span class="nav-num"></span>
        Sign Up
        </Link>
</li>
<li class="nav-item">
    <Link to="/login" className="log-in-link">    
        <span class="nav-num"></span>
        Log In
    </Link>
</li>



          </ul>

          {/* Hamburger */}
          <span className="hamburger" onClick={open}></span>

        </nav>

    );

}