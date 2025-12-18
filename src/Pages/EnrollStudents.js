import { useState } from "react";

export default function StudentCourse({
  students,
  courses,
  studentCourses,
  setStudentCourses
}) {
  const [student, setStudent] = useState("");
  const [course, setCourse] = useState("");

  const enroll = () => {
    if (!student || !course) return;

    if (!studentCourses.find(s => s.student === student && s.course === course)) {
      setStudentCourses([...studentCourses, { student, course }]);
    }
  };

  const unenroll = (s, c) => {
    setStudentCourses(
      studentCourses.filter(x => !(x.student === s && x.course === c))
    );
  };

  return (
    <div className="card">
      <h2>Enroll Student in Course</h2>

      <select onChange={e => setStudent(e.target.value)}>
        <option value="">Select Student</option>
        {students.map(s => (
          <option key={s.id}>{s.name}</option>
        ))}
      </select>

      <select onChange={e => setCourse(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map(c => (
          <option key={c.id}>{c.name}</option>
        ))}
      </select>

      <button onClick={enroll}>Enroll</button>

      <ul>
        {studentCourses.map((sc, i) => (
          <li key={i}>
            {sc.student} → {sc.course}
            <button
              className="danger"
              onClick={() => unenroll(sc.student, sc.course)}
            >
                
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
