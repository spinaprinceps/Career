import React from "react";
import "../style/onlineCourses.css"; 
import { online } from "./dummydata"; 
import Heading from "./Heading"; 
import CourseCard from "./CourseCard";

const OnlineCourses = () => {
  // Limit the displayed courses to 8
  const coursesToShow = online.slice(0, 8);

  return (
    <section className="online">
      <div className="container">
        <Heading subtitle="COURSES" title="Browse Our Online Courses" />
        <div className="content grid3">
          {coursesToShow.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
