import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Arouter from '../components/router.vue'
import All from '../views/All.vue'
Vue.use(VueRouter)

const routes = [

    {
        path: '/All',
        component: All,
        meta: {
            roles: ["one"]
        },
        beforeEnter: (to, from, next) => {
            // let x = to.meta.roles;
            if (localStorage.getItem("token")) {
                next()
            } else {
                next('/about');

            }
        },

    },
    {
        path: '/All/:id',
        component: All,
        meta: {
            roles: ["one"]
        },
        beforeEnter: (to, from, next) => {
            // let x = to.meta.roles;
            if (localStorage.getItem("token")) {
                next()
            } else {
                next('/about');

            }
        },

    },
    {
        path: '/Home',
        component: Home,
        meta: {
            roles: ["one"]
        },
        beforeEnter: (to, from, next) => {

            if (localStorage.getItem("token")) {
                next()
            } else {
                next('/about');
            }
        },
        children: [{
            path: '/',
            name: 'Arouter',
            component: Arouter,
        }]
    },
    {

        path: '/about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),

    },

]

const router = new VueRouter({
        routes,
        mode: 'history',
        linkActiveClass: 'allActive'

    })
    /*
    const guard = function(to, from, next) {
        let x = localStorage.getItem('token');
        let x2 = localStorage.getItem('role');
        let y = to.meta.roles

        if (x !== null && x2 == y) {
            next()

        } else {
            next('/about')

        }

    }
    */
export default router