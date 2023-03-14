import './Hourly.css'
import Hour from '../Hour/Hour'
import Day from '../Day/Day'
import { GET_DAY } from '../../utils/getDay'
import { GET_DATE_MONTH } from '../../utils/getDateMonth'
import { GET_HOURS_MINUTES } from '../../utils/getHoursMinutes'
import { getHour } from '../../utils/getHours'
import { DICT } from '../../utils/dict'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import { getDirectionArr } from '../../utils/getDirectionArr'


const Hourly = (props) => {

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
        <div className='hourly__cntr' >

            <div className='hourly__wrapper'>
                <h4 className='hourly__day_details'>{`${weekDay[GET_DAY(props.data?.hourly.time[0])]}, ${GET_DATE_MONTH(props.data?.hourly.time[0])}`}</h4>
                <div className='hourly__day_cntr'>
                    <div className='hourly__hours_cntr'>
                        {props.data?.hourly.time.map((item, index) => index % 2 !== 1 && index < 25 ?
                            <div className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_cntr_day' : 'hourly__hour_cntr_night'} key={index}>
                                <p className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_el_day' : 'hourly__hour_el_night'}>{GET_HOURS_MINUTES(item)}</p>
                                <div>
                                    <WeatherIcon
                                        weathercode={props.data.hourly.weathercode[index]}
                                        hour={getHour(item)}
                                    />
                                </div>
                                <p className='hourly__precipitation_el'>{props.data.hourly.precipitation[index] !== 0 ? `${props.data.hourly.precipitation[index]} mm` : '-'}</p>
                                <p style={{ fontWeight: "bold" }}>{`${props.data.hourly.temperature_2m[index]}°C`}</p>
                                <div className='hourly__hour_wind'>
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

            <div className='hourly__wrapper'>
                <h4 className='hourly__day_details'>{`${weekDay[GET_DAY(props.data?.hourly.time[24])]}, ${GET_DATE_MONTH(props.data?.hourly.time[24])}`}</h4>
                <div className='hourly__day_cntr'>
                    <div className='hourly__hours_cntr'>
                        {props.data?.hourly.time.map((item, index) => index % 2 !== 1 && index > 23 && index < 50 ?
                            <div className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_cntr_day' : 'hourly__hour_cntr_night'} key={index}>
                                <p className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_el_day' : 'hourly__hour_el_night'}>{GET_HOURS_MINUTES(item)}</p>
                                <div>
                                    <WeatherIcon
                                        weathercode={props.data.hourly.weathercode[index]}
                                        hour={getHour(item)}
                                    />
                                </div>
                                <p className='hourly__precipitation_el'>{props.data.hourly.precipitation[index] !== 0 ? `${props.data.hourly.precipitation[index]} mm` : '-'}</p>
                                <p style={{ fontWeight: "bold" }}>{`${props.data.hourly.temperature_2m[index]}°C`}</p>
                                <div className='hourly__hour_wind'>
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


            <div className='hourly__wrapper'>
                <h4 className='hourly__day_details'>{`${weekDay[GET_DAY(props.data?.hourly.time[48])]}, ${GET_DATE_MONTH(props.data?.hourly.time[48])}`}</h4>
                <div className='hourly__day_cntr'>
                    <div className='hourly__hours_cntr'>
                        {props.data?.hourly.time.map((item, index) => index % 2 !== 1 && index > 47 && index < 74 ?
                            <div className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_cntr_day' : 'hourly__hour_cntr_night'} key={index}>
                                <p className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_el_day' : 'hourly__hour_el_night'}>{GET_HOURS_MINUTES(item)}</p>
                                <div>
                                    <WeatherIcon
                                        weathercode={props.data.hourly.weathercode[index]}
                                        hour={getHour(item)}
                                    />
                                </div>
                                <p className='hourly__precipitation_el'>{props.data.hourly.precipitation[index] !== 0 ? `${props.data.hourly.precipitation[index]} mm` : '-'}</p>
                                <p style={{ fontWeight: "bold" }}>{`${props.data.hourly.temperature_2m[index]}°C`}</p>
                                <div className='hourly__hour_wind'>
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



            <div className='hourly__wrapper'>
                <h4 className='hourly__day_details'>{`${weekDay[GET_DAY(props.data?.hourly.time[72])]}, ${GET_DATE_MONTH(props.data?.hourly.time[72])}`}</h4>
                <div className='hourly__day_cntr'>
                    <div className='hourly__hours_cntr'>
                        {props.data?.hourly.time.map((item, index) => index % 2 !== 1 && index > 71 && index < 98 ?
                            <div className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_cntr_day' : 'hourly__hour_cntr_night'} key={index}>
                                <p className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_el_day' : 'hourly__hour_el_night'}>{GET_HOURS_MINUTES(item)}</p>
                                <div>
                                    <WeatherIcon
                                        weathercode={props.data.hourly.weathercode[index]}
                                        hour={getHour(item)}
                                    />
                                </div>
                                <p className='hourly__precipitation_el'>{props.data.hourly.precipitation[index] !== 0 ? `${props.data.hourly.precipitation[index]} mm` : '-'}</p>
                                <p style={{ fontWeight: "bold" }}>{`${props.data.hourly.temperature_2m[index]}°C`}</p>
                                <div className='hourly__hour_wind'>
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


            <div className='hourly__wrapper'>
                <h4 className='hourly__day_details'>{`${weekDay[GET_DAY(props.data?.hourly.time[96])]}, ${GET_DATE_MONTH(props.data?.hourly.time[96])}`}</h4>
                <div className='hourly__day_cntr'>
                    <div className='hourly__hours_cntr'>
                        {props.data?.hourly.time.map((item, index) => index % 2 !== 1 && index > 95 && index < 121 ?
                            <div className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_cntr_day' : 'hourly__hour_cntr_night'} key={index}>
                                <p className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_el_day' : 'hourly__hour_el_night'}>{GET_HOURS_MINUTES(item)}</p>
                                <div>
                                    <WeatherIcon
                                        weathercode={props.data.hourly.weathercode[index]}
                                        hour={getHour(item)}
                                    />
                                </div>
                                <p className='hourly__precipitation_el'>{props.data.hourly.precipitation[index] !== 0 ? `${props.data.hourly.precipitation[index]} mm` : '-'}</p>
                                <p style={{ fontWeight: "bold" }}>{`${props.data.hourly.temperature_2m[index]}°C`}</p>
                                <div className='hourly__hour_wind'>
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

            <div className='hourly__wrapper'>
                <h4 className='hourly__day_details'>{`${weekDay[GET_DAY(props.data?.hourly.time[120])]}, ${GET_DATE_MONTH(props.data?.hourly.time[120])}`}</h4>
                <div className='hourly__day_cntr'>
                    <div className='hourly__hours_cntr'>
                        {props.data?.hourly.time.map((item, index) => index % 2 !== 1 && index > 119 && index < 145 ?
                            <div className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_cntr_day' : 'hourly__hour_cntr_night'} key={index}>
                                <p className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_el_day' : 'hourly__hour_el_night'}>{GET_HOURS_MINUTES(item)}</p>
                                <div>
                                    <WeatherIcon
                                        weathercode={props.data.hourly.weathercode[index]}
                                        hour={getHour(item)}
                                    />
                                </div>
                                <p className='hourly__precipitation_el'>{props.data.hourly.precipitation[index] !== 0 ? `${props.data.hourly.precipitation[index]} mm` : '-'}</p>
                                <p style={{ fontWeight: "bold" }}>{`${props.data.hourly.temperature_2m[index]}°C`}</p>
                                <div className='hourly__hour_wind'>
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


            <div className='hourly__wrapper'>
                <h4 className='hourly__day_details'>{`${weekDay[GET_DAY(props.data?.hourly.time[144])]}, ${GET_DATE_MONTH(props.data?.hourly.time[144])}`}</h4>
                <div className='hourly__day_cntr'>
                    <div className='hourly__hours_cntr'>
                        {props.data?.hourly.time.map((item, index) => index % 2 !== 1 && index > 143 && index < 167 ?
                            <div className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_cntr_day' : 'hourly__hour_cntr_night'} key={index}>
                                <p className={getHour(item) > 5 && getHour(item) < 21 ? 'hourly__hour_el_day' : 'hourly__hour_el_night'}>{GET_HOURS_MINUTES(item)}</p>
                                <div>
                                    <WeatherIcon
                                        weathercode={props.data.hourly.weathercode[index]}
                                        hour={getHour(item)}
                                    />
                                </div>
                                <p className='hourly__precipitation_el'>{props.data.hourly.precipitation[index] !== 0 ? `${props.data.hourly.precipitation[index]} mm` : '-'}</p>
                                <p style={{ fontWeight: "bold" }}>{`${props.data.hourly.temperature_2m[index]}°C`}</p>
                                <div className='hourly__hour_wind'>
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



        </div>
    )
}

export default Hourly