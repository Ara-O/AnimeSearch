import { createRouter, createWebHistory } from "vue-router";
import Searchpage from "../mainpages/Searchpage.vue";
import News from "../mainpages/AnimeNewsPage.vue";
import SelectedAnimePage from "../mainpages/SelectedAnimePage.vue";

const routes = [
  {
    path: "/search",
    name: "Search",
    component: Searchpage,
  },
  {
    path: "/selectedanime",
    name: "Selected Anime",
    component: SelectedAnimePage,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Redirecting",
    component: Searchpage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
