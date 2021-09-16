
<template>
    <div>
        <h1>Thanos todo List</h1>
        <h4>Tareas: {{$store.state.todos.length}}</h4>
        {{pendings}}
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    export default {
        setup(){
            const store = useStore()
            
            return {
                pendings: computed( () => store.getters['penddingTodos'])
            }
        }
    }
</script>

<style  scoped>

</style>