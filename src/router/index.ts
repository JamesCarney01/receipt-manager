import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import CreateReceipt from "../views/CreateReceipt.vue";
import ViewReceipt from "../views/ViewReceipt.vue";
import Receipt from "../views/Receipt.vue";
import LoginRegister from "../views/LoginRegister.vue";

const routes = [
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/CreateReceipt",
    name: "CreateReceipt",
    component: CreateReceipt,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/ViewReceipt",
    name: "ViewReceipt",
    component: ViewReceipt,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Receipt/:id",
    name: "Receipt",
    component: Receipt,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/LoginRegister",
    name: "LoginRegister",
    component: LoginRegister,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(), // history: createWebHistory(process.env.BASE_URL)
  routes,
});

export default router;

/* 
Disabled until database created:
function cannot be used to verify global guard, 
stack overflow created 
*/

// global guard (if route changed, function is fired)
// router.beforeEach((to, from) => {
//   if (to.meta.requiresAuth && !auth.isLoggedIn()) {
//     // Check to see if user is authenticated...
//   }
//   return { name: "login" }; // User is not authenticated, redirect to the login page...
// });

// function isLoggedIn() {
//   /* once isLoggedIn is called,
//   we return the localStorage property with the .getItem() method;
//   This will return the key value that we pass or null if no value*/
//   return localStorage.getItem("email") !== null;
// }
