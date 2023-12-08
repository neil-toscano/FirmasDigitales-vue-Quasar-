import { useLoginStore } from '../stores/login.js'
const routes = [
  {
    path: '/',
    component: () => import('layouts/home/Home.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'home', name: "home", component: () => import('pages/HomePage.vue') },
    ]
  },
  {
    path: '/oneloop',
    component: () => import('layouts/LoginLayout.vue'),
    beforeEnter: (to, from ) => {
      const { initialState } = useLoginStore();
      if(initialState.status === 'authenticated' && to.name === 'login') {
        return { name: 'contrato' }
      }
      
    },
    children: [
      { path: 'login', name: "login", component: () => import('pages/loginPage.vue')},
      { path: 'registrarse', name: "registrarse", component: () => import('pages/createAccountPage.vue')},
    ]

  },
  {
    path: '/contrato',
    component: () => import('layouts/contrato/ContratoLayout.vue'),
    beforeEnter: async(to, from, next ) => {
      // const { initialState } = useLoginStore();
      // if(initialState.status !== 'authenticated') {
      //   next({ name: 'login' });
      // }
      // else{
      //   next();
      // }
      const { initializeAuth } = useLoginStore();
      const { ok } = await initializeAuth();
      if(ok){
        next();
      }
      else{
        next({name:'login'});
      }
      
    },
    children: [
      { path: '', name: "contrato", component: () => import('pages/firma/contratoPage.vue') },
      
    ],

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
