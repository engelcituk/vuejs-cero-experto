
console.log('Inicio!!')

//promesa , resolve si todo sale bien, reject si sale algun error
//resolve y reject son funciones
// el then es para indicar algo cuando se hace correctamente la promesa y luego haz lo que sigue
//then recibe un argumento que es opcional, que es todo lo que la promesa resuelva
//.catch se ocupa para atrapar el error en una promesa
new Promise( (resolve, reject) => {
    console.log('cuerpo de la promesa')
    // resolve('Promesa resuelta')
    reject('Promesa resuelta con error')

}).then( (msg)=> console.log(msg) ) //esta linea se puede reducir así .then(console.log) debido a que por referencia js sabe que solo es un argumento
.catch( err => console.log(err)) //esta linea se puede reducir así .catch(console.log)

console.log('fin!!')







