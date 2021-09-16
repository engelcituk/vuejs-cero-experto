
<template>
    <div>
        <h1>Thanos todo List</h1>
        <h4>Tareas pendientes: {{pendings.length}}</h4>
        <hr>
        <!-- <h4>Todas las tareas: {{allTodos.length}}</h4>
        <h4>Completados: {{completed.length}}</h4> -->
        <button
            :class="{'active': currentTab === 'allTodos'}"
            @click="currentTab = 'allTodos'"
        >Todos</button>
        <button
            :class="{'active': currentTab === 'pendings'}"
            @click="currentTab='pendings'"
        >Completados</button>
        <button
            :class="{'active': currentTab === 'completed'}"
            @click="currentTab = 'completed'"
        >Pendientes</button>

        <div class="list-todo">
            <ul>
                <li
                    :class="{'completed': todo.completed }"
                    v-for="todo in getTodosByTab" :key="todo.id"
                    @dblclick="toggleTodo(todo.id)"
                >
                    {{todo.text}}
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'

    export default {
        setup(){
            const store = useStore()
            const currentTab = ref('allTodos')

            

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
    }
</script>

<style scoped>
.list-todo{
    display: flex;
    justify-content: center;
    text-align: center;
}
ul{
    width: 300px;
    text-align: left;
}
li {
    cursor: pointer;
}
.active {
    background-color: #2c3e50;
    color: white;
}
.completed{
    text-decoration: line-through;
}
</style>