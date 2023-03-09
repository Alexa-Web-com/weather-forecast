import './Test.css'
import cities from 'cities.json'
import { useEffect, useState } from 'react'
import location_logo from '../../assets/icons/location.svg'
import x from '../../assets/icons/x.svg'

import React from 'react'
import Select from 'react-select'


const Test = (props) => {

    const [input, setInput] = useState('')

    // useEffect(() => {
    //     console.log('input State: ', input);
    // }, [input])

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

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const options1 = input.length < 3 ? [] : cities
        .filter(city => city.name.toLowerCase().includes(input.toLowerCase()))
        .map((city, index) => ({
            value: index,
            label: `${city.name}, ${city.country}`,
            name: city.name,
            country: city.country,
            lat: parseFloat(city.lat).toFixed(2),
            lng: parseFloat(city.lng).toFixed(2),
        }))


    return (
        <div className='test'>

            {/* <Select options={options1.map(el => ({
                ...el,
                value: el.value,
                label: `${el.label}, ${el.country}`
            })
            )} /> */}

            <div className='test__city_wrapper'>
                <div className='test__find_city_cntr'>

                    <Select
                        onInputChange={(inputValue) => setInput(inputValue)}
                        options={options1}
                        // value={props.city}
                        // value={'test'}
                        // menuIsOpen={console.log('openMenu')}
                        onChange={(elem) => {
                            console.log(elem)
                            // props.setCity(elem.name)
                            props.setLocation(prevLocation => ({
                                ...prevLocation,
                                city: elem.name,
                                latitude: elem.lat,
                                longitude: elem.lng,
                                countryCode: elem.country,
                            }),
                            )
                            // props.setCity(elem.name)
                        }}
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                border: 'none',
                                outline: state.isFocused ? '2px solid blue' : 'none',
                                width: '22rem'
                            }),

                        }}
                        classNames={{
                            control: (state) => 'test__find_city_select'
                        }}

                    />

                    {/* <input className='test__find_city_input'
                        list='cityname'
                        autoComplete='off'
                        name='city'
                        type='text'
                        placeholder='Wpisz nazwę miejscowości (min. 3 znaki)'
                        value={props.city}
                        onChange={(e) => {
                            props.setDropDownList(true)
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
                    /> */}
                    {/* <div
                        className={
                            props.dropDownList ?
                                'test__find_city_list'
                                : 'test__find_city_list_hidden'
                        } id='cityname'
                    >
                        {props.location.city.length > 2 &&
                            cities
                                .filter(item => item.name.toLowerCase().includes(props.location.city.toLowerCase()))
                                .map((item, index) =>
                                    <p className='test_find_city_list_city'
                                        key={index}
                                        onClick={(e) => {
                                            props.setLocation(prevLocation => ({
                                                ...prevLocation,
                                                city: item.name,
                                                latitude: parseFloat(item.lat).toFixed(2),
                                                longitude: parseFloat(item.lng).toFixed(2),
                                                countryCode: item.country,
                                            }))
                                            props.setDropDownList(false)
                                            props.setCity('')
                                        }}>
                                        {`${item.name}, ${item.country}`}
                                    </p>)
                        }
                    </div> */}
                    {/* <div className='test__find_city_remove_cross'
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
                    </div> */}
                    {/* <button className='test__find_city_location_btn'
                        onClick={geolocationClickHandler}>
                        <img className='test__find_city_location_btn_logo'
                            src={location_logo} alt='location' width='20px' />
                    </button> */}
                </div>
                <div className='test__choosen_location_cntr'>
                    {props.location.city &&
                        cities.find(item => item.name === props.location.city && item.country === props.location.countryCode)
                        &&
                        <div className='test__choosen_geolocation_data'>
                            <p>Twoje miasto:</p>
                            <h2 className='test__choosen_location_value'>{`${props.location.city}, ${props.location.countryCode}`}</h2>
                        </div>
                    }
                    {!props.location.city && props.location.latitude && props.location.latitude &&
                        <div className='test__choosen_geolocation_data'>
                            <p>Twoje współrzędne:</p>
                            <h3 className='test__choosen_geolocation_coordinates' >
                                <span className='test__choosen_geolocation_coordinates_name'>szerokość: </span>
                                <span className='test__choosen_geolocation_coordinates_value'>{props.location.latitude}</span>
                            </h3>
                            <h3 className='test__choosen_geolocation_coordinates'>
                                <span className='test__choosen_geolocation_coordinates_name'>długość: </span>
                                <span className='test__choosen_geolocation_coordinates_value'>{props.location.longitude}</span>
                            </h3>
                        </div>
                    }
                    {!props.location.country && !props.location.latitude && !props.location.latitude &&
                        <div className='test__choosen_geolocation_data'>
                            <p>Twoje miejsce:</p>
                            <h2 className='test__not_choosen_location'> </h2>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Test