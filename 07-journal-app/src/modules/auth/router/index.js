export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "Auth" */ '@/modules/auth/layouts/AuthLayout'),
    children:[
        {
            path:'',
            name:'login',
            component: () => import(/* webpackChunkName: "LoginView" */ '@/modules/auth/views/Login'),
        },
        {
            path:'register',
            name:'register',
            component: () => import(/* webpackChunkName: "RegisterView" */ '@/modules/auth/views/Register'),
        }    
        // }

    ]
}