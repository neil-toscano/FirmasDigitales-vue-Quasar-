import { useLoginStore } from "../stores/login.js";
const routes = [
  {
    path: "/",
    component: () => import("../layouts/home/Home.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../pages/homePage.vue"),
      },
    ],
  },
  {
    path: "/oneloop",
    component: () => import("layouts/LoginLayout.vue"),
    beforeEnter: (to, from) => {
      const { initialState } = useLoginStore();
      console.log(initialState, "initial");
      if (initialState.status === "authenticated" && to.name === "login") {
        return { name: "plantilla" };
      }
    },
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("pages/loginPage.vue"),
      },
      {
        path: "registrarse",
        name: "registrarse",
        component: () => import("pages/createAccountPage.vue"),
      },
    ],
  },
  {
    path: "/contrato",
    component: () => import("layouts/contrato/ContratoLayout.vue"),
    beforeEnter: async (to, from, next) => {
      const { initializeAuth } = useLoginStore();
      const { ok } = await initializeAuth();
      if (ok) {
        next();
      } else {
        next({ name: "login" });
      }
    },
    children: [
      {
        path: "contrato",
        name: "contrato",
        component: () => import("pages/firma/contratoPage.vue"),
      },
      {
        path: "plantilla",
        name: "plantilla",
        component: () => import("pages/firma/plantillaPage.vue"),
      },
      {
        path: "froala",
        name: "froala",
        component: () => import("pages/firma/froalaPage.vue"),
      },
      {
        path: "editor/:id",
        name: "editor",
        component: () => import("pages/firma/editorPage.vue"),
      },
      {
        path: "firmar/:uid",
        name: "firmar",
        component: () => import("pages/firma/firmarPage.vue"),
      },
      {
        path: "canva",
        name: "canva",
        component: () => import("pages/firma/oneloopCanvaPage.vue"),
      },
      {
        path: "myshared",
        name: "myshared",
        component: () => import("pages/firma/mysharedPage.vue"),
      },
      {
        path: "payment",
        name: "payment",
        component: () => import("pages/firma/paymentPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
