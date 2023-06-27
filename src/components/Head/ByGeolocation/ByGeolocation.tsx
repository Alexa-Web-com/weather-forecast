import React from 'react'
import './ByGeolocation.css'
import location_logo from '../../../assets/icons/location.svg'
import { useDispatch } from 'react-redux'
import { changeLocationByGeolocation } from '../../../store/locationSlice'

const ByGeolocation = () => {
    const dispatch = useDispatch()

    const geolocationClickHandler = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(2);
            const lng = position.coords.longitude.toFixed(2);
            dispatch(changeLocationByGeolocation({
                latitude: lat,
                longitude: lng,
            }))
        })
    }

    return (
        <div>
            <button className='byGeolocation__find_city_location_btn'
                onClick={geolocationClickHandler}>
                <img className='byGeolocation__find_city_location_btn_logo'
                    src={location_logo as unknown as string} alt='location' width='20px' />
            </button>
        </div>
    )
}

export default ByGeolocation