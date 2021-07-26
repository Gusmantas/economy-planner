import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { nav, menuIcon, logOutIcon } from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav>
      <FontAwesomeIcon className={menuIcon} icon={faBars}/>
      <h1>Economy Planner</h1>
      <FontAwesomeIcon className={logOutIcon} icon={faSignOutAlt}/>
    </nav>
  );
}
 
export default Navbar;