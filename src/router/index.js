import { createRouter, createWebHistory } from "vue-router";

// Cambia @/views/ por @/components/ y corrige el nombre
import LoginApp from "@/components/LoginApp.vue";
import InstucionalApp from "@/components/InstucionalApp.vue"; // Sin la 'i' después de 'Inst'

const routes = [
  {
    path: "/",
    name: "Home",
    component: InstucionalApp,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;