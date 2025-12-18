import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { students, teachers, courses } from "./data";

import Students from "./Pages/Students";
import Teachers from "./Pages/Teachers";
import Courses from "./Pages/Courses";
import TeacherCourse from "./Pages/AssignTeacher";
import StudentCourse from "./Pages/EnrollStudents";
import Enrollments from "./Pages/Enrollments";

export default function App() {
  const [teacherCourses, setTeacherCourses] = useState(
    JSON.parse(localStorage.getItem("teacherCourses")) || []
  );

  const [studentCourses, setStudentCourses] = useState(
    JSON.parse(localStorage.getItem("studentCourses")) || []
  );

  useEffect(() => {
    localStorage.setItem("teacherCourses", JSON.stringify(teacherCourses));
  }, [teacherCourses]);

  useEffect(() => {
    localStorage.setItem("studentCourses", JSON.stringify(studentCourses));
  }, [studentCourses]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Students</Link>
        <Link to="/teachers">Teachers</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/teacher-course">Teacher Course</Link>
        <Link to="/student-course">Student Course</Link>
        <Link to="/enrollments">Overview</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Students students={students} />} />
          <Route path="/teachers" element={<Teachers teachers={teachers} />} />
          <Route path="/courses" element={<Courses courses={courses} />} />

          <Route
            path="/teacher-course"
            element={
              <TeacherCourse
                teachers={teachers}
                courses={courses}
                teacherCourses={teacherCourses}
                setTeacherCourses={setTeacherCourses}
              />
            }
          />

          <Route
            path="/student-course"
            element={
              <StudentCourse
                students={students}
                courses={courses}
                studentCourses={studentCourses}
                setStudentCourses={setStudentCourses}
              />
            }
          />

          <Route
            path="/enrollments"
            element={
              <Enrollments
                teacherCourses={teacherCourses}
                studentCourses={studentCourses}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
