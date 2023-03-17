import './ByGeolocation.css'
import location_logo from '../../../assets/icons/location.svg'
import { useContext } from 'react'
import { ContextLocation } from '../../../context/ContextLocation'

const ByGeolocation = (props) => {

    const [, setLocation] = useContext(ContextLocation)

    const geolocationClickHandler = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(2);
            const lng = position.coords.longitude.toFixed(2);

            setLocation(prevLocation => ({
                ...prevLocation,
                city: '',
                latitude: lat,
                longitude: lng,
                countryCode: '',
            }))
        })
    }

    return (
        <div>
            <button className='byGeolocation__find_city_location_btn'
                onClick={geolocationClickHandler}>
                <img className='byGeolocation__find_city_location_btn_logo'
                    src={location_logo} alt='location' width='20px' />
            </button>
        </div>
    )
}

export default ByGeolocation