import { useEffect, useState, useContext } from "react"
import { ContextData } from "../context/ContextData"
import { useAlert } from 'react-alert'

export const useGetDataFromUrl = (url, lat, lng) => {

    const [dataFromUrl, setDataFromUrl] = useState()
    const [isSpinner, setIsSpinner] = useState(false)

    const [, setData] = useContext(ContextData)

    const alert = useAlert()

    useEffect(() => {
        const getDataAsync = async () => {
            setIsSpinner(true)

            try {
                // const res = await fetch('https://jw.org')
                const res = await fetch(url)
                const data = await res.json()
                setDataFromUrl(data)
            } catch (err) {
                console.log('error! ', err.message);
                alert.error(err.message)
            }
            finally {
                setIsSpinner(false)
            }
        }

        if (lat.length > 0 && lng.length > 0) {
            getDataAsync()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])


    useEffect(() => {
        setData(dataFromUrl)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataFromUrl])

    return [dataFromUrl, isSpinner]
}