import { useState } from "react";
import axios from "axios";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const registerUser = () => {

    axios.post("http://localhost:8080/auth/register", {
      name,
      email,
      password,
      address
    })
    .then((res) => {
      console.log("Success:", res.data);
      alert("Registration Successful");
    })
    .catch((error) => {
      console.log("Error:", error);

      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }

      alert("Registration Failed");
    });
  };

  return (
    <div>
      <h1>Store Rating Platform</h1>

      <h2>Register</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <br /><br />

      <button onClick={registerUser}>
        Register
      </button>
    </div>
  );
}

export default Register;