import { useContext, useState } from "react";
import { UserContext } from "../contexts/userProvider";
import { wrapper, errorText } from "../styles/LoginPage.module.scss";

const Register = (props) => {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [error, setError] = useState("");

  const handleState = () => {
    props.onChange("login");
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (password !== repeatedPassword) {
      setError("Password do not match");
      return;
    }

    const credentials = {
      email,
      password,
    };

    let result = await register(credentials);

    switch (result) {
      case "account already exists":
        setError("This email is already registered.");
        break;
      case null:
        break;
      default:
        setError("There was an error, please try again.");
        break;
    }

    if(!result){
      handleState()
    }
  };

  return (
    <form onSubmit={handleRegistration} className={wrapper}>
      <h3>Register user account:</h3>
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
      <input
        type="password"
        placeholder="Repeat Password"
        onChange={(event) => setRepeatedPassword(event.target.value)}
      />
      <button type="submit">Submit</button>
      <button onClick={handleState}>Return</button>
      <p className={errorText}>{error}</p>
    </form>
  );
};

export default Register;
