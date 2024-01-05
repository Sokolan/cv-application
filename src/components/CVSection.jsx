import GeneralInfoCV from "./GeneralInfoCV";
import EducationCV from "./EducationCV";
import ExperieneCV from "./ExperienceCV";

export default function CVSection({GeneralInfo}) {
  return (
    <>
      <GeneralInfoCV GeneralInfo={GeneralInfo} />
      <EducationCV />
      <ExperieneCV />
    </>
  );
}
