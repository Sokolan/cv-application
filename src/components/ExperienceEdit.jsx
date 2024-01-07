export default function ExperienceEdit({ experienceHandler, experience }) {
  return (
    <div className="experienceEdit">
      <h1>Experience</h1>
      <button onClick={() => experienceHandler("add")}>+</button>
      <ul>
        {experience.map((experience) => (
          <li key={experience.id}>
            <label>Title</label>
            <input
              type="text"
              onChange={(e) =>
                experienceHandler("editTitle", experience.id, e.target.value)
              }
            />
            <label>Company</label>
            <input
              type="text"
              onChange={(e) =>
                experienceHandler("editCompany", experience.id, e.target.value)
              }
            />
            <label>From</label>
            <input
              type="date"
              onChange={(e) =>
                experienceHandler("editDateFrom", experience.id, e.target.value)
              }
            />
            <label>Till</label>
            <input
              type="date"
              onChange={(e) =>
                experienceHandler("editDateTo", experience.id, e.target.value)
              }
            />
            <label>Description</label>
            <input
              type="text"
              onChange={(e) =>
                experienceHandler(
                  "editDescription",
                  experience.id,
                  e.target.value,
                )
              }
            />
            <button onClick={() => experienceHandler("delete", experience.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
