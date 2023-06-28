import React from 'react'
import './ByCityName.css'
import citiesFromCitiesJson from 'cities.json'
import { useState } from 'react'
import Select, { SingleValue } from 'react-select'
import { DICT } from '../../../utils/dict'
import { useSelector, useDispatch } from 'react-redux'
import { changeLocationByCityName } from '../../../store/locationSlice'
import { RootState } from '../../../store/store'
import { ICity } from '../Head'

interface ICitiesElem {
    country: string;
    label?: string;
    lat: string;
    lng: string;
    name: string;
    value?: number;
}

const ByCityName = (): JSX.Element => {
    const dispatch = useDispatch()

    const lang: string = useSelector((state: RootState) => state.language.currentLanguage)

    const [input, setInput] = useState<string>('')

    const cities: ICity[] = citiesFromCitiesJson as unknown as ICity[]

    const options1: ICitiesElem[] = input.length < 1
        ?
        []
        :
        cities
            .filter((city: ICity) => city.name.toLowerCase().includes(input.toLowerCase()) || city.country.toLowerCase().includes(input.toLowerCase()))
            .slice(0, 30)
            .map((city: ICity, index: number) => ({
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
                placeholder={DICT[lang].byCityNamePlaceholder}
                menuIsOpen={input.length > 1}
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                onChange={(elem: SingleValue<ICitiesElem>) => {
                    console.log({ elem })
                    dispatch(changeLocationByCityName({
                        city: elem?.name,
                        latitude: elem?.lat ?? "",
                        longitude: elem?.lng ?? "",
                        countryCode: elem?.country,
                    },
                    ))
                }}
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        border: 'none',
                        outline: state.isFocused ? '2px solid rgba(201, 132, 253, 0.684)' : 'none',
                        width: '18rem',
                        fontSize: '0.9rem'
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