import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// Create a routes array.
const routes: Array<RouteRecordRaw> = [
  // Index route:
  {
    path: '/',
    name: 'index',
    meta: { requiresAuth: true }, // only authenticate user can enter to account
    component: () => import('__/views/Account.vue'),
  },
  // Account routes:
  {
    path: '/account/activate',
    name: 'account-activate',
    meta: { requiresAuth: false },
    props: (route) => ({ code: route.query.code }), // ?code=<CODE>
    component: () => import('__/views/AccountActivate.vue'),
  },
  // Login/Logout & Register routes:
  {
    path: '/login',
    name: 'login',
    meta: { requiresAuth: false, transition: 'fade' },
    component: () => import('__/views/UserLogin.vue'),
  },
  {
    path: '/logout',
    name: 'logout',
    meta: { requiresAuth: false, transition: 'fade' },
    component: () => import('__/views/UserLogout.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { requiresAuth: false, transition: 'fade' },
    component: () => import('__/views/UserRegister.vue'),
  },
  // Password reset routes:
  {
    path: '/password/reset',
    name: 'password-reset',
    meta: { requiresAuth: false, transition: 'fade' },
    component: () => import('__/views/PasswordReset.vue'),
  },
  // Information routes:
  {
    path: '/get-started',
    name: 'get-started',
    component: () => import('__/views/GetStarted.vue'),
  },
  // Project routes:
  {
    path: '/projects',
    name: 'projects',
    meta: { requiresAuth: false },
    component: () => import('__/views/Projects.vue'),
  },
  {
    path: '/project/:id',
    name: 'project-details',
    props: true,
    meta: { requiresAuth: false },
    component: () => import('__/views/Project.vue'),
  },
  // Task routes:
  {
    path: '/task/:id',
    name: 'task-details',
    props: true,
    meta: { requiresAuth: true },
    component: () => import('__/views/Task.vue'),
  },
  {
    path: '/task/:id/answers',
    name: 'task-answers',
    props: true,
    meta: { requiresAuth: true },
    component: () => import('__/views/Answers.vue'),
  },
  // Answer routes:
  {
    path: '/answer/:id',
    name: 'answer-details',
    props: true,
    meta: { requiresAuth: true },
    component: () => import('__/views/Answer.vue'),
  },
  // User routes:
  {
    path: '/user/:id',
    name: 'user-details',
    props: true,
    meta: { requiresAuth: true },
    component: () => import('__/views/User.vue'),
  },
  // Not found route:
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    meta: { requiresAuth: false },
    component: () => import('__/views/errors/NotFound.vue'),
  },
]

// Create the router instance.
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
