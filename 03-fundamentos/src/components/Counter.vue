<template>
    <div>
        <h2>{{ customTitle }}</h2>
        <p data-test-id="counter" >{{counter}}</p>
        <p>{{counter}}<sup>2</sup>={{squareCounter}}</p>
        <div>
            <button @click="decrease">-1</button> 
            <button @click="increase">+1</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Counter-Component',
        props:{
            title: String,
            start: {
                type: Number,
                // required: true,
                default: 100,//para poner un valor por defecto
                validator(value){
                    return value > 0
                }
            },
        },
        data(){
            return {
                counter: this.start
            }
        },
        computed:{
            squareCounter(){
                return this.counter * this.counter
            },
            customTitle(){
                return this.title || 'Counter'
            }
        },
        methods:{
            getSquareValue(){
                return this.counter * this.counter
            },
            increase(){
                this.counter ++
            },
            decrease(){
                this.counter --
            }
        }
    }
</script>

<style >
    button{
        margin-inline-end: 1rem; 
        background-color: #64BB87;
        border: 1px solid white;
        color: white;
        border-radius: 5px;
        padding: 5px 15px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    button:hover{
        background-color: #5aa67b;        
        transition: 0.3s ease-in-out;
    }
</style>