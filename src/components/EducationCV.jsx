export default function EducationCV({ education }) {
  return (
    <div className="educationCv">
      <h1>Education</h1>
      <ul>
        {education.map((education) => (
          <li key={education.id}>
            {education.schoolName}
            {education.title}
            {education.dateFrom}
            {education.dateTo}
          </li>
        ))}
      </ul>
    </div>
  );
}
