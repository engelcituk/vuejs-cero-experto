<template>
    <div>
        <h1>Pokemon page</h1>
    </div>
</template>

<script>
    import { useRoute } from 'vue-router'
    export default {
        setup(){
            
            const route = useRoute()

            console.log(route.params)

        }
    }
</script>
