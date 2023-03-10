import './Head.css'
import cities from 'cities.json'

import ByCityName from './ByCityName/ByCityName'
import ByGeolocation from './ByGeolocation/ByGeolocation'


const Head = (props) => {

    return (
        <div className='head__cntr'>
            <h1 className='head__title'>Twoja pogoda</h1>
            <div className='head__city_wrapper'>
                <div className='head__find_city_cntr'>
                    <ByCityName
                        setLocation={props.setLocation} />
                    <ByGeolocation
                        setLocation={props.setLocation} />
                </div>
                <div className='head__choosen_location_cntr'>
                    {props.location.city &&
                        cities.find(item => item.name === props.location.city && item.country === props.location.countryCode)
                        &&
                        <div className='head__choosen_geolocation_data'>
                            <p>Twoje miasto:</p>
                            <h1 className='head__choosen_location_value'>{`${props.location.city}, ${props.location.countryCode}`}</h1>
                        </div>
                    }
                    {!props.location.city && props.location.latitude && props.location.latitude &&
                        <div className='head__choosen_geolocation_data'>
                            <p>Twoje współrzędne:</p>
                            <h3 className='head__choosen_geolocation_coordinates' >
                                <span className='head__choosen_geolocation_coordinates_name'>szerokość: </span>
                                <span className='head__choosen_geolocation_coordinates_value'>{props.location.latitude}</span>
                            </h3>
                            <h3 className='head__choosen_geolocation_coordinates'>
                                <span className='head__choosen_geolocation_coordinates_name'>długość: </span>
                                <span className='head__choosen_geolocation_coordinates_value'>{props.location.longitude}</span>
                            </h3>
                        </div>
                    }
                    {!props.location.country && !props.location.latitude && !props.location.latitude &&
                        <div className='head__choosen_geolocation_data'>
                            <p>Twoje miejsce:</p>
                            <h2 className='head__not_choosen_location'> </h2>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default Head