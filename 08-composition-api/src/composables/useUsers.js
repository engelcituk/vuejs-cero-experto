import { ref } from 'vue'
import axios from 'axios'

const useUsers = ( page = 5) => {

    const users       = ref([])
    const isLoading   = ref(true)
    const currentPage = ref(page)
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

export default useUsers