
<template>
        <button class="btn btn-primary"  @click="$emit('save-entry')">
            <i :class="iconFab"></i>
        </button>
</template>

<script>
    export default {
        props:{
            icon:{
                type: String,
                default: 'fa-plus',
                // required: true
            }
        },
        computed:{
            iconFab(){
                return `fa fa-2x ${this.icon}`
            }
        },
        methods:{
            saveEntry(){
                console.log('save entry recibido')
            }
        }
    }
</script>

<style lang="scss" scoped>
    button{
        border-radius: 100%;
        bottom: 20px;
        height: 60px;
        position: fixed;
        right: 20px;
        width: 60px;
    }
    // ordernar las propiedades con command + shitf + p y luego buscar sort lines ascending y elegirla
</style>