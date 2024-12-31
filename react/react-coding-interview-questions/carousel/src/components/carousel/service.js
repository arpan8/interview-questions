import axios from "axios"

const getPhotosFromPicSum = async()=> {
    try {
        const response = await axios.get('https://picsum.photos/v2/list')
        const { data } = response
        return data
    } catch (error) {
        console.log(error)
    }
}

export {
    getPhotosFromPicSum
}