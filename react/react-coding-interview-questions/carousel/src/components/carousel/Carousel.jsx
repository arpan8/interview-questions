import { useEffect, useState } from "react"
import { getPhotosFromPicSum } from "./service"
import { BallTriangle } from 'react-loader-spinner'
const Carousel = () => {
    const [picsSumsList, setPicSumsList] = useState([])
    const [currentItemFromPicsSum, setCurrentItemFromPicsSum] = useState(0)

    const fetchDataFromPicSum = async () => {
        const data = await getPhotosFromPicSum()
        setPicSumsList(data)
    }

    const handlePrev = () => {
        if (currentItemFromPicsSum === 0) {
            setCurrentItemFromPicsSum(picsSumsList.length - 1)
        } else {
            setCurrentItemFromPicsSum((cur) => cur - 1)
        }
    }

    const handleNext = () => {
        if (currentItemFromPicsSum === picsSumsList.length - 1) {
            setCurrentItemFromPicsSum(0)
        } else {
            setCurrentItemFromPicsSum((cur) => cur + 1)
        }
    }
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext()
        }, 2000)
        return () => clearInterval(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentItemFromPicsSum])

    useEffect(() => {
        fetchDataFromPicSum()
    }, [])
    return (
        <>
            {/* {currentItemFromPicsSum} */}
            {picsSumsList.length > 0 ? <>
                <button onClick={handlePrev}>Prev</button>
                <div>
                    {picsSumsList[currentItemFromPicsSum]?.download_url ?
                        <>
                            <h2>
                                <a href={picsSumsList[currentItemFromPicsSum]?.url} target="_blank">Check here</a>
                            </h2>

                            <div>
                                <img
                                    // height={+picsSumsList[currentItemFromPicsSum].height / 10} // height is so big to reduce that divide by 10 and only whole number is taken
                                    // width={+picsSumsList[currentItemFromPicsSum].width / 10} // weight is so big to reduce that divide by 10 and only whole number is taken
                                    height={500}
                                    width={500}
                                    src={picsSumsList[currentItemFromPicsSum].download_url}
                                    alt={picsSumsList[currentItemFromPicsSum].author}
                                />
                            </div>

                        </>
                        : 'No image found'}

                </div>
                <h2>{picsSumsList[currentItemFromPicsSum].author}</h2>
                <button onClick={handleNext}>Next</button>
            </> : <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />}
        </>
    )
}

export default Carousel