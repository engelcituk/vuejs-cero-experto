
import cloudinary from 'cloudinary'
import uploadImage from '@/modules/daybook/helpers/uploadImage'
import axios from 'axios'

cloudinary.config({
    cloud_name: 'di3qzyeke',
    api_key: '786616524812658',
    api_secret:'Ow80aa6Bv0VsjGgbsuHfEE1VVYQ'
})

describe('Pruebas en el UploadImage', ()=> {
    
    test('Debe de cargar un archivo y retornar el url',  async (done) => { 
        const { data } = await axios.get(`https://res.cloudinary.com/di3qzyeke/image/upload/v1606757933/sample.jpg`,{
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'foto.jpg' )
        const url = await uploadImage( file )
        // console.log(url)
        expect( typeof url ).toBe('string')

        // tomar el id
        const segments = url.split('/')
        const imageId = segments[segments.length -1 ].replace('.jpg','')
        cloudinary.v2.api.delete_resources(imageId, {},()=>{
            done()
        })
        console.log(imageId)
        
    })  
  
})