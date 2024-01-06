export default function ExperienceEdit({ ExperienceHandler, Experience }) {
  return (
    <>
      <h1>Expereince</h1>
      <button onClick={() => ExperienceHandler("add")}>+</button>
      <ul>
        {Experience.map((experience) => (
          <li key={experience.id}>
            <label>Title</label>
            <input
              type="text"
              onChange={(e) =>
                ExperienceHandler("editTitle", experience.id, e.target.value)
              }
            />
            <label>Company</label>
            <input
              type="text"
              onChange={(e) =>
                ExperienceHandler("editCompany", experience.id, e.target.value)
              }
            />
            <label>From</label>
            <input
              type="date"
              onChange={(e) =>
                ExperienceHandler("editDateFrom", experience.id, e.target.value)
              }
            />
            <label>Till</label>
            <input
              type="date"
              onChange={(e) =>
                ExperienceHandler("editDateTo", experience.id, e.target.value)
              }
            />
            <label>Description</label>
            <input
              type="text"
              onChange={(e) =>
                ExperienceHandler(
                  "editDescription",
                  experience.id,
                  e.target.value,
                )
              }
            />
            <button onClick={() => ExperienceHandler("delete", experience.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
