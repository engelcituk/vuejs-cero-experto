
import axios from 'axios'

const journalApi = axios.create({
    baseURL: `https://crud-vue-13645.firebaseio.com`
})

export default journalApi