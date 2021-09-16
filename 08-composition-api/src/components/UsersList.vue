<template>
    <ul>
        <!-- <li v-for="user in users" :key="user.id">
            <h4>Hola mundo</h4>
        </li> -->
        <slot
            v-for="user in users" :key="user.id"
            :user="user" 
        >
        <!-- :user="user"  es lo que expongo al componente padre-->

        </slot>
    </ul>
</template>

<script>
    export default {
        props:{
            users:{
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
ul{
    list-style: none;
}
</style>