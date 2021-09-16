<template>
    <div>
        <h1>Custom slots</h1>
        <button>Abrir Modal</button>
        <Modal/>
    </div>
</template>

<script>
    import Modal from './../components/Modal'
    export default {
        components:{
            Modal
        },
        setup(){

        }
    }
</script>

<style scoped>

</style>