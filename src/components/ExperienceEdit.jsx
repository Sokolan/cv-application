import "../styles/experienceEdit.css";

export default function ExperienceEdit({ experienceHandler, experience }) {
  return (
    <div className="experienceEdit">
      <h1>Experience</h1>
      <button onClick={() => experienceHandler("add")}>Add Experience</button>
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
            <div className="datesEditExperience">
              <div className="dateFromEditExperience">
                <label>From</label>
                <input
                  type="date"
                  onChange={(e) =>
                    experienceHandler(
                      "editDateFrom",
                      experience.id,
                      e.target.value,
                    )
                  }
                />
              </div>
              <div className="dateTillEditExperience">
                <label>Till</label>
                <input
                  type="date"
                  onChange={(e) =>
                    experienceHandler(
                      "editDateTo",
                      experience.id,
                      e.target.value,
                    )
                  }
                />
              </div>
            </div>
            <label>Description</label>
            <textarea
              type="text"
              rows="6"
              className="experienceEditDescription"
              onChange={(e) =>
                experienceHandler(
                  "editDescription",
                  experience.id,
                  e.target.value,
                )
              }
            />
            <button
              className="experienceDelete"
              onClick={() => experienceHandler("delete", experience.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
