import { Cat } from "@stores/types";
import styles from "./CatsList.module.css";
import { CatCard } from "@components/CatCard";

type CatsListProps = {
  cats: Cat[];
};

const CatsList = (props: CatsListProps) => {
  return (
    <div className={styles.outerContainer}>
      {props.cats.length > 0 && (
        <div className={styles.cardsContainer}>
          {props.cats.map((cat) => (
            <CatCard cat={cat} key={cat.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CatsList;
