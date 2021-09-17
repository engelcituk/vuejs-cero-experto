
import axios from 'axios'

const authApi = axios.create({
    baseURL: `https://identitytoolkit.googleapis.com/v1/accounts`,
    params:{
        key: 'AIzaSyBW8oQFVE5x1KJJX4xBbfN7qfrcdk5-v1A',
    }
})

// console.log(process.env.NODE_ENV)

export default authApi