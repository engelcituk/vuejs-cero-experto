export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "dayBook" */ '@/modules/daybook/layouts/DayBookLayout'),
    children:[
        {
            path:'',
            name:'no-entry',
            component: () => import(/* webpackChunkName: "noEntryView" */ '@/modules/daybook/views/NoEntrySelected'),
        }

    ]
}