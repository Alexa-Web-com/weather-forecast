import React from 'react'
import './Day.css'
import { getDay, getDateMonth, getHourMinutes, getHour } from '../../utils/getDateTime'
import { DICT } from '../../utils/dict'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { getDirectionArr } from '../../utils/getDirectionArr'
import caretDown from '../../assets/carets/caret-down.svg'
import caretUp from '../../assets/carets/caret-up.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { IWeatherDataFromUrl } from '../../utils/useGetDataFromUrl'



interface IDayProps {
    key: number;
    dayIndex: number;
    openedDayTab: number;
    setOpenedDayTab: React.Dispatch<React.SetStateAction<number>>;
}

const Day = (props: IDayProps): JSX.Element => {
    const weatherData: IWeatherDataFromUrl | undefined = useSelector((state: RootState) => state.weatherData.currentWeatherData)
    const lang: string = useSelector((state: RootState) => state.language.currentLanguage)

    return (
        <div className='day__wrapper'>
            {props.openedDayTab === props.dayIndex
                ?
                weatherData
                &&
                <p className='day__day_details_opened'
                    onClick={() => props.setOpenedDayTab(-1)}
                    style={{ fontWeight: 'bold' }}
                >
                    <span>{`${!DICT[lang].weekDay[getDay(weatherData?.hourly.time[props.dayIndex])] ? 'Loading' : DICT[lang].weekDay[getDay(weatherData?.hourly.time[props.dayIndex])]}, ${getDateMonth(weatherData?.hourly.time[props.dayIndex])}`}</span>
                    <img className='day__carets' src={caretUp as unknown as string} alt='caret up' width='20px' />
                </p>
                :
                weatherData &&
                <p className='day__day_details'
                    onClick={() => props.setOpenedDayTab(props.dayIndex)}
                >
                    <span>{`${!DICT[lang].weekDay[getDay(weatherData?.hourly.time[props.dayIndex])] ? 'Loading' : DICT[lang].weekDay[getDay(weatherData?.hourly.time[props.dayIndex])]}, ${getDateMonth(weatherData?.hourly.time[props.dayIndex])}`}</span>
                    <img className='day__carets' src={caretDown as unknown as string} alt='caret down' width='20px' />
                </p>
            }
            {props.openedDayTab === props.dayIndex
                ?
                <div className='day__hours_cntr_active'>
                    {weatherData?.hourly.time.map((item, index) => index % 2 !== 1 && index > props.dayIndex - 1 && index < props.dayIndex + 24
                        ?
                        <div className={getHour(item) > 5 && getHour(item) < 19 ? 'day__hour_cntr_day' : 'day__hour_cntr_night'} key={index}>
                            <p className={getHour(item) > 5 && getHour(item) < 19 ? 'day__hour_el_day' : 'day__hour_el_night'}>{getHourMinutes(item)}</p>
                            <div className='day__weather_icon'>
                                <WeatherIcon
                                    weathercode={weatherData.hourly.weathercode[index]}
                                    hour={getHour(item)}
                                />
                            </div>
                            <p className='day__precipitation_el'>{weatherData.hourly.precipitation[index] !== 0 ? `${weatherData.hourly.precipitation[index]} mm` : '-'}</p>
                            <p className='day__temperatue' style={{ fontWeight: "bold" }}>{`${weatherData.hourly.temperature_2m[index]}°C`}</p>
                            <div className='day__hour_wind'>
                                <p>{weatherData.hourly.windspeed_10m[index]}</p>
                                <p>km/h</p>
                            </div>
                            <img src={getDirectionArr(weatherData.hourly.winddirection_10m[index]) as unknown as string} alt='wind direction arrow' />
                        </div>
                        :
                        ''
                    )}
                </div>
                :
                <div className='day__hours_cntr'></div>
            }
        </div>
    )
}

export default Day