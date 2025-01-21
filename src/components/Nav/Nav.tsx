import styles from "./Nav.module.css";
import { NavItem } from "./NavItem";

function Nav() {
  return (
    <nav className={styles.nav}>
      <NavItem label="Все котики" to="/"></NavItem>
      <NavItem label="Любимые котики" to="/favourites"></NavItem>
    </nav>
  );
}

export default Nav;
