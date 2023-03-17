import './ByCityName.css'
import cities from 'cities.json'
import { useState } from 'react'
import { useContext } from 'react'
import Select from 'react-select'
import { DICT } from '../../../utils/dict'
import { LANG } from '../../../utils/const'
import { ContextLocation } from '../../../context/ContextLocation'

const ByCityName = (props) => {

    const [, setLocation] = useContext(ContextLocation)

    const [input, setInput] = useState('')

    const options1 = input.length < 1
        ? []
        : cities
            .filter(city => city.name.toLowerCase().includes(input.toLowerCase()) || city.country.toLowerCase().includes(input.toLowerCase()))
            .slice(0, 30)
            .map((city, index) => ({
                value: index,
                label: `${city.name}, ${city.country}`,
                name: city.name,
                country: city.country,
                lat: parseFloat(city.lat).toFixed(2),
                lng: parseFloat(city.lng).toFixed(2),
            }))


    return (
        <div>
            <Select
                onInputChange={(inputValue) => setInput(inputValue)}
                options={options1}
                placeholder={DICT[LANG].byCityNamePlaceholder}
                value=''
                menuIsOpen={input.length > 1}
                onChange={(elem) => {
                    console.log(elem)
                    setLocation(prevLocation => ({
                        ...prevLocation,
                        city: elem.name,
                        latitude: elem.lat,
                        longitude: elem.lng,
                        countryCode: elem.country,
                    }),
                    )
                }}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: 'none',
                        outline: state.isFocused ? '2px solid rgba(201, 132, 253, 0.684)' : 'none',
                        width: '18rem',
                        fontSize: '0.95rem'
                    }),
                }}
                classNames={{
                    control: () => 'byCityName__find_city_select'
                }}
            />
        </div>
    )
}
export default ByCityName