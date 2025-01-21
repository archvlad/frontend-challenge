import { observer } from "mobx-react-lite";
import styles from "./CatsViewer.module.css";
import { useRef, useCallback } from "react";
import { Cat } from "@stores/types";
import catsStore from "@stores/catsStore";
import { CatCard } from "@components/CatCard";

type CatsViewerProps = {
  cats: Cat[];
};

const CatsViewer = observer((props: CatsViewerProps) => {
  const observer = useRef<IntersectionObserver>();

  const lastPostElementRef = useCallback((node: HTMLDivElement | null) => {
    if (catsStore.loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        catsStore.setPage(catsStore.page + 1);
        catsStore.fetchCats();
      }
    });

    if (node) observer.current.observe(node);
  }, []);

  return (
    <div className={styles.outerContainer}>
      {props.cats.length > 0 && (
        <div className={styles.cardsContainer}>
          {props.cats.map((cat, index) => (
            <CatCard
              cat={cat}
              key={cat.id}
              ref={
                props.cats.length == index + 1 ? lastPostElementRef : undefined
              }
            />
          ))}
        </div>
      )}
      {catsStore.loading && <div>... загружаем еще котиков ...</div>}
    </div>
  );
});

export default CatsViewer;
