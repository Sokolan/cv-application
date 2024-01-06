import { useState } from "react";
import { v4 as uuid } from "uuid";
import EditSection from "./components/EditSection";
import CVSection from "./components/CVSection";
import "./App.css";

function getEducationWithChangedValue(changed, oldEducation, newValue) {
  return changed === "SchoolName"
    ? { ...oldEducation, schoolName: newValue }
    : changed === "Title"
      ? { ...oldEducation, title: newValue }
      : changed === "DateFrom"
        ? { ...oldEducation, dateFrom: newValue }
        : changed === "DateTo"
          ? { ...oldEducation, dateTo: newValue }
          : null;
}

function getExperienceWithChangedValue(changed, oldExperience, newValue) {
  return changed === "Title"
    ? { ...oldExperience, title: newValue }
    : changed === "Company"
      ? { ...oldExperience, Company: newValue }
      : changed === "DateFrom"
        ? { ...oldExperience, dateFrom: newValue }
        : changed === "DateTo"
          ? { ...oldExperience, dateTo: newValue }
          : changed === "Description"
            ? { ...oldExperience, description: newValue }
            : null;
}

function App() {
  const [generalInfo, setGeneralInfo] = useState({});

  const [education, setEducation] = useState([]);

  const [experience, setExperience] = useState([]);

  function generalInfoHandler(e, changed) {
    if (changed === "name") {
      setGeneralInfo({ ...generalInfo, name: e.target.value });
    }
    if (changed === "email") {
      setGeneralInfo({ ...generalInfo, email: e.target.value });
    }
    if (changed === "phoneNumber") {
      setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value });
    }
  }

  function educationHandler(mode, changedEducation = null, newValue = null) {
    if (mode === "add") {
      setEducation(
        education.concat([
          {
            schoolName: "",
            title: "",
            dateFrom: "",
            dateTo: "",
            id: uuid(),
          },
        ]),
      );
    } else if (mode === "delete") {
      setEducation(
        education.filter((education) => education.id !== changedEducation),
      );
    } else if (mode.indexOf("edit") !== -1) {
      setEducation(
        education.map((education) => {
          if (education.id !== changedEducation) {
            return education;
          }
          const changed = mode.slice("edit".length);
          return getEducationWithChangedValue(changed, education, newValue);
        }),
      );
    }
  }

  function experienceHandler(mode, changedExperience = null, newValue = null) {
    console.log("a");
    if (mode === "add") {
      setExperience(
        experience.concat([
          {
            title: "",
            company: "",
            dateFrom: "",
            dateTo: "",
            description: "",
            id: uuid(),
          },
        ]),
      );
      console.log("b");
    } else if (mode === "delete") {
      setExperience(
        experience.filter((experience) => experience.id !== changedExperience),
      );
    } else if (mode.indexOf("edit") !== -1) {
      setExperience(
        experience.map((experience) => {
          if (experience.id !== changedExperience) {
            return experience;
          }
          const changed = mode.slice("edit".length);
          return getExperienceWithChangedValue(changed, experience, newValue);
        }),
      );
    }
  }

  return (
    <>
      <EditSection
        GeneralInfoHandler={generalInfoHandler}
        EducationHandler={educationHandler}
        Education={education}
        ExperienceHandler={experienceHandler}
        Experience={experience}
      ></EditSection>
      <CVSection
        GeneralInfo={generalInfo}
        Education={education}
        Experience={experience}
      ></CVSection>
    </>
  );
}

export default App;
