
<template>
    <div>
        <h1>Thanos todo List</h1>
        <h4>Tareas: {{pendings.length}}</h4>
        <hr>
        <h4>Todas las tareas: {{all.length}}</h4>
        <h4>Completados: {{completed.length}}</h4>
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
                all: computed( () => store.getters['allTodos']),
                completed: computed( () => store.getters['completedTodos']),
            }
        }
    }
</script>

<style  scoped>

</style>