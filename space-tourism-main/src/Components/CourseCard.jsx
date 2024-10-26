import React from "react";
import "../style/courseCard.css"; // CSS for styling individual course cards

const CourseCard = ({ course }) => {
  return (
    <div className="online-box">
      <div className="online-img">
        <img src={course.cover} alt={course.courseName} />
        <img src={course.hoverCover} alt={course.courseName} className="show" />
      </div>
      <h1>{course.courseName}</h1>
      <span>{course.course}</span>
    </div>
  );
};

export default CourseCard;
