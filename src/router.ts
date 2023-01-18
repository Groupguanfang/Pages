import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/apps",
      name: "app",
      component: () => import("@/views/app.vue"),
    },
  ],
});

export default router;
