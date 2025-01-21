import { observer } from "mobx-react-lite";
import CatsList from "@components/CatsList/CatsList";
import catsStore from "@stores/catsStore";

const FavouritesPage = observer(() => {
  return <CatsList cats={catsStore.cats.filter((cat) => cat.favourite)} />;
});

export default FavouritesPage;
