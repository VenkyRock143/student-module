export default function Students({ students }) {
  return (
    <div className="card">
      <h2>Students</h2>
      <ul>
        {students.map(s => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}
