<template>
    <div>
        <h2>Espere por favor</h2>
        <h2>Usuarios</h2>
        <h5>Error en la carga</h5>
        <div class="list">
            <ul>
                <li>
                    <h4>Nombre de la persona</h4>
                    <h6>granmail@mail.com</h6>
                </li>
            </ul>
        </div>
        <button>Atrás</button>
        <button>Adelante</button>
        <span>Página: 2</span>
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
                } else if( currentPage.value > 0 ) {
                    errorMsg.value = 'No hay más usuarios'
                }
            }

            
            getUsers() // como no es necesario usar el created de las options api, simplemente se llama la funcion que hace la petición

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