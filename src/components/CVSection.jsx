import GeneralInfoCV from "./GeneralInfoCV";
import EducationCV from "./EducationCV";
import ExperieneCV from "./ExperienceCV";
import "../styles/cvSection.css";

export default function CVSection({ generalInfo, education, experience }) {
  return (
    <div className="cvSection">
      <GeneralInfoCV generalInfo={generalInfo} />
      <EducationCV education={education} />
      <ExperieneCV experience={experience} />
    </div>
  );
}
