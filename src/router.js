import { createWebHistory, createRouter } from "vue-router";
import HomeComp from "./components/HomeComp.vue";
import ProjectsComp from "./components/ProjectsComp.vue";
import DetailComp from "./components/DetailComp.vue";
import AboutComp from "./components/AboutComp.vue";
import ContactComp from "./components/ContactComp.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeComp,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsComp,
  },
  {
    path: "/detail/:projectNumber",
    name: "Detail",
    component: DetailComp,
  },
  {
    path: "/about",
    name: "About",
    component: AboutComp,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactComp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
