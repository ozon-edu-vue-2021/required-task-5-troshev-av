import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView";
import ShopcartView from "@/views/ShopcartView";
import FavoritesView from "@/views/FavoritesView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopcartView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
