import { FormEventHandler, useState } from "react";
import { Token } from "./App";
import "./Login.css";

type Props = {
  setToken: (obj: any) => void;
};

type Credentials = any;

async function loginUser(credentials: Credentials): Promise<Token> {
  return fetch("http://localhost:8081/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }: Props): JSX.Element {
  const [userName, setUserName] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const ret = await loginUser({
      userName,
      password,
    });
    setToken(ret);
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
