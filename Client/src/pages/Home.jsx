import { useContext } from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import { UserContext } from "../contexts/userProvider";

const Home = () => {
  const { user } = useContext(UserContext);

  const checkIfUserExist = () => {
    if (!user) {
      return <Login />;
    }
  };

  return (
    <main>
      <Navbar />
      {checkIfUserExist()}
    </main>
  );
};

export default Home;
