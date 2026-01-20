import { useState } from "react";
import Child from "./Child";
import CounterButton from "./CounterButton";



function Biodata() {
  const [show, setShow] = useState(true);
  const [edit, setEdit] = useState(false);

  const [name, setName] = useState("Tanisha Singh");
  const [age, setAge] = useState("20");
  const [hobby, setHobby] = useState("Reading, dancing, listening to music");
  const [dob, setDob] = useState("05-11-2005");
  const [email, setEmail] = useState("23BAI70527@cuchd.in.com");
  const [phone, setPhone] = useState("+91 9876543210");

  const containerStyle = {
    textAlign: "center",
    marginTop: "30px",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "black"
  };

  const cardStyle = {
    display: "inline-block",
    padding: "20px 30px",
    borderRadius: "10px",
    background: "white",
    border: "2px solid #1E90FF",
    boxShadow: "0 4px 15px #1E90FF",
    textAlign: "left",
    minWidth: "350px"
  };

  const headingStyle = {
    color: "#1E90FF",
    fontWeight: "bold",
    marginBottom: "15px"
  };

  const btnBox = {
    marginBottom: "20px"
  };

  const buttonStyle = {
    padding: "10px 15px",
    margin: "5px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Bio Data</h1>

      <div style={btnBox}>
        <button
          style={{ ...buttonStyle, background: "#1E90FF", color: "white" }}
          onClick={() => setShow(!show)}
        >
          {show ? "Hide Resume" : "Show Resume"}
        </button>

        <button
          style={{ ...buttonStyle, background: "black", color: "white" }}
          onClick={() => setEdit(!edit)}
        >
          {edit ? "Save Resume" : "Edit Resume"}
        </button>
        <Child name={name} age={age} hobby={hobby} dob={dob} email={email} phone={phone} />
        <CounterButton />

      </div>

      {show && (
        <div style={cardStyle}>
          {edit ? (
            <>
              <p><strong>Name:</strong> <input value={name} onChange={(e) => setName(e.target.value)} /></p>
              <p><strong>Age:</strong> <input value={age} onChange={(e) => setAge(e.target.value)} /></p>
              <p><strong>Hobby:</strong> <input value={hobby} onChange={(e) => setHobby(e.target.value)} /></p>
              <p><strong>DOB:</strong> <input value={dob} onChange={(e) => setDob(e.target.value)} /></p>
              <p><strong>Email:</strong> <input value={email} onChange={(e) => setEmail(e.target.value)} /></p>
              <p><strong>Phone:</strong> <input value={phone} onChange={(e) => setPhone(e.target.value)} /></p>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Age:</strong> {age}</p>
              <p><strong>Hobby:</strong> {hobby}</p>
              <p><strong>DOB:</strong> {dob}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Phone:</strong> {phone}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Biodata;
