import { useEffect, useState } from "react";
import { useAlert } from 'react-alert'

let isOnlyOnce = true

export const useGetApproximateLocation = (location) => {

    const [coordinates, setCoordinates] = useState({
        lat: '',
        lng: '',
    })

    const alert = useAlert()

    useEffect(() => {
        const getDataAsync = async () => {
            if (location.latitude.length === 0 && location.longitude.length === 0) {
                try {
                    const res = await fetch('http://ip-api.com/json')
                    const data = await res.json()
                    setCoordinates({
                        lat: data.lat.toFixed(2),
                        lng: data.lon.toFixed(2),
                    })
                } catch (err) {
                    console.log('error! ', err.message);
                    alert.error(err.message)
                }
            }
        }
        if (isOnlyOnce) {
            getDataAsync()
            isOnlyOnce = false
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [coordinates.lat, coordinates.lng]

}