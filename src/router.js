import Vue from "vue";
import Router from "vue-router";
import List from "./views/List.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "list",
      component: List
    },
    {
      path: "/item/:id",
      name: "item",

      component: () => import("./views/Item.vue")
    },
    {
      path: "/cart",
      name: "cart",

      component: () => import("./views/Cart.vue")
    },
    {
      path: "/checkout",
      name: "checkout",

      component: () => import("./views/CheckOut.vue")
    },
    {
      path: "/thankyou",
      name: "thankyou",

      component: () => import("./views/ThankYou.vue")
    }
  ]
});
