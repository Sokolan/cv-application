export default function GeneralInfoCV({ generalInfo }) {
  return (
    <div className="generalInfoCv">
      <p>
        {generalInfo.name}
        {generalInfo.email}
        {generalInfo.phoneNumber}
      </p>
    </div>
  );
}
