const app = Vue.createApp({
    // template: `
    //     <h1>{{message}}</h1>
    //     <p>{{parrafo}}</p>
    // `,
    data(){
        return {
            quote: 'Soy Batman',
            author: 'Desde app.js'
        }
    },
    methods:{
        changeQuote(){
            console.log('hola mundo de nuevo')
            this.author = 'Nuevo autor'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')