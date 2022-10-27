import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Preferences from "./Preferences";
import "./App.css";
import { useState } from "react";
import Login from "./Login";

export type Token = {};

function App() {
  const [token, setToken] = useState<Token | undefined>();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/preferences" element={<Preferences />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
