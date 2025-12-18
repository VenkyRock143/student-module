export default function Teachers({ teachers }) {
  return (
    <div className="card">
      <h2>Teachers</h2>
      <ul>
        {teachers.map(t => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </div>
  );
}
