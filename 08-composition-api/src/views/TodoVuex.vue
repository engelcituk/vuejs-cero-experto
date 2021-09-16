
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
            :class="{'active': currentTab === 'completed'}"
            @click="currentTab = 'completed'"
        >Pendientes</button>
        <button
            :class="{'active': currentTab === 'pendings'}"
            @click="currentTab='pendings'"
        >Completados</button>

        <div class="list-todo">
            <ul>
                <li :class="{'completed': todo.completed }" v-for="todo in getTodosByTab" :key="todo.id">
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
                currentTab,

                allTodos: computed( () => store.getters['allTodos']),
                completed: computed( () => store.getters['completedTodos']),
                pendings: computed( () => store.getters['penddingTodos']),
                getTodosByTab: computed( () => store.getters['getTodosByTab'](currentTab.value)),    
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