export default function GeneralInfoCV({ generalInfo }) {
  return (
    <div className="generalInfoCv">
      <h1>{generalInfo.name}</h1>
      <p className="contactInformation">
        {generalInfo.email} {generalInfo.phoneNumber}
      </p>
    </div>
  );
}
