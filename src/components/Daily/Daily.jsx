import './Daily.css'
import sunriseIcon from '../../assets/icons/sunrise.svg'
import sunsetIcon from '../../assets/icons/sunset.svg'

import { weathercode } from '../../utils/weathercode'
import { DICT } from '../../utils/dict'
import { getHourMinutes, getHour } from '../../utils/getDateTime'
import { useEffect, useState, useContext } from 'react'
import { ContextWeatherData } from '../../context/ContextWeatherData'
import { ContextLanguage } from '../../context/ContextLanguage'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { getDirectionArr } from '../../utils/getDirectionArr'

const Daily = () => {
    const [timeIndex, setTimeIndex] = useState()

    const [weatherData,] = useContext(ContextWeatherData)
    const [lang,] = useContext(ContextLanguage)

    useEffect(() => {
        if (weatherData?.hourly.time) {
            const currentTime = new Date()
            const timeIndex = weatherData.hourly.time.findIndex(item => item > currentTime.toISOString())

            setTimeIndex(timeIndex)
        }
    }, [weatherData])


    return (
        <div className='daily' >
            {weatherData &&
                <div className='daily__cntr' >
                    <div className='daily__general_cntr'>
                        <h2 className='daily__general_desc'>{DICT[lang].dailyCurrentWeather}</h2>
                        <div className='daily__general_wrapper'>
                            <WeatherIcon
                                weathercode={weatherData.current_weather?.weathercode}
                                hour={getHour(weatherData.current_weather?.time)}
                                fill='white'
                                width='8rem'
                            />
                            <div className='daily__general_sky_and_temp'>
                                <div className='daily__general_real'>
                                    <div className='daily__general_sky_desc'>{weathercode[lang][weatherData.current_weather?.weathercode]}</div>
                                    <div className='daily__general_apparent_desc' >{DICT[lang].dailyTemperature}</div>
                                    <div className='daily__general_temp'>
                                        <span className='daily__general_temp_number daily_general_params_value'>{weatherData.current_weather.temperature}</span>
                                        <span className='daily__general_temp_number temperature_2m daily_general_params_value'> {weatherData.hourly_units.temperature_2m}</span>
                                    </div>
                                </div>
                                <div className='daily__general_apparent'>
                                    <div className='daily__general_apparent_desc' >{DICT[lang].dailyApparentTemperature}</div>
                                    <div className='daily__general__temp'>
                                        <span className='daily__general_temp_number daily_general_params_value'>{weatherData.hourly.apparent_temperature[timeIndex]}</span>
                                        <span className='daily__general_temp_number apparent_temperature daily_general_params_value'> {weatherData.hourly_units.temperature_2m}</span>
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
                                    <p >{DICT[lang].dailySunrise}</p>
                                    <p className='daily__params_value'>{getHourMinutes(weatherData.daily.sunrise[0])}</p>
                                </div>
                            </div>
                            <div className='daily__details_sun_elem'>
                                <img src={sunsetIcon} alt='wheather imaging' className='daily_details_elem_icon' />

                                <div>
                                    <p>{DICT[lang].dailySunset}</p>
                                    <p className='daily__params_value'>{getHourMinutes(weatherData.daily.sunset[0])}</p>
                                </div>
                            </div>
                        </div>
                        <div className="daily__details_elem">
                            <div className="daily__details_elem_left">
                                <p className='daily__params_name'>{DICT[lang].dailyApparentTemperatureMin}</p>
                                <p className='daily__params_name'>{DICT[lang].dailyApparentTemperatureMax}</p>
                                <p className='daily__params_name'>{DICT[lang].dailyPressure}</p>
                                <p className='daily__params_name'>{DICT[lang].dailyWind}</p>
                                <p className='daily__params_name'>{DICT[lang].dailyPrecipitation}</p>
                                <p className='daily__params_name'>{DICT[lang].dailyPrecipitationProbability}</p>
                            </div>
                            <div className="daily__details_elem_right">
                                <p><span className='daily__params_value'>{weatherData.daily.apparent_temperature_min[0]}</span><span className='hourly_units.temperature_2m daily__params_value'> {weatherData.hourly_units.temperature_2m}</span></p>
                                <p><span className='daily__params_value'>{weatherData.daily.apparent_temperature_max[0]}</span><span className='hourly_units.temperature_2m daily__params_value'> {weatherData.hourly_units.temperature_2m}</span></p>
                                <p><span className='daily__params_value'>{weatherData.hourly.pressure_msl[timeIndex]}</span><span className='hourly_units.pressure_msl daily__params_value'> {weatherData.hourly_units.pressure_msl}</span></p>
                                <p><span className='daily__params_value'>{weatherData.hourly.windspeed_10m[timeIndex]}</span><span className='windspeed_10m daily__params_value'> {weatherData.hourly_units.windspeed_10m} </span>
                                    <img src={getDirectionArr(weatherData.hourly.winddirection_10m[timeIndex])} alt='wind direction arrow' />
                                </p>
                                <p><span className='daily__params_value'>{weatherData.hourly.precipitation[timeIndex]}</span><span className='hourly_units.precipitation daily__params_value'> {weatherData.hourly_units.precipitation}</span></p>
                                <p><span className='daily__params_value'>{weatherData.hourly.precipitation_probability[timeIndex]}</span><span className='hourly_units.precipitation_probability daily__params_value'> {weatherData.hourly_units.precipitation_probability}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Daily