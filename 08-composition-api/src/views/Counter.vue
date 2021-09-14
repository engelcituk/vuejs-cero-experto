<template>
    <div>
        <h1>Counter vue</h1>
        <h2>{{counter}}</h2>
        <button @click="decrease">-1</button>
        <button @click="increase">+1</button>

    </div>
</template>
<script>
    import useCounter from '@/composables/useCounter'
    export default {
        name:'Counter',
        props:{},
        emits:[],
        setup () {
          const { counter, decrease ,increase }   = useCounter(25)
          return { counter, decrease ,increase }
        }
    }
</script>

<style scoped>

</style>