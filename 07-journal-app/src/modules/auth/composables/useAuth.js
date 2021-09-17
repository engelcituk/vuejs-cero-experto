
// import { ref } from 'vue'
// import { useStore } from 'vuex'

const useAuth = () => {

    // const store = useStore()
    
    const createUser = async ( user ) => {
        console.log(user.value)
    }
    return {
        createUser
    }
}

export default useAuth