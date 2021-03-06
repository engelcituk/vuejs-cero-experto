import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticadedGuard from './auth-guard'

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path:'/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children:[
            { 
                path: 'home', 
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')  
            },
            { 
                path: 'about', 
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage') 
            },
            { 
                path: 'pokemonid/:id', 
                name:'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props: ( route ) => {
                    const id = Number(route.params.id) 
                    return isNaN( id )  ? {id: 1} : {id}
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-about' }
            },
        ]
    },
    {
        path:'/dbz',
        name: 'dbz',
        beforeEnter:[isAuthenticadedGuard],
        component: () => import(/* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
        children:[
            { 
                path: 'characters', 
                name: 'dbz-characters',
                // beforeEnter:[isAuthenticadedGuard],
                component: () => import(/* webpackChunkName: "DBZCharactersPage" */ '@/modules/dbz/pages/Characters')  
            },
            { 
                path: 'about', 
                name: 'dbz-about',
                // beforeEnter:[isAuthenticadedGuard],
                component: () => import(/* webpackChunkName: "DBZAboutPage" */ '@/modules/dbz/pages/About') 
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' }
            },
        ]

    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound') 

    },

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

//Guard Global -S??ncrono
/*router.beforeEach((to, from, next ) => {
    console.log({to, from, next})
    const random = Math.random() * 100
    if( random > 50 ){
        console.log('Autenticado')
        next()
    } else {
        console.log(random, 'Bloqueado por beforeEach Guardian')
        next({name: 'pokemon-home'})
    }
})*/

/*
const canAccess = () => {
    return new Promise( resolve => {
        const random = Math.random() * 100
        if( random > 50 ){
            console.log('Autenticado - Can access')
            resolve( true )
        } else {
            console.log(random, 'Bloqueado por beforeEach Guardian - can Access')
            resolve(false)
            next({name: 'pokemon-home'})
        }
    }) 
}

router.beforeEach( async (to, from, next) => {
    const authorized = await canAccess()
    authorized ? next() : next({name: 'pokemon-home'})
})*/

export default router