import React from "react";
import StudentData from "./StudentData";

const CollegeData = ({ college }) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        backgroundColor: "lightgray",
        borderRadius: "5px",
        width: "1000px",
      }}
    >
      <h2>College : {college.collegeName}</h2>
      <ul>
        <li>Rank : {college.collegeRank}</li>
        <li>Location : {college.collegeLocation}</li>
      </ul>

      <StudentData students={college.student} />
    </div>
  );
};

export default CollegeData;
