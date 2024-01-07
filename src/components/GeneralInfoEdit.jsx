import "../styles/generalInfoEdit.css";

export default function GerneralInfoEdit({ generalInfoHandler }) {
  return (
    <div className="generalInfoEdit">
      <h1>General Information</h1>
      <label>Name</label>
      <input
        type="text"
        onChange={(e) => generalInfoHandler(e, "name")}
        placeholder="First Name Last Name"
      />
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => generalInfoHandler(e, "email")}
        placeholder="example@host.end"
      />
      <label>Phone Number</label>
      <input
        type="tel"
        onChange={(e) => generalInfoHandler(e, "phoneNumber")}
        placeholder="+xxx-xxx-xxx-xxx"
      />
    </div>
  );
}
