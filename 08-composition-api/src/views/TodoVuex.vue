
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
        
        <button @click="openModal">Crear Tarea</button>

        <modal
            v-if="isOpen"
            @on-close="closeModal"
        >
            <template v-slot:task-form>
                <p>Agregar tarea: {{task}}</p>
                <form @submit.prevent="addTask">
                    <input 
                        type="text"
                        placeholder="Ingrese tarea"
                        v-model="task"
                    >
                </form>
                <br>
                <span>Presione enter para buscar</span>
            </template>
            
            <template v-slot:footer>
                <button @click="closeModal">salir</button>
            </template>
            
        </modal>
    </div>
</template>

<script>
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'
    import useTodos from '@/composables/useTodos'
    import useModal from '@/composables/useModal'

    import Modal from './../components/Modal'

    export default {
        components:{
            Modal
        },
        setup(){
           const { addTask, getTodosByTab, currentTab, pendings, task, toggleTodo} = useTodos('allTodos')
           const { isOpen, openModal, closeModal } = useModal()
           
           return {
               //useTodos
               currentTab,
               getTodosByTab,
               pendings,
               task,
               toggleTodo,
               addTask,
               //useModal
               isOpen,
               openModal,
               closeModal,

                  
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