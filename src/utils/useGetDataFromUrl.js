import { useEffect, useState, useContext } from "react"
import { ContextData } from "../context/ContextData"

export const useGetDataFromUrl = (url, lat, lng) => {

    const [dataFromUrl, setDataFromUrl] = useState()
    const [isSpinner, setIsSpinner] = useState(false)

    const [, setData] = useContext(ContextData)

    useEffect(() => {
        const getDataAsync = async () => {
            setIsSpinner(true)
            try {
                const res = await fetch(url)
                const data = await res.json()
                setDataFromUrl(data)
            } catch (err) {
                console.log(err)
            }
            finally {
                setIsSpinner(false)
            }
        }

        if (lat.length > 0 && lng.length > 0) {
            getDataAsync()
        }
    }, [url])


    useEffect(() => {
        setData(dataFromUrl)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataFromUrl])

    return [dataFromUrl, isSpinner]
}