import "../styles/cvEducation.css";

export default function EducationCV({ education }) {
  return (
    <div className="educationCv">
      <h1>Education</h1>
      <ul>
        {education.map((education) => (
          <li key={education.id}>
            <div className="educationInformation">
              <p>{education.schoolName},</p>
              <p>{education.title}</p>
            </div>
            <p>
              {education.dateFrom}&nbsp;- &nbsp;{education.dateTo}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
