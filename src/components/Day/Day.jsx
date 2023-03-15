import './Day.css'
import { getDay, getDateMonth, getHourMinutes, getHour } from '../../utils/getDateTime'
import { DICT } from '../../utils/dict'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { getDirectionArr } from '../../utils/getDirectionArr'
import caretDown from '../../assets/carets/caret-down.svg'
import caretUp from '../../assets/carets/caret-up.svg'

const Day = (props) => {


    return (
        <div className='day__wrapper'>
            {props.openedDayTab === props.dayIndex
                ?
                <p className='day__day_details'
                    onClick={() => props.setOpenedDayTab(-1)}
                    style={{ color: 'rgb(171, 0, 108)', fontWeight: 'bold' }}
                >
                    <span>{`${DICT[props.lang].weekDay[getDay(props.data?.hourly.time[props.dayIndex])]}, ${getDateMonth(props.data?.hourly.time[props.dayIndex])}`}</span>
                    <img className='day__carets' src={caretUp} alt='caret up' width='20px' fill='mediumvioletred' />
                </p>
                :
                <p className='day__day_details'
                    onClick={() => props.setOpenedDayTab(props.dayIndex)}
                >
                    <span>{`${DICT[props.lang].weekDay[getDay(props.data?.hourly.time[props.dayIndex])]}, ${getDateMonth(props.data?.hourly.time[props.dayIndex])}`}</span>
                    <img className='day__carets' src={caretDown} alt='caret down' width='20px' />
                </p>
            }
            {props.openedDayTab === props.dayIndex &&
                // <>
                //     <h4 className='day__day_details'
                //         onClick={() => props.setOpenedDayTab(props.dayIndex)}
                //     ><span>{`${DICT[props.lang].weekDay[getDay(props.data?.hourly.time[props.dayIndex])]}, ${getDateMonth(props.data?.hourly.time[props.dayIndex])}`}</span>
                //         <img src={caretDown} alt='caret down' width='20px' />
                //     </h4>

                <div className='day__hours_cntr'>
                    {props.data?.hourly.time.map((item, index) => index % 2 !== 1 && index > props.dayIndex - 1 && index < props.dayIndex + 24
                        ?
                        <div className={getHour(item) > 5 && getHour(item) < 19 ? 'day__hour_cntr_day' : 'day__hour_cntr_night'} key={index}>
                            <p className={getHour(item) > 5 && getHour(item) < 19 ? 'day__hour_el_day' : 'day__hour_el_night'}>{getHourMinutes(item)}</p>
                            <div className='day__wheather_icon'>
                                <WeatherIcon
                                    weathercode={props.data.hourly.weathercode[index]}
                                    hour={getHour(item)}
                                />
                            </div>
                            <p className='day__precipitation_el'>{props.data.hourly.precipitation[index] !== 0 ? `${props.data.hourly.precipitation[index]} mm` : '-'}</p>
                            <p className='day__temperatue' style={{ fontWeight: "bold" }}>{`${props.data.hourly.temperature_2m[index]}°C`}</p>
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
                // </>
            }
        </div>

    )
}

export default Day