
import axios from 'axios'

const uploadImage = async ( file ) => {
    if( !file ) return

    try {
        const formData = new FormData()
        formData.append('upload_preset','vue-journal-img')
        formData.append('file', file)

        const url = `https://api.cloudinary.com/v1_1/di3qzyeke/image/upload`
        const resp = await axios.post(url, formData)
        const { data } = resp
        // console.log(data)
        return data.secure_url

    } catch (error) {
        console.error('Error al cargar la imagen, revisar logs', error)   
        return null
    }
}

export default uploadImage