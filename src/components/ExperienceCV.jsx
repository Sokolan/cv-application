import "../styles/cvExperience.css";

export default function ExperienceCV({ experience }) {
  return (
    <div className="experienceCv">
      <h1>Experience</h1>
      <ul>
        {experience.map((experience) => (
          <li key={experience.id}>
            <div className="experienceBasicInformation">
              <p>
                {experience.title},&nbsp;{experience.company}
              </p>
              <p className="experienceDates">
                {experience.dateFrom}&nbsp;-&nbsp;{experience.dateTo}
              </p>
            </div>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
