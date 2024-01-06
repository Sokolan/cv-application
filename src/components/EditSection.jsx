import GerneralInfoEdit from "./GeneralInfoEdit";
import EducationEdit from "./EducationEdit";
import ExperienceEdit from "./ExperienceEdit";

export default function EditSection({
  GeneralInfoHandler,
  EducationHandler,
  Education,
  ExperienceHandler,
  Experience,
}) {
  return (
    <>
      <GerneralInfoEdit GeneralInfoHandler={GeneralInfoHandler} />
      <EducationEdit
        EducationHandler={EducationHandler}
        Education={Education}
      />
      <ExperienceEdit
        ExperienceHandler={ExperienceHandler}
        Experience={Experience}
      />
    </>
  );
}
