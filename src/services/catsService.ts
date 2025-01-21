import axiosClient from "./axiosClient";
import { CatEntity } from "./types";

const CATS_ENDPOINT = "images/search/";

export async function getCats(page: number) {
  const response = await axiosClient.get<CatEntity[]>(CATS_ENDPOINT, {
    params: {
      page: page,
      limit: 10,
    },
  });
  return response.data;
}
