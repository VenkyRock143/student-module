import { useState } from "react";

export default function TeacherCourse({
  teachers,
  courses,
  teacherCourses,
  setTeacherCourses
}) {
  const [teacher, setTeacher] = useState("");
  const [course, setCourse] = useState("");

  const assign = () => {
    if (!teacher || !course) return;

    if (!teacherCourses.find(t => t.teacher === teacher && t.course === course)) {
      setTeacherCourses([...teacherCourses, { teacher, course }]);
    }
  };

  const unassign = (t, c) => {
    setTeacherCourses(
      teacherCourses.filter(x => !(x.teacher === t && x.course === c))
    );
  };

  return (
    <div className="card">
      <h2>Assign Course to Teacher</h2>

      <select onChange={e => setTeacher(e.target.value)}>
        <option value="">Select Teacher</option>
        {teachers.map(t => (
          <option key={t.id}>{t.name}</option>
        ))}
      </select>

      <select onChange={e => setCourse(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map(c => (
          <option key={c.id}>{c.name}</option>
        ))}
      </select>

      <button onClick={assign}>Assign</button>

      <ul>
        {teacherCourses.map((tc, i) => (
          <li key={i}>
            {tc.teacher} → {tc.course}
            <button
              className="danger"
              onClick={() => unassign(tc.teacher, tc.course)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
