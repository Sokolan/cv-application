import GeneralInfoCV from "./GeneralInfoCV";
import EducationCV from "./EducationCV";
import ExperieneCV from "./ExperienceCV";

export default function CVSection({ GeneralInfo, Education, Experience }) {
  return (
    <>
      <GeneralInfoCV GeneralInfo={GeneralInfo} />
      <EducationCV Education={Education} />
      <ExperieneCV Experience={Experience} />
    </>
  );
}
