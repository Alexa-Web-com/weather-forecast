import './Daily.css'
import sunriseIcon from '../../assets/icons/sunrise.svg'
import sunsetIcon from '../../assets/icons/sunset.svg'

import { ReactComponent as CloudSunIcon } from "../../assets/icons/cloud-sun.svg"

// import cloudSunIcon from '../../assets/icons/cloud-sun.svg'

const Daily = (props) => {
    return (
        <div className='daily__cntr' >
            <div className='daily__general_cntr'>
                <h2 className='daily__general_desc'>Aktualna pogoda</h2>
                <div className='daily__general_wrapper'>
                    <CloudSunIcon />
                    {/* <img src={cloudSunIcon} alt='wheather imaging' className='daily_general_icon' /> */}
                    <div className='daily__general_sky_and_temp'>
                        <div className='daily__general_real'>
                            <div className='daily__general_sky_desc'>[Pochmurno]</div>
                            <div className='daily__general_temp'>
                                <span className='daily__general_temp_number daily_general_params_value'>[6]</span><span className='daily__general_temp_number temperature_2m daily_general_params_value'>[°C]</span>
                            </div>
                        </div>
                        <div className='daily__general_apparent '>
                            <div className='daily__general_apparent_desc' >Odczuwalna temperatura:</div>
                            <div className='daily__general__temp'>
                                <span className='daily__general_temp_number daily_general_params_value'>[5]</span><span className='daily__general_temp_number apparent_temperature daily_general_params_value'>[°C]</span>
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
                            <p >Wschód słońca</p>
                            <p className='daily__params_value'>[6:21]</p>
                        </div>
                    </div>
                    <div className='daily__details_sun_elem'>
                        <img src={sunsetIcon} alt='wheather imaging' className='daily_details_elem_icon' />

                        <div>
                            <p>Zachód słońca</p>
                            <p className='daily__params_value'>[6:21]</p>
                        </div>
                    </div>
                </div>
                <div className="daily__details_elem">
                    <div className="daily__details_elem_left">
                        <p className='daily__params_name'>Najwyższa temperatura: </p>
                        <p className='daily__params_name'>Najniższa temperatura: </p>
                        <p className='daily__params_name'>Ciśnienie: </p>
                        <p className='daily__params_name'>Wiatr: </p>
                        <p className='daily__params_name'>Suma opadów: </p>
                        <p className='daily__params_name'>Prawdopodobieństwo opadów: </p>
                    </div>
                    <div className="daily__details_elem_right">
                        <p><span className='daily__params_value'>[6]</span><span className='hourly_units.temperature_2m daily__params_value'>[°C]</span></p>
                        <p><span className='hourly_units.temperature_2m daily__params_value'>[°C]</span></p>
                        <p><span className='daily__params_value'>[991.5]</span><span className='hourly_units.pressure_msl daily__params_value'>[hPa]</span></p>
                        <p><span className='daily__params_value'>[13]</span><span className='windspeed_10m daily__params_value'>[km/h]</span><span className='hourly_units.winddirection_10m daily__params_value'>[° lub |^|]</span></p>
                        <p><span className='daily__params_value'>[20]</span><span className='hourly_units.precipitation daily__params_value'>[mm]</span></p>
                        <p><span className='daily__params_value'>[40]</span><span className='hourly_units.precipitation_probability daily__params_value'>[%]</span></p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Daily