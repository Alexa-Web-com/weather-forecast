import { ReactComponent as CloudDrizzleIcon } from "../../assets/icons/cloud-drizzle.svg"
import { ReactComponent as CloudFogIcon } from "../../assets/icons/cloud-fog.svg"
import { ReactComponent as CloudLightningRainIcon } from "../../assets/icons/cloud-lightning-rain.svg"
// import { ReactComponent as CloudLightningIcon } from "../../assets/icons/cloud-lightning.svg"
import { ReactComponent as CloudMoonIcon } from "../../assets/icons/cloud-moon.svg"
import { ReactComponent as CloudRainHeavyIcon } from "../../assets/icons/cloud-rain-heavy.svg"
import { ReactComponent as CloudRainIcon } from "../../assets/icons/cloud-rain.svg"
import { ReactComponent as CloudSleetIcon } from "../../assets/icons/cloud-sleet.svg"
import { ReactComponent as CloudSnowIcon } from "../../assets/icons/cloud-snow.svg"
import { ReactComponent as CloudSunIcon } from "../../assets/icons/cloud-sun.svg"
// import cloudSunIcon from "../../assets/icons/cloud-sun.svg"
// import { ReactComponent as LightningIcon } from "../../assets/icons/lightning.svg"
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg"
import { ReactComponent as SunIcon } from "../..//assets/icons/sun.svg"

import './WeatherIcon.css'

const WeatherIcon = (props) => {

    let weatherIcon = ''
    switch (props.weathercode) {
        case 0:
            weatherIcon = props.hour > 5 && props.hour < 19 ? SunIcon : MoonIcon
            break;
        case 1:
            weatherIcon = props.hour > 5 && props.hour < 19 ? CloudSunIcon : CloudMoonIcon
            break;
        case 2:
            weatherIcon = props.hour > 5 && props.hour < 19 ? CloudSunIcon : CloudMoonIcon
            break;
        case 3:
            weatherIcon = props.hour > 5 && props.hour < 19 ? CloudSunIcon : CloudMoonIcon
            break;
        case 45:
            weatherIcon = CloudFogIcon
            break;
        case 48:
            weatherIcon = CloudFogIcon
            break;
        case 51:
            weatherIcon = CloudDrizzleIcon
            break;
        case 53:
            weatherIcon = CloudDrizzleIcon
            break;
        case 55:
            weatherIcon = CloudDrizzleIcon
            break;
        case 56:
            weatherIcon = CloudDrizzleIcon
            break;
        case 57:
            weatherIcon = CloudDrizzleIcon
            break;
        case 61:
            weatherIcon = CloudRainIcon
            break;
        case 63:
            weatherIcon = CloudRainIcon
            break;
        case 65:
            weatherIcon = CloudRainIcon
            break;
        case 66:
            weatherIcon = CloudSleetIcon
            break;
        case 67:
            weatherIcon = CloudSleetIcon
            break;
        case 71:
            weatherIcon = CloudSnowIcon
            break;
        case 73:
            weatherIcon = CloudSnowIcon
            break;
        case 75:
            weatherIcon = CloudSnowIcon
            break;
        case 77:
            weatherIcon = CloudSnowIcon
            break;
        case 85:
            weatherIcon = CloudSnowIcon
            break;
        case 86:
            weatherIcon = CloudSnowIcon
            break;
        case 80:
            weatherIcon = CloudRainIcon
            break;
        case 81:
            weatherIcon = CloudRainHeavyIcon
            break;
        case 82:
            weatherIcon = CloudRainHeavyIcon
            break;
        case 95:
            weatherIcon = CloudLightningRainIcon
            break;
        case 96:
            weatherIcon = CloudLightningRainIcon
            break;
        case 99:
            weatherIcon = CloudLightningRainIcon
            break;
        default:
            break;
    }

    const WeatherIcon = weatherIcon

    return <WeatherIcon style={{ fill: props.fill ? props.fill : 'black', width: props.width ? props.width : '2rem' }} />
}

export default WeatherIcon