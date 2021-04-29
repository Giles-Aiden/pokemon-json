import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/charmander",
    name: "Charmander",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "charmander" */ "../views/Charmander.vue"),
  },
  {
    path: "/charmeleon",
    name: "Charmeleon",
    component: () =>
      import(/* webpackChunkName: "charmander" */ "../views/Charmeleon.vue"),
  },
  {
    path: "/charizrd",
    name: "Charizrd",
    component: () =>
      import(/* webpackChunkName: "charmander" */ "../views/Charizrd.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
