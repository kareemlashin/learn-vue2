import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import Arouter from '../components/router.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: login,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("token")) {
                next('/Home')
            } else {
                next('/about');
                this.$router.push('/about')

            }
        },

    },
    {
        path: '/Home',
        name: 'Home',
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
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),

    },

]

const router = new VueRouter({
        routes,
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