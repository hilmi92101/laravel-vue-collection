import Home from './components/Home';
//import About from './components/About';
let About = () => import(/* webpackChunkName: "components/About" */ './components/About');
let Sidenav = () => import(/* webpackChunkName: "components/Sidenav" */ './components/Sidenav');
let BootstrapVue = () => import(/* webpackChunkName: "components/BootstrapVue" */ './components/BootstrapVue');




export default {


    mode: 'history',
    routes: [

        {
            path:'/',
            component: Home,
            name:'home'
        },


        {
            path:'/about',
            component: About,
            name:'about'
        },

        {
            path:'/bootstrap-vue',
            component: BootstrapVue,
            name:'bootstrapvue'
        },

        {
            path:'/sidenav',
            component: Sidenav,
            name:'sidenav'
        },


    ]


}