import { useEffect, useState } from "react"
import { getPhotosFromPicSum } from "./service"

const Carousel = () => {
    const [picsSumsList, setPicSumsList] = useState([])
    const [currentItemFromPicsSum, setCurrentItemFromPicsSum] = useState(0)

    const fetchDataFromPicSum = async() => {
        const data = await getPhotosFromPicSum()
        console.log(data, setCurrentItemFromPicsSum)
        setPicSumsList(data)
    }
    useEffect(()=> {
        fetchDataFromPicSum()
    }, [])
    return (
        <>
        <pre>{JSON.stringify(picsSumsList)}</pre>
        {picsSumsList.length > 0 ? <> 
            <button>Prev</button>
            <img 
                height={picsSumsList[currentItemFromPicsSum].height}
                width={picsSumsList[currentItemFromPicsSum].width}
                src={picsSumsList[currentItemFromPicsSum].download_url}
                alt={picsSumsList[currentItemFromPicsSum].author}
            />

            <h2>{picsSumsList[currentItemFromPicsSum].author}</h2>
            <button>Next</button>
        </>: 'No data found'}
        </>
    )
}

export default Carousel