import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({});

export default function AuthContextProvider(props) {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search !== "") {
      axios
        .get("http://receitasfiap.herokuapp.com/Recipe/v1/type", {
          params: { type: search },
        })
        .then((res) => {
          setUser(res.data);
        });
    } else {
      axios
        .get("http://receitasfiap.herokuapp.com/Recipe/v1/all")
        .then((res) => {
          setUser(res.data);
        });
    }
  }, [search]);

  return (
    <AuthContext.Provider value={{ user, search, setSearch }}>
      {props.children}
    </AuthContext.Provider>
  );
}
