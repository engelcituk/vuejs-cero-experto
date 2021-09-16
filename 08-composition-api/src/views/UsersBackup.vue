<template>
    <div>
        <h2 v-if="isLoading">Espere por favor</h2>
        <h2 v-else>Usuarios</h2>
        <h5 v-if="errorMsg">{{errorMsg}}</h5>
        
        <div class="list" v-if="users.length">
            <ul>
                <li v-for="(user, index) in users" :key="index">
                    <h4>{{user.first_name}} {{user.last_name}}</h4>
                    <h6>{{user.email}}</h6>
                </li>
            </ul>
        </div>
        <button @click="prevPage">Atrás</button>
        <button @click="nextPage">Adelante</button>
        <span>Página: {{currentPage}}</span>
    </div>
</template>

<script>

import useUsers from '@/composables/useUsers'

    export default {
        name: 'Users',
        setup(){
            const { currentPage, errorMsg, isLoading, users, nextPage, prevPage } = useUsers()
            return { currentPage, errorMsg, isLoading, users, nextPage, prevPage } 
        }
    }
</script>

<style  scoped>
h2{
    text-align: center;
    width: 100%;
}

.list{
    display: flex;
    justify-content: center;
    text-align: center;
}

ul{
    width: 250px;
}

</style>