import { createRouter, createWebHistory } from 'vue-router'
import CitiesList from "@/views/CitiesList.vue";
import City from "@/components/City.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/villes", component: CitiesList },
    { path: "/carte", component: CitiesList },
    //{ path: "/ville", component: City }
  ],
})

export default router
