import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    redirect: '/'
  } ,
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/faq',
    name: 'FAQ',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "faq" */ '../views/FAQ.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: 'pages',
        component: () => import ('../components/PagesList'),
      },
      {
        path: 'challenges',
        component: () => import ('../components/ChallengesList'),
      },
      {
        path: 'users',
        component: () => import('../components/Table'),
        props: {type: 'user'}
      },
      {
        path: 'createPage',
        component: () => import('../components/PageEditor'),
        props: {mode: 'create'}
      },
      {
        path: 'createChallenge',
        component: () => import('../components/ChallengeEditor'),
        props: {mode: 'create'}
      }
  ]
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: () => import(/* webpackChunkName: "faq" */ '../views/Challenges.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "faq" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "faq" */ '../views/Profile.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import(/* webpackChunkName: "faq" */ '../views/Rules.vue')
  },
  {
    path: '/scoreboard',
    name: 'Scoreboard',
    component: () => import(/* webpackChunkName: "faq" */ '../views/Scoreboard.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
