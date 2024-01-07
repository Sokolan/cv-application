export default function ExperienceCV({ experience }) {
  return (
    <div className="experienceCv">
      <h1>Experience</h1>
      <ul>
        {experience.map((experience) => (
          <li key={experience.id}>
            {experience.title}
            {experience.company}
            {experience.dateFrom}
            {experience.dateTo}
            {experience.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
