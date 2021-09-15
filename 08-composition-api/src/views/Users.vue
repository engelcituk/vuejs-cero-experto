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
import { ref } from 'vue'
import axios from 'axios'
    export default {
        setup(){
            const users       = ref([])
            const isLoading   = ref(true)
            const currentPage = ref(1)
            const errorMsg    = ref('')

            const getUsers = async (page = 1 ) => {

                if( page <= 0) page = 1

                isLoading.value = true

                const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`)
                
                if( data.data.length > 0 ){
                    users.value = data.data
                    currentPage.value = page
                    errorMsg.value = ''
                } else if( currentPage.value > 0 ) {
                    errorMsg.value = 'No hay más usuarios'
                }
                
                isLoading.value = false
            }

            
            getUsers() // como no es necesario usar el created de las options api, simplemente se llama la funcion que hace la petición

            return {
                currentPage,
                errorMsg,
                isLoading,
                users,
                nextPage: ()=> getUsers( currentPage.value + 1),
                prevPage: ()=> getUsers( currentPage.value - 1),
            }

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