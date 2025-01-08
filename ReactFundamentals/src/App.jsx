import CollegeData from "./components/CollegeData";

function App() {
  const collegeData = [
    {
      collegeId: 1,
      collegeName: "IIT Madras",
      collegeLocation: "Tamil Nadu",
      collegeRank: 1,
      student: [
        {
          studentId: 1,
          studentName: "Bruce",
          studentAge: 21,
        },
        {
          studentId: 2,
          studentName: "Jane",
          studentAge: 22,
        },
        {
          studentId: 3,
          studentName: "Mark",
          studentAge: 23,
        },
      ],
    },
    {
      collegeId: 2,
      collegeName: "IIT Delhi",
      collegeLocation: "Delhi",
      collegeRank: 2,
      student: [
        {
          studentId: 1,
          studentName: "John",
          studentAge: 21,
        },
        {
          studentId: 2,
          studentName: "Mike",
          studentAge: 22,
        },
        {
          studentId: 3,
          studentName: "Taison",
          studentAge: 23,
        },
      ],
    },
    {
      collegeId: 3,
      collegeName: "IIT Bombay",
      collegeLocation: "Maharashtra",
      collegeRank: 3,
      student: [
        {
          studentId: 1,
          studentName: "Joseph",
          studentAge: 21,
        },
        {
          studentId: 2,
          studentName: "Marry",
          studentAge: 22,
        },
        {
          studentId: 3,
          studentName: "Pinto",
          studentAge: 23,
        },
      ],
    },
  ];
  return (
    <>
      <h1>Nested Loop</h1>
      {collegeData.map((college) => (
        <CollegeData key={college.collegeId} college={college} />
      ))}
    </>
  );
}

export default App;
