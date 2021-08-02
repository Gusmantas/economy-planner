import { useContext, useState } from "react";
import { UserContext } from "../contexts/userProvider";
import { wrapper, errorText } from "../styles/LoginPage.module.scss";

const Login = () => {
  const { logIn } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let credentials = {
      email,
      password,
    };

    let result = await logIn(credentials);
    switch (result) {
      case "email not found":
        setError("Register an account to log in.");
        break
      case "bad credentials":
        setError("Bad Credentials. Check your spelling.");
        break
      case null:
        break
      default:
        console.log(result);
        setError("There was an error, please try again.")
        break
    }
  };
  return (
    <form onSubmit={handleSubmit} className={wrapper}>
      <h3>Welcome! Please Log-in</h3>
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
      <p className={errorText}>{error}</p>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
