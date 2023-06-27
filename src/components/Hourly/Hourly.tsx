import React from 'react'
import './Hourly.css'
import Day from '../Day/Day'
import { useEffect, useState } from 'react'

const Hourly = () => {

    const [openedDayTab, setOpenedDayTab] = useState(0)

    const dayIndexes = [0, 24, 48, 72, 96, 120, 144]

    useEffect(() => {
        if (openedDayTab !== 0) {
            const scroll = () => {
                const section = document.getElementById('day');
                section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
            scroll()
        }
    }, [openedDayTab])

    return (
        <div className='hourly__cntr'
            id='day'>
            {dayIndexes.map(dayIndex =>
                <Day
                    key={dayIndex}
                    dayIndex={dayIndex}
                    openedDayTab={openedDayTab}
                    setOpenedDayTab={setOpenedDayTab}
                />
            )}
        </div>
    )
}

export default Hourly