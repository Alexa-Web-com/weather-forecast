import './MyIcons.css'
import { ReactComponent as CloudDrizzleIcon } from "../assets/icons/cloud-drizzle.svg"
import { ReactComponent as CloudFogIcon } from "../assets/icons/cloud-fog.svg"
import { ReactComponent as CloudLightningRainIcon } from "../assets/icons/cloud-lightning-rain.svg"
import { ReactComponent as CloudLightningIcon } from "../assets/icons/cloud-lightning.svg"
import { ReactComponent as CloudMoonIcon } from "../assets/icons/cloud-moon.svg"
import { ReactComponent as CloudRainHeavyIcon } from "../assets/icons/cloud-rain-heavy.svg"
import { ReactComponent as CloudRainIcon } from "../assets/icons/cloud-rain.svg"
import { ReactComponent as CloudSleetIcon } from "../assets/icons/cloud-sleet.svg"
import { ReactComponent as CloudSnowIcon } from "../assets/icons/cloud-snow.svg"
import { ReactComponent as CloudSunIcon } from "../assets/icons/cloud-sun.svg"
import { ReactComponent as LightningIcon } from "../assets/icons/lightning.svg"
import { ReactComponent as MoonIcon } from "../assets/icons/moon.svg"
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg"

const MyIcons = () => {
    return (
        <figure
        // style={{ fill: 'blue', width: "250px" }}
        >
            {/* <img src={icon} alt='icon' /> */}
            <CloudDrizzleIcon />
            <CloudFogIcon />
            <CloudLightningRainIcon />
            <CloudLightningIcon />
            <CloudMoonIcon />
            <CloudRainHeavyIcon />
            <CloudRainIcon />
            <CloudSleetIcon />
            <CloudSnowIcon />
            <CloudSunIcon />
            <LightningIcon />
            <MoonIcon />
            <SunIcon />
        </figure>
    )
}

export default MyIcons