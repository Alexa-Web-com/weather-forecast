import { useEffect, useState } from "react";
import { useAlert } from 'react-alert'


export const useGetDataFromUrl = (url) => {
    const [dataFromUrl, setDataFromUrl] = useState()
    const [isSpinner, setIsSpinner] = useState(false)

    const alert = useAlert()

    useEffect(() => {

        const getDataAsync = async () => {
            setIsSpinner(true)
            try {
                const res = await fetch(url)
                const data = await res.json()
                setDataFromUrl(data)
            } catch (err) {
                console.log('error! ', err.message);
                alert.error(err.message)
            } finally {
                setIsSpinner(false)
            }
        }
        if (url) {
            getDataAsync()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return [dataFromUrl, isSpinner]

}