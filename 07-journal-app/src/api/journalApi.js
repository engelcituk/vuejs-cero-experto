
import axios from 'axios'

const journalApi = axios.create({
    baseURL: `https://crud-vue-13645.firebaseio.com`
})

console.log(process.env.NODE_ENV)

export default journalApi