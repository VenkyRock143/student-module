# 🎓 Student–Teacher–Course Management Module

A fully **dynamic React web application** to manage students, teachers, and courses with real-time assignment and enrollment features.

Live Demo

---

## 🚀 Features

✅ View list of **Students**  
✅ View list of **Teachers**  
✅ View list of **Courses**  
✅ Assign & unassign **Courses to Teachers**  
✅ Enroll & unenroll **Students in Courses**  
✅ View complete **Teacher–Course** and **Student–Course** mappings  
✅ **Persistent data** using `localStorage`  
✅ Clean **dropdown-based UI**  
✅ Modern, responsive layout  

---

## 🧠 Application Flow

- The app uses **React state** as a single source of truth
- All assignments and enrollments update **dynamically**
- Data is saved to **localStorage**, so it persists after refresh
- No backend is used (can be extended easily)

---

## 🛠 Tech Stack

- **React**
- **React Router**
- **JavaScript (ES6+)**
- **CSS**
- **localStorage**

---

## 📁 Project Structure

```bash
src/
│── App.js
│── data.js
│── styles.css
│── pages/
│ ├── Students.js
│ ├── Teachers.js
│ ├── Courses.js
│ ├── TeacherCourse.js
│ ├── StudentCourse.js
│ └── Enrollments.js

```

## 🖥 How to Run the Project

### 1️⃣ Clone the repository
```bash
git clone https://github.com/VenkyRock143/student-module.git
```

### 2️⃣ Navigate to the project folder
```bash
cd student-module
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Start the development server
```bash
npm start
```

### The app will run on:
```bash
http://localhost:3000
```

## 📌 How It Works
##🔹 Assign Courses to Teachers
Select a teacher
Select a course
Assign or unassign with one click

##🔹 Enroll Students in Courses
Select a student
Select a course
Enroll or unenroll dynamically

##🔹 View Overview
See all teacher-course assignments
See all student-course enrollments in one place

## 💾 Data Persistence
Assignments and enrollments are saved in localStorage
Data remains intact even after page refresh
