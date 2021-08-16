import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Board from "./Board";
import Register from "../components/Register";
import {} from "../styles/Home.module.scss";

const Home = () => {
  const { user } = useContext(UserContext);
  const [state, setState] = useState("login");

  const handleState = (state) => {
    setState(state);
  };

  const renderByState = () => {
    if (!user) {
      if (state === "login") {
        return <Login onChange={handleState} />;
      } else {
        return <Register onChange={handleState} />;
      }
    } else {
      return <Board />;
    }
  };

  return (
    <main>
      <Navbar />
      {renderByState()}
    </main>
  );
};

export default Home;
