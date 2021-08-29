const app = Vue.createApp({
    template: `
        <h1>{{message}}</h1>
        <p>{{parrafo}}</p>
    `,
    data(){
        return {
            message: 'Hola mundo',
            parrafo: 'Desde app.js'
        }
    }
})

app.mount('#myApp')