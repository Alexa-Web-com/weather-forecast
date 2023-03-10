import { useEffect, useState } from "react";

export const useGetApproximateLocation = () => {

    const [lat, setLat] = useState()
    const [lng, setLng] = useState()

    useEffect(() => {



        fetch('http://ip-api.com/json')
            .then(res => res.json())
            .then(response => {
                console.log("Country: ", response);
                console.log("lat from reponse: ", response.lat);
                console.log("lon from reponse: ", response.lon);

                setLat(response.lat.toFixed(2))
                setLng(response.lon.toFixed(2))
            })
            .catch((data, status) => {
                console.log('Request failed');
            })

    }, [])

    return [lat, lng]


}