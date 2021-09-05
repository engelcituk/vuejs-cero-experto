<template>
    <h1>Pokemon Page <span>#{{id}}</span></h1>
</template>

<script>
export default {
    props:{
        id:{
            type: Number,
            required: true
        },
        
    },
    created(){
        // const { id } = this.$route.params
        // this.id = id
        // console.log(this.$attrs)
    } ,
    data(){
        return {
            // id : null
        }
    }  
}
</script>
