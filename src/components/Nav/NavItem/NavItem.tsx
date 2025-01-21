import { NavLink, To } from "react-router";
import styles from "./NavItem.module.css";

type NavItemProps = {
  label: string;
  to: To;
};

function NavItem(props: NavItemProps) {
  return (
    <NavLink
      to={props.to}
      style={{
        fontFamily: "Roboto, sans-serif",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "21px",
        letterSpacing: "0.25px",
        textAlign: "center",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
        textDecoration: "none",
        color: "#FFFFFF",
      }}
      className={({ isActive }) => (isActive ? styles.active : "")}
    >
      <div className={styles.linkItem}>
        <span>{props.label}</span>
      </div>
    </NavLink>
  );
}

export default NavItem;
