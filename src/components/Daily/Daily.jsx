import './Daily.css'
import sunriseIcon from '../../assets/icons/sunrise.svg'
import sunsetIcon from '../../assets/icons/sunset.svg'

import { weathercode } from '../../utils/weathercode'
import { DICT } from '../../utils/dict'
import { getHourMinutes, getHour } from '../../utils/getDateTime'
import { useEffect, useState } from 'react'

import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { getDirectionArr } from '../../utils/getDirectionArr'

const Daily = (props) => {
    const [timeIndex, setTimeIndex] = useState()

    useEffect(() => {
        if (props.data?.hourly.time) {
            console.log('data: ', props.data);

            const currentTime = new Date()
            const timeIndex = props.data.hourly.time.findIndex(item => item > currentTime.toISOString())

            setTimeIndex(timeIndex)
        }
    }, [props.data])

    return (
        <div className='daily' >
            {props.data &&
                <div className='daily__cntr' >
                    <div className='daily__general_cntr'>
                        <h2 className='daily__general_desc'>{DICT[props.lang].dailyCurrentWeather}</h2>
                        <div className='daily__general_wrapper'>
                            <WeatherIcon
                                weathercode={props.data.current_weather.weathercode}
                                hour={getHour(props.data.current_weather.time)}
                                fill='white'
                                width='8rem'
                            />
                            <div className='daily__general_sky_and_temp'>
                                <div className='daily__general_real'>
                                    <div className='daily__general_sky_desc'>{weathercode[props.lang][props.data.current_weather.weathercode]}</div>
                                    <div className='daily__general_apparent_desc' >{DICT[props.lang].dailyTemperature}</div>
                                    <div className='daily__general_temp'>
                                        <span className='daily__general_temp_number daily_general_params_value'>{props.data.current_weather.temperature}</span>
                                        <span className='daily__general_temp_number temperature_2m daily_general_params_value'> {props.data.hourly_units.temperature_2m}</span>
                                    </div>
                                </div>
                                <div className='daily__general_apparent'>
                                    <div className='daily__general_apparent_desc' >{DICT[props.lang].dailyApparentTemperature}</div>
                                    <div className='daily__general__temp'>
                                        <span className='daily__general_temp_number daily_general_params_value'>{props.data.hourly.apparent_temperature[timeIndex]}</span>
                                        <span className='daily__general_temp_number apparent_temperature daily_general_params_value'> {props.data.hourly_units.temperature_2m}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='daily__details_cntr'>
                        <div className='daily__details_sun'>
                            <div className='daily__details_sun_elem'>
                                <img src={sunriseIcon} alt='wheather imaging' className='daily_details_elem_icon' />
                                <div>
                                    <p >{DICT[props.lang].dailySunrise}</p>
                                    <p className='daily__params_value'>{getHourMinutes(props.data.daily.sunrise[0])}</p>
                                </div>
                            </div>
                            <div className='daily__details_sun_elem'>
                                <img src={sunsetIcon} alt='wheather imaging' className='daily_details_elem_icon' />

                                <div>
                                    <p>{DICT[props.lang].dailySunset}</p>
                                    <p className='daily__params_value'>{getHourMinutes(props.data.daily.sunset[0])}</p>
                                </div>
                            </div>
                        </div>
                        <div className="daily__details_elem">
                            <div className="daily__details_elem_left">
                                <p className='daily__params_name'>{DICT[props.lang].dailyApparentTemperatureMin}</p>
                                <p className='daily__params_name'>{DICT[props.lang].dailyApparentTemperatureMax}</p>
                                <p className='daily__params_name'>{DICT[props.lang].dailyPressure}</p>
                                <p className='daily__params_name'>{DICT[props.lang].dailyWind}</p>
                                <p className='daily__params_name'>{DICT[props.lang].dailyPrecipitation}</p>
                                <p className='daily__params_name'>{DICT[props.lang].dailyPrecipitationProbability}</p>
                            </div>
                            <div className="daily__details_elem_right">
                                <p><span className='daily__params_value'>{props.data.daily.apparent_temperature_min[0]}</span><span className='hourly_units.temperature_2m daily__params_value'> {props.data.hourly_units.temperature_2m}</span></p>
                                <p><span className='daily__params_value'>{props.data.daily.apparent_temperature_max[0]}</span><span className='hourly_units.temperature_2m daily__params_value'> {props.data.hourly_units.temperature_2m}</span></p>
                                <p><span className='daily__params_value'>{props.data.hourly.pressure_msl[timeIndex]}</span><span className='hourly_units.pressure_msl daily__params_value'> {props.data.hourly_units.pressure_msl}</span></p>
                                <p><span className='daily__params_value'>{props.data.hourly.windspeed_10m[timeIndex]}</span><span className='windspeed_10m daily__params_value'> {props.data.hourly_units.windspeed_10m} </span>
                                    <img src={getDirectionArr(props.data.hourly.winddirection_10m[timeIndex])} alt='wind direction arrow' />
                                </p>
                                <p><span className='daily__params_value'>{props.data.hourly.precipitation[timeIndex]}</span><span className='hourly_units.precipitation daily__params_value'> {props.data.hourly_units.precipitation}</span></p>
                                <p><span className='daily__params_value'>{props.data.hourly.precipitation_probability[timeIndex]}</span><span className='hourly_units.precipitation_probability daily__params_value'> {props.data.hourly_units.precipitation_probability}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Daily