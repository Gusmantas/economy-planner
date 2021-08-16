import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import {
  wrapper,
  errorText,
  registerBtn,
} from "../styles/LoginPage.module.scss";

const Login = (props) => {
  const { logIn } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    let credentials = {
      email,
      password,
    };

    let result = await logIn(credentials);
    switch (result) {
      case "email not found":
        setError("Register an account to log in.");
        break;
      case "bad credentials":
        setError("Bad Credentials. Check your spelling.");
        break;
      case null:
        break;
      default:
        setError("There was an error, please try again.");
        break;
    }
  };

  const handleState = () => {
    props.onChange("register");
  };
  return (
    <form onSubmit={handleLogin} className={wrapper}>
      <h3>Welcome! Please Sign-in:</h3>
      <input
        type="email"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Submit</button>
      <p className={errorText}>{error}</p>
      <p className={registerBtn} onClick={handleState}>
        Don't have an account yet? Register here!
      </p>
    </form>
  );
};

export default Login;
