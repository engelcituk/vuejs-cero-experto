
<template>
    <div>
        <h1>Thanos todo List</h1>
        <h4>Tareas: {{pendings.length}}</h4>
        <hr>
        <!-- <h4>Todas las tareas: {{allTodos.length}}</h4>
        <h4>Completados: {{completed.length}}</h4> -->
        <button class="active">Todos</button>
        <button>Pendientes</button>
        <button>Completados</button>

        <div class="list-todo">
            <ul>
                <li :class="{'completed': todo.completed }" v-for="todo in allTodos" :key="todo.id">
                    {{todo.text}}
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    export default {
        setup(){
            const store = useStore()
            
            return {
                pendings: computed( () => store.getters['penddingTodos']),
                allTodos: computed( () => store.getters['allTodos']),
                completed: computed( () => store.getters['completedTodos']),
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