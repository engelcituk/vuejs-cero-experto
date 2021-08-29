<template>
    <h2>Counter</h2>
    <p>{{counter}}<sup>2</sup>={{squareCounter}}</p>
    <p>{{counter}}<sup>2</sup>={{squareCounter}}</p>
    <p>{{counter}}<sup>2</sup>={{squareCounter}}</p>
    <p>{{counter}}<sup>2</sup>={{squareCounter}}</p>
    <p>{{counter}}<sup>2</sup>={{squareCounter}}</p>

</template>

<script>
    export default {
        name: 'Counter-Component',
        data(){
            return {
                counter: 5
            }
        },
        computed:{
            squareCounter(){
                return this.counter * this.counter
            }
        },
        methods:{
            getSquareValue(){
                return this.counter * this.counter
            }
        }
    }
</script>

<style >

</style>