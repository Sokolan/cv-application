import GerneralInfoEdit from "./GeneralInfoEdit";
import EducationEdit from "./EducationEdit";
import ExperienceEdit from "./ExperienceEdit";

export default function EditSection({GeneralInfoHandler}) {
  return (
    <>
      <GerneralInfoEdit GeneralInfoHandler={GeneralInfoHandler}/>
      <EducationEdit />
      <ExperienceEdit />
    </>
  );
}
