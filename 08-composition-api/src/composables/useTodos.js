import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = ( initialValue = 'allTodos' ) => {

    const store = useStore()
    const currentTab = ref(initialValue)

    return {
        //propiedades reactivas
        currentTab,
        //Getters
        allTodos: computed( () => store.getters['allTodos']),
        completed: computed( () => store.getters['completedTodos']),
        getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value)),//se requiere indicar el value en nuestro script, pero en el template no es necesario
        pendings: computed( () => store.getters['penddingTodos']),
        //Methods
        toggleTodo: ( id ) => store.commit('toggleTodo', id)
    }
}

export default useTodos