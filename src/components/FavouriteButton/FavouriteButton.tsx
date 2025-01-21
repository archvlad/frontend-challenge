import { useState } from "react";
import styles from "./FavouriteButton.module.css";
import FavouriteFilled from "./icons/FavouriteFilled";
import FavouriteOutline from "./icons/FavouriteOutline";

type FavouriteButtonProps = {
  favourite: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const FavouriteButton = (props: FavouriteButtonProps) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div
      className={styles.container}
      onClick={props.onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.favourite ? (
        <FavouriteFilled />
      ) : hover ? (
        <FavouriteFilled />
      ) : (
        <FavouriteOutline />
      )}
    </div>
  );
};

export default FavouriteButton;
