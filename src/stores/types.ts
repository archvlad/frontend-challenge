import { CatEntity } from "../services/types";

export interface Cat extends CatEntity {
  favourite: boolean;
}
