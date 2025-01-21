import { observer } from "mobx-react-lite";
import catsStore from "@stores/catsStore";
import { useEffect } from "react";
import CatsViewer from "@components/CatsViewer/CatsViewer";

const AllPage = observer(() => {
  useEffect(() => {
    if (catsStore.cats.length === 0) {
      catsStore.fetchCats();
    }
  }, []);
  return <CatsViewer cats={catsStore.cats} />;
});

export default AllPage;
