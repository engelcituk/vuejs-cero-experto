<template>
  <div class="home">
    <h1>Reactive vs ref</h1>
    <h3>{{iroman}}</h3>
    <h3>{{hulk}}</h3>
    <button @click="changeIroman">Cambiar iroman</button>
    <button @click="changeHulk">Cambiar hulk</button>
    <h3>Iroman is alive: {{iromanIsAlive}} </h3>
    <h3>Hulk is alive: {{hulkIsAlive}} </h3>

    <button @click="changeStatus">Cambiar estado</button>    
  </div>
</template>

<script>
// @ is an alias to /src

import { reactive, ref } from 'vue'

export default {
name: 'Home',
  setup () {
    const iroman = ref({name:'tony', age: 50}) //este si admite cambios para primitivos, como String, Boolean,  y requiere ponerle value al cambiar
    const hulk = reactive({name:'Bruce', age: 50}) //reactive solo funciona con objetos, se cambia directo como ub objeto normal

    const iromanIsAlive = reactive(false) // no se puede cambiar porque es una constante reactiva
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
      //iromanIsAlive = !iromanIsAlive // no se puede cambiar, porque en un principio se definió como reactive, por lo que es de solo lectura
    }

    return {
      iroman,
      hulk,
      iromanIsAlive,
      hulkIsAlive,
      changeStatus, //método
      changeIroman: () => {
        iroman.value.name = 'Tony Stark' 
        iroman.value.age = 55 

      },
      changeHulk: () => {
        hulk.name = 'Bruce banner' 
        hulk.age = 52
      }
    }
  }
}

</script>
