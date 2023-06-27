import React from 'react'
import './Head.css'
import citiesFromLibrary from 'cities.json'
import { DICT, languages } from '../../utils/dict'
import emoji from '../../assets/logo.svg'
import ByCityName from './ByCityName/ByCityName'
import ByGeolocation from './ByGeolocation/ByGeolocation'
import Language from '../Language/Language'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'

interface ICity {
    country: string;
    lat: string;
    lng: string;
    name: string;
}

const Head = () => {
    const location = useSelector((state: RootState) => state.location.currentLocation)
    const lang = useSelector((state: RootState) => state.language.currentLanguage)

    const cities = citiesFromLibrary as unknown as ICity[]

    return (
        <div className='head__cntr'>
            <div className='head__language_cntr'>
                {languages.map(language =>
                    <Language key={language} language={language} />
                )}
            </div>
            <h1 className='head__title'><span>{DICT[lang].headTitle} </span><img src={emoji as unknown as string} alt='emoji' width='18rem' /></h1>
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
                            <p>{DICT[lang].headYourCity}</p>
                            <h1 className='head__choosen_location_value'>{`${location.city}, ${location.countryCode}`}</h1>
                        </div>
                    }
                    {!location.city && location.latitude && location.latitude &&
                        <div className='head__choosen_geolocation_data'>
                            <p>{DICT[lang].headYourCoordinates}</p>
                            <h3 className='head__choosen_geolocation_coordinates' >
                                <span className='head__choosen_geolocation_coordinates_name'>{DICT[lang].latitude}</span>
                                <span className='head__choosen_geolocation_coordinates_value'>{location.latitude}</span>
                            </h3>
                            <h3 className='head__choosen_geolocation_coordinates'>
                                <span className='head__choosen_geolocation_coordinates_name'>{DICT[lang].longitude}</span>
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