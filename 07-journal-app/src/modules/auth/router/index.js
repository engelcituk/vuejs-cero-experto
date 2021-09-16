export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "Auth" */ '@/modules/auth/layouts/AuthLayout'),
    children:[
        // {
        //     path:'',
        //     name:'no-entry',
        //     component: () => import(/* webpackChunkName: "noEntryView" */ '@/modules/daybook/views/NoEntrySelected'),
        // },
        // {
        //     path:':id',
        //     name:'entry',
        //     component: () => import(/* webpackChunkName: "noEntryView" */ '@/modules/daybook/views/EntryView'),
        //     props: ( route ) => {
        //         return {
        //             id: route.params.id
        //         }
        //     } 
        // }

    ]
}