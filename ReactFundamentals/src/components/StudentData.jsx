import React from "react";

const StudentData = ({ students }) => {
  return (
    <div>
      <h3>Student Details:</h3>
      <ul>
        {students.map((student) => (
          <li key={student.studentId}>
            Name: {student.studentName}, Age: {student.studentAge}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentData;
