import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SearchName from "../views/SearchName.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import SearchByIngredient from "../views/SearchByIngredient.vue";
import PageDetail from "../views/PageDetail.vue";
import DefaultHome from '../components/DefaultHome.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: DefaultHome,
    children: [
      {
        path: "/by-name/:name?",
        name: "byName",
        component: SearchName,
      },
      {
        path: "/pageDetail/:id?",
        name: "byId",
        component: PageDetail,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: SearchByLetter,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: SearchByIngredient,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
