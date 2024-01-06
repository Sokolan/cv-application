export default function EducationEdit({ EducationHandler, Education }) {
  return (
    <>
      <h1>Education</h1>
      <button onClick={() => EducationHandler("add", null)}>+</button>
      <ul>
        {Education.map((education) => (
          <li key={education.id}>
            <label>School Name</label>
            <input
              type="text"
              onChange={(e) =>
                EducationHandler("editSchoolName", education.id, e.target.value)
              }
            />
            <label>Title</label>
            <input
              type="text"
              onChange={(e) =>
                EducationHandler("editTitle", education.id, e.target.value)
              }
            />
            <label>From</label>
            <input
              type="date"
              onChange={(e) =>
                EducationHandler("editDateFrom", education.id, e.target.value)
              }
            />
            <label>Till</label>
            <input
              type="date"
              onChange={(e) =>
                EducationHandler("editDateTo", education.id, e.target.value)
              }
            />
            <button onClick={() => EducationHandler("delete", education.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
