import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import PatientView from './views/PatientView.vue'
import PatientList from './views/PatientList.vue';
import ExerciseList from './views/ExerciseList.vue';
import ExerciseView from './views/ExerciseView.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/patients',
      name: 'patients',
      component: PatientList,
    },
    {
      path: '/patient/:id',
      name: 'patient',
      component: PatientView,
      props: true
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: ExerciseList,
    },
    {
      path: '/exercise/:id',
      name: 'exercise',
      component: ExerciseView,
      props: true
    },
  ]
})