import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import { wrapper, errorText, buttons } from "../styles/LoginPage.module.scss";

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
    if (!password || !repeatedPassword || !email) {
      setError("Fields cannot be empty!");
      return;
    }
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

    if (!result) {
      alert("registration sucessfull!");
      handleState();
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
      <div className={buttons}>
        <button onClick={handleState}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <button type="submit">Submit</button>
      </div>
      <p className={errorText}>{error}</p>
    </form>
  );
};

export default Register;
