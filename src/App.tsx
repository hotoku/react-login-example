import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Preferences from "./Preferences";
import "./App.css";
import Login from "./Login";

export type Token = {
  token: string;
};

function setToken(token: Token) {
  sessionStorage.setItem("token", JSON.stringify(token));
}

function getToken(): Token | undefined {
  const ret = sessionStorage.getItem("token");
  if (ret) {
    return JSON.parse(ret) as Token;
  } else {
    return undefined;
  }
}

function App() {
  const token = getToken();
  console.log("token =", token);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="/preferences">preferences</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/preferences" element={<Preferences />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
