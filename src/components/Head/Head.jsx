import './Head.css'
import cities from 'cities.json'
import { DICT } from '../../utils/dict'
import emoji from '../../assets/logo.svg'

import ByCityName from './ByCityName/ByCityName'
import ByGeolocation from './ByGeolocation/ByGeolocation'


const Head = (props) => {

    return (
        <div className='head__cntr'>
            <h1 className='head__title'><span>{DICT[props.lang].headTitle} </span><img src={emoji} alt='emoji' width='18rem' /></h1>
            <div className='head__city_wrapper'>
                <div className='head__find_city_cntr'>
                    <ByCityName
                        setLocation={props.setLocation}
                        lang={props.lang} />
                    <ByGeolocation
                        setLocation={props.setLocation} />
                </div>
                <div className='head__choosen_location_cntr'>
                    {props.location.city &&
                        cities.find(item => item.name === props.location.city)
                        &&
                        <div className='head__choosen_geolocation_data'>
                            <p>{DICT[props.lang].headYourCity}</p>
                            <h1 className='head__choosen_location_value'>{`${props.location.city}, ${props.location.countryCode}`}</h1>
                        </div>
                    }
                    {!props.location.city && props.location.latitude && props.location.latitude &&
                        <div className='head__choosen_geolocation_data'>
                            <p>{DICT[props.lang].headYourCoordinates}</p>
                            <h3 className='head__choosen_geolocation_coordinates' >
                                <span className='head__choosen_geolocation_coordinates_name'>{DICT[props.lang].latitude}</span>
                                <span className='head__choosen_geolocation_coordinates_value'>{props.location.latitude}</span>
                            </h3>
                            <h3 className='head__choosen_geolocation_coordinates'>
                                <span className='head__choosen_geolocation_coordinates_name'>{DICT[props.lang].longitude}</span>
                                <span className='head__choosen_geolocation_coordinates_value'>{props.location.longitude}</span>
                            </h3>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default Head