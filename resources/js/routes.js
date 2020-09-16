import Home from './components/Home';
//import About from './components/About';

let About = () => import(/* webpackChunkName: "components/About" */ './components/About');

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


    ]


}