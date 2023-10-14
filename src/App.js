import React, { useState } from "react";

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const current = new Date();
    const dateofbirth = new Date(birthDate);
    const ageInDays = (current - dateofbirth) / (1000 * 60 * 60 * 24);
    const age = Math.floor(ageInDays / 365);

      if(age>=0)
      {
        setAge(age);
      }
      else{
        setAge("Enter the Date of Bith properly");
      }
  };

  return (
    <div>
        <center>
        <h1>Age Calculator</h1>
        <h3>Enter the Date of Birth</h3>
        <input class="in" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        <br/>
        <br/>
        <br/>
        <button class="but" onClick={calculateAge}>Calculate Age</button>
        <p>Your age is : <strong>{age}</strong></p>
        </center>
      </div>
  );
}

export default App;