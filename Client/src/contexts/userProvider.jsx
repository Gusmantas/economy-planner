import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const logIn = async (credentials) => {
    let result = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    result = await result.json();

    if (result.loggedInUser) {
      localStorage.setItem("user", JSON.stringify(result.loggedInUser));
      setUser(JSON.parse(localStorage.getItem("user")));
    }

    return result.error ? result.error : null;
  };

  const logOut = async () => {
    let logout = await fetch("/api/logout");
    await logout.json();
    if (logout.ok) {
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  const values = {
    user,
    logIn,
    logOut,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
