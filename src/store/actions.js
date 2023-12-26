import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedByName", data.meals);
  });
};

export function searchByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    
    commit("setSearchedByLetter", data.meals);
  });
};


