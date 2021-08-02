import { faBars, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { UserContext } from "../contexts/userProvider";
import {
  nav,
  menuIcon,
  logOutIcon,
  menuIconHidden,
  logOutIconHidden,
} from "../styles/Navbar.module.scss";

const Navbar = () => {
  const { user, logOut } = useContext(UserContext);

  return (
    <nav>
      <FontAwesomeIcon
        className={user ? menuIcon : menuIconHidden}
        icon={faBars}
      />
      <h1>Economy Planner</h1>
      <FontAwesomeIcon
        className={user ? logOutIcon : logOutIconHidden}
        icon={faSignOutAlt}
        onClick={logOut}
      />
    </nav>
  );
};

export default Navbar;
