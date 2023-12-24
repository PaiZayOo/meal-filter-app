import axiosClient from "../axiosClient";

export function searchByName({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
  .then(({ data }) => {
    commit("setSearchedByName", data.meals);
  })
}
