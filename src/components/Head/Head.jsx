import './Head.css'
import cities from 'cities.json'
import { useEffect, useState } from 'react'
import location_logo from '../../assets/icons/location.svg'
import x from '../../assets/icons/x.svg'

const Head = (props) => {

    const [isCitySpinner, setCitySpinner] = useState(false)

    useEffect(() => {
        console.log('isCitySpinner: ', isCitySpinner);
    }, [isCitySpinner])

    const geolocationClickHandler = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(2);
            const lng = position.coords.longitude.toFixed(2);

            props.setLocation(prevLocation => ({
                ...prevLocation,
                city: '',
                latitude: lat,
                longitude: lng,
                countryCode: '',
            }))
        })
    }

    // document.onkeydown = (e) => {
    //     switch (e.keyCodeA) {
    //         case 38:
    //             moveUp();
    //             break;
    //         case 40:
    //             moveDown();
    //             break;
    //         default:
    //             break
    //     }
    // };

    // const moveUp = () => {
    //     //Check if there is another link above, if no, go to bottom
    //     if ($(".selected").prev("p").length > 0) {
    //       $(".selected")
    //         .removeClass("selected")
    //         .prev("p")
    //         .addClass("selected")
    //         .focus();
    //     } 
    // }

    // const moveDown = () => {
    //     // Check if there is another link under, if no, go to top
    //     if ($(".selected").next("p").length > 0) {
    //       $(".selected")
    //         .removeClass("selected")
    //         .next("p")
    //         .addClass("selected")
    //         .focus();
    //     } 
    // }

    return (
        <div className='head__cntr'>
            <h1 className='head__title'>Twoja pogoda</h1>
            <div className='head__city_wrapper'>
                <div className='head__find_city_cntr'>
                    <input className='head__find_city_input'
                        autoComplete='off'
                        name='city'
                        type='text'
                        placeholder='Wpisz nazwę miejscowości (min. 3 znaki)'
                        value={props.city}
                        onChange={(e) => {
                            props.setDropDownList(true)
                            setCitySpinner(true)
                            props.setLocation(prevLocation => ({
                                ...prevLocation,
                                city: e.target.value,
                                latitude: '',
                                longitude: '',
                                countryCode: '',
                            })
                            )
                            props.setCity(e.target.value)
                        }
                        }
                    />
                    <div className={props.dropDownList ? 'head__find_city_list' : 'head__find_city_list_hidden'}>
                        {/* dropdown-menu */}
                        {props.location.city.length > 2 &&
                            cities
                                .filter(item => item.name.toLowerCase().includes(props.location.city.toLowerCase()))
                                .map((item, index) =>
                                    <p className='head_find_city_list_city'
                                        // dropdown-menu a
                                        key={index}
                                        // onKeyDown={(e) => {
                                        //     let active = -1
                                        //     if (e.keyCode == 40) {
                                        //         if (active < item.length - 1) {
                                        //             active++
                                        //         }
                                        //     } else if (e.keyCode == 38) {
                                        //         if (active > -1) {
                                        //             active--
                                        //         }
                                        //     }
                                        // }}
                                        onClick={(e) => {
                                            props.setLocation(prevLocation => ({
                                                ...prevLocation,
                                                city: item.name,
                                                latitude: parseFloat(item.lat).toFixed(2),
                                                longitude: parseFloat(item.lng).toFixed(2),
                                                countryCode: item.country,
                                            }))
                                            props.setCity('')
                                        }}>
                                        {`${item.name}, ${item.country}`}
                                    </p>)
                            // && isCitySpinner
                            // &&
                            // <p>Szukam...</p>

                        }
                    </div>
                    <div className='head__find_city_remove_cross'
                        onClick={(e) => {
                            props.setLocation(prevLocation => ({
                                ...prevLocation,
                                city: "",
                                latitude: "",
                                longitude: "",
                                countryCode: "",
                            }))
                            props.setCity('')
                        }}>
                        <img src={x} alt='remove cross' width='20px' />
                    </div>
                    <button className='head__find_city_location_btn'
                        onClick={geolocationClickHandler}>
                        <img className='head__find_city_location_btn_logo'
                            src={location_logo} alt='location' width='20px' />
                    </button>
                </div>
                <div className='head__choosen_location_cntr'>
                    {props.location.city &&
                        cities.find(item => item.name === props.location.city && item.country === props.location.countryCode)
                        &&
                        <div className='head__choosen_geolocation_data'>
                            <p>Twoje miasto:</p>
                            <h2 className='head__choosen_location_value'>{`${props.location.city}, ${props.location.countryCode}`}</h2>
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