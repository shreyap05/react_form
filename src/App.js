import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {

  }

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="LastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
           setPassword(e.target.value);
          }}
        />
        <input type="button" onClick={submitForm} value="Submit" />
      </form>
    </div>
  );
}

export default App;
