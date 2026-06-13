import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import Store from "./Store";

function App() {

  const [page, setPage] = useState("login");

  return (
    <div>

      <h1>Store Rating Platform</h1>

      <button onClick={() => setPage("login")}>
        Login
      </button>

      <button onClick={() => setPage("register")}>
        Register
      </button>

      <button onClick={() => setPage("admin")}>
        Admin
      </button>

      <button onClick={() => setPage("store")}>
        Stores
      </button>

      <hr />

      {page === "login" && <Login />}

      {page === "register" && <Register />}

      {page === "admin" && <Admin />}

      {page === "store" && <Store />}

    </div>
  );
}

export default App;