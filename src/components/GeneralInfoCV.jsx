export default function GeneralInfoCV({ GeneralInfo }) {
  return (
    <>
      <p>
        {GeneralInfo.name}
        {GeneralInfo.email}
        {GeneralInfo.phoneNumber}
      </p>
    </>
  );
}
