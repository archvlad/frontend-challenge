import { makeAutoObservable } from "mobx";
import { getCats } from "@services/catsService";
import { Cat } from "./types";

class CatsStore {
  cats: Cat[] = [];
  page: number = 0;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setPage(page: number) {
    this.page = page;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  async fetchCats() {
    this.loading = true;
    const data = await getCats(this.page);
    const cats = data.map((cat) => ({ ...cat, favourite: false }));
    this.cats = [...this.cats, ...cats];
    this.loading = false;
  }

  addToFavourites(id: string) {
    const catIndex = this.cats.findIndex((cat) => cat.id == id);

    if (catIndex !== -1) {
      const cat = this.cats[catIndex];
      cat.favourite = true;
      this.cats = [...this.cats];
    }
  }

  removeFromFavourites(id: string) {
    const catIndex = this.cats.findIndex((cat) => cat.id == id);

    if (catIndex !== -1) {
      const cat = this.cats[catIndex];
      cat.favourite = false;
      this.cats = [...this.cats];
    }
  }
}

export default new CatsStore();
