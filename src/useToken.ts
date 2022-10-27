import { useState } from "react";
import { Token } from "./App";

function getToken(): Token | undefined {
  const ret = sessionStorage.getItem("token");
  if (ret) {
    return JSON.parse(ret) as Token;
  } else {
    return undefined;
  }
}

export default function useToken() {
  const [token, setToken] = useState<Token | undefined>(getToken());

  const saveToken = (userToken: Token): void => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
