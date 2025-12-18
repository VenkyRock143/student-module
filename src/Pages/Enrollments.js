export default function Enrollments({ teacherCourses, studentCourses }) {
  return (
    <>
      <div className="card">
        <h2>Teacher Assignments</h2>
        <ul>
          {teacherCourses.map((t, i) => (
            <li key={i}>{t.teacher} → {t.course}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Student Enrollments</h2>
        <ul>
          {studentCourses.map((s, i) => (
            <li key={i}>{s.student} → {s.course}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
