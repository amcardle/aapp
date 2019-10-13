import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Export from "./views/Export.vue";
import Bayes from "./views/Bayes.vue";
import QuickMaths from "./views/QuickMaths.vue";
import Search from "./views/Search.vue";
import OpiateDoseConverter from "./components/OpiateDoseConverter.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/export",
      name: "export",
      component: Export
    },
    {
      path: "/bayes",
      name: "bayes",
      component: Bayes
    },
    {
      path: "/quickmaths",
      name: "quickmaths",
      component: QuickMaths
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/opiatedoseconverter",
      name: "opiatedoseconverter",
      component: OpiateDoseConverter
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
