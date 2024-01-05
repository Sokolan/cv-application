import { useState } from "react";
import EditSection from "./components/EditSection";
import CVSection from "./components/CVSection";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  function generalInfoHandler(e, changed) {
    if (changed === "name") {
      setGeneralInfo({...generalInfo, name: e.target.value});
    }
    if (changed === "email") {
      setGeneralInfo({...generalInfo, email: e.target.value});
    }
    if (changed === "phoneNumber") {
      setGeneralInfo({...generalInfo, phoneNumber: e.target.value});
    }
  }
  return (
    <>
      <EditSection GeneralInfoHandler={generalInfoHandler}></EditSection>
      <CVSection GeneralInfo={generalInfo}></CVSection>
    </>
  );
}

export default App;
