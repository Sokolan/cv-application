export default function GerneralInfoEdit({ GeneralInfoHandler }) {
  return (
    <>
      <h1>General Information</h1>
      <label>Name</label>
      <input type="text" onChange={(e) => GeneralInfoHandler(e, "name")} />
      <label>Email</label>
      <input type="email" onChange={(e) => GeneralInfoHandler(e, "email")} />
      <label>Phone Number</label>
      <input
        type="tel"
        onChange={(e) => GeneralInfoHandler(e, "phoneNumber")}
      />
    </>
  );
}
