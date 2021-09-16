<template>
    <div>
        <h1>Custom slots</h1>
        <button @click="openModal">Abrir Modal</button>

        <modal
            v-if="isOpen"
            title="Hola mundo"
            @on-close="closeModal"
        >
            <!-- <h2>titulo del modal</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque mollitia ipsum perferendis optio at hic deserunt nobis eius laborum distinctio amet, placeat doloremque, animi ullam vitae praesentium eos dicta.</p>
            <button>salir</button> -->
            <template v-slot:header>
                <h2>titulo del modal</h2>
            </template>
            <template v-slot:body>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor eaque mollitia ipsum perferendis optio at hic deserunt nobis eius laborum distinctio ame </p>
            </template>
            <template v-slot:footer>
                <button @click="closeModal">salir</button>
            </template>
            <!-- directo -->
            <!-- <template v-slot:exposed="slotProps">
                <h1>{{slotProps.newTitle}}</h1>
            </template> -->
            <!-- con desestrucrturación -->
            <template v-slot:exposed="{newTitle}">
                <h1>{{newTitle}}</h1>
            </template>
        </modal>

    </div>
</template>

<script>
    import { ref } from 'vue'
    import Modal from './../components/Modal'

    export default {
        components:{
            Modal
        },
        setup(props, context){
            const isOpen = ref(false)
            return {
                isOpen,
                openModal: () => isOpen.value = true,
                closeModal: () => isOpen.value = false
            }
        }
    }
</script>

<style scoped>

</style>