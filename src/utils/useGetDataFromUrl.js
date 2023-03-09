import { useEffect, useState } from "react"

export const useGetDataFromUrl = (url, lat, lng) => {

    const [dataFromUrl, setDataFromUrl] = useState()
    const [isSpinner, setIsSpinner] = useState(false)

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


    return [dataFromUrl, isSpinner]
}