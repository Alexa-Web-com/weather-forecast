import './Day.css'
import { getDay, getDateMonth, getHourMinutes, getHour } from '../../utils/getDateTime'
import { DICT } from '../../utils/dict'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { getDirectionArr } from '../../utils/getDirectionArr'

const Day = (props) => {

    const weekDay = {
        0: DICT[props.lang].hourlySunday,
        1: DICT[props.lang].hourlyMonday,
        2: DICT[props.lang].hourlyTuesday,
        3: DICT[props.lang].hourlyWednesday,
        4: DICT[props.lang].hourlyThursday,
        5: DICT[props.lang].hourlyFriday,
        6: DICT[props.lang].hourlySaturday,
    }

    return (
        // <div className='day_cntr'>
        <div className='day__wrapper'>
            <h4 className='day__day_details'>{`${weekDay[getDay(props.data?.hourly.time[props.dayIndex])]}, ${getDateMonth(props.data?.hourly.time[props.dayIndex])}`}</h4>
            <div className='day__day_cntr'>
                <div className='day__hours_cntr'>
                    {props.data?.hourly.time.map((item, index) => index % 2 !== 1 && index > props.dayIndex - 1 && index < props.dayIndex + 24
                        ?
                        <div className={getHour(item) > 5 && getHour(item) < 19 ? 'day__hour_cntr_day' : 'day__hour_cntr_night'} key={index}>
                            <p className={getHour(item) > 5 && getHour(item) < 19 ? 'day__hour_el_day' : 'day__hour_el_night'}>{getHourMinutes(item)}</p>
                            <div>
                                <WeatherIcon
                                    weathercode={props.data.hourly.weathercode[index]}
                                    hour={getHour(item)}
                                />
                            </div>
                            <p className='day__precipitation_el'>{props.data.hourly.precipitation[index] !== 0 ? `${props.data.hourly.precipitation[index]} mm` : '-'}</p>
                            <p style={{ fontWeight: "bold" }}>{`${props.data.hourly.temperature_2m[index]}°C`}</p>
                            <div className='day__hour_wind'>
                                <p>{props.data.hourly.windspeed_10m[index]}</p>
                                <p>km/h</p>
                            </div>
                            <img src={getDirectionArr(props.data.hourly.winddirection_10m[index])} alt='wind direction arrow' />
                        </div>
                        :
                        ''
                    )}
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Day