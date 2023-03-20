import './Daily.css'
import sunriseIcon from '../../assets/icons/sunrise.svg'
import sunsetIcon from '../../assets/icons/sunset.svg'

import { weathercode } from '../../utils/weathercode'
import { DICT } from '../../utils/dict'
import { LANG } from '../../utils/const'
import { getHourMinutes, getHour } from '../../utils/getDateTime'
import { useEffect, useState, useContext } from 'react'
import { ContextData } from '../../context/ContextData'

import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { getDirectionArr } from '../../utils/getDirectionArr'

const Daily = (props) => {
    const [timeIndex, setTimeIndex] = useState()

    const [data, setData] = useContext(ContextData)

    useEffect(() => {
        if (data?.hourly.time) {
            const currentTime = new Date()
            const timeIndex = data.hourly.time.findIndex(item => item > currentTime.toISOString())

            setTimeIndex(timeIndex)
        }
    }, [data])


    return (
        <div className='daily' >
            {data &&
                <div className='daily__cntr' >
                    <div className='daily__general_cntr'>
                        <h2 className='daily__general_desc'>{DICT[LANG].dailyCurrentWeather}</h2>
                        <div className='daily__general_wrapper'>
                            <WeatherIcon
                                weathercode={data.current_weather.weathercode}
                                hour={getHour(data.current_weather.time)}
                                fill='white'
                                width='8rem'
                            />
                            <div className='daily__general_sky_and_temp'>
                                <div className='daily__general_real'>
                                    <div className='daily__general_sky_desc'>{weathercode[LANG][data.current_weather.weathercode]}</div>
                                    <div className='daily__general_apparent_desc' >{DICT[LANG].dailyTemperature}</div>
                                    <div className='daily__general_temp'>
                                        <span className='daily__general_temp_number daily_general_params_value'>{data.current_weather.temperature}</span>
                                        <span className='daily__general_temp_number temperature_2m daily_general_params_value'> {data.hourly_units.temperature_2m}</span>
                                    </div>
                                </div>
                                <div className='daily__general_apparent'>
                                    <div className='daily__general_apparent_desc' >{DICT[LANG].dailyApparentTemperature}</div>
                                    <div className='daily__general__temp'>
                                        <span className='daily__general_temp_number daily_general_params_value'>{data.hourly.apparent_temperature[timeIndex]}</span>
                                        <span className='daily__general_temp_number apparent_temperature daily_general_params_value'> {data.hourly_units.temperature_2m}</span>
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
                                    <p >{DICT[LANG].dailySunrise}</p>
                                    <p className='daily__params_value'>{getHourMinutes(data.daily.sunrise[0])}</p>
                                </div>
                            </div>
                            <div className='daily__details_sun_elem'>
                                <img src={sunsetIcon} alt='wheather imaging' className='daily_details_elem_icon' />

                                <div>
                                    <p>{DICT[LANG].dailySunset}</p>
                                    <p className='daily__params_value'>{getHourMinutes(data.daily.sunset[0])}</p>
                                </div>
                            </div>
                        </div>
                        <div className="daily__details_elem">
                            <div className="daily__details_elem_left">
                                <p className='daily__params_name'>{DICT[LANG].dailyApparentTemperatureMin}</p>
                                <p className='daily__params_name'>{DICT[LANG].dailyApparentTemperatureMax}</p>
                                <p className='daily__params_name'>{DICT[LANG].dailyPressure}</p>
                                <p className='daily__params_name'>{DICT[LANG].dailyWind}</p>
                                <p className='daily__params_name'>{DICT[LANG].dailyPrecipitation}</p>
                                <p className='daily__params_name'>{DICT[LANG].dailyPrecipitationProbability}</p>
                            </div>
                            <div className="daily__details_elem_right">
                                <p><span className='daily__params_value'>{data.daily.apparent_temperature_min[0]}</span><span className='hourly_units.temperature_2m daily__params_value'> {data.hourly_units.temperature_2m}</span></p>
                                <p><span className='daily__params_value'>{data.daily.apparent_temperature_max[0]}</span><span className='hourly_units.temperature_2m daily__params_value'> {data.hourly_units.temperature_2m}</span></p>
                                <p><span className='daily__params_value'>{data.hourly.pressure_msl[timeIndex]}</span><span className='hourly_units.pressure_msl daily__params_value'> {data.hourly_units.pressure_msl}</span></p>
                                <p><span className='daily__params_value'>{data.hourly.windspeed_10m[timeIndex]}</span><span className='windspeed_10m daily__params_value'> {data.hourly_units.windspeed_10m} </span>
                                    <img src={getDirectionArr(data.hourly.winddirection_10m[timeIndex])} alt='wind direction arrow' />
                                </p>
                                <p><span className='daily__params_value'>{data.hourly.precipitation[timeIndex]}</span><span className='hourly_units.precipitation daily__params_value'> {data.hourly_units.precipitation}</span></p>
                                <p><span className='daily__params_value'>{data.hourly.precipitation_probability[timeIndex]}</span><span className='hourly_units.precipitation_probability daily__params_value'> {data.hourly_units.precipitation_probability}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Daily