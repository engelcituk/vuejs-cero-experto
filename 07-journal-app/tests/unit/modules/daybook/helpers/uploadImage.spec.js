
import uploadImage from '@/modules/daybook/helpers/uploadImage'
import axios from 'axios'

describe('Pruebas en el UploadImage', ()=> {
    
    test('Debe de cargar un∫ archivo y retornar el url',  async () => { 
        const { data } = await axios.get(`https://res.cloudinary.com/di3qzyeke/image/upload/v1606757933/sample.jpg`,{
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'foto.jpg' )
        const url = await uploadImage( file )
        // console.log(url)
        expect( typeof url ).toBe('string')
        
    })  
  
})