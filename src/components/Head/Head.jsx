import './Head.css'
import cities from 'cities.json'
import { DICT } from '../../utils/dict'
import { LANG } from '../../utils/const'
import emoji from '../../assets/logo.svg'
import { useContext } from 'react'
import { ContextLocation } from '../../context/ContextLocation'
import ByCityName from './ByCityName/ByCityName'
import ByGeolocation from './ByGeolocation/ByGeolocation'


const Head = (props) => {

    const [location,] = useContext(ContextLocation)


    return (
        <div className='head__cntr'>
            <h1 className='head__title'><span>{DICT[LANG].headTitle} </span><img src={emoji} alt='emoji' width='18rem' /></h1>
            <div className='head__city_wrapper'>
                <div className='head__find_city_cntr'>
                    <ByCityName />
                    <ByGeolocation />
                </div>
                <div className='head__choosen_location_cntr'>
                    {location.city &&
                        cities.find(item => item.name === location.city)
                        &&
                        <div className='head__choosen_geolocation_data'>
                            <p>{DICT[LANG].headYourCity}</p>
                            <h1 className='head__choosen_location_value'>{`${location.city}, ${location.countryCode}`}</h1>
                        </div>
                    }
                    {!location.city && location.latitude && location.latitude &&
                        <div className='head__choosen_geolocation_data'>
                            <p>{DICT[LANG].headYourCoordinates}</p>
                            <h3 className='head__choosen_geolocation_coordinates' >
                                <span className='head__choosen_geolocation_coordinates_name'>{DICT[LANG].latitude}</span>
                                <span className='head__choosen_geolocation_coordinates_value'>{location.latitude}</span>
                            </h3>
                            <h3 className='head__choosen_geolocation_coordinates'>
                                <span className='head__choosen_geolocation_coordinates_name'>{DICT[LANG].longitude}</span>
                                <span className='head__choosen_geolocation_coordinates_value'>{location.longitude}</span>
                            </h3>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default Head