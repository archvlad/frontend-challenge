import catsStore from "@stores/catsStore";
import { Cat } from "@stores/types";
import styles from "./CatCard.module.css";
import { forwardRef, useState } from "react";
import LazyLoad from "react-lazyload";
import { FavouriteButton } from "@components/FavouriteButton";

type CatCardProps = {
  cat: Cat;
};

const CatCard = (
  props: CatCardProps,
  ref: React.LegacyRef<HTMLDivElement> | undefined
) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  function handleAddToFavorites(id: string): void {
    catsStore.addToFavourites(id);
  }

  function handleRemoveFromFavorites(id: string): void {
    catsStore.removeFromFavourites(id);
  }

  return (
    <div
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <LazyLoad style={{ width: "100%", height: "100%" }}>
        <img src={props.cat.url} className={styles.img} loading="lazy" />
      </LazyLoad>
      {hover && (
        <FavouriteButton
          favourite={props.cat.favourite}
          onClick={() =>
            props.cat.favourite
              ? handleRemoveFromFavorites(props.cat.id)
              : handleAddToFavorites(props.cat.id)
          }
        />
      )}
    </div>
  );
};
export default forwardRef(CatCard);
