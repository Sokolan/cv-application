export default function EducationCV({ Education }) {
  return (
    <>
      <h1>Education</h1>
      <ul>
        {Education.map((education) => (
          <li key={education.id}>
            {education.schoolName}
            {education.title}
            {education.dateFrom}
            {education.dateTo}
          </li>
        ))}
      </ul>
    </>
  );
}
