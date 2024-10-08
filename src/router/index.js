import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home";
import Login from "../components/Login";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
