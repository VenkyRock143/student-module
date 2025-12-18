export default function Courses({ courses }) {
  return (
    <div className="card">
      <h2>Courses</h2>
      <ul>
        {courses.map(c => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}
