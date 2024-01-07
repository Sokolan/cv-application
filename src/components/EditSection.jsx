import GerneralInfoEdit from "./GeneralInfoEdit";
import EducationEdit from "./EducationEdit";
import ExperienceEdit from "./ExperienceEdit";
import "../styles/editSection.css";

export default function EditSection({
  generalInfoHandler,
  educationHandler,
  education,
  experienceHandler,
  experience,
}) {
  return (
    <div className="editSection">
      <GerneralInfoEdit generalInfoHandler={generalInfoHandler} />
      <EducationEdit
        educationHandler={educationHandler}
        education={education}
      />
      <ExperienceEdit
        experienceHandler={experienceHandler}
        experience={experience}
      />
    </div>
  );
}
