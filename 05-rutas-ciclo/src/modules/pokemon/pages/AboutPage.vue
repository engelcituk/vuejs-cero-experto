<template>
    <div>
        <h1>About Page</h1>
        <hr>
        <h2>{{name}}</h2>
        <button @click="onChangeName">
            Cambiar Nombre
        </button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name: 'eCituk'
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        this.name = 'Juan Carlos'
        console.log('created')
        //Aquí podemos hacer las peticiones HTTP
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    },
    beforeUnmount(){
        console.log('beforeUnmount')
    },
    unmounted(){
        console.log('unmounted')
    },
    errorCaptured(){
        console.log('errorCaptured')
    },
    renderTracked(){
        console.log('renderTracked')
    },
    renderTriggered(){
        console.log('renderTriggered')
    },
    methods:{
        onChangeName(){
            console.log('se cambiará nombre')
            this.name = 'eCituk Caamal'
        }
    }
}
</script>
