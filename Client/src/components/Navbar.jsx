import {
  faBars,
  faSignOutAlt,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserProvider";
import {
  menuIcon,
  logOutIcon,
  menuIconHidden,
  logOutIconHidden,
} from "../styles/Navbar.module.scss";

const Navbar = (props) => {
  const { user, logOut } = useContext(UserContext);
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <div>
      <nav style={displayNav ? { width: "5%" } : { width: "0%" }}>
        <FontAwesomeIcon
          className={user ? menuIcon : menuIconHidden}
          icon={displayNav ? faWindowClose : faBars}
          onClick={(e) => setDisplayNav(!displayNav)}
        />
        {/* <h1>Economy Planner</h1> */}
        <FontAwesomeIcon
          className={user ? logOutIcon : logOutIconHidden}
          icon={faSignOutAlt}
          onClick={(e) => {
            setDisplayNav(false);
            logOut();
          }}
        />
      </nav>
    </div>
  );
};

export default Navbar;
