import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Resume from './views/Resume.vue'
import Grok from './views/Grok.vue'
import Grokdoc from './views/Grokdoc.vue'
import Ccs from './views/Ccs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/grok',
      name: 'Grok',
      component: Grok
    },
    {
      path: '/ccs',
      name: 'Ccs',
      component: Ccs
    },
    {
      path: '/grokdoc',
      name: 'Grokdoc',
      component: Grokdoc
    }
  ]
})
