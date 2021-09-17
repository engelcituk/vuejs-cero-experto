
import axios from 'axios'

const journalApi = axios.create({
    baseURL: `https://crud-vue-13645.firebaseio.com`
})

//intercepetor para establecer credenciales, autorizaciones.. etc
journalApi.interceptors.request.use( (config) => {
    config.params = {
        auth: localStorage.getItem('idToken')
    }
    return config
})
// console.log(process.env.NODE_ENV)

export default journalApi