import { useEffect, useState } from "react";
import { AlertContainer, useAlert } from 'react-alert'

export interface ICoordinatesDataFromUrl {
    latitude: string;
    longitude: string;
}

export interface IWeatherDataFromUrlCurrentWeather {
    weathercode: number;
    time: string;
    temperature: number;
}

export interface IWeatherDataFromUrlDaily {
    sunrise: string[];
    sunset: string[];
    apparent_temperature_min: number[];
    apparent_temperature_max: number[];
}

export interface IWeatherDataFromUrlHourly {
    time: string[];
    apparent_temperature: number[];
    pressure_msl: number[];
    windspeed_10m: number[];
    winddirection_10m: number[];
    precipitation: number[];
    precipitation_probability: number[];
    weathercode: number[];
    temperature_2m: number[];
}

export interface IWeatherDataFromUrlHourlyUnits {
    temperature_2m: string;
    pressure_msl: string;
    windspeed_10m: string;
    precipitation: string;
    precipitation_probability: string;
}

export interface IWeatherDataFromUrl {
    current_weather: IWeatherDataFromUrlCurrentWeather;
    daily: IWeatherDataFromUrlDaily;
    hourly: IWeatherDataFromUrlHourly;
    hourly_units: IWeatherDataFromUrlHourlyUnits;
}


export const useGetDataFromUrl = (url: string): [ICoordinatesDataFromUrl | IWeatherDataFromUrl | undefined, boolean] => {
    const [dataFromUrl, setDataFromUrl] = useState<ICoordinatesDataFromUrl | IWeatherDataFromUrl | undefined>()
    const [isSpinner, setIsSpinner] = useState<boolean>(false)

    const alert: AlertContainer = useAlert()

    useEffect(() => {
        const getDataAsync: () => Promise<void> = async () => {
            setIsSpinner(true)
            try {
                const res: Response = await fetch(url)
                const data: ICoordinatesDataFromUrl | IWeatherDataFromUrl = await res.json()
                setDataFromUrl(data)
            } catch (err: any) {
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