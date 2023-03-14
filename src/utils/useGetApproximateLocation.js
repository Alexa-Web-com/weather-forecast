import { useEffect, useState } from "react";

export const useGetApproximateLocation = (location) => {


    const [lat, setLat] = useState()
    const [lng, setLng] = useState()

    useEffect(() => {
        if (location.latitude.length === 0 && location.longitude.length === 0) {
            fetch('http://ip-api.com/json')
                .then(res => res.json())
                .then(response => {
                    setLat(response.lat.toFixed(2))
                    setLng(response.lon.toFixed(2))
                })
                .catch((data, status) => {
                    console.log('Request failed');
                })
        } else {
            setLat(location.latitude)
            setLng(location.longitude)
        }
    }, [])

    return [lat, lng]

}