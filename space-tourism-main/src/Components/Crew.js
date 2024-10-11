// Import Statements
import Subheading from "./Subheading";
import {useState,useEffect} from "react";
//import background from "./background";
import "../style/crew.css";
import Image from "./Image";

import Ratan from "../assets/car/Ratan-Tata-lf-removebg.png"
import Michael from "../assets/car/893-removebg-preview.png"
import Steve from "../assets/car/p3-removebg-preview.png"
import Albert from "../assets/crew/Albert-Einstein-removebg-preview.png"

// Data
const data = require("../data.json");

// Crew Component
export default function Crew(){

    // State
    const [crewId, setCrewId] = useState(0);

    // Change Background onload
   // window.onload = background("crew");

    // Data of crew from data
    const {name, images, role, bio} = data.crew[crewId];

    // Function to change crewId onClick crew 
    const change = (id) => {
        setCrewId(id);
    }
    useEffect(() => {
        const list = document.querySelectorAll('.pagination-crew span');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active-dot');
		}
        list[crewId].classList.add("active-dot");
    }, [crewId]);
    
    const image = () => {
        if(name === "Ratan Tata") {
            return Ratan;
        }else if(name === "Michael Jordan"){
            return Michael;
        }else if(name === "Steve Jobs"){
            return Steve;
        }else{
            return Albert;
        }
    }
    
    return(

        // Container
        <div className="apple">

            {/* SubHeading */}
            <Subheading number="2" heading = "Meet the Visionaries" />

            {/* Crew */}
            <div className="crew">

                {/* Crew Text */}
                <div className="crew-text">
                    <span>
                        {role}
                    </span>
                    <h3 className="name">
                        {name}
                    </h3>
                    <p>
                        {bio}
                    </p>
                </div>

                {/* Crew Image */}
                <Image im={image()} name ={name} />

            </div>

            {/* Pagination */}
            <div className="pagination-crew">
                <span onClick={() => change(0)}>.</span>
                <span onClick={() => change(1)}>.</span>
                <span onClick={() => change(2)}>.</span>
                <span onClick={() => change(3)}>.</span>
            </div>

        </div>

    );
    
}