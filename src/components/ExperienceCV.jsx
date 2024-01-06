export default function ExpereinceCV({ Experience }) {
  return (
    <>
      <h1>Experience</h1>
      <ul>
        {Experience.map((experience) => (
          <li key={experience.id}>
            {experience.title}
            {experience.company}
            {experience.dateFrom}
            {experience.dateTo}
            {experience.description}
          </li>
        ))}
      </ul>
    </>
  );
}
