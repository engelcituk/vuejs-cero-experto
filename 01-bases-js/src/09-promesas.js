const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
]
// console.log('Inicio!!')

//promesa , resolve si todo sale bien, reject si sale algun error
//resolve y reject son funciones
// el then es para indicar algo cuando se hace correctamente la promesa y luego haz lo que sigue
//then recibe un argumento que es opcional, que es todo lo que la promesa resuelva
//.catch se ocupa para atrapar el error en una promesa

/*new Promise( (resolve, reject) => {
    console.log('cuerpo de la promesa')
    // resolve('Promesa resuelta')
    reject('Promesa resuelta con error')

}).then( (msg)=> console.log(msg) ) //esta linea se puede reducir así .then(console.log) debido a que por referencia js sabe que solo es un argumento
.catch( err => console.log(err)) //esta linea se puede reducir así .catch(console.log)

console.log('fin!!')*/

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = heroes.find( hero => hero.id === id )
            if(hero){
                resolve(hero)
            } else {
                reject('Hero not found')
            }
        }, 1000)
    })
}



getHeroByIdAsync(12). //ejecuta el cuerpo de la promesa con---> getHeroByIdAsync(1).
    then( hero  => console.log(hero) ) // luego para ver lo que se resolvió se pone---> .then( hero  => console.log(hero))
        .catch( err => console.log(err)) //si hubo falla se ejecuta en el catch y se ejecuta lo que trajo






