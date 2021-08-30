describe('Example Component', ()=> {
  test('Debe de ser mayor a 10', ()=>{
    //Arreglar
    let value = 5
    //estimulo
    value = value + 2

    //Obtener el resultado
    if(value > 10 ){

    } else {
      throw `${value} no es mayor a 10`
    }
  })
})