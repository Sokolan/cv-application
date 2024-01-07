import "../styles/educationEdit.css";

export default function EducationEdit({ educationHandler, education }) {
  return (
    <div className="educationEdit">
      <h1>Education</h1>
      <button onClick={() => educationHandler("add", null)}>+</button>
      <ul>
        {education.map((education) => (
          <li key={education.id}>
            <label>School Name</label>
            <input
              type="text"
              onChange={(e) =>
                educationHandler("editSchoolName", education.id, e.target.value)
              }
            />
            <label>Title</label>
            <input
              type="text"
              onChange={(e) =>
                educationHandler("editTitle", education.id, e.target.value)
              }
            />
            <label>From</label>
            <input
              type="date"
              onChange={(e) =>
                educationHandler("editDateFrom", education.id, e.target.value)
              }
            />
            <label>Till</label>
            <input
              type="date"
              onChange={(e) =>
                educationHandler("editDateTo", education.id, e.target.value)
              }
            />
            <button onClick={() => educationHandler("delete", education.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
