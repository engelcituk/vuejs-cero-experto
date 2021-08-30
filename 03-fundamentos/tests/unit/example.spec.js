describe('Example Component', ()=> {
  test('Debe de ser mayor a 10', ()=>{
    //Arreglar
    let value = 9
    //estimulo
    value = value + 2

    //Obtener el resultado
    expect(value).toBeGreaterThan(10);
  })
})