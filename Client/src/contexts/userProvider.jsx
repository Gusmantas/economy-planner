import { createContext, useContext, useState } from "react";
import { MonthContext } from "./MonthProvider";

export const UserContext = createContext();

const UserProvider = (props) => {
  const { createNewMonth, getUserMonths } = useContext(MonthContext);
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
      setUser(result.loggedInUser);
      getUserMonths(result.loggedInUser.id)
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

  const register = async (credentials) => {
    let result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    result = await result.json();

    if (result.id) {
      await createNewMonth(result.id);
    }
    return result.error ? result.error : null;
  };

  const values = {
    user,
    logIn,
    logOut,
    register,
  };
  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
