import React from 'react'
import cloudDrizzleIcon from "../../assets/icons/cloud-drizzle.svg"
import cloudFogIcon from "../../assets/icons/cloud-fog.svg"
import cloudLightningRainIcon from "../../assets/icons/cloud-lightning-rain.svg"
import cloudMoonIcon from "../../assets/icons/cloud-moon.svg"
import cloudRainHeavyIcon from "../../assets/icons/cloud-rain-heavy.svg"
import cloudRainIcon from "../../assets/icons/cloud-rain.svg"
import cloudSleetIcon from "../../assets/icons/cloud-sleet.svg"
import cloudSnowIcon from "../../assets/icons/cloud-snow.svg"
//@ts-ignore
import { ReactComponent as CloudSunIcon } from "../../assets/icons/cloud-sun.svg"
import cloudSunIcon from "../../assets/icons/cloud-sun.svg"
//@ts-ignore
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg"
//@ts-ignore
import { ReactComponent as SunIcon } from "../..//assets/icons/sun.svg"

import './WeatherIcon.css'

interface IWeatherIcon {
    weathercode: number;
    hour: number;
    fill?: string;
    width?: string;
}

const WeatherIcon = (props: IWeatherIcon): JSX.Element => {
    let weatherIcon: string | React.FC<React.SVGProps<SVGSVGElement>> = ''

    switch (props.weathercode) {
        case 0:
            weatherIcon = props.hour > 5 && props.hour < 19 ? SunIcon : MoonIcon
            break;
        case 1:
            weatherIcon = props.hour > 5 && props.hour < 19 ? cloudSunIcon : cloudMoonIcon
            break;
        case 2:
            weatherIcon = props.hour > 5 && props.hour < 19 ? cloudSunIcon : cloudMoonIcon
            break;
        case 3:
            weatherIcon = props.hour > 5 && props.hour < 19 ? cloudSunIcon : cloudMoonIcon
            break;
        case 45:
            weatherIcon = cloudFogIcon
            break;
        case 48:
            weatherIcon = cloudFogIcon
            break;
        case 51:
            weatherIcon = cloudDrizzleIcon
            break;
        case 53:
            weatherIcon = cloudDrizzleIcon
            break;
        case 55:
            weatherIcon = cloudDrizzleIcon
            break;
        case 56:
            weatherIcon = cloudDrizzleIcon
            break;
        case 57:
            weatherIcon = cloudDrizzleIcon
            break;
        case 61:
            weatherIcon = cloudRainIcon
            break;
        case 63:
            weatherIcon = cloudRainIcon
            break;
        case 65:
            weatherIcon = cloudRainIcon
            break;
        case 66:
            weatherIcon = cloudSleetIcon
            break;
        case 67:
            weatherIcon = cloudSleetIcon
            break;
        case 71:
            weatherIcon = cloudSnowIcon
            break;
        case 73:
            weatherIcon = cloudSnowIcon
            break;
        case 75:
            weatherIcon = cloudSnowIcon
            break;
        case 77:
            weatherIcon = cloudSnowIcon
            break;
        case 85:
            weatherIcon = cloudSnowIcon
            break;
        case 86:
            weatherIcon = cloudSnowIcon
            break;
        case 80:
            weatherIcon = cloudRainIcon
            break;
        case 81:
            weatherIcon = cloudRainHeavyIcon
            break;
        case 82:
            weatherIcon = cloudRainHeavyIcon
            break;
        case 95:
            weatherIcon = cloudLightningRainIcon
            break;
        case 96:
            weatherIcon = cloudLightningRainIcon
            break;
        case 99:
            weatherIcon = cloudLightningRainIcon
            break;
        default:
            break;
    }

    return <img style={{ fill: props.fill ? props.fill : 'black', width: props.width ? props.width : '2rem' }} src={weatherIcon as string} alt=''></img>

    // <WeatherIconComp style={{ fill: props.fill ? props.fill : 'black', width: props.width ? props.width : '2rem' }} />
}

export default WeatherIcon